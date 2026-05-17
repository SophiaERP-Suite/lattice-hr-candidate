import Hashids from "hashids";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  ClockPlus,
  UserCheck,
  UserX,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  getMyAttendanceByEmployerId,
  getMyAttendanceSummaryByEmployerId,
} from "../../api/ClockApi";

// --- Interfaces ---

interface AttendanceSummary {
  totalWorkingDays: number;
  present: number;
  lateArrivals: number;
  absent: number;
}

interface AttendanceRecord {
  checkIn: string;
  checkOut: string;
  date: string;
  hoursWorked: string;
  status: string;
  isLate: boolean;
}

interface PagedAttendanceResponse {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  records: AttendanceRecord[];
}

// --- Helpers ---

const formatTime = (isoString: string): string => {
  if (!isoString) return "—";
  return new Date(isoString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDate = (isoString: string): string => {
  if (!isoString) return "—";
  return new Date(isoString).toLocaleDateString([], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatHoursWorked = (duration: string): string => {
  if (!duration) return "—";
  const [h, m] = duration.split(":");
  return `${parseInt(h)}h ${parseInt(m)}m`;
};

const deriveStatus = (checkIn: string): "Present" | "Late" | "Absent" => {
  if (!checkIn) return "Absent";
  const date = new Date(checkIn);
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  return hour > 9 || (hour === 9 && minute > 0) ? "Late" : "Present";
};

function Attendance() {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const { employerId } = useParams();

  const decodedEmployerId = useMemo(() => {
    const decoded = hashIds.decode(String(employerId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [employerId]);

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const [summary, setSummary] = useState<AttendanceSummary | null>(null);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    if (decodedEmployerId) fetchSummary();
  }, [decodedEmployerId]);

  useEffect(() => {
    if (decodedEmployerId) fetchAttendance();
  }, [decodedEmployerId, pageNumber]);

  const fetchSummary = async () => {
    try {
      const response: AttendanceSummary = await getMyAttendanceSummaryByEmployerId(
        Number(decodedEmployerId),
        currentMonth,
        currentYear
      );
      setSummary(response);
    } catch (error) {
      console.error("Failed to fetch attendance summary:", error);
    }
  };

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const response: PagedAttendanceResponse = await getMyAttendanceByEmployerId(
        Number(decodedEmployerId),
        pageNumber,
        pageSize
      );
      console.log("hhres", response)
      setAttendanceRecords(response.records ?? []);
      setTotalCount(response.totalCount ?? 0);
    } catch (error) {
      console.error("Failed to fetch attendance records:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const handleNext = () => setPageNumber((p) => Math.min(totalPages, p + 1));

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Attendance</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Attendance History
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><NavLink to={`/ClockIn/${employerId}`}>Clock In</NavLink></li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><NavLink to="/MyJobs">My Jobs</NavLink></li>
                  <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-primary-transparent text-primary">
                  <CalendarDays className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Total Working Days</span>
                  <h2 className="mb-5">{summary?.totalWorkingDays ?? "—"}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-success-transparent text-success">
                  <UserCheck className="w-6 h-6 text-green-500" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Present</span>
                  <h2 className="mb-5">{summary?.present ?? "—"}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-warning-transparent text-warning">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Late Arrivals</span>
                  <h2 className="mb-5">{summary?.lateArrivals ?? "—"}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-danger-transparent text-danger">
                  <UserX className="w-6 h-6 text-red-500" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Absent</span>
                  <h2 className="mb-5">{summary?.absent ?? "—"}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="d-flex-items gap-10">
                  {now.toLocaleString("default", { month: "long" })} {currentYear} Attendance
                </h4>
                <div className="d-flex flex-wrap gap-15">
                  <NavLink to={`/LeaveRequests/${employerId}`} className="btn btn-info text-white">
                    <CalendarDays size={15} /> Leave Requests
                  </NavLink>
                  <NavLink to={`/ClockIn/${employerId}`} className="btn btn-warning text-white">
                    <ClockPlus size={15} /> Clock In
                  </NavLink>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table
                    className="table w-100 text-nowrap"
                    id="employeeAttendanceTable"
                    style={{ textAlign: "left" }}
                  >
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Hours Worked</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan={5} className="text-center py-3">
                            Loading...
                          </td>
                        </tr>
                      ) : attendanceRecords.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-3">
                            No attendance records found.
                          </td>
                        </tr>
                      ) : (
                        attendanceRecords.map((record, index) => {
                          const status = deriveStatus(record.checkIn);
                          return (
                            <tr key={index}>
                              <td>{formatDate(record.date)}</td>
                              <td>
                                <span
                                  className={`badge bg-label-${status === "Present"
                                    ? "success"
                                    : status === "Late"
                                      ? "warning"
                                      : "danger"
                                    }`}
                                >
                                  {record.status}
                                </span>
                              </td>
                              <td>{formatTime(record.checkIn)}</td>
                              <td>{formatTime(record.checkOut)}</td>
                              <td>{formatHoursWorked(record.hoursWorked)}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="d-flex justify-content-end align-items-center gap-10 mt-3">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handlePrev}
                      disabled={pageNumber === 1}
                    >
                      Previous
                    </button>
                    <span className="fs-14">
                      Page {pageNumber} of {totalPages}
                    </span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handleNext}
                      disabled={pageNumber === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;