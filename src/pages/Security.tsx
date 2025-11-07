// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight, Lock, Mail, Phone } from "lucide-react";

function Security() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Security</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                  {/* <li className="breadcrumb-item">
                    <a href="javascript:void(0);">User</a>
                  </li> */}
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    Security
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-header">
                <h5 className="mb-0">Change Password</h5>
              </div>
              <div className="card-body pt-15">
                <form>
                  <div className="mb-15">
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="mb-15">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="mb-25">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Two-Step Verification</h5>
                <span className="badge bg-label-success">Enabled</span>
              </div>
              <div className="card-body pt-15">
                <p className="mb-15">
                  Add an extra layer of security to your account using multiple
                  verification methods.
                </p>
                <ul className="list-unstyled mb-15">
                  <li>
                    <Mail size={15} className=" text-success me-2" />
                    Email Verification
                    <span className="text-muted"> (Enabled)</span>
                  </li>
                  <li>
                    <Lock size={15} className=" text-success me-2" />
                    Authenticator App
                    <span className="text-muted"> (Enabled)</span>
                  </li>
                  <li>
                    <Phone size={15} className=" text-success me-2" />
                    Phone Number Verification{" "}
                    <span className="text-muted">
                      (Verified: +101-1XXXXXX78)
                    </span>
                  </li>
                </ul>
                <button className="btn btn-outline-primary btn-sm me-2">
                  Manage Methods
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  Disable Two-Step
                </button>
              </div>
            </div>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-header">
                <h5 className="mb-0">Recent Devices</h5>
              </div>
              <div className="card-body pt-15">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Chrome · Windows</strong>
                      <div className="text-muted small">
                        New York, NY · Active Now
                      </div>
                    </div>
                    <span className="badge bg-label-success">Current</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Safari · iPhone</strong>
                      <div className="text-muted small">
                        San Francisco, CA · 2 days ago
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-danger">
                      Sign Out
                    </button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Firefox · MacOS</strong>
                      <div className="text-muted small">
                        Chicago, IL · 5 days ago
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-danger">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
