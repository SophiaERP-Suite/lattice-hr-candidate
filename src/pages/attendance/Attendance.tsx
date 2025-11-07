// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"

import {
  CalendarDays,
  ChevronRight,
  Clock,
  ClockPlus,
  Eye,
  UserCheck,
  UserX,
} from "lucide-react";

function Attendance() {
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
                    Attendance
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

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-primary-transparent text-primary">
                  <CalendarDays className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Total Working Days</span>
                  <h2 className="mb-5">25</h2>
                  {/* <span className="text-success">
                    +5.2%
                    <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                  </span>
                  <span className="fs-12 text-muted ml-5">vs Last Month</span> */}
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
                  <h2 className="mb-5">20</h2>
                  {/* <span className="text-success">
                    92.7%
                    <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                  </span>
                  <span className="fs-12 text-muted ml-5">Attendance Rate</span> */}
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
                  <h2 className="mb-5">12</h2>
                  {/* <span className="text-danger">
                    +1.1%
                    <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                  </span>
                  <span className="fs-12 text-muted ml-5">vs Last Month</span> */}
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
                  <h2 className="mb-5">5</h2>
                  {/* <span className="text-success">
                    -0.8%
                    <i className="ri-arrow-down-line ml-5 d-inline-block"></i>
                  </span>
                  <span className="fs-12 text-muted ml-5">vs Last Month</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="d-flex-items gap-10">
                  November 2025 Attendance
                </h4>
                <div className="d-flex flex-wrap gap-15">
                  <a className="btn btn-success text-white" href="TimeSheet">
                    <Eye size={15} /> View TimeSheet
                  </a>
                  <a href="ClockIn" className="btn btn-warning text-white">
                    <ClockPlus size={15} /> Clock In
                  </a>
                  {/* <div className="">
                    <select className="form-select sorting-dropdown">
                      <option value="">Sort by</option>
                      <option selected value="date_desc">
                        Newest First
                      </option>
                      <option value="status">Attendance Status</option>
                      <option value="checkin_desc">Latest Arrivals</option>
                      <option value="hours_desc">Longest Days</option>
                    </select>
                  </div> */}
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
                        <th>Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>25 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>08:58 AM</td>
                        <td>05:55 PM</td>
                        <td>8h 57m</td>
                      </tr>
                      <tr>
                        <td>24 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>09:05 AM</td>
                        <td>06:10 PM</td>
                        <td>8h 5m</td>
                      </tr>
                      <tr>
                        <td>23 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-warning">Late</span>
                        </td>
                        <td>09:42 AM</td>
                        <td>06:25 PM</td>
                        <td>7h 43m</td>
                      </tr>
                      <tr>
                        <td>22 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>08:50 AM</td>
                        <td>05:45 PM</td>
                        <td>8h 55m</td>
                      </tr>
                      <tr>
                        <td>21 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Weekend</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>20 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Weekend</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>19 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>09:15 AM</td>
                        <td>06:30 PM</td>
                        <td>8h 15m</td>
                      </tr>
                      <tr>
                        <td>18 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>08:45 AM</td>
                        <td>05:50 PM</td>
                        <td>9h 5m</td>
                      </tr>
                      <tr>
                        <td>17 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-info">Half Day</span>
                        </td>
                        <td>09:00 AM</td>
                        <td>01:30 PM</td>
                        <td>4h 30m</td>
                      </tr>
                      <tr>
                        <td>16 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>09:10 AM</td>
                        <td>06:20 PM</td>
                        <td>8h 10m</td>
                      </tr>
                      <tr>
                        <td>15 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-warning">Late</span>
                        </td>
                        <td>10:05 AM</td>
                        <td>06:45 PM</td>
                        <td>7h 40m</td>
                      </tr>
                      <tr>
                        <td>14 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Weekend</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>13 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Weekend</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>12 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>08:55 AM</td>
                        <td>06:05 PM</td>
                        <td>9h 10m</td>
                      </tr>
                      <tr>
                        <td>11 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>09:20 AM</td>
                        <td>06:25 PM</td>
                        <td>8h 5m</td>
                      </tr>
                      <tr>
                        <td>10 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">
                            Sick Leave
                          </span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>09 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>08:50 AM</td>
                        <td>05:40 PM</td>
                        <td>8h 50m</td>
                      </tr>
                      <tr>
                        <td>08 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-warning">Late</span>
                        </td>
                        <td>09:50 AM</td>
                        <td>06:30 PM</td>
                        <td>7h 40m</td>
                      </tr>
                      <tr>
                        <td>07 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Weekend</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>06 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Weekend</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>05 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>09:00 AM</td>
                        <td>06:00 PM</td>
                        <td>9h 0m</td>
                      </tr>
                      <tr>
                        <td>04 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-info">WFH</span>
                        </td>
                        <td>09:15 AM</td>
                        <td>06:20 PM</td>
                        <td>8h 5m</td>
                      </tr>
                      <tr>
                        <td>03 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>08:45 AM</td>
                        <td>05:50 PM</td>
                        <td>9h 5m</td>
                      </tr>
                      <tr>
                        <td>02 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-danger">Absent</span>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td>0h</td>
                      </tr>
                      <tr>
                        <td>01 Nov 2025</td>
                        <td>
                          <span className="badge bg-label-success">
                            Present
                          </span>
                        </td>
                        <td>09:10 AM</td>
                        <td>06:15 PM</td>
                        <td>8h 5m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
