/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Outlet, useLocation } from "react-router-dom";
import avatar1 from "../assets/images/avatar/avatar-thumb-010.webp";
import john from "../assets/images/avatar/avatar-thumb-001.webp";
import fullLogo from "../assets/images/logo/lattice-logo.png";
import fullLogoMobile from "../assets/images/logo/lattice-logo-mobile.png";
import { sidebarMenus } from "../layout/sidebar-data";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  CircleQuestionMark,
  ClockPlus,
  LogOut,
  Menu,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

function CandidateDashboard() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();

  const toggleDropdown = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  const isActive = (path?: string) => {
    if (!path) return false;
    const currentPath = location.pathname.replace(/^\//, "");
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  // Check if any child is active
  const hasActiveChild = (children?: any[]) => {
    if (!children) return false;
    return children.some((child) => isActive(child.path));
  };

  return (
    <div className="page">
      {/* <!-- Start app-sidebar --> */}
      <aside
        className={`app-sidebar sticky bg-white border-end shadow-sm ${
          isCollapsed ? "sidebar-mini" : "sidebar-full"
        } ${isMobileOpen ? "mobile-open" : ""}`}
        id="sidebar"
        style={{ transition: "all 0.3s ease" }}
      >
        {/* Logo */}
        <div
          className={`text-center py-3 border-bottom ${
            isMobileOpen &&
            "d-flex justify-content-between align-items-center px-3 my-3"
          }`}
        >
          <img
            src={isCollapsed ? fullLogoMobile : fullLogo}
            alt="Logo"
            style={{
              width: isCollapsed ? "72%" : isMobileOpen ? "74%" : "86%",
              padding: "5px",
            }}
          />
          {isMobileOpen && (
            <a
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              style={{ cursor: "pointer" }}
            >
              <ChevronLeft size={20} />
            </a>
          )}
        </div>

        {!isCollapsed && (
          <div
            className="sidebar-menu-category mb-2"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <span className="category-name" style={{ color: "#000" }}>
              {" "}
              Candidate Portal{" "}
            </span>{" "}
          </div>
        )}

        {/* Menu */}
        <ul
          className={`list-unstyled mt-3 ${
            isCollapsed ? "text-center" : "px-3"
          }`}
        >
          {sidebarMenus.map((item, index) => {
            const isOpen = openDropdown === item.label;
            const itemIsActive = isActive(item.path);
            const childIsActive = hasActiveChild(item.children);
            return (
              <li
                key={index}
                className="mb-2"
                style={{
                  margin: isCollapsed ? "10px 0px 10px 12px" : "0px",
                }}
              >
                {item.children ? (
                  <>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        if (isCollapsed) {
                          setIsCollapsed(!isCollapsed);
                        }
                        toggleDropdown(item.label);
                      }}
                      id={isCollapsed ? "sidebarToggle" : undefined}
                      style={{ cursor: "pointer", transition: "0.5s ease" }}
                      className={`sidebar-menu-item d-flex align-items-center text-decoration-none text-dark rounded ${
                        isCollapsed
                          ? "justify-content-center"
                          : "justify-content-between"
                      } ${childIsActive ? "active" : ""}`}
                      title={isCollapsed ? item.label : ""}
                    >
                      <div
                        className={`d-flex align-items-center ${
                          isCollapsed
                            ? "justify-content-center"
                            : "justify-content-between"
                        }`}
                      >
                        <div className="me-2" style={{ paddingRight: "10px" }}>
                          {item.icon}
                        </div>
                        {!isCollapsed && <span>{item.label}</span>}
                      </div>

                      {!isCollapsed && (
                        <div>
                          {isOpen ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </div>
                      )}
                    </a>

                    {/* Submenu (only when expanded) */}
                    {!isCollapsed && isOpen && (
                      <ul className="ms-4 mt-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex} className="slide">
                            <Link
                              to={`/${child.path}`}
                              className={`sidebar-menu-item ${
                                isActive(child.path) ? "active" : ""
                              }`}
                            >
                              <ArrowRight
                                size={17}
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
                    )}
                  </>
                ) : (
                  <Link
                    to={`/${item.path}`}
                    className={`sidebar-menu-item d-flex align-items-center text-decoration-none text-dark rounded ${
                      isCollapsed ? "justify-content-center" : ""
                    } ${itemIsActive ? "active" : ""}`}
                    title={isCollapsed ? item.label : ""}
                  >
                    <div className="me-2" style={{ paddingRight: "10px" }}>
                      {item.icon}
                    </div>
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="app-offcanvas-overlay"></div>
      {/* <!-- end app-sidebar --> */}

      {/* <!-- app-header --> */}
      <div
        className={`${isCollapsed ? "app-header-area2" : "app-header-area"}`}
      >
        <header className="app-header" id="header">
          <div className="app-header-inner">
            <div className="app-header-left">
              <div className="d-flex align-center gap-15">
                <div className="app-header-element">
                  <a
                    className="sidebar-toggle-bar"
                    id="sidebarToggle2"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                  >
                    <Menu />
                  </a>
                  <a
                    className="sidebar-toggle-bar"
                    id="sidebarToggle"
                    // onClick={() => toggleDropdown("menu1")}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    {isCollapsed ? (
                      <ArrowRight className="cursor-pointer" />
                    ) : (
                      // <div className="sidebar-menu-bar">
                      //   <span></span>
                      //   <span></span>
                      //   <span></span>
                      // </div>
                      <ArrowLeft className="cursor-pointer" />
                    )}
                  </a>
                </div>
                <div className="app-header-ls-logo">
                  {/* <!-- large screen logo --> */}
                  <a className="app-header-ls-dark-logo" href="Dashboard">
                    <img src={fullLogo} alt="image" />
                  </a>
                  <a className="app-header-ls-light-logo" href="Dashboard">
                    <img src={fullLogo} alt="image" />
                  </a>
                </div>
                <div className="app-header-mobile-logo">
                  <a className="app-header-dark-logo" href="Dashboard">
                    <img src={fullLogoMobile} alt="image" />
                  </a>
                  <a className="app-header-light-logo" href="Dashboard">
                    <img src={fullLogoMobile} alt="image" />
                  </a>
                </div>
              </div>
              <div className="app-header-search d-none d-lg-block">
                <form className="d-flex align-items-center" role="search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-primary"
                      style={{ position: "relative", top: "18px" }}
                      type="submit"
                    >
                      <Search size={18} />
                    </button>
                  </div>
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
                  <ul
                    className="dropdown-menu shadow-lg border-0 rounded-3 p-2"
                    style={{ minWidth: "200px" }}
                  >
                    {/* Profile */}
                    <li>
                      <a
                        href="Profile"
                        className="dropdown-item d-flex align-items-center rounded-3 gap-2 py-2"
                      >
                        <UserRound size={15} />
                        Profile
                      </a>
                    </li>

                    {/* Settings */}
                    <li>
                      <a
                        href="Settings"
                        className="dropdown-item d-flex align-items-center rounded-3 gap-2 py-2"
                      >
                        <Settings size={15} />
                        Settings
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {/* Logout */}
                    <li>
                      <a
                        href="Dashboard"
                        className="dropdown-item d-flex align-items-center rounded-3 gap-2 text-danger py-2"
                      >
                        <LogOut size={15} />
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
      <div
        className={`${isCollapsed ? "app-content-area2" : "app-content-area"}`}
      >
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

      <div
        className="progress-wrap d-flex align-items-center justify-content-center"
        // style={{
        //   width: "40px",
        //   height: "40px",
        //   borderRadius: "50%",
        //   backgroundColor: "#0d6efd",
        //   color: "#fff",
        // }}
      >
        <ArrowUp size={20} />
      </div>
    </div>
  );
}

export default CandidateDashboard;
