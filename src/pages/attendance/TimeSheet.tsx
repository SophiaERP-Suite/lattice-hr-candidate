// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"

import { ChevronRight } from "lucide-react";


function TimeSheet() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">TimeSheet</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    TimeSheet
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold">Timesheet Dashboard</h4>
              <div className="d-flex flex-wrap gap-15">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addNewTimeSheet"
                >
                  Add New Timesheet
                </button>
                <a href="Attendance" className="btn btn-primary">View Attendance</a>
              </div>
            </div>

            {/* <!-- Summary Cards --> */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="card text-center shadow-sm p-3">
                  <h6>Total Hours This Week</h6>
                  <h3 className="fw-bold text-primary">42 hrs</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow-sm p-3">
                  <h6>Pending Approvals</h6>
                  <h3 className="fw-bold text-warning">3</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow-sm p-3">
                  <h6>Approved Entries</h6>
                  <h3 className="fw-bold text-success">25</h3>
                </div>
              </div>
            </div>

            {/* <!-- Timesheet Table --> */}
            <div className="card shadow-sm">
              <div className="card-header fw-bold">Recent Entries</div>
              <div className="card-body p-0">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Date</th>
                      <th>Case ID</th>
                      <th>Task Description</th>
                      <th>Hours</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nov 5, 2025</td>
                      <td>#INV-2043</td>
                      <td>Field Investigation</td>
                      <td>6</td>
                      <td>
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nov 4, 2025</td>
                      <td>#INV-2041</td>
                      <td>Reporting</td>
                      <td>3</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nov 3, 2025</td>
                      <td>#INV-2038</td>
                      <td>Evidence Review</td>
                      <td>4</td>
                      <td>
                        <span className="badge bg-danger">Rejected</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
           <div
          className="modal fade"
          id="addNewTimeSheet"
          tabIndex={-1}
          aria-labelledby="addNewTimeSheetLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-16" id="addNewTimeSheetLabel">
                  Create New Timesheet
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row gy-15">
                  <div className="col-xl-12">
                    <label htmlFor="timesheetEmployee" className="form-label">
                      Employee
                    </label>
                    <select className="employeeList form-control">
                      <option value="p-1">John Doe</option>
                      <option value="p-2">Jane Smith</option>
                      <option value="p-3">Sarah Johnson</option>
                      <option value="p-4">Michael Brown</option>
                      <option value="p-5">Emily Davis</option>
                      <option value="p-6">Robert Wilson</option>
                    </select>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="timesheetDate" className="form-label">
                      Date
                    </label>
                    <div className="input-group">
                      <div className="input-group-text text-muted">
                        <i className="ri-calendar-line"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control flatpickr-input"
                        id="timesheetDate"
                        placeholder="Select work date"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="startTime" className="form-label">
                      Hours Worked
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        id="startTime"
                        placeholder="Enter hours (e.g. 7.5)"
                        step="0.25"
                        min="0"
                        max="24"
                      />
                      <div className="input-group-text">hours</div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Work Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Enter task details (e.g. 'Project A development', 'Client meeting')"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-end gap-10 mt-20">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="ri-save-line me-2"></i> Save Timesheet Entry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSheet;
