import { Link, Outlet, useLocation } from "react-router-dom";
import avatar1 from "../assets/images/avatar/avatar-thumb-010.webp";
import john from "../assets/images/avatar/avatar-thumb-001.webp";
import fullLogo from "../assets/images/logo/lattice-logo.png";
import fullLogoMobile from "../assets/images/logo/lattice-logo-mobile.png";
import { sidebarMenus } from "../layout/sidebar-data";
import {
  ArrowRight,
  ArrowUp,
  Bell,
  // BellIcon,
  ChevronDown,
  // ChevronRight,
  CircleQuestionMark,
  ClockPlus,
  LogOut,
  // LogOutIcon,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function CandidateDashboard() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Check if the current path matches the menu item
  const isActive = (path?: string) => {
    if (!path) return false;
    return (
      location.pathname === `/${path}` || location.pathname.includes(`/${path}`)
    );
  };

  // Check if any child is active
  const hasActiveChild = (children?: any[]) => {
    if (!children) return false;
    return children.some((child) => isActive(child.path));
  };

  return (
    <div className="page">
      {/* <!-- Start app-sidebar --> */}
      <aside className="app-sidebar sticky" id="sidebar">
        <div className="app-sidebar-header">
          <a href="Dashboard" className="desktop-logo">
            <img src={fullLogo} alt="Logo" />
          </a>
        </div>

        <div className="app-sidebar-wrapper">
          <ul className="app-sidebar-main-menu mt-4">
            <li className="sidebar-menu-category">
              <span className="category-name" style={{ color: "#000" }}>
                Candidate Portal
              </span>
            </li>

            {sidebarMenus.map((item, index) => {
              const itemIsActive = isActive(item.path);
              const childIsActive = hasActiveChild(item.children);
              const isOpen = openDropdown === item.label;

              return (
                <li
                  key={index}
                  className={`slide ${item.children ? "has-sub" : ""} ${
                    isOpen ? "open" : ""
                  }`}
                >
                  {item.children ? (
                    // Dropdown Menu Item
                    <>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.label);
                        }}
                        className={`sidebar-menu-item ${
                          childIsActive ? "active" : ""
                        }`}
                      >
                        <div className="side-menu-icon">{item.icon}</div>
                        <span className="sidebar-menu-label">{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`side-menu-angle ${
                            isOpen ? "rotate" : ""
                          }`}
                        />
                      </a>

                      {/* Submenu */}
                      <ul
                        className={`sidebar-menu child1 ${
                          isOpen ? "show" : ""
                        }`}
                        style={{
                          display: isOpen ? "block" : "none",
                        }}
                      >
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex} className="slide">
                            <Link
                              to={`/${child.path}`}
                              className={`sidebar-menu-item ${
                                isActive(child.path) ? "active" : ""
                              }`}
                            >
                              <ArrowRight
                                size={12}
                                style={{
                                  marginRight: "10px",
                                  marginLeft: "10px",
                                }}
                              />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    // Single Menu Item
                    <Link
                      to={`/${item.path}`}
                      className={`sidebar-menu-item ${
                        itemIsActive ? "active" : ""
                      }`}
                    >
                      <div className="side-menu-icon" style={{ color: "#000" }}>
                        {item.icon}
                      </div>
                      <span className="sidebar-menu-label">{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
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
                    <img src={fullLogoMobile} alt="image" />
                  </a>
                  <a className="app-header-light-logo" href="index.html">
                    <img src={fullLogoMobile} alt="image" />
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
                    <ClockPlus size={15} /> Clock In
                  </a>
                </div>
              </div>

              <div className="app-header-fullscreen app-header-circle cursor-pointer">
                <a href="HelpSupport">
                  <CircleQuestionMark
                    size={18}
                    className="ri-fullscreen-line"
                  />
                </a>
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
                              Only 3 items left in stock for "Smartwatch Pro X"
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
