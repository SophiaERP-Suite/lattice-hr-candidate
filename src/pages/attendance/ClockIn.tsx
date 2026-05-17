/// <reference types="@types/google.maps" />
import { ChevronRight, MapPin, Navigation, Clock, RefreshCw, Eye, Calendar, CalendarDays } from "lucide-react";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { clockIn, clockOut, getClockStatus, getEmployerAddressEmployerId } from "../../api/ClockApi";
import Hashids from "hashids";

interface ClockStatus {
  isClockedIn: boolean;
  lastClockInTime: string;
  lastClockOutTime: string;
}

interface LatLng {
  lat: number;
  lng: number;
}

interface EmployerDetails {
  address: string;
  businessName: string;
  city: string;
  companySize: string;
  country: string;
  employerId: number;
  state: string;
}

const GOOGLE_MAPS_API_KEY = "AIzaSyB4J4gKcR4pLKyNI56VofCkXXTJ8nrYdyU";
const ALLOWED_RADIUS = 50;
const FIXED_COMPANY_LOCATION: LatLng = { lat: 6.642060, lng: 3.372691 };

// ─── Haversine distance (metres) ─────────────────────────────────────────────
function haversineDistance(a: LatLng, b: LatLng): number {
  const R = 6371e3;
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sin2 =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(sin2), Math.sqrt(1 - sin2));
}

// ─── Load Google Maps script once ────────────────────────────────────────────
function loadGoogleMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) return resolve();
    const existing = document.getElementById("gmap-script");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.id = "gmap-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
}

// ─── Try to init map ──────────────────────────────────────────────────────────
function tryInitMap(
  mapsReady: boolean,
  mapContainer: HTMLDivElement | null,
  companyLocation: LatLng | null,
  googleMapRef: React.MutableRefObject<google.maps.Map | null>,
  companyMarkerRef: React.MutableRefObject<google.maps.Marker | null>,
  radiusCircleRef: React.MutableRefObject<google.maps.Circle | null>
) {
  if (!mapsReady || !mapContainer || !companyLocation) return;
  if (googleMapRef.current) return;

  const map = new google.maps.Map(mapContainer, {
    center: companyLocation,
    zoom: 18,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });
  googleMapRef.current = map;

  companyMarkerRef.current = new google.maps.Marker({
    position: companyLocation,
    map,
    title: "Company Location",
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 6,
      fillColor: "#4f46e5",
      fillOpacity: 1,
      strokeColor: "#fff",
      strokeWeight: 2,
    },
  });

  radiusCircleRef.current = new google.maps.Circle({
    map,
    center: companyLocation,
    radius: ALLOWED_RADIUS,
    strokeColor: "#4f46e5",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#4f46e5",
    fillOpacity: 0.12,
  });
}

function ClockIn() {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const { employerId } = useParams();

  const decodedEmployerId = useMemo(() => {
    const decoded = hashIds.decode(String(employerId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [employerId]);

  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [isWithinRange, setIsWithinRange] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [clockStatus, setClockStatus] = useState<ClockStatus | undefined>();
  const [employerDetails, setEmployerDetails] = useState<EmployerDetails>();
  const [time, setTime] = useState(new Date());
  const [mapsReady, setMapsReady] = useState(false);

  // Fixed company location — no geocoding needed
  const companyLocation = FIXED_COMPANY_LOCATION;
  const companyLocationRef = useRef<LatLng>(FIXED_COMPANY_LOCATION);

  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const employeeMarkerRef = useRef<google.maps.Marker | null>(null);
  const companyMarkerRef = useRef<google.maps.Marker | null>(null);
  const radiusCircleRef = useRef<google.maps.Circle | null>(null);

  const currentLocationRef = useRef<LatLng | null>(null);

  useEffect(() => {
    currentLocationRef.current = currentLocation;
  }, [currentLocation]);

  // ── Clock tick ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // ── One-time init: Maps SDK + user location ─────────────────────────────────
  useEffect(() => {
    loadGoogleMapsScript(GOOGLE_MAPS_API_KEY)
      .then(() => setMapsReady(true))
      .catch(() => setLocationError("Failed to load Google Maps"));

    getUserLocation();
  }, []);

  // ── Fetch clock status + employer details after decodedEmployerId is ready ──
  useEffect(() => {
    if (!decodedEmployerId) return;
    fetchClockStatus();
    getEmployerAddress();
  }, [decodedEmployerId]);

  // ── Attempt map init whenever SDK becomes ready ──────────────────────────────
  useEffect(() => {
    tryInitMap(mapsReady, mapContainer, companyLocation, googleMapRef, companyMarkerRef, radiusCircleRef);
  }, [mapsReady]);

  // ── Attempt map init whenever the map container DOM element mounts ───────────
  useEffect(() => {
    tryInitMap(mapsReady, mapContainer, companyLocation, googleMapRef, companyMarkerRef, radiusCircleRef);
  }, [mapContainer]);

  const getEmployerAddress = async () => {
    try {
      const response = await getEmployerAddressEmployerId(Number(decodedEmployerId));
      if (response.statusCode === 200) {
        setEmployerDetails(response.data);
      }
    } catch (err) {
      console.error("getEmployerAddress error:", err);
    }
  };

  // ── Update employee marker whenever location or range status changes ──────────
  useEffect(() => {
    if (!googleMapRef.current || !currentLocation) return;

    const icon: google.maps.Symbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: isWithinRange ? "#22c55e" : "#ef4444",
      fillOpacity: 1,
      strokeColor: "#fff",
      strokeWeight: 2,
    };

    if (employeeMarkerRef.current) {
      employeeMarkerRef.current.setPosition(currentLocation);
      employeeMarkerRef.current.setIcon(icon);
    } else {
      employeeMarkerRef.current = new google.maps.Marker({
        position: currentLocation,
        map: googleMapRef.current,
        title: "Your Location",
        icon,
      });
    }

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(companyLocationRef.current);
    bounds.extend(currentLocation);
    googleMapRef.current.fitBounds(bounds, 80);
  }, [currentLocation, isWithinRange]);

  // ── Fetch clock status ───────────────────────────────────────────────────────
  const fetchClockStatus = async () => {
    try {
      const response = await getClockStatus(Number(decodedEmployerId));
      if (response) setClockStatus(response);
    } catch {
      // silent
    }
  };

  // ── Geolocation ──────────────────────────────────────────────────────────────
  const getUserLocation = useCallback(() => {
    setIsLocating(true);
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc: LatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCurrentLocation(loc);
        currentLocationRef.current = loc;

        const d = haversineDistance(loc, companyLocationRef.current);
        setDistance(d);
        setIsWithinRange(d <= ALLOWED_RADIUS);
        setIsLocating(false);
      },
      (err) => {
        const messages: Record<number, string> = {
          1: "Please allow location access to clock in",
          2: "Location information is unavailable",
          3: "Location request timed out",
        };
        setLocationError(messages[err.code] ?? "An unknown error occurred");
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  // ── Clock In / Out ────────────────────────────────────────────────────────────
  const handleClockEvent = async (type: "in" | "out") => {
    if (!currentLocation) return;

    const data = new FormData();
    data.append("latitude", currentLocation.lat.toString());
    data.append("longitude", currentLocation.lng.toString());
    data.append("locationLabel", "Office");

    try {
      type === "in"
        ? await clockIn(data, Number(decodedEmployerId))
        : await clockOut(data, Number(decodedEmployerId));

      toast.success(type === "in" ? "Successfully clocked in!" : "Successfully clocked out!");
      fetchClockStatus();
    } catch {
      toast.error(`Clock ${type} failed`);
    }
  };

  // ── Status badge ──────────────────────────────────────────────────────────────
  const locationStatusClass = isLocating
    ? "alert-warning"
    : locationError
      ? "alert-danger"
      : isWithinRange
        ? "alert-success"
        : "alert-warning";

  const locationStatusText = isLocating
    ? "Getting your location..."
    : locationError
      ? "Location Error"
      : isWithinRange
        ? "You are within range!"
        : "You are outside the allowed area";

  return (
    <div className="app-content-wrap">

      <div className="container-fluid">
        <div className="row">
          <ToastContainer position="top-right" />
          {/* ── Page header ── */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Clock In</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Clock In</li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><NavLink to="/MyJobs">My Jobs</NavLink></li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><a href="Dashboard">Home</a></li>
                </ol>
              </nav>
            </div>
          </div>

          {/* ── Main card ── */}
          <div className="col-lg-12">
            <div className="card shadow-sm border-0 p-4">

              {/* Current time */}
              <div className="text-center mb-4">
                <div className="d-flex align-items-center justify-content-center gap-2 text-muted mb-2">
                  <Clock size={20} />
                  <span>Current Time</span>
                </div>
                <h2 className="display-5 fw-bold text-primary">
                  {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </h2>
                <p className="text-muted">
                  {time.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>

              {/* Location status alert */}
              <div className={`alert ${locationStatusClass} d-flex align-items-center gap-2 mb-4`}>
                <MapPin size={20} />
                <div className="flex-grow-1">
                  <strong className="me-2">{locationStatusText}</strong>
                  {!isLocating && !locationError && distance !== null && (
                    <span>{distance.toFixed(0)}m from company location</span>
                  )}
                  {locationError && <span className="d-block small">{locationError}</span>}
                </div>
                <button
                  className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                  onClick={getUserLocation}
                  disabled={isLocating}
                >
                  <RefreshCw size={14} /> Refresh
                </button>
              </div>

              {/* ── Google Map ── */}
              <div
                ref={setMapContainer}
                style={{
                  width: "100%",
                  height: "360px",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                  background: "#f3f4f6",
                }}
              >
                {!mapsReady && (
                  <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                    <div className="spinner-border spinner-border-sm me-2" />
                    Loading map…
                  </div>
                )}
              </div>

              {/* Location detail cards */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="rounded border p-3">
                    <h6 className="fw-semibold mb-2">Company Location</h6>
                    <p className="mb-1 text-muted small">
                      <MapPin size={13} className="me-1" />
                      {employerDetails?.address}, {employerDetails?.city}
                    </p>
                    <p className="mb-1 text-muted small">
                      {employerDetails?.state}, {employerDetails?.country}
                    </p>
                    <p className="mb-1 text-muted small">
                      Lat: {companyLocation.lat.toFixed(6)}, Lng: {companyLocation.lng.toFixed(6)}
                    </p>
                    <small className="text-muted">Allowed radius: {ALLOWED_RADIUS}m</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rounded border p-3">
                    <h6 className="fw-semibold mb-2">Your Location</h6>
                    {isLocating ? (
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <div className="spinner-border spinner-border-sm" />
                        <small>Detecting location…</small>
                      </div>
                    ) : currentLocation ? (
                      <>
                        <p className="mb-1 text-muted small">
                          <Navigation size={13} className="me-1" />
                          Lat: {currentLocation.lat.toFixed(6)}
                        </p>
                        <p className="mb-1 text-muted small">
                          <Navigation size={13} className="me-1" />
                          Lng: {currentLocation.lng.toFixed(6)}
                        </p>
                        {distance !== null && (
                          <small className={isWithinRange ? "text-success fw-semibold" : "text-danger fw-semibold"}>
                            {distance.toFixed(0)}m away {isWithinRange ? "✓ within range" : "✗ outside range"}
                          </small>
                        )}
                      </>
                    ) : (
                      <p className="text-muted small mb-0">Location not available</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Clock In / Out buttons */}
              <div className="text-center gap-20 d-flex justify-content-center flex-wrap">
                {clockStatus?.isClockedIn ? (
                  <button
                    className="btn btn-danger btn-lg px-5"
                    onClick={() => handleClockEvent("out")}
                    disabled={isLocating || !currentLocation}
                  >
                    <Clock className="me-2" size={20} />
                    Clock Out
                  </button>
                ) : (
                  <button
                    className={`btn ${isWithinRange ? "btn-success" : "btn-secondary"} btn-lg px-5`}
                    onClick={() => handleClockEvent("in")}
                    disabled={!isWithinRange || isLocating || !currentLocation}
                  >
                    <Clock className="me-2" size={20} />
                    {isLocating
                      ? "Getting location…"
                      : isWithinRange
                        ? "Clock In Now"
                        : "Cannot Clock In — Too Far"}
                  </button>
                )}

                {!isWithinRange && distance !== null && (
                  <p className="text-muted mt-2 small w-100">
                    You need to be within {ALLOWED_RADIUS}m. Current distance: {distance.toFixed(0)}m
                  </p>
                )}

                <NavLink className="btn btn-lg btn-info" to={`/Attendance/${employerId}`}>
                  <Eye size={20} /> View History
                </NavLink>

                <NavLink className="btn btn-lg btn-warning" to={`/TimeSheet/${employerId}`}>
                  <CalendarDays size={20} /> View Timesheet
                </NavLink>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClockIn;