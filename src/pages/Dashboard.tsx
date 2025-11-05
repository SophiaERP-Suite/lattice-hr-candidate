// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import {
  Briefcase,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Eye,
  XCircle,
} from "lucide-react";
import avatar1 from "../assets/images/avatar/avatar-thumb-010.webp";
import blackLogo from "../assets/images/logo/logo-black.svg";
import whiteLogo from "../assets/images/logo/logo-white.svg";

function Dashboard() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row fix">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                  <ChevronRight size={15} style={{position: "relative", top: "3px"}} />
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center">
                <div
                  className="avatar avatar-xl bg-primary-transparent radius-100 text-primary"
                  style={{ marginBottom: "5px" }}
                >
                  {/* <User size={42} className="" /> */}
                  <img
                    className="radius-100"
                    src={avatar1}
                    alt="image not found"
                  />
                </div>
                <div className="card-content">
                  <span
                    className="d-block fs-16 mb-5"
                    style={{ textAlign: "left" }}
                  >
                    Current Job
                  </span>
                  <p
                    className=""
                    style={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    Head Nurse at carling Care home
                  </p>
                  {/* <span className="text-success">
                    +5%<i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                  </span>
                  <span className="fs-12 text-muted ml-5">vs. last month</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-warning-transparent text-warning">
                  <Briefcase size={42} className="" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Jobs Applied</span>
                  <h2 className="mb-5">42</h2>
                  {/* <span className="fs-12 text-muted">Sick/Annual Leave</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-info-transparent text-info">
                  <CheckCircle size={42} className="" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Saved Jobs</span>
                  <h2 className="mb-5">28</h2>
                  {/* <span className="text-success">
                    +3 New
                    <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                  </span>
                  <span className="fs-12 text-muted ml-5">this week</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body mini-card-body d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-purple-transparent text-purple">
                  <XCircle size={42} className="" />
                </div>
                <div className="card-content">
                  <span className="d-block fs-16 mb-5">Rejected Jobs</span>
                  <h2 className="mb-5">156</h2>
                  {/* <span className="fs-12 text-muted">30-day pipeline</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Jobs Applied</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <ChevronDown className="" />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table className="table tbody-b-none text-nowrap">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Applied</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-md radius-100">
                              <img
                                className="radius-100 border"
                                src={blackLogo}
                                alt="image not found"
                              />
                            </div>
                            <h6>Barnes care home</h6>
                          </div>
                        </td>
                        <td>Head Nurse</td>
                        <td>
                          <span className="badge bg-label-warning">
                            Interview
                          </span>
                        </td>
                        <td>2025-10-14</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <Eye  />
                            </a>
                            {/* <a
                              className="btn-icon btn-secondary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Download CV"
                            >
                              <i className="ri-download-line"></i>
                            </a> */}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-md radius-100">
                              <img
                                className="radius-100 border"
                                src={whiteLogo}
                                alt="image not found"
                              />
                            </div>
                            <h6>Jenkins Hospitals</h6>
                          </div>
                        </td>
                        <td>Mid-wife</td>
                        <td>
                          <span className="badge bg-label-warning">
                            Interview
                          </span>
                        </td>
                        <td>2025-09-05</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <Eye />
                            </a>
                            {/* <a
                              className="btn-icon btn-secondary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Download CV"
                            >
                              <i className="ri-download-line"></i>
                            </a> */}
                          </div>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>



{/* 
          <div className="col-xxl-5 col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Attendance Analytics</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Today
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a
                        className="dropdown-item active"
                        href="javascript:void(0);"
                      >
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div id="attendanceChart"></div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-8 col-lg-8">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Employee Status</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Today
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a
                        className="dropdown-item active"
                        href="javascript:void(0);"
                      >
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div id="employeeStatusChart"></div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4">
            <div className="d-flex flex-column">
              <div className="holiday-card">
                <h5 className="text-white text-center mb-15">Next Holiday</h5>
                <h3 className="text-secondary mb-5">New Year's Day</h3>
                <span className="text-white_7 d-block">
                  Monday, January 1, 2024
                </span>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="card">
                <div className="">
                  <h4 className="text-center mb-15">Today's Birthdays</h4>
                  <div className="swiper birthdaySlider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="birthday-card">
                          <div className="avatar avatar-xxl mb-15">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-001.webp"
                              alt="image not found"
                            />
                          </div>
                          <h5 className="mb-5">Sarah Johnson</h5>
                          <span className="text-body d-block mb-10">
                            Marketing Manager
                          </span>
                          <button className="btn btn-primary">
                            Send Wishes
                          </button>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="birthday-card">
                          <div className="avatar avatar-xxl mb-15">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-002.webp"
                              alt="image not found"
                            />
                          </div>
                          <h5 className="mb-5">Sarah Johnson</h5>
                          <span className="text-body d-block mb-10">
                            Marketing Manager
                          </span>
                          <button className="btn btn-primary">
                            Send Wishes
                          </button>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="birthday-card">
                          <div className="avatar avatar-xxl mb-15">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-002.webp"
                              alt="image not found"
                            />
                          </div>
                          <h5 className="mb-5">Sarah Johnson</h5>
                          <span className="text-body d-block mb-10">
                            Marketing Manager
                          </span>
                          <button className="btn btn-primary">
                            Send Wishes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-15">
                    <div className="bd-pagination primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Scheduled Interviews</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table className="table tbody-b-none text-nowrap">
                    <thead>
                      <tr>
                        <th>Candidate</th>
                        <th>Position</th>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-001.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Sarah Lim</h6>
                          </div>
                        </td>
                        <td>Senior UX Designer</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Today, 09:30 AM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-primary">
                            <i className="ri-vidicon-line"></i>
                            Zoom
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Join"
                            >
                              <i className="ri-video-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-time-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-002.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Michael Chen</h6>
                          </div>
                        </td>
                        <td>DevOps Engineer</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Today, 11:15 AM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-slateblue">
                            <i className="ri-building-line"></i>
                            On-site
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-secondary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Directions"
                            >
                              <i className="ri-map-pin-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Cancel"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-003.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Emma Johnson</h6>
                          </div>
                        </td>
                        <td>Marketing Manager</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Today, 02:00 PM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-purple">
                            <i className="ri-phone-line"></i>
                            Phone
                          </span>
                        </td>

                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-primary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Start Call"
                            >
                              <i className="ri-phone-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Notes"
                            >
                              <i className="ri-file-list-2-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-004.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>James Wilson</h6>
                          </div>
                        </td>
                        <td>Data Scientist</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Tomorrow, 10:00 AM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-primary">
                            <i className="ri-vidicon-line"></i>
                            Zoom
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Join"
                            >
                              <i className="ri-video-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-time-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-005.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Sophia Martinez</h6>
                          </div>
                        </td>
                        <td>Product Manager</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Tomorrow, 01:30 PM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-slateblue">
                            <i className="ri-building-line"></i>
                            On-site
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-secondary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Directions"
                            >
                              <i className="ri-map-pin-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Cancel"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-006.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>David Kim</h6>
                          </div>
                        </td>
                        <td>Frontend Developer</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Jun 25, 03:00 PM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-purple">
                            <i className="ri-phone-line"></i>
                            Phone
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-primary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Start Call"
                            >
                              <i className="ri-phone-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Notes"
                            >
                              <i className="ri-file-list-2-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr className="urgent-interview">
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-007.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Priya Patel</h6>
                          </div>
                        </td>
                        <td>UX Researcher</td>
                        <td>
                          <div className="d-flex-column">
                            <span className="fw-500">Today, 04:30 PM</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-danger">
                            <i className="ri-vidicon-line"></i>
                            Zoom
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Join"
                            >
                              <i className="ri-video-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Urgent"
                            >
                              <i className="ri-alarm-warning-line"></i>
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

          <div className="col-xxl-4 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Announcement</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Today
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a
                        className="dropdown-item active"
                        href="javascript:void(0);"
                      >
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="announcement-list card-scrollbar">
                  <div className="announcement-item">
                    <div className="bullet bg-primary mt-5"></div>
                    <div className="announcement-content">
                      <div className="announcement-header d-flex-between mb-10">
                        <h5>Office Renovation Schedule</h5>
                        <span className="fs-12 text-muted">2h ago</span>
                      </div>
                      <p className="mb-15">
                        The 3rd floor will be closed for renovations from June
                        15-20. All teams will temporarily relocate...
                      </p>
                      <div className="announcement-footer d-flex-between">
                        <span className="fs-12 text-body-secondary">
                          By HR Department
                        </span>
                        <div className="announcement-tags d-flex gap-10">
                          <span className="badge bg-label-danger">
                            Important
                          </span>
                          <span className="badge bg-label-info">Facility</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="announcement-item">
                    <div className="bullet bg-success mt-5"></div>
                    <div className="announcement-content">
                      <div className="announcement-header d-flex-between mb-10">
                        <h5>New Benefits Package</h5>
                        <span className="fs-12 text-muted">1d ago</span>
                      </div>
                      <p className="mb-15">
                        Our updated benefits package is now available. Please
                        review the new healthcare options by...
                      </p>
                      <div className="announcement-footer d-flex-between">
                        <span className="fs-12 text-body-secondary">
                          By Admin Team
                        </span>
                        <div className="announcement-tags d-flex gap-10">
                          <span className="badge bg-label-danger">
                            Benefits
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="announcement-item">
                    <div className="bullet bg-warning mt-5"></div>
                    <div className="announcement-content">
                      <div className="announcement-header d-flex-between mb-10">
                        <h5>Quarterly All-Hands Meeting</h5>
                        <span className="fs-12 text-muted">3d ago</span>
                      </div>
                      <p className="mb-15">
                        Join us this Friday at 2PM in the main conference room
                        for our quarterly company update and...
                      </p>
                      <div className="announcement-footer d-flex-between">
                        <span className="fs-12 text-body-secondary">
                          By Executive Team
                        </span>
                        <div className="announcement-tags d-flex gap-10">
                          <span className="badge bg-label-warning">Event</span>
                          <span className="badge bg-label-slateblue">
                            Mandatory
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="announcement-item">
                    <div className="bullet bg-danger mt-5"></div>
                    <div className="announcement-content">
                      <div className="announcement-header d-flex-between mb-10">
                        <h5>System Maintenance Tonight</h5>
                        <span className="fs-12 text-muted">5h ago</span>
                      </div>
                      <p className="mb-15">
                        IT will perform critical system upgrades tonight from
                        10PM to 2AM. All systems will be unavailable during this
                        window...
                      </p>
                      <div className="announcement-footer d-flex-between">
                        <span className="fs-12 text-body-secondary">
                          By IT Department
                        </span>
                        <div className="announcement-tags d-flex gap-10">
                          <span className="badge bg-label-danger">Urgent</span>
                          <span className="badge bg-label-primary">
                            Technology
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="announcement-item unread">
                    <div className="bullet bg-success mt-5"></div>
                    <div className="announcement-content">
                      <div className="announcement-header d-flex-between mb-10">
                        <h5>New Employee Wellness Program</h5>
                        <span className="fs-12 text-muted">1h ago</span>
                      </div>
                      <p className="mb-15">
                        Starting next month, we're launching a wellness program
                        including gym discounts, meditation sessions, and
                        health...
                      </p>
                      <div className="announcement-footer d-flex-between">
                        <span className="fs-12 text-body-secondary">
                          By HR Benefits Team
                        </span>
                        <div className="announcement-tags d-flex gap-10">
                          <span className="badge bg-label-success">
                            Wellness
                          </span>
                          <span className="badge bg-label-purple">New</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="announcement-view-btn">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary w-100"
                  >
                    View All Announcements
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Leave Request</h4>
                <a
                  className="btn btn-primary-light btn-sm text-primary"
                  href="javascript:void(0);"
                >
                  View All
                </a>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table className="table tbody-b-none text-nowrap">
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>Dates</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-001.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Sarah Johnson</h6>
                          </div>
                        </td>
                        <td>Annual Leave</td>
                        <td>Jun 15 - Jun 18, 2023</td>
                        <td>4 days</td>
                        <td>
                          <span className="badge bg-label-success">
                            Approved
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-002.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Michael Chen</h6>
                          </div>
                        </td>
                        <td>Sick Leave</td>
                        <td>Jun 20 - Jun 21, 2023</td>
                        <td>2 days</td>
                        <td>
                          <span className="badge bg-label-warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-003.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Emma Wilson</h6>
                          </div>
                        </td>
                        <td>Maternity Leave</td>
                        <td>Jul 1 - Sep 30, 2023</td>
                        <td>92 days</td>
                        <td>
                          <span className="badge bg-label-primary">
                            In Review
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-004.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>David Kim</h6>
                          </div>
                        </td>
                        <td>Unpaid Leave</td>
                        <td>Jun 25 - Jun 30, 2023</td>
                        <td>6 days</td>
                        <td>
                          <span className="badge bg-label-danger">
                            Rejected
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-005.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Priya Patel</h6>
                          </div>
                        </td>
                        <td>Emergency Leave</td>
                        <td>Jul 5 - Jul 6, 2023</td>
                        <td>2 days</td>
                        <td>
                          <span className="badge bg-label-warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-006.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Robert Garcia</h6>
                          </div>
                        </td>
                        <td>Work From Home</td>
                        <td>Jul 10 - Jul 14, 2023</td>
                        <td>5 days</td>
                        <td>
                          <span className="badge bg-label-success">
                            Approved
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar avatar-xs radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-007.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>Lisa Wong</h6>
                          </div>
                        </td>
                        <td>Half-day Leave</td>
                        <td>Jul 12, 2023 (PM)</td>
                        <td>Half day</td>
                        <td>
                          <span className="badge bg-label-slateblue">
                            Approved
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reject"
                            >
                              <i className="ri-close-line"></i>
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

          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Meeting Schedule</h4>
                <a
                  className="btn btn-primary-light btn-sm text-primary"
                  href="javascript:void(0);"
                >
                  View All
                </a>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table
                    id="meetingTable"
                    className="table table-bordered text-nowrap w-100"
                  >
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          #
                        </th>
                        <th scope="col">Meeting Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Location</th>
                        <th scope="col">Organizer</th>
                        <th scope="col">Participants</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>
                          <h6>Quarterly Financial Review</h6>
                        </td>
                        <td>2023-11-15</td>
                        <td>10:00 AM</td>
                        <td>90 mins</td>
                        <td>Conference Room A</td>
                        <td>John Smith (Finance)</td>
                        <td>12</td>
                        <td>
                          <span className="badge bg-label-primary">
                            Scheduled
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>
                          <h6>Product Launch Planning</h6>
                        </td>
                        <td>2023-11-16</td>
                        <td>2:30 PM</td>
                        <td>120 mins</td>
                        <td>Virtual (Zoom)</td>
                        <td>Sarah Johnson (Marketing)</td>
                        <td>8</td>
                        <td>
                          <span className="badge bg-label-warning">
                            Pending Confirmation
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>
                          <h6>Team Stand-up</h6>
                        </td>
                        <td>2023-11-17</td>
                        <td>9:15 AM</td>
                        <td>30 mins</td>
                        <td>Team Room 3</td>
                        <td>Michael Brown (Development)</td>
                        <td>5</td>
                        <td>
                          <span className="badge bg-label-success">
                            Confirmed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>
                          <h6>Client Proposal Discussion</h6>
                        </td>
                        <td>2023-11-17</td>
                        <td>11:00 AM</td>
                        <td>60 mins</td>
                        <td>Client Office</td>
                        <td>Emily Davis (Sales)</td>
                        <td>4</td>
                        <td>
                          <span className="badge bg-label-info">
                            In Progress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>
                          <h6>HR Policy Update</h6>
                        </td>
                        <td>2023-11-18</td>
                        <td>3:00 PM</td>
                        <td>45 mins</td>
                        <td>Conference Room B</td>
                        <td>Robert Wilson (HR)</td>
                        <td>All Staff</td>
                        <td>
                          <span className="badge bg-label-warning">
                            Postponed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td>
                          <h6>IT Infrastructure Upgrade</h6>
                        </td>
                        <td>2023-11-20</td>
                        <td>1:30 PM</td>
                        <td>90 mins</td>
                        <td>IT Department</td>
                        <td>Jennifer Lee (IT)</td>
                        <td>6</td>
                        <td>
                          <span className="badge bg-label-success">
                            Confirmed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">7</td>
                        <td>
                          <h6>Annual Budget Planning</h6>
                        </td>
                        <td>2023-11-21</td>
                        <td>10:00 AM</td>
                        <td>180 mins</td>
                        <td>Board Room</td>
                        <td>David Miller (Finance)</td>
                        <td>10</td>
                        <td>
                          <span className="badge bg-label-primary">
                            Scheduled
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">8</td>
                        <td>
                          <h6>Creative Brainstorming</h6>
                        </td>
                        <td>2023-11-22</td>
                        <td>2:00 PM</td>
                        <td>60 mins</td>
                        <td>Creative Lab</td>
                        <td>Lisa Taylor (Design)</td>
                        <td>7</td>
                        <td>
                          <span className="badge bg-label-success">
                            Confirmed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">9</td>
                        <td>
                          <h6>Project Retrospective</h6>
                        </td>
                        <td>2023-11-23</td>
                        <td>4:00 PM</td>
                        <td>120 mins</td>
                        <td>Meeting Room 4</td>
                        <td>James Anderson (PMO)</td>
                        <td>9</td>
                        <td>
                          <span className="badge bg-label-danger">
                            Cancelled
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">10</td>
                        <td>
                          <h6>Customer Support Training</h6>
                        </td>
                        <td>2023-11-24</td>
                        <td>9:30 AM</td>
                        <td>240 mins</td>
                        <td>Training Room</td>
                        <td>Patricia White (Support)</td>
                        <td>15</td>
                        <td>
                          <span className="badge bg-label-primary">
                            Scheduled
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Details"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Reschedule"
                            >
                              <i className="ri-calendar-schedule-line"></i>
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

          <div className="col-xxl-9 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Projects Status Overview</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table className="table tbody-b-none text-nowrap w-100">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Projects</th>
                        <th>Team Leader</th>
                        <th>Team</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#PRJ-1025</td>
                        <td>
                          <h6 className="mb-0 text-body">
                            E-commerce Platform
                          </h6>
                          <small className="text-muted">Development</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-001.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">John Smith</a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>15 Jul 2023</td>
                        <td>
                          <span className="badge bg-label-danger">High</span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-warning-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#PRJ-1026</td>
                        <td>
                          <h6 className="mb-0 text-body">
                            Customer Mobile App
                          </h6>
                          <small className="text-muted">Design</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-002.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">
                                Sarah Johnson
                              </a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>25 Jul 2023</td>
                        <td>
                          <span className="badge bg-label-warning">Medium</span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Approve"
                            >
                              <i className="ri-check-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#PRJ-1027</td>
                        <td>
                          <h6 className="mb-0 text-body">Admin Dashboard</h6>
                          <small className="text-muted">Testing</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-003.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">
                                Michael Brown
                              </a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>05 Aug 2023</td>
                        <td>
                          <span className="badge bg-label-success">Low</span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delay"
                            >
                              <i className="ri-time-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#PRJ-1029</td>
                        <td>
                          <h6 className="mb-0 text-body">
                            E-commerce Platform
                          </h6>
                          <small className="text-muted">Development</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-005.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">
                                Michael Johnson
                              </a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-006.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>15 Aug 2023</td>
                        <td>
                          <span className="badge bg-label-warning">Medium</span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-primary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Launch"
                            >
                              <i className="ri-rocket-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#PRJ-1030</td>
                        <td>
                          <h6 className="mb-0 text-body">
                            Mobile App Redesign
                          </h6>
                          <small className="text-muted">UI/UX</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-007.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">
                                Sarah Wilson
                              </a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-007.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-008.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-009.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>22 Sep 2023</td>
                        <td>
                          <span className="badge bg-label-success">Low</span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-primary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Launch"
                            >
                              <i className="ri-rocket-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#PRJ-1031</td>
                        <td>
                          <h6 className="mb-0 text-body">CRM System Upgrade</h6>
                          <small className="text-muted">Backend</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-010.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">
                                David Thompson
                              </a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-010.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-011.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-012.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>05 Oct 2023</td>
                        <td>
                          <span className="badge bg-label-danger">High</span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-primary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Launch"
                            >
                              <i className="ri-rocket-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#PRJ-1032</td>
                        <td>
                          <h6 className="mb-0 text-body">
                            Data Analytics Dashboard
                          </h6>
                          <small className="text-muted">Implementation</small>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="assets/images/avatar/avatar-thumb-013.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">
                                Robert Chen
                              </a>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-013.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-014.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item avatar avatar-sm">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-015.webp"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>18 Nov 2023</td>
                        <td>
                          <span className="badge bg-label-primary">
                            Critical
                          </span>
                        </td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-primary-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Launch"
                            >
                              <i className="ri-rocket-line"></i>
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

          <div className="col-xxl-3 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Task Overview</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Today
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a
                        className="dropdown-item active"
                        href="javascript:void(0);"
                      >
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div id="taskOverview"></div>
                <div className="pipeline-stats mt-20">
                  <div className="d-flex justify-between align-center mb-8">
                    <div className="d-flex align-center gap-10">
                      <span className="bullet bg-primary"></span>
                      <span className="fs-14">Ongoing</span>
                    </div>
                    <span className="fw-500">46</span>
                  </div>
                  <div className="d-flex justify-between align-center mb-8">
                    <div className="d-flex align-center gap-10">
                      <span className="bullet bg-info"></span>
                      <span className="fs-14">On Hold</span>
                    </div>
                    <span className="fw-500">55</span>
                  </div>
                  <div className="d-flex justify-between align-center mb-8">
                    <div className="d-flex align-center gap-10">
                      <span className="bullet bg-warning"></span>
                      <span className="fs-14">Overdue</span>
                    </div>
                    <span className="fw-500">67</span>
                  </div>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex align-center gap-10">
                      <span className="bullet bg-success"></span>
                      <span className="fs-14">Delivery</span>
                    </div>
                    <span className="fw-500">83</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Employee Activity Log</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table
                    id="employeeActivityTable"
                    className="table table-bordered text-nowrap w-100"
                  >
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          #
                        </th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Department</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Monthly Salary</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>EMP-1001</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-001.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>John Smith</h6>
                        </td>
                        <td>Software Engineer</td>
                        <td>IT</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="0e64616660207d63677a664e6d61637e6f6077206d6163"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 123-4567</td>
                        <td>$6,500.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>EMP-1002</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-002.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>Sarah Johnson</h6>
                        </td>
                        <td>HR Manager</td>
                        <td>Human Resources</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="15667467747d3b7f55767a7865747b6c3b767a78"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 234-5678</td>
                        <td>$7,200.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>EMP-1003</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-003.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>Michael Brown</h6>
                        </td>
                        <td>Sales Associate</td>
                        <td>Sales</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="ff92969c979e9a93d19dbf9c90928f9e9186d19c9092"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 345-6789</td>
                        <td>$4,800.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>EMP-1004</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-004.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>Emily Davis</h6>
                        </td>
                        <td>Marketing Specialist</td>
                        <td>Marketing</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="acc9c1c5c0d582c8eccfc3c1dccdc2d582cfc3c1"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 456-7890</td>
                        <td>$5,600.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>EMP-1005</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-005.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>Robert Wilson</h6>
                        </td>
                        <td>Accountant</td>
                        <td>Finance</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="790b161b1c0b0d570e391a161409181700571a1614"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-warning">
                            On Leave
                          </span>
                        </td>
                        <td>(555) 567-8901</td>
                        <td>$6,000.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td>EMP-1006</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-006.webp"
                              alt="image not found"
                            />
                          </div>
                          Jennifer Lee
                        </td>
                        <td>Project Manager</td>
                        <td>Operations</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="fd97989393949b988fd391bd9e92908d9c9384d39e9290"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 678-9012</td>
                        <td>$8,300.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">7</td>
                        <td>EMP-1007</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-007.webp"
                              alt="image not found"
                            />
                          </div>
                          David Miller
                        </td>
                        <td>IT Support</td>
                        <td>IT</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="5135302738357f3c11323e3c21303f287f323e3c"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-danger">
                            Terminated
                          </span>
                        </td>
                        <td>(555) 789-0123</td>
                        <td>$4,200.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">8</td>
                        <td>EMP-1008</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-008.webp"
                              alt="image not found"
                            />
                          </div>
                          Lisa Taylor
                        </td>
                        <td>Graphic Designer</td>
                        <td>Creative</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="bbd7d2c8da95cffbd8d4d6cbdad5c295d8d4d6"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 890-1234</td>
                        <td>$5,400.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">9</td>
                        <td>EMP-1009</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-009.webp"
                              alt="image not found"
                            />
                          </div>
                          James Anderson
                        </td>
                        <td>Business Analyst</td>
                        <td>Strategy</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="f69c979b9385d897b695999b8697988fd895999b"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-success">Active</span>
                        </td>
                        <td>(555) 901-2345</td>
                        <td>$7,800.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">10</td>
                        <td>EMP-1010</td>
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src={avatar1}
                              alt="image not found"
                            />
                          </div>
                          Patricia White
                        </td>
                        <td>Customer Support</td>
                        <td>Customer Service</td>
                        <td>
                          <a
                            href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="74041500061d171d155a0334171b1904151a0d5a171b19"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>
                          <span className="badge bg-label-info">Probation</span>
                        </td>
                        <td>(555) 012-3456</td>
                        <td>$3,900.00</td>
                        <td>
                          <div className="d-flex-items gap-10">
                            <a
                              className="btn-icon btn-success-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-info-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                            <a
                              className="btn-icon btn-danger-light"
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
