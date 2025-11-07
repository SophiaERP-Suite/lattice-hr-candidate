// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { Bell, ChevronRight, Save, User } from "lucide-react";
import { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Settings</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Settings
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

          {/* ===== Sidebar Navigation ===== */}
          <div className="col-lg-12 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body py-3">
                <div className="d-flex flex-wrap justify-content-center gap-15">
                  {/* Profile Tab */}
                  <button
                    className={`btn d-flex align-items-center px-4 py-2 rounded-pill ${
                      activeTab === "profile"
                        ? "btn-primary text-white"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="me-2" size={18} /> Profile Settings
                  </button>

                  {/* Security Tab */}
                  <button
                    className={`btn d-flex align-items-center px-4 py-2 rounded-pill ${
                      activeTab === "security"
                        ? "btn-primary text-white"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setActiveTab("security")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height={18}
                      width={18}
                      className="me-2"
                    >
                      <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM12 7C13.1046 7 14 7.89543 14 9C14 9.73984 13.5983 10.3858 13.0011 10.7318L13 15H11L10.9999 10.7324C10.4022 10.3866 10 9.74025 10 9C10 7.89543 10.8954 7 12 7Z"></path>
                    </svg>
                    Security
                  </button>

                  {/* Notifications Tab */}
                  <button
                    className={`btn d-flex align-items-center px-4 py-2 rounded-pill ${
                      activeTab === "notifications"
                        ? "btn-primary text-white"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="me-2" size={18} /> Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="card border-0 shadow-sm p-4"
              style={{ textAlign: "left" }}
            >
              {/* ===== Profile Settings ===== */}
              {activeTab === "profile" && (
                <>
                  <h4 className="fw-bold mb-3">Profile Settings</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <select className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Enter Birtd"
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-primary">
                      <Save size={16} className="me-1" /> Save Changes
                    </button>
                  </div>
                </>
              )}

              {/* ===== Security ===== */}
              {activeTab === "security" && (
                <>
                  <h4 className="fw-bold mb-3">Security</h4>
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="text-end">
                    <button className="btn btn-primary">
                      <Save size={16} className="me-1" /> Update Password
                    </button>
                  </div>
                </>
              )}

              {/* ===== Notifications ===== */}
              {activeTab === "notifications" && (
                <>
                  <h4 className="fw-bold mb-3">Notification Preferences</h4>
                  <div className="form-check form-switch mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailNotif"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="emailNotif">
                      Email Notifications
                    </label>
                  </div>
                  <div className="form-check form-switch mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="smsNotif"
                    />
                    <label className="form-check-label" htmlFor="smsNotif">
                      SMS Notifications
                    </label>
                  </div>
                  <div className="form-check form-switch mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="systemNotif"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="systemNotif">
                      System Alerts
                    </label>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-primary">
                      <Save size={16} className="me-1" /> Save Preferences
                    </button>
                  </div>
                </>
              )}

              {/* ===== Appearance ===== */}
              {activeTab === "appearance" && (
                <>
                  <h4 className="fw-bold mb-3">Appearance</h4>
                  <p className="text-muted mb-4">
                    Customize how your dashboard looks.
                  </p>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <button className="btn btn-outline-dark">Dark Mode</button>
                    <button className="btn btn-outline-secondary">
                      Light Mode
                    </button>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-primary">
                      <Save size={16} className="me-1" /> Save Appearance
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
