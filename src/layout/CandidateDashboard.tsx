import { Outlet } from "react-router-dom";
import avatar1 from "../assets/images/avatar/avatar-thumb-010.webp";
import john from "../assets/images/avatar/avatar-thumb-001.webp";
import fullLogo from "../assets/images/logo/lattice-logo.png";
import fullLogoMobile from "../assets/images/logo/lattice-logo-mobile.png";
import {
  ArrowRight,
  ArrowUp,
  Bell,
  BellIcon,
  ChevronDown,
  CircleQuestionMark,
  ClockPlus,
  LogOut,
  LogOutIcon,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function CandidateDashboard() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <div className="page">
      
        {/* <!-- Start app-sidebar --> */}
        <aside className="app-sidebar sticky" id="sidebar">
          <div className="app-sidebar-header">
            <a href="Dashboard" className="desktop-logo">
              <img src={fullLogo} alt="image" />
            </a>
            <a href="Dashboard" className="desktop-dark">
              <img src={fullLogo} alt="image" />
            </a>
          </div>
          {/* <!-- end app-sidebar-header --> */}

          {/* <!-- start app-sidebar-wrapper --> */}
          <div className="app-sidebar-wrapper" id="sidebar-scroll">
            <nav className="app-sidebar-menu-wrapper nav flex-column sub-open">
              <div className="sidebar-left" id="sidebar-left"></div>
              <ul className="app-sidebar-main-menu mt-4">
                <li className="sidebar-menu-category">
                  <span className="category-name" style={{ color: "#000" }}>
                    Candidate Portal
                  </span>
                </li>
                <li className="slide has-sub">
                  <a className="sidebar-menu-item" href="dashboard">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Dashboard</span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a
                    // href="Profile"
                    onClick={() => toggleDropdown("menu2")}
                    className="sidebar-menu-item"
                  >
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Profile & Resume</span>
                    <ChevronDown
                      size={16}
                      className="ri-arrow-down-s-fill side-menu-angle"
                    />
                  </a>

                  {openDropdown === "menu2" && (
                    <ul className="">
                      <li className="slide">
                        <a className="sidebar-menu-item" href="Profile">
                          <ArrowRight
                            size={12}
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                          />{" "}
                          Profile
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="sidebar-menu-item"
                          href="Resume"
                        >
                          <ArrowRight
                            size={12}
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                          />{" "}
                          Resume
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="slide has-sub">
                  <a
                    onClick={() => toggleDropdown("menu1")}
                    className="sidebar-menu-item"
                  >
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Job Mgt</span>
                    <ChevronDown
                      size={16}
                      className="ri-arrow-down-s-fill side-menu-angle"
                    />
                  </a>
                  {openDropdown === "menu1" && (
                    <ul className="">
                      <li className="slide">
                        <a className="sidebar-menu-item" href="Jobs">
                          <ArrowRight
                            size={12}
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                          />{" "}
                          Find Jobs
                        </a>
                      </li>
                      <li className="slide">
                        <a className="sidebar-menu-item" href="MyApplication">
                          <ArrowRight
                            size={12}
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                          />{" "}
                          My Applications
                        </a>
                      </li>
                      <li className="slide">
                        <a className="sidebar-menu-item" href="JobsSaved">
                          <ArrowRight
                            size={12}
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                          />{" "}
                          Saved Jobs
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="slide has-sub">
                  <a href="Compliance" className="sidebar-menu-item">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">
                      Compliance Manager
                    </span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a className="sidebar-menu-item" href="attendance">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">
                      Timesheet & Attendance
                    </span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a className="sidebar-menu-item" href="SelfInterview">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Self Interview</span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a href="MyJobs" className="sidebar-menu-item">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Payslips</span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a href="Induction" className="sidebar-menu-item">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.0833 15.1999L21.2854 15.9212C21.5221 16.0633 21.5989 16.3704 21.4569 16.6072C21.4146 16.6776 21.3557 16.7365 21.2854 16.7787L12.5144 22.0412C12.1977 22.2313 11.8021 22.2313 11.4854 22.0412L2.71451 16.7787C2.47772 16.6366 2.40093 16.3295 2.54301 16.0927C2.58523 16.0223 2.64413 15.9634 2.71451 15.9212L3.9166 15.1999L11.9999 20.0499L20.0833 15.1999ZM20.0833 10.4999L21.2854 11.2212C21.5221 11.3633 21.5989 11.6704 21.4569 11.9072C21.4146 11.9776 21.3557 12.0365 21.2854 12.0787L11.9999 17.6499L2.71451 12.0787C2.47772 11.9366 2.40093 11.6295 2.54301 11.3927C2.58523 11.3223 2.64413 11.2634 2.71451 11.2212L3.9166 10.4999L11.9999 15.3499L20.0833 10.4999ZM12.5144 1.30864L21.2854 6.5712C21.5221 6.71327 21.5989 7.0204 21.4569 7.25719C21.4146 7.32757 21.3557 7.38647 21.2854 7.42869L11.9999 12.9999L2.71451 7.42869C2.47772 7.28662 2.40093 6.97949 2.54301 6.7427C2.58523 6.67232 2.64413 6.61343 2.71451 6.5712L11.4854 1.30864C11.8021 1.11864 12.1977 1.11864 12.5144 1.30864ZM11.9999 3.33233L5.88723 6.99995L11.9999 10.6676L18.1126 6.99995L11.9999 3.33233Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">
                      Induction
                    </span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a href="Notifications" className="sidebar-menu-item">
                    <div style={{ marginRight: "13px" }}>
                      <i className="">
                        <BellIcon size={16} />
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Notifications</span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a href="ComplianceManager" className="sidebar-menu-item">
                    <div style={{ marginRight: "13px" }}>
                      <i className="">
                        <Settings size={16} />
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Settings</span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a className="sidebar-menu-item" href="Security">
                    <div className="side-menu-icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM12 7C13.1046 7 14 7.89543 14 9C14 9.73984 13.5983 10.3858 13.0011 10.7318L13 15H11L10.9999 10.7324C10.4022 10.3866 10 9.74025 10 9C10 7.89543 10.8954 7 12 7Z"></path>
                        </svg>
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Security</span>
                  </a>
                </li>

                <li className="slide has-sub">
                  <a href="Dashboard" className="sidebar-menu-item">
                    <div style={{ marginRight: "13px" }}>
                      <i className="">
                        <LogOutIcon size={16} />
                      </i>
                    </div>
                    <span className="sidebar-menu-label">Logout</span>
                  </a>
                </li>
              </ul>
              <div className="sidebar-right" id="sidebar-right"></div>
            </nav>
          </div>
          {/* <!-- end app-sidebar-wrapper --> */}
        </aside>
        <div className="app-offcanvas-overlay"></div>
        {/* <!-- end app-sidebar --> */}

        {/* <!-- app-header --> */}
        <div className="app-header-area">
          <header className="app-header" id="header">
            <div className="app-header-inner">
              <div className="app-header-left">
                <div className="d-flex align-center gap-15">
                  <div className="app-header-element">
                    <a
                      className="sidebar-toggle-bar"
                      id="sidebarToggle"
                      onClick={() => toggleDropdown("menu1")}
                    >
                      <div className="sidebar-menu-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                  </div>
                  <div className="app-header-ls-logo">
                    {/* <!-- large screen logo --> */}
                    <a className="app-header-ls-dark-logo" href="index.html">
                      <img
                        src="../assets/images/logo/logo-black.svg"
                        alt="image"
                      />
                    </a>
                    <a className="app-header-ls-light-logo" href="index.html">
                      <img
                        src="../assets/images/logo/logo-white.svg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="app-header-mobile-logo">
                    <a className="app-header-dark-logo" href="index.html">
                      <img
                        src={fullLogoMobile}
                        alt="image"
                      />
                    </a>
                    <a className="app-header-light-logo" href="index.html">
                      <img
                        src={fullLogoMobile}
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
                <div className="app-header-search d-none d-lg-block">
                  <form action="#">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search..."
                    />
                    <button type="submit">
                      <Search className="" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="app-header-right">
                <div className="app-header-search-modal">
                  <a
                    type="button"
                    className="app-header-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <Search size={18} />
                  </a>
                </div>
                {/* <div className="app-header-link">
                            <div className="dropdown">
                                <a className="dropdown-toggle" onClick={() => toggleDropdown("menu1")}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="app-header-circle"><i className="ri-global-line"></i></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-lang" onClick={() => toggleDropdown("menu1")} ><img src="assets/images/flags/us-flag.jpg" alt="image not found"/> English</a></li>
                                    <li><a className="dropdown-lang" onClick={() => toggleDropdown("menu1")} ><img src="assets/images/flags/uae-flag.jpg" alt="image not found"/> العربية</a></li>
                                    <li><a className="dropdown-lang" onClick={() => toggleDropdown("menu1")} ><img src="assets/images/flags/china-flag.jpg" alt="image not found"/> 中文</a></li>
                                    <li><a className="dropdown-lang" onClick={() => toggleDropdown("menu1")} ><img src="assets/images/flags/spain-flag.jpg" alt="image not found"/> Español</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="app-header-switcher app-header-circle">
                            <div className="theme-switcher">
                                <i className="ri-sun-line change-theme theme-button"></i>
                            </div>
                        </div> */}

                <div className=" cursor-pointer">
                  <div>
                    <a href="ClockIn" className="btn btn-success">
                        <ClockPlus size={15} />  Clock In
                        </a>
                  </div>
                </div>

                <div className="app-header-fullscreen app-header-circle cursor-pointer">
                  <div>
                    <CircleQuestionMark
                      size={18}
                      className="ri-fullscreen-line"
                    />
                  </div>
                </div>

                <div className="app-header-notification">
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      onClick={() => toggleDropdown("menu1")}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="app-header-circle">
                        {" "}
                        <Bell size={18} className="ri-fullscreen-line" />
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-menu-header">
                        <h5>Notification</h5>
                        <span className="badge bg-label-primary">2 New</span>
                      </li>
                      <li className="dropdown-notifications-list card-scrollbar">
                        <ul>
                          <li className="dropdown-notifications-list-item">
                            <div className="avatar">
                              <img
                                className="radius-100"
                                src={john}
                                alt="image not found"
                              />
                            </div>
                            <div className="content">
                              <h6 className="mb-5">New Order Received 🛒</h6>
                              <p className="mb-5">
                                Order #14523 has been placed by John Dane
                              </p>
                              <span className="text-body-secondary">
                                Just now
                              </span>
                            </div>
                            <div className="notifications-actions d-flex direction-column align-center">
                              <a
                                onClick={() => toggleDropdown("menu1")}
                                className="dropdown-notifications-read d-block pt-5"
                              >
                                <span className="bullet bg-primary"></span>
                              </a>
                              <a
                                onClick={() => toggleDropdown("menu1")}
                                className="dropdown-notifications-archive"
                              >
                                <i className="ri-close-line"></i>
                              </a>
                            </div>
                          </li>
                          <li className="dropdown-notifications-list-item">
                            <div className="avatar">
                              <img
                                className="radius-100"
                                src={avatar1}
                                alt="image not found"
                              />
                            </div>
                            <div className="content">
                              <h6 className="mb-5">Low Stock Alert ⚠️</h6>
                              <p className="mb-5">
                                Only 3 items left in stock for "Smartwatch Pro
                                X"
                              </p>
                              <span className="text-body-secondary">
                                10 mins ago
                              </span>
                            </div>
                            <div className="notifications-actions d-flex direction-column align-center">
                              <a
                                onClick={() => toggleDropdown("menu1")}
                                className="dropdown-notifications-read d-block pt-5"
                              >
                                <span className="bullet bg-primary"></span>
                              </a>
                              <a
                                onClick={() => toggleDropdown("menu1")}
                                className="dropdown-notifications-archive"
                              >
                                <i className="ri-close-line"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-notifications-btn">
                        <a
                          className="btn btn-primary w-100"
                          onClick={() => toggleDropdown("menu1")}
                          href="Notifications"
                        >
                          View all notifications 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="app-header-user">
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      onClick={() => toggleDropdown("menu1")}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="author">
                        <div className="author-thumb">
                          <img src={john} alt="user" />
                        </div>
                        <h6 className="author-name lh-1">John Parker</h6>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="bd-user-info-list">
                        <a href="Profile">
                          <UserRound
                            size={17}
                            style={{ marginRight: "7px" }}
                            className=""
                          />
                          Profile
                        </a>
                      </li>
                      {/* <li className="bd-user-info-list">
                        <a href="app-user-billing.html">
                          <CreditCard
                            size={17}
                            style={{ marginRight: "7px" }}
                            className=""
                          />
                          Plans & Billing
                        </a>
                      </li> */}
                      <li className="bd-user-info-list">
                        <a href="Settings">
                          <Settings
                            size={17}
                            style={{ marginRight: "7px" }}
                            className=""
                          />
                          Settings
                        </a>
                      </li>
                      <li className="bd-user-info-list">
                        <a href="Dashboard">
                          <LogOut
                            size={17}
                            style={{ marginRight: "7px" }}
                            className=""
                          />
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="body__overlay"></div>
        </div>
        {/* <!-- app-header --> */}

        {/* <!-- app-content-area-start --> */}
        <div className="app-content-area">
          <Outlet />
        </div>
        {/* <!-- app-content-area-end --> */}

        {/* <!-- footer area start --> */}
        <footer className="app-footer-area">
          <div className="row">
            <div className="col-xl-12">
              <div className="card-footer d-flex justify-center">
                <p>
                    © {new Date().getFullYear()} Powered by{" "}
              {/* <a
                className="text-primary-500 dark:text-primary-500 ml-1"
                href="https://sophiaerp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sophia ERP
              </a>{" "}
              and{" "} */}
              <a
                className="text-primary-500 dark:text-primary-500 ml-1"
                href="https://techiefy.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Techiefy UK
              </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- Search Modal Start --> */}
        <div className="modal fade" id="searchModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <Search />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    

      <div className="progress-wrap">
        <ArrowUp size={20} />
      </div>
    </div>
  );
}

export default CandidateDashboard;
