// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import {
  ChevronRight,
 
} from "lucide-react";
function MyJobs() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0">My Jobs</h1>
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
                    My Jobs
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between flex-wrap gap-3">
                <h4 className="d-flex-items gap-10">All Jobs</h4>
                <div className="d-flex flex-wrap gap-15">
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addNewJob"
                  >
                    Add New Job
                  </button> */}
                  {/* <a
                    className="btn btn-success text-white"
                    href="javascript:void(0);"
                  >
                  Find Jobs
                  </a> */}
                  <div className="dataTables-sorting-control ">
                    <select className="form-select sorting-dropdown">
                      <option value="">Sort by:</option>
                      {/* <option value="1_asc">ID (Low to High)</option>
                      <option value="1_desc">ID (High to Low)</option>
                      <option value="2_asc">Name (A-Z)</option>
                      <option value="2_desc">Name (Z-A)</option>
                      <option value="5_asc">Company (A-Z)</option>
                      <option value="5_desc">Company (Z-A)</option>
                      <option value="8_asc">Status (Active First)</option>
                      <option value="8_desc">Status (Inactive First)</option> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table
                    id="dataTableDefault"
                    className="table text-nowrap w-100"
                    style={{textAlign: "left"}}
                  >
                    <thead>
                      <tr>
                        
                        <th>S/N</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Shift</th>
                        <th>Location</th>
                        {/* <th>Job Type</th> */}
                        {/* <th>Status</th> */}
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <a
                            href="apps-job-details.html"
                            className="text-heading fw-semibold"
                          >
                            Senior UX Designer
                          </a>
                        </td>
                        <td>
                          <div className="d-flex-items gap-5">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/company/company-thumb-001.png"
                                alt="image not found"
                              />
                            </div>
                            <a href="company-details.html">Gaza Solutions</a>
                          </div>
                        </td>
                        <td>N/A</td>
                        <td>San Francisco, CA</td>
                        
                        <td>
                          <div className="d-flex-items gap-5">
                            <a
                              className="btn btn-warning-light"
                              href="Payslip"
                            >
                              Payslip
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <a
                            href="apps-job-details.html"
                            className="text-heading fw-semibold"
                          >
                            Backend Developer
                          </a>
                        </td>
                        <td>
                          <div className="d-flex-items gap-5">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/company/company-thumb-001.png"
                                alt="image not found"
                              />
                            </div>
                            <a href="company-details.html">Gaza Solutions</a>
                          </div>
                        </td>
                        <td>N/A</td>
                        <td>San Francisco, CA</td>
                        
                        <td>
                          <div className="d-flex-items gap-5">
                            <a
                              className="btn btn-warning-light"
                              href="Payslip"
                            >
                              Payslip
                            </a>
                          </div>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- create deals model start --> */}
          <div
            className="modal fade"
            id="addNewJob"
            tabIndex={-1}
            aria-labelledby="addNewJobLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-16" id="addNewJobLabel">
                    Add New Job
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
                      <div className="text-center">
                        <div className="avatar avatar-xxl radius-100">
                          <img
                            src="assets/images/avatar/avatar-thumb-dummy.html"
                            alt="image not found"
                            id="profileImage"
                            className="radius-100"
                          />
                          <span className="avatar-badge bg-primary">
                            <input
                              type="file"
                              name="photo"
                              className="p-absolute z-3 cursor-pointer w-100 h-100 op-0 pl-0 pr-0"
                              id="profileImageChange"
                            />
                            <i className="ri-camera-line p-relative z-1"></i>
                          </span>
                        </div>
                        <span className="d-block fw-5 text-muted">
                          Company Logo
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="jobTitle" className="form-label">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="jobTitle"
                        placeholder="Job Title"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <div>
                        <label htmlFor="department" className="form-label">
                          Department
                        </label>
                        <select
                          className="js-example-basic-single"
                          id="department"
                        >
                          <option value="">Select Department</option>
                          <option value="Product Design">Product Design</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Analytics">Analytics</option>
                          <option value="Product">Product</option>
                          <option value="Human Resources">
                            Human Resources
                          </option>
                          <option value="Analytics">Analytics</option>
                          <option value="Sales">Sales</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="location" className="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Location"
                      />
                    </div>
                    <div className="col-xl-6">
                      <div>
                        <label htmlFor="type" className="form-label">
                          Job Type
                        </label>
                        <select className="js-example-basic-single" id="type">
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Remote">Remote</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="Experience" className="form-label">
                        Experience
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Experience"
                        placeholder="Experience"
                      />
                    </div>

                    <div className="col-xl-6">
                      <label className="form-label">Salary</label>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-text text-muted">
                            {" "}
                            <i className="ri-money-dollar-circle-line fs-20"></i>{" "}
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Salary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows={2}
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- create deals model end --> */}
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
