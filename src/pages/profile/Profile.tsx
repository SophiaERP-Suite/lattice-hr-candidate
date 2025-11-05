// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import {
  Briefcase,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Eye,
  User,
  XCircle,
} from "lucide-react";
import avatar1 from "../../assets/images/avatar/avatar-thumb-010.webp";
import blackLogo from "../../assets/images/logo/logo-black.svg";
import whiteLogo from "../../assets/images/logo/logo-white.svg";
import john from "../../assets/images/avatar/avatar-thumb-001.webp";

function Profile() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Employee Details</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Employee Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-12 col-lg-4">
            <div
              className="card height-equal"
              style={{ minHeight: "761.372px" }}
            >
              <div className="card-header justify-between">
                <h4 className="">Personal Information</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="text-center mb-10">
                  <div className="avatar avatar-big radius-100">
                    <img
                      className="radius-100"
                      src={john}
                      alt="image not found"
                    />
                  </div>
                </div>
                <div className="profile-info text-center mb-15">
                  <h3 className="mb-5">John Parker</h3>
                  <h6 className="text-body mb-10">Nurse</h6>
                  <div className="d-flex-center gap-15">
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-warning-light fs-16"
                    >
                      <i className="ri-twitter-x-line"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-success-light fs-16"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-info-light fs-16"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-danger-light fs-16"
                    >
                      <i className="ri-whatsapp-line"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-primary-light fs-16"
                    >
                      <i className="ri-telegram-2-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="table-responsive mb-15">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{ minWidth: "105px" }}>Employee ID:</td>
                        <td>
                          <div className="text-heading">MD-0001</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Date of Join</td>
                        <td>
                          <div className="text-heading">2024-06-28</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <div className="text-heading">
                            john.parker@example.com
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>
                          <div className="text-heading">+1(800) 642 7676</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Birthday</td>
                        <td>
                          <div className="text-heading">1992-12-28</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>
                          <div className="text-heading">Male</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          <div className="text-heading">
                            100 Fort Lauderdale, Miami 33315, United States
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="text-center">
                  <button className="btn btn-primary" type="button">
                    Send Message
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-6">
            <div
              className="card height-equal"
              style={{ minHeight: "761.372px" }}
            >
              <div className="card-header justify-between">
                <h4 className="">Work Experience</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Edit
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="exp-timeline-item mb-25">
                  <div className="exp-timeline-badge btn-icon btn-sm btn-info-light fs-20">
                    <Briefcase />
                  </div>
                  <div className="exp-timeline-content">
                    <div className="exp-timeline-header d-flex-between gap-15 mb-5">
                      <h5>Senior Product Designer</h5>
                      <span className="exp-timeline-date fs-15 fw-6">
                        2021 - Present
                      </span>
                    </div>
                    <span className="company-name d-block fs-15 fw-6 mb-5">
                      TechVision Inc.
                    </span>
                    <p className="job-description">
                      Led SaaS product design, built design systems, and boosted
                      user retention 32% through research-driven solutions.
                    </p>
                    <div className="job-skills d-flex-items flex-wrap gap-10">
                      <span className="badge bg-label-primary">
                        UI/UX Design
                      </span>
                      <span className="badge bg-label-danger">Figma</span>
                      <span className="badge bg-label-info">Prototyping</span>
                    </div>
                  </div>
                </div>

                <div className="exp-timeline-item mb-25">
                  <div className="exp-timeline-badge btn-icon btn-sm btn-info-light fs-20">
                     <Briefcase />
                  </div>
                  <div className="exp-timeline-content">
                    <div className="exp-timeline-header d-flex-between gap-15 mb-5">
                      <h5>Product Designer</h5>
                      <span className="exp-timeline-date fs-15 fw-6">
                        2018 - 2021
                      </span>
                    </div>
                    <span className="company-name d-block fs-15 fw-6 mb-5">
                      Digital Solutions LLC
                    </span>
                    <p className="job-description">
                      Designed fintech &amp; healthcare apps, creating
                      wireframes &amp; prototypes while leading usability
                      testing.
                    </p>
                    <div className="job-skills d-flex-items flex-wrap gap-10">
                      <span className="badge bg-label-primary">
                        Wireframing
                      </span>
                      <span className="badge bg-label-purple">Adobe XD</span>
                      <span className="badge bg-label-success">
                        User Testing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="exp-timeline-item">
                  <div className="exp-timeline-badge btn-icon btn-sm btn-info-light fs-20">
                     <Briefcase />
                  </div>
                  <div className="exp-timeline-content">
                    <div className="exp-timeline-header d-flex-between gap-15 mb-5">
                      <h5>Junior Designer</h5>
                      <span className="exp-timeline-date fs-15 fw-6">
                        2016 - 2018
                      </span>
                    </div>
                    <span className="company-name d-block fs-15 fw-6 mb-5">
                      Creative Studio
                    </span>
                    <p className="job-description">
                      Assisted senior designers with projects, created marketing
                      materials, and developed branding concepts for small
                      businesses and startups.
                    </p>
                    <div className="job-skills d-flex-items flex-wrap gap-10">
                      <span className="badge bg-label-pink">
                        Graphic Design
                      </span>
                      <span className="badge bg-label-warning">
                        Illustrator
                      </span>
                      <span className="badge bg-label-teal">Branding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-6">
            <div
              className="card height-equal"
              style={{ minHeight: "761.372px" }}
            >
              <div className="card-header justify-between">
                <h4 className="">Education Qualifications</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="edu-timeline-item mb-25">
                  <div className="edu-timeline-content">
                    <div className="edu-timeline-header d-flex-between gap-15 mb-5">
                      <h5>Master of Computer Science</h5>
                      <span className="edu-timeline-date">2019 - 2021</span>
                    </div>
                    <span className="institution-name d-block fs-15 fw-6 mb-5">
                      Stanford University
                    </span>
                    <p className="education-details mb-15">
                      Specialization in Artificial Intelligence | GPA: 3.8/4.0
                      <br />
                      Thesis: "Neural Networks for Predictive Analysis in
                      Healthcare"
                    </p>
                    <div className="education-achievements d-flex-items gap-10">
                      <span className="badge bg-label-primary">
                        Summa Cum Laude
                      </span>
                      <span className="badge bg-label-success">
                        Research Fellow
                      </span>
                    </div>
                  </div>
                </div>
                <div className="edu-timeline-item mb-25">
                  <div className="edu-timeline-content">
                    <div className="edu-timeline-header d-flex-between gap-15 mb-5">
                      <h5>Bachelor of Science in Software Engineering</h5>
                      <span className="edu-timeline-date">2015 - 2019</span>
                    </div>
                    <span className="institution-name d-block fs-15 fw-6 mb-5">
                      MIT
                    </span>
                    <p className="education-details mb-15">
                      Minor in Data Science | GPA: 3.6/4.0
                      <br />
                      Senior Project: Developed campus parking optimization
                      system
                    </p>
                    <div className="education-achievements d-flex-items gap-10">
                      <span className="badge bg-label-info">Dean's List</span>
                      <span className="badge bg-label-warning">
                        Hackathon Winner
                      </span>
                    </div>
                  </div>
                </div>
                <div className="edu-timeline-item">
                  <div className="edu-timeline-content">
                    <div className="edu-timeline-header d-flex-between gap-15 mb-5">
                      <h5>High School Diploma</h5>
                      <span className="edu-timeline-date">2011 - 2015</span>
                    </div>
                    <span className="institution-name d-block fs-15 fw-6 mb-5">
                      Boston Latin School
                    </span>
                    <p className="education-details mb-15">
                      Advanced STEM Program | GPA: 4.2/4.0 (weighted)
                      <br />
                      Captain of Robotics Team (FIRST Tech Challenge)
                    </p>
                    <div className="education-achievements d-flex-items gap-10">
                      <span className="badge bg-label-slateblue">
                        Valedictorian
                      </span>
                      <span className="badge bg-label-pink">
                        National Merit Scholar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-12">
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
                       <ChevronDown />
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
                    className="table text-nowrap"
                    id="dataTableDefaultTwo2"
                  >
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
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-001.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>
                            <a href="hrm-employee-details.html">John parker</a>
                          </h6>
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
                        <td className="d-flex-items gap-10">
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
                        <td className="d-flex-items gap-10">
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
                        <td className="d-flex-items gap-10">
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
                        <td className="d-flex-items gap-10">
                          <div className="avatar radius-100">
                            <img
                              className="radius-100"
                              src="assets/images/avatar/avatar-thumb-007.webp"
                              alt="image not found"
                            />
                          </div>
                          <h6>
                            <a href="hrm-employee-details.html">Sarah Wilson</a>
                          </h6>
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
                        <td className="d-flex-items gap-10">
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Performance Summary / KPIs</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Today
                      </a>
                      <a
                        className="dropdown-item active"
                        href="javascript:void(0);"
                      >
                        This Year
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card-body pt-15">
                                    <div id="performance-chart" style={{minHeight: "406px"}}>
                                      <div id="apexchartsb91ap2k8" className="apexcharts-canvas apexchartsb91ap2k8 apexcharts-theme-" style={{width: "323px", height: "391px"}}><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" width="323" height="391"><foreignObject x="0" y="0" width="323" height="391"><div class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style="right: 0px; position: absolute; left: 0px; top: 365px; max-height: 195.5px;"><div class="apexcharts-legend-series" rel="1" seriesname="Productivity" data:collapsed="false" style="margin: 4px 5px;"><span class="apexcharts-legend-marker" rel="1" data:collapsed="false" style="height: 16px; width: 16px; left: 0px; top: 0px;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><path d="M 0, 0 
           m -7, 0 
           a 7,7 0 1,0 14,0 
           a 7,7 0 1,0 -14,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="0" shape="circle" class="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle" style="transform: translate(50%, 50%);"></path></svg></span><span class="apexcharts-legend-text" rel="1" i="0" data:default-text="Productivity" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Productivity</span></div><div class="apexcharts-legend-series" rel="2" seriesname="Quality" data:collapsed="false" style="margin: 4px 5px;"><span class="apexcharts-legend-marker" rel="2" data:collapsed="false" style="height: 16px; width: 16px; left: 0px; top: 0px;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><path d="M 0, 0 
           m -7, 0 
           a 7,7 0 1,0 14,0 
           a 7,7 0 1,0 -14,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="0" shape="circle" class="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle" style="transform: translate(50%, 50%);"></path></svg></span><span class="apexcharts-legend-text" rel="2" i="1" data:default-text="Quality" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Quality</span></div><div class="apexcharts-legend-series" rel="3" seriesname="Attendance" data:collapsed="false" style="margin: 4px 5px;"><span class="apexcharts-legend-marker" rel="3" data:collapsed="false" style="height: 16px; width: 16px; left: 0px; top: 0px;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><path d="M 0, 0 
           m -7, 0 
           a 7,7 0 1,0 14,0 
           a 7,7 0 1,0 -14,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="0" shape="circle" class="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle" style="transform: translate(50%, 50%);"></path></svg></span><span class="apexcharts-legend-text" rel="3" i="2" data:default-text="Attendance" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Attendance</span></div></div>
        </foreignObject><g className="apexcharts-inner apexcharts-graphical" transform="translate(2, 30)"><defs><clipPath id="gridRectMaskb91ap2k8"><rect width="311.3315963745117" height="331" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectBarMaskb91ap2k8"><rect width="317.3315963745117" height="337" x="-3" y="-3" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskb91ap2k8"><rect width="327.3315963745117" height="347" x="-8" y="-8" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskb91ap2k8"></clipPath><clipPath id="nonForecastMaskb91ap2k8"></clipPath><filter id="SvgjsFilter1103" width="200%" height="200%" x="-50%" y="-50%"><feOffset id="SvgjsFeOffset1096" result="offset" in="SourceGraphic" dx="2" dy="2"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1097" result="blur" in="offset" stdDeviation="2"></feGaussianBlur><feFlood id="SvgjsFeFlood1098" result="flood" in="SourceGraphic" flood-color="#000000" flood-opacity="0.2"></feFlood><feComposite id="SvgjsFeComposite1099" result="shadow" in="flood" in2="blur" operator="in"></feComposite><feMerge id="SvgjsFeMerge1100" result="SvgjsFeMerge1100" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1101" result="SvgjsFeMergeNode1101" in="shadow"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1102" result="SvgjsFeMergeNode1102" in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="SvgjsFilter1111" width="200%" height="200%" x="-50%" y="-50%"><feOffset id="SvgjsFeOffset1104" result="offset" in="SourceGraphic" dx="2" dy="2"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1105" result="blur" in="offset" stdDeviation="2"></feGaussianBlur><feFlood id="SvgjsFeFlood1106" result="flood" in="SourceGraphic" flood-color="#000000" flood-opacity="0.2"></feFlood><feComposite id="SvgjsFeComposite1107" result="shadow" in="flood" in2="blur" operator="in"></feComposite><feMerge id="SvgjsFeMerge1108" result="SvgjsFeMerge1108" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1109" result="SvgjsFeMergeNode1109" in="shadow"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1110" result="SvgjsFeMergeNode1110" in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="SvgjsFilter1119" width="200%" height="200%" x="-50%" y="-50%"><feOffset id="SvgjsFeOffset1112" result="offset" in="SourceGraphic" dx="2" dy="2"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1113" result="blur" in="offset" stdDeviation="2"></feGaussianBlur><feFlood id="SvgjsFeFlood1114" result="flood" in="SourceGraphic" flood-color="#000000" flood-opacity="0.2"></feFlood><feComposite id="SvgjsFeComposite1115" result="shadow" in="flood" in2="blur" operator="in"></feComposite><feMerge id="SvgjsFeMerge1116" result="SvgjsFeMerge1116" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1117" result="SvgjsFeMergeNode1117" in="shadow"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1118" result="SvgjsFeMergeNode1118" in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g className="apexcharts-grid"><g class="apexcharts-gridlines-horizontal" style="display: none;"><line x1="0" y1="0" x2="311.3315963745117" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line x1="0" y1="66.2" x2="311.3315963745117" y2="66.2" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line x1="0" y1="132.4" x2="311.3315963745117" y2="132.4" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line x1="0" y1="198.60000000000002" x2="311.3315963745117" y2="198.60000000000002" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line x1="0" y1="264.8" x2="311.3315963745117" y2="264.8" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line x1="0" y1="331" x2="311.3315963745117" y2="331" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g class="apexcharts-gridlines-vertical" style="display: none;"></g><line x1="0" y1="331" x2="311.3315963745117" y2="331" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="0" y1="1" x2="0" y2="331" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g class="apexcharts-grid-borders" style="display: none;"></g><g className="apexcharts-radar-series apexcharts-plot-series" transform="translate(155.66579818725586, 165.5)"><polygon points="0,-130 101.63809272084387,-81.05367424163536 126.74062858363708,28.927721414320864 56.40488608528257,117.12595282731448 -56.40488608528254,117.12595282731449 -126.74062858363708,28.927721414320896 -101.63809272084389,-81.05367424163533 " fill="none" stroke="#e5e7eb" stroke-width="1"></polygon><polygon points="0,-104 81.3104741766751,-64.8429393933083 101.39250286690965,23.14217713145669 45.12390886822605,93.70076226185158 -45.12390886822603,93.7007622618516 -101.39250286690965,23.142177131456716 -81.31047417667511,-64.84293939330827 " fill="none" stroke="#e5e7eb" stroke-width="1"></polygon><polygon points="0,-78 60.98285563250632,-48.63220454498122 76.04437715018224,17.35663284859252 33.84293165116954,70.27557169638868 -33.84293165116952,70.2755716963887 -76.04437715018224,17.356632848592536 -60.982855632506336,-48.63220454498121 " fill="none" stroke="#e5e7eb" stroke-width="1"></polygon><polygon points="0,-52 40.65523708833755,-32.42146969665415 50.696251433454826,11.571088565728346 22.561954434113026,46.85038113092579 -22.561954434113016,46.8503811309258 -50.696251433454826,11.571088565728358 -40.65523708833756,-32.421469696654135 " fill="none" stroke="#e5e7eb" stroke-width="1"></polygon><polygon points="0,-26 20.327618544168775,-16.210734848327075 25.348125716727413,5.785544282864173 11.280977217056513,23.425190565462895 -11.280977217056508,23.4251905654629 -25.348125716727413,5.785544282864179 -20.32761854416878,-16.210734848327068 " fill="none" stroke="#e5e7eb" stroke-width="1"></polygon><polygon points="0,0 0,0 0,0 0,0 0,0 0,0 0,0 " fill="none" stroke="#e5e7eb" stroke-width="1"></polygon><line x1="0" y1="-130" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="101.63809272084387" y1="-81.05367424163536" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="126.74062858363708" y1="28.927721414320864" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="56.40488608528257" y1="117.12595282731448" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="-56.40488608528254" y1="117.12595282731449" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="-126.74062858363708" y1="28.927721414320896" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><line x1="-101.63809272084389" y1="-81.05367424163533" x2="0" y2="0" stroke="#e5e7eb" stroke-dasharray="0" stroke-linecap="butt"></line><g className="apexcharts-xaxis"><text x="0" y="-140" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="0" cy="-140" style="font-family: Helvetica, Arial, sans-serif;">Mon</text><text x="111.63809272084387" y="-81.05367424163536" text-anchor="start" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="111.63809272084387" cy="-81.05367424163536" style="font-family: Helvetica, Arial, sans-serif;">Tue</text><text x="136.7406285836371" y="28.927721414320864" text-anchor="start" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="136.7406285836371" cy="28.927721414320864" style="font-family: Helvetica, Arial, sans-serif;">Wed</text><text x="66.40488608528257" y="117.12595282731448" text-anchor="start" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="66.40488608528257" cy="117.12595282731448" style="font-family: Helvetica, Arial, sans-serif;">Thu</text><text x="-66.40488608528254" y="117.12595282731449" text-anchor="end" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="-66.40488608528254" cy="117.12595282731449" style="font-family: Helvetica, Arial, sans-serif;">Fri</text><text x="-136.7406285836371" y="28.927721414320896" text-anchor="end" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="-136.7406285836371" cy="28.927721414320896" style="font-family: Helvetica, Arial, sans-serif;">Sat</text><text x="-111.63809272084389" y="-81.05367424163533" text-anchor="end" dominant-baseline="auto" font-size="12px" font-family="Helvetica, Arial, sans-serif" font-weight="400" fill="#a8a8a8" class="apexcharts-xaxis-label" cx="-111.63809272084389" cy="-81.05367424163533" style="font-family: Helvetica, Arial, sans-serif;">Sun</text></g><g className="apexcharts-series" data:longestSeries="true" seriesName="Productivity" rel="1" data:realIndex="0"><path d="M 0 -110.5 L 0 -110.5 L 93.50704530317637 -74.56938030230454 L 98.85769029523692 22.563622703170275 L 49.63629975504866 103.07083848803674 L -53.02059292016558 110.09839565767561 L -103.9273154385824 23.720731559743133 L -76.22856954063292 -60.790255681226505Z" fill="none" fill-opacity="1" stroke="#4f46e5" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-radar" index="0" pathTo="M 0 -110.5 L 0 -110.5 L 93.50704530317637 -74.56938030230454 L 98.85769029523692 22.563622703170275 L 49.63629975504866 103.07083848803674 L -53.02059292016558 110.09839565767561 L -103.9273154385824 23.720731559743133 L -76.22856954063292 -60.790255681226505Z" pathFrom="M 0 0"></path><path d="M 0 -110.5 L 0 -110.5 L 93.50704530317637 -74.56938030230454 L 98.85769029523692 22.563622703170275 L 49.63629975504866 103.07083848803674 L -53.02059292016558 110.09839565767561 L -103.9273154385824 23.720731559743133 L -76.22856954063292 -60.790255681226505Z" fill="rgba(79,70,229,0.2)" fill-opacity="1" stroke="#4f46e5" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-radar" index="0" pathTo="M 0 -110.5 L 0 -110.5 L 93.50704530317637 -74.56938030230454 L 98.85769029523692 22.563622703170275 L 49.63629975504866 103.07083848803674 L -53.02059292016558 110.09839565767561 L -103.9273154385824 23.720731559743133 L -76.22856954063292 -60.790255681226505Z" pathFrom="M 0 0" filter="url(#SvgjsFilter1103)"></path><g className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"><g className="apexcharts-series-markers"><path d="M 0, -110.5 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="-110.5" shape="circle" class="apexcharts-marker" rel="0" j="0" index="0" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 93.50704530317637, -74.56938030230454 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="93.50704530317637" cy="-74.56938030230454" shape="circle" class="apexcharts-marker" rel="1" j="1" index="0" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 98.85769029523692, 22.563622703170275 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="98.85769029523692" cy="22.563622703170275" shape="circle" class="apexcharts-marker" rel="2" j="2" index="0" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 49.63629975504866, 103.07083848803674 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="49.63629975504866" cy="103.07083848803674" shape="circle" class="apexcharts-marker" rel="3" j="3" index="0" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -53.02059292016558, 110.09839565767561 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-53.02059292016558" cy="110.09839565767561" shape="circle" class="apexcharts-marker" rel="4" j="4" index="0" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -103.9273154385824, 23.720731559743133 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-103.9273154385824" cy="23.720731559743133" shape="circle" class="apexcharts-marker" rel="5" j="5" index="0" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -76.22856954063292, -60.790255681226505 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#4f46e5" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-76.22856954063292" cy="-60.790255681226505" shape="circle" class="apexcharts-marker" rel="6" j="6" index="0" default-marker-size="6"></path></g></g></g><g className="apexcharts-series" data:longestSeries="true" seriesName="Quality" rel="2" data:realIndex="1"><path d="M 0 -119.60000000000001 L 0 -119.60000000000001 L 91.4742834487595 -72.94830681747183 L 120.40359715445521 27.48133534360482 L 49.63629975504866 103.07083848803674 L -46.25200658993168 96.04328131839787 L -114.06656572527336 26.034949272888806 L -94.52342623038481 -75.37991704472087Z" fill="none" fill-opacity="1" stroke="#29da82" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-radar" index="1" pathTo="M 0 -119.60000000000001 L 0 -119.60000000000001 L 91.4742834487595 -72.94830681747183 L 120.40359715445521 27.48133534360482 L 49.63629975504866 103.07083848803674 L -46.25200658993168 96.04328131839787 L -114.06656572527336 26.034949272888806 L -94.52342623038481 -75.37991704472087Z" pathFrom="M 0 0"></path><path d="M 0 -119.60000000000001 L 0 -119.60000000000001 L 91.4742834487595 -72.94830681747183 L 120.40359715445521 27.48133534360482 L 49.63629975504866 103.07083848803674 L -46.25200658993168 96.04328131839787 L -114.06656572527336 26.034949272888806 L -94.52342623038481 -75.37991704472087Z" fill="rgba(41,218,130,0.2)" fill-opacity="1" stroke="#29da82" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-radar" index="1" pathTo="M 0 -119.60000000000001 L 0 -119.60000000000001 L 91.4742834487595 -72.94830681747183 L 120.40359715445521 27.48133534360482 L 49.63629975504866 103.07083848803674 L -46.25200658993168 96.04328131839787 L -114.06656572527336 26.034949272888806 L -94.52342623038481 -75.37991704472087Z" pathFrom="M 0 0" filter="url(#SvgjsFilter1111)"></path><g className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"><g className="apexcharts-series-markers"><path d="M 0, -119.60000000000001 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="-119.60000000000001" shape="circle" class="apexcharts-marker" rel="0" j="0" index="1" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 91.4742834487595, -72.94830681747183 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="91.4742834487595" cy="-72.94830681747183" shape="circle" class="apexcharts-marker" rel="1" j="1" index="1" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 120.40359715445521, 27.48133534360482 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="120.40359715445521" cy="27.48133534360482" shape="circle" class="apexcharts-marker" rel="2" j="2" index="1" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 49.63629975504866, 103.07083848803674 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="49.63629975504866" cy="103.07083848803674" shape="circle" class="apexcharts-marker" rel="3" j="3" index="1" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -46.25200658993168, 96.04328131839787 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-46.25200658993168" cy="96.04328131839787" shape="circle" class="apexcharts-marker" rel="4" j="4" index="1" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -114.06656572527336, 26.034949272888806 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-114.06656572527336" cy="26.034949272888806" shape="circle" class="apexcharts-marker" rel="5" j="5" index="1" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -94.52342623038481, -75.37991704472087 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#29da82" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-94.52342623038481" cy="-75.37991704472087" shape="circle" class="apexcharts-marker" rel="6" j="6" index="1" default-marker-size="6"></path></g></g></g><g className="apexcharts-series" data:longestSeries="true" seriesName="Attendance" rel="3" data:realIndex="2"><path d="M 0 -130 L 0 -130 L 101.63809272084387 -81.05367424163536 L 101.39250286690965 23.14217713145669 L 56.40488608528257 117.12595282731448 L -56.40488608528254 117.12595282731449 L -126.74062858363708 28.927721414320896 L 0 0Z" fill="none" fill-opacity="1" stroke="#ff830f" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-radar" index="2" pathTo="M 0 -130 L 0 -130 L 101.63809272084387 -81.05367424163536 L 101.39250286690965 23.14217713145669 L 56.40488608528257 117.12595282731448 L -56.40488608528254 117.12595282731449 L -126.74062858363708 28.927721414320896 L 0 0Z" pathFrom="M 0 0"></path><path d="M 0 -130 L 0 -130 L 101.63809272084387 -81.05367424163536 L 101.39250286690965 23.14217713145669 L 56.40488608528257 117.12595282731448 L -56.40488608528254 117.12595282731449 L -126.74062858363708 28.927721414320896 L 0 0Z" fill="rgba(255,131,15,0.2)" fill-opacity="1" stroke="#ff830f" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-radar" index="2" pathTo="M 0 -130 L 0 -130 L 101.63809272084387 -81.05367424163536 L 101.39250286690965 23.14217713145669 L 56.40488608528257 117.12595282731448 L -56.40488608528254 117.12595282731449 L -126.74062858363708 28.927721414320896 L 0 0Z" pathFrom="M 0 0" filter="url(#SvgjsFilter1119)"></path><g className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"><g className="apexcharts-series-markers"><path d="M 0, -130 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="-130" shape="circle" class="apexcharts-marker" rel="0" j="0" index="2" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 101.63809272084387, -81.05367424163536 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="101.63809272084387" cy="-81.05367424163536" shape="circle" class="apexcharts-marker" rel="1" j="1" index="2" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 101.39250286690965, 23.14217713145669 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="101.39250286690965" cy="23.14217713145669" shape="circle" class="apexcharts-marker" rel="2" j="2" index="2" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 56.40488608528257, 117.12595282731448 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="56.40488608528257" cy="117.12595282731448" shape="circle" class="apexcharts-marker" rel="3" j="3" index="2" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -56.40488608528254, 117.12595282731449 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-56.40488608528254" cy="117.12595282731449" shape="circle" class="apexcharts-marker" rel="4" j="4" index="2" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M -126.74062858363708, 28.927721414320896 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="-126.74062858363708" cy="28.927721414320896" shape="circle" class="apexcharts-marker" rel="5" j="5" index="2" default-marker-size="6"></path></g><g className="apexcharts-series-markers"><path d="M 0, 0 
           m -6, 0 
           a 6,6 0 1,0 12,0 
           a 6,6 0 1,0 -12,0" fill="#ff830f" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="1" stroke-dasharray="0" cx="0" cy="0" shape={{circle}} class="apexcharts-marker" rel="6" j="6" index="2" default-marker-size="6"></path></g></g></g><g className="apexcharts-yaxis"><text x="0" y="-124" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="regular" fill="#373d3f" class="apexcharts-text " style="font-family: Helvetica, Arial, sans-serif;">100%</text><text x="0" y="-98" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="regular" fill="#373d3f" class="apexcharts-text " style="font-family: Helvetica, Arial, sans-serif;">80%</text><text x="0" y="-72" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="regular" fill="#373d3f" class="apexcharts-text " style="font-family: Helvetica, Arial, sans-serif;">60%</text><text x="0" y="-46" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="regular" fill="#373d3f" class="apexcharts-text " style="font-family: Helvetica, Arial, sans-serif;">40%</text><text x="0" y="-20" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="regular" fill="#373d3f" class="apexcharts-text " style="font-family: Helvetica, Arial, sans-serif;">20%</text><text x="0" y="6" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="regular" fill="#373d3f" class="apexcharts-text " style="font-family: Helvetica, Arial, sans-serif;">0%</text></g><g className="apexcharts-datalabels" data:realIndex="0"><rect width="20.778151512145996" height="14.222223281860352" x="-10.119791984558105" y="-121.5" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="0" y="-110.5" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="0" cy="-110.5" style="font-family: Helvetica, Arial, sans-serif;">85</text><rect width="20.778151512145996" height="14.222223281860352" x="83.38725280761719" y="-85.56938171386719" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="93.50704530317637" y="-74.56938030230454" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="93.50704530317637" cy="-74.56938030230454" style="font-family: Helvetica, Arial, sans-serif;">92</text><rect width="20.778151512145996" height="14.222223281860352" x="88.73789978027344" y="11.563623428344727" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="98.85769029523692" y="22.563622703170275" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="98.85769029523692" cy="22.563622703170275" style="font-family: Helvetica, Arial, sans-serif;">78</text><rect width="20.778151512145996" height="14.222223281860352" x="39.516510009765625" y="92.07084655761719" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="49.63629975504866" y="103.07083848803674" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="49.63629975504866" cy="103.07083848803674" style="font-family: Helvetica, Arial, sans-serif;">88</text><rect width="20.778151512145996" height="14.222223281860352" x="-63.140384674072266" y="99.09839630126953" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="-53.02059292016558" y="110.09839565767561" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-53.02059292016558" cy="110.09839565767561" style="font-family: Helvetica, Arial, sans-serif;">94</text><rect width="20.778151512145996" height="14.222223281860352" x="-114.04711151123047" y="12.720731735229492" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="-103.9273154385824" y="23.720731559743133" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-103.9273154385824" cy="23.720731559743133" style="font-family: Helvetica, Arial, sans-serif;">82</text><rect width="20.778151512145996" height="14.222223281860352" x="-86.3483657836914" y="-71.7902603149414" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#4f46e5"></rect><text x="-76.22856954063292" y="-60.790255681226505" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-76.22856954063292" cy="-60.790255681226505" style="font-family: Helvetica, Arial, sans-serif;">75</text></g><g className="apexcharts-datalabels" data:realIndex="1"><rect width="20.778151512145996" height="14.222223281860352" x="-10.119791984558105" y="-130.60000610351562" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="0" y="-119.60000000000001" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="0" cy="-119.60000000000001" style="font-family: Helvetica, Arial, sans-serif;">92</text><rect width="20.778151512145996" height="14.222223281860352" x="81.3544921875" y="-83.94831085205078" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="91.4742834487595" y="-72.94830681747183" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="91.4742834487595" cy="-72.94830681747183" style="font-family: Helvetica, Arial, sans-serif;">90</text><rect width="20.778151512145996" height="14.222223281860352" x="110.28380584716797" y="16.481334686279297" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="120.40359715445521" y="27.48133534360482" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="120.40359715445521" cy="27.48133534360482" style="font-family: Helvetica, Arial, sans-serif;">95</text><rect width="20.778151512145996" height="14.222223281860352" x="39.516510009765625" y="92.07084655761719" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="49.63629975504866" y="103.07083848803674" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="49.63629975504866" cy="103.07083848803674" style="font-family: Helvetica, Arial, sans-serif;">88</text><rect width="20.778151512145996" height="14.222223281860352" x="-56.37179946899414" y="85.04328155517578" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="-46.25200658993168" y="96.04328131839787" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-46.25200658993168" cy="96.04328131839787" style="font-family: Helvetica, Arial, sans-serif;">82</text><rect width="20.778151512145996" height="14.222223281860352" x="-124.18635559082031" y="15.034950256347656" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="-114.06656572527336" y="26.034949272888806" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-114.06656572527336" cy="26.034949272888806" style="font-family: Helvetica, Arial, sans-serif;">90</text><rect width="20.778151512145996" height="14.222223281860352" x="-104.64321899414062" y="-86.37991333007812" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#29da82"></rect><text x="-94.52342623038481" y="-75.37991704472087" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-94.52342623038481" cy="-75.37991704472087" style="font-family: Helvetica, Arial, sans-serif;">93</text></g><g className="apexcharts-datalabels" data:realIndex="2"><rect width="26.88963508605957" height="14.222223281860352" x="-13.175347328186035" y="-141" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="0" y="-130" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="0" cy="-130" style="font-family: Helvetica, Arial, sans-serif;">100</text><rect width="26.88963508605957" height="14.222223281860352" x="88.4627456665039" y="-92.05367279052734" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="101.63809272084387" y="-81.05367424163536" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="101.63809272084387" cy="-81.05367424163536" style="font-family: Helvetica, Arial, sans-serif;">100</text><rect width="20.778151512145996" height="14.222223281860352" x="91.27271270751953" y="12.14217758178711" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="101.39250286690965" y="23.14217713145669" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="101.39250286690965" cy="23.14217713145669" style="font-family: Helvetica, Arial, sans-serif;">80</text><rect width="26.88963508605957" height="14.222223281860352" x="43.22954177856445" y="106.1259536743164" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="56.40488608528257" y="117.12595282731448" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="56.40488608528257" cy="117.12595282731448" style="font-family: Helvetica, Arial, sans-serif;">100</text><rect width="26.88963508605957" height="14.222223281860352" x="-69.58023071289062" y="106.1259536743164" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="-56.40488608528254" y="117.12595282731449" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-56.40488608528254" cy="117.12595282731449" style="font-family: Helvetica, Arial, sans-serif;">100</text><rect width="26.88963508605957" height="14.222223281860352" x="-139.91598510742188" y="17.92772102355957" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="-126.74062858363708" y="28.927721414320896" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="-126.74062858363708" cy="28.927721414320896" style="font-family: Helvetica, Arial, sans-serif;">100</text><rect width="14.666666984558105" height="14.222223281860352" x="-7.064236164093018" y="-11" rx="5" ry="5" opacity="0.9" stroke-width="1" stroke="#ffffff" stroke-dasharray="0" fill="#ff830f"></rect><text x="0" y="0" text-anchor="middle" dominant-baseline="auto" font-size="11px" font-family="Helvetica, Arial, sans-serif" font-weight="600" fill="#fff" class="apexcharts-datalabel" cx="0" cy="0" style="font-family: Helvetica, Arial, sans-serif;">0</text></g></g><line x1="0" y1="0" x2="311.3315963745117" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line x1="0" y1="0" x2="311.3315963745117" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g className="apexcharts-yaxis-annotations"></g><g className="apexcharts-xaxis-annotations"></g><g className="apexcharts-point-annotations"></g></g><g className="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g><g className="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g></svg><div className="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(79, 70, 229);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-1" style="order: 2;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(41, 218, 130);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-2" style="order: 3;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(255, 131, 15);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                                </div> */}
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6">
            <div
              className="card height-equal-2"
              style={{ minHeight: "476.059px" }}
            >
              <div className="card-header justify-between">
                <h4 className="">Skills &amp; Certifications</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                {/* <div className="skills-list mb-10">
                                        <div className="skill-item mb-10">
                                            <div className="skill-info d-flex-between gap-10 mb-10">
                                                <span className="skill-name text-heading fw-6">Figma</span>
                                                <span className="update-date fs-12">Last updated: 15 May 2025</span>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "95%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="progress-percent">95%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-item mb-10">
                                            <div className="skill-info d-flex-between gap-10 mb-10">
                                                <span className="skill-name text-heading fw-6">HTML</span>
                                                <span className="update-date fs-12">Last updated: 12 May 2025</span>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "95%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="progress-percent">95%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-item mb-10">
                                            <div className="skill-info d-flex-between gap-10 mb-10">
                                                <span className="skill-name text-heading fw-6">CSS</span>
                                                <span className="update-date fs-12">Last updated: 12 May 2025</span>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="progress-percent">70%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-item mb-10">
                                            <div className="skill-info d-flex-between gap-10 mb-10">
                                                <span className="skill-name text-heading fw-6">WordPress</span>
                                                <span className="update-date fs-12">Last updated: 15 May 2025</span>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "61%"}} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="progress-percent">61%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <div className="skill-info d-flex-between gap-10 mb-10">
                                                <span className="skill-name text-heading fw-6">JavaScript</span>
                                                <span className="update-date fs-12">Last updated: 13 May 2025</span>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="progress">
                                                    <div className="progress-bar bg-orange" role="progressbar" style={{width: "58%"}} aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="progress-percent text-white">58%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                <div className="skills-footer">
                  <span className="fs-13 text-body-secondary">
                    Skills proficiency self-assessed and updated quarterly
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6">
            <div
              className="card height-equal-2"
              style={{ minHeight: "476.059px" }}
            >
              <div className="card-header justify-between">
                <h4 className="">Bank Details</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <ul className="bank-info enhanced-list">
                  <li className="d-flex-between py-9 b-bottom">
                    <div className="info-label">
                      <User />
                      <span className="text-body">Account Holder Name:</span>
                    </div>
                    <div className="info-value">John Parker</div>
                  </li>

                  <li className="d-flex-between py-9 b-bottom">
                    <div className="info-label">
                      <i className="ri-bank-card-line"></i>
                      <span className="text-body">Account Number:</span>
                    </div>
                    <div className="info-value">
                      <span
                        id="accountNumber"
                        className="account-number"
                        data-full="1234 5678 9012"
                      >
                        •••• •••• 9012
                      </span>
                      <button
                        id="toggleAccount"
                        className="btn-eye ms-2"
                        type="button"
                      >
                        <i id="eyeIcon" className="ri-eye-line"></i>
                      </button>
                    </div>
                  </li>

                  <li className="d-flex-between py-9 b-bottom">
                    <div className="info-label">
                      <i className="ri-building-line"></i>
                      <span className="text-body">Bank Name:</span>
                    </div>
                    <div className="info-value">ABC Bank</div>
                  </li>

                  <li className="d-flex-between py-9 b-bottom">
                    <div className="info-label">
                      <i className="ri-map-pin-line"></i>
                      <span className="text-body">Branch Location:</span>
                    </div>
                    <div className="info-value">
                      <span>XYZ Branch</span>
                      <small className="text-muted d-block">
                        123 Main St, Cityville
                      </small>
                    </div>
                  </li>

                  <li className="d-flex-between py-9 b-bottom">
                    <div className="info-label">
                      <i className="ri-global-line"></i>
                      <span className="text-body">SWIFT/BIC Code:</span>
                    </div>
                    <div className="info-value">ABCXYZ123</div>
                  </li>

                  <li className="d-flex-between py-9 b-bottom">
                    <div className="info-label">
                      <i className="ri-exchange-line"></i>
                      <span className="text-body">Routing Number:</span>
                    </div>
                    <div className="info-value">ABC12345</div>
                  </li>
                </ul>
                <div className="d-flex-center mt-15">
                  <button
                    className="btn btn-primary-light btn-sm text-primary"
                    id="copyBankDetails"
                  >
                    <i className="ri-file-copy-line me-1"></i> Copy Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-3 col-xl-6 col-lg-6">
            <div
              className="card height-equal-2"
              style={{ minHeight: "476.059px" }}
            >
              <div className="card-body">
                <div className="paypal-card">
                  <div className="paypal-header">
                    <img
                      src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                      alt="PayPal"
                      className="paypal-logo"
                    />
                    <span className="paypal-badge">Connected</span>
                  </div>

                  <ul className="paypal-details mb-10">
                    <li className="paypal-item">
                      <span className="paypal-label">Account Name:</span>
                      <span className="paypal-value">Ethan Mitchell</span>
                    </li>
                    <li className="paypal-item">
                      <span className="paypal-label">Email:</span>
                      <span className="paypal-value">
                        ethan.mitchell@example.com
                      </span>
                    </li>
                    <li className="paypal-item">
                      <span className="paypal-label">Account Type:</span>
                      <span className="paypal-value">Business</span>
                    </li>
                    <li className="paypal-item">
                      <span className="paypal-label">Currency:</span>
                      <span className="paypal-value">USD</span>
                    </li>
                    <li className="paypal-item">
                      <span className="paypal-label">Connected Since:</span>
                      <span className="paypal-value">Jan 2022</span>
                    </li>
                  </ul>

                  <div className="paypal-actions d-flex-center flex-wrap gap-10 mb-15">
                    <button className="btn btn-sm btn-primary">
                      <i className="ri-send-plane-line"></i> Send Payment
                    </button>
                    <button className="btn btn-sm btn-secondary">
                      <i className="ri-settings-3-line"></i> Manage
                    </button>
                  </div>

                  <div className="paypal-footer">
                    <i className="ri-lock-fill"></i> Secured by PayPal
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-xxl-3 col-xl-6 col-lg-6">
            <div
              className="card height-equal-2"
              style={{ minHeight: "476.059px" }}
            >
              <div className="card-header justify-between">
                <h4 className="">Login &amp; Access Information</h4>
                <div className="card-dropdown">
                  <div className="dropdown">
                    <a
                      className="card-dropdown-icon"
                      href="javascript:void(0);"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <ChevronDown />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Year
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                <div className="login-access">
                  <div className="info-group">
                    <label>Registered Email</label>
                    <div className="info-value">
                      <span>ethan.mitchell@example.com</span>
                      <button className="icon-btn" title="Copy Email">
                        <i className="ri-file-copy-line"></i>
                      </button>
                    </div>
                  </div>
                  <div className="info-group">
                    <label>Password</label>
                    <div className="info-value">
                      <span className="password-display">••••••••</span>
                      <div className="action-group d-flex gap-10">
                        <button
                          className="icon-btn toggle-password"
                          title="Show Password"
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                        <button className="icon-btn" title="Change Password">
                          <i className="ri-edit-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="info-group">
                    <label>Two-Factor Authentication</label>
                    <div className="info-value">
                      <span className="badge primary-bd-transparent text-primary">
                        Active
                      </span>
                      <button className="text-info">Manage 2FA</button>
                    </div>
                  </div>
                  <div className="info-group">
                    <label>Last Login</label>
                    <div className="info-value">
                      <span>Yesterday, 2:45 PM</span>
                      <span className="ip-address">(IP: 192.168.1.105)</span>
                    </div>
                  </div>
                  <div className="access-footer">
                    <div className="security-meter">
                      <span>Security Strength:</span>
                      <div className="meter-bar">
                        <div className="meter-fill high"></div>
                      </div>
                      <span>Strong</span>
                    </div>
                    <div className="d-flex-center">
                      <button className="btn btn-danger-light btn-sm text-danger">
                        <i className="ri-logout-box-r-line"></i> Sign Out All
                        Devices
                      </button>
                    </div>
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

export default Profile;
