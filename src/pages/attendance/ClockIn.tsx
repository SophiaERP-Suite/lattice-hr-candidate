// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"

import { ChevronRight, KeyRound, MapPin, QrCode, Radio } from "lucide-react";
import { useState, useEffect } from "react";

function ClockIn() {
  const [method, setMethod] = useState("qr"); // qr | otp | geo
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [geoStatus, setGeoStatus] = useState("");
  const [time, setTime] = useState(new Date());

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle OTP generation
  const generateOtp = () => {
    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(pin);
    alert(`Your OTP is: ${pin}`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setVerified(true);
      alert("✅ OTP Verified!");
    } else {
      alert("❌ Invalid OTP");
    }
  };

  // Handle Geofencing
  const verifyLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus("Geolocation is not supported on this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Example coordinates of allowed location (replace with real coordinates)
        const allowedLat = 6.5244;
        const allowedLng = 3.3792;

        const distance = Math.sqrt(
          Math.pow(lat - allowedLat, 2) + Math.pow(lng - allowedLng, 2)
        );

        if (distance < 0.05) {
          setGeoStatus("✅ Within location range. Verified!");
          setVerified(true);
        } else {
          setGeoStatus("❌ You are not within the allowed area.");
        }
      },
      () => {
        setGeoStatus("Failed to access location.");
      }
    );
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Clock-In</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Clock-In
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h2 className="fw-bold text-primary mb-3">
                Clock In Verification
              </h2>
              <p className="text-muted mb-4">
                Please select a verification method to clock in securely.
              </p>

              {/* ===== Time Display ===== */}
              <h1 className="fw-bold display-4 mb-2">
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </h1>

              {/* ===== Method Selector ===== */}
              <div className="d-flex justify-content-center gap-15 flex-wrap my-4">
                <button
                  className={`btn btn-sm ${
                    method === "qr" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => {
                    setMethod("qr");
                    setVerified(false);
                  }}
                >
                  <QrCode className="me-1" /> QR Code
                </button>

                <button
                  className={`btn btn-sm ${
                    method === "otp" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => {
                    setMethod("otp");
                    setVerified(false);
                  }}
                >
                  <KeyRound className="me-1" /> OTP PIN
                </button>

                <button
                  className={`btn btn-sm ${
                    method === "geo" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => {
                    setMethod("geo");
                    setVerified(false);
                  }}
                >
                  <MapPin className="me-1" /> Geo-fencing
                </button>
              </div>

              {/* ===== Verification Area ===== */}
              <div className="p-4 bg-white border rounded shadow-sm mb-4">
                {method === "qr" && (
                  <div>
                    <p className="text-muted mb-3">
                      Scan the QR code displayed at your office or job site to
                      clock in.
                    </p>
                    <div
                      className="border rounded p-5 d-inline-block bg-light"
                      style={{ width: "200px", height: "200px" }}
                    >
                      <Radio size={100} className="text-primary" />
                    </div>
                    <p className="mt-3 small text-muted">
                      (QR code scanning feature can be added here)
                    </p>
                  </div>
                )}

                {method === "otp" && (
                  <div
                    className="w-100"
                    style={{ maxWidth: "400px", margin: "auto" }}
                  >
                    <p className="text-muted mb-3">
                      Click the button below to get your OTP, then enter it to
                      verify.
                    </p>
                    <div className="d-flex gap-2 mb-3">
                      <button
                        className="btn btn-outline-primary w-50"
                        onClick={generateOtp}
                      >
                        Generate OTP
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-success w-100"
                      onClick={verifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                )}

                {method === "geo" && (
                  <div>
                    <p className="text-muted mb-3">
                      Verify your current location to clock in from an approved
                      area.
                    </p>
                    <button
                      className="btn btn-outline-primary"
                      onClick={verifyLocation}
                    >
                      <MapPin className="me-1" /> Verify Location
                    </button>
                    {geoStatus && (
                      <p className="mt-3 fw-semibold">{geoStatus}</p>
                    )}
                  </div>
                )}
              </div>

              {/* ===== Clock In / Out ===== */}
              <div>
                <button
                  className="btn btn-success btn-md px-5"
                  disabled={!verified}
                >
                  Clock In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClockIn;
