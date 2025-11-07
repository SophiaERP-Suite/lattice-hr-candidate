import { ChevronRight } from "lucide-react";

function JobsSaved() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0">Saved Jobs</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Saved Jobs
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

          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between flex-wrap gap-3">
                <h4 className="d-flex-items gap-10 mb-0">All Jobs</h4>
                <div className="d-flex flex-wrap gap-15">
                  <div className="dataTables-sorting-control">
                    <select className="form-select sorting-dropdown">
                      <option value="">Sort by:</option>
                      <option value="1_asc">ID (Low to High)</option>
                      <option value="1_desc">ID (High to Low)</option>
                      <option value="2_asc">Name (A-Z)</option>
                      <option value="2_desc">Name (Z-A)</option>
                      <option value="5_asc">Company (A-Z)</option>
                      <option value="5_desc">Company (Z-A)</option>
                      {/* <option value="8_asc">Status (Active First)</option>
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
                        <th className="d-none d-md-table-cell">Department</th>
                        <th className="d-none d-lg-table-cell">Location</th>
                        <th className="d-none d-md-table-cell">Job Type</th>
                        <th className="d-none d-xl-table-cell">Posted Date</th>
                        <th className="d-none d-xl-table-cell">Deadline</th>
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
                          <div className="d-flex align-items-center gap-2">
                            {/* <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/company/company-thumb-001.png"
                                alt="company logo"
                              />
                            </div> */}
                            <a
                              href="company-details.html"
                              className="d-none d-sm-inline"
                            >
                              Gaza Solutions
                            </a>
                          </div>
                        </td>
                        <td className="d-none d-md-table-cell">
                          Product Design
                        </td>
                        <td className="d-none d-lg-table-cell">
                          San Francisco, CA
                        </td>
                        <td className="d-none d-md-table-cell">
                          <span className="badge bg-label-warning">
                            Part-time
                          </span>
                        </td>
                        <td className="d-none d-xl-table-cell">May 15, 2025</td>
                        <td className="d-none d-xl-table-cell">
                          <span className="text-danger fw-medium">
                            Jun 30, 2025
                          </span>
                        </td>
                        <td>
                          <a
                            href="JobDetails"
                            className="btn btn-sm btn-primary"
                            type="button"
                          >
                            Apply
                          </a>
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
                          <div className="d-flex align-items-center gap-2">
                            {/* <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/company/company-thumb-002.png"
                                alt="company logo"
                              />
                            </div> */}
                            <a
                              href="company-details.html"
                              className="d-none d-sm-inline"
                            >
                              TechNova
                            </a>
                          </div>
                        </td>
                        <td className="d-none d-md-table-cell">Engineering</td>
                        <td className="d-none d-lg-table-cell">Remote</td>
                        <td className="d-none d-md-table-cell">
                          <span className="badge bg-label-primary">
                            Full-time
                          </span>
                        </td>
                        <td className="d-none d-xl-table-cell">Jun 1, 2025</td>
                        <td className="d-none d-xl-table-cell">
                          <span className="text-danger fw-medium">
                            Jun 25, 2025
                          </span>
                        </td>
                        <td>
                          <a
                            href="JobDetails"
                            className="btn btn-sm btn-primary"
                            type="button"
                          >
                            Apply
                          </a>
                        </td>
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

export default JobsSaved;
