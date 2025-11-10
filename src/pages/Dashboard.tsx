// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import {
  Briefcase,
  CheckCircle,
  ChevronDown,
  // ChevronRight,
  Eye,
  XCircle,
} from "lucide-react";
import avatar1 from "../assets/images/avatar/avatar-thumb-010.webp";
// import blackLogo from "../assets/images/logo/logo-black.svg";
// import whiteLogo from "../assets/images/logo/logo-white.svg";
import john from "../assets/images/avatar/avatar-thumb-001.webp";
import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";


const chartOptions: ApexCharts.ApexOptions = {
  chart: {
    id: "basic-bar",
    toolbar: { show: false },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  colors: ["#3B82F6"],
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Monthly Applications",
    align: "center" as const, // ✅ fix
    style: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
};

function Dashboard() {


  const chartSeries = [
    {
      name: "Applications",
      data: [30, 40, 45, 50, 49, 60],
    },
  ];

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row fix">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="Dashboard">Dashboard</a>
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
                    src={john}
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
                  <span className="d-block fs-16 mb-5">My Applications</span>
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

          <div className=" col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">Financial History</h4>
                <a
                  href="MyApplications"
                  className="btn btn-primary-light text-primary"
                >
                  <Eye size={15} /> View All
                </a>
                {/* <div className="card-dropdown">
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
                </div> */}
              </div>
              <div className="card-body pt-15">
                 <div className="bg-white p-4 rounded shadow">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-12">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">My Tasks</h4>
                <a
                  className="btn btn-primary-light btn-sm text-primary"
                  href="javascript:void(0);"
                >
                  <Eye size={15} /> View All
                </a>
              </div>
              <div className="card-body pt-15">
                <ul className="task-list card-scrollbar">
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-danger"></span>
                      <span>Complete Q2 Sales Report</span>
                    </div>
                    <span className="badge bg-label-danger ">Due Today</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-warning"></span>
                      <span>Submit monthly expense report</span>
                    </div>
                    <span className="badge bg-label-warning">Due Tomorrow</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-success"></span>
                      <span>Schedule team meeting for next sprint</span>
                    </div>
                    <span className="badge bg-label-success">Friday</span>
                  </li>

                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-warning"></span>
                      <span>Prepare client presentation deck</span>
                    </div>
                    <span className="badge bg-label-warning">Monday</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-purple"></span>
                      <span>Review new hire onboarding materials</span>
                    </div>
                    <span className="badge bg-label-purple">No Deadline</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-danger"></span>
                      <span>Submit quarterly financial report</span>
                    </div>
                    <span className="badge bg-label-danger">Due Today</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-success"></span>
                      <span>Schedule team building activity</span>
                    </div>
                    <span className="badge bg-label-success">Friday</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="d-flex flex-column">
              <div className="holiday-card">
                <h4 className="text-white text-center mb-10">Next Holiday</h4>
                <h5 className="text-secondary mb-10">New Year's Day</h5>
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
                          <div className="avatar avatar-big mb-15">
                            <img
                              className="radius-100"
                              src={avatar1}
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
                          <div className="avatar avatar-big mb-15">
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
                          <div className="avatar avatar-big mb-15">
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
          {/* <div className="col-xxl-4 col-xl-6 col-lg-6">
            <div className="card height-equal">
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
                      <i className="ri-more-2-fill"></i>
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
              <div className="card-body pt-15">
                <div id="performance-chart"></div>
              </div>
            </div>
          </div> */}
          <div className="col-xxl-6 col-xl-6">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="">My Attendance Status</h4>
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
                <div className="row gy-15" style={{ textAlign: "left" }}>
                  <div className="col-md-4 col-6">
                    <div className="attendance-info">
                      <h2 className="mb-5 text-primary">20</h2>
                      <p>Total Leaves Allowed</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="attendance-info">
                      <h2 className="mb-5 text-secondary">6.5</h2>
                      <p>Leaves Used</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="attendance-info">
                      <h2 className="mb-5 text-success">13.5</h2>
                      <p>Leaves Remaining</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="attendance-info">
                      <h2 className="mb-5 text-warning">2</h2>
                      <p>Pending Requests</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="attendance-info">
                      <h2 className="mb-5 text-info">214/230</h2>
                      <p>Days Present (93%)</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="attendance-info">
                      <h2 className="mb-5 text-danger">3</h2>
                      <p>Unexcused Absences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6">
            <div className="card height-equal">
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
                      <ChevronDown />
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
                <div className="announcement-list style-2 card-scrollbar">
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
                </div>

                <div className="announcement-view-btn">
                  <a href="Announcement" className="btn btn-primary w-100">
                    View All Announcements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
