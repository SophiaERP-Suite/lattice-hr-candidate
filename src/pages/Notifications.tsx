// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight } from "lucide-react";

function Compliance() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Notifications</h1>
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
                    Notifications
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-xl-12 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold">Notifications</h4>
              <div>
                <button className="btn btn-outline-secondary btn-sm me-2">
                  Mark All as Read
                </button>
                <button className="btn btn-primary btn-sm">
                  Notification Settings
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            {/* <!-- Filters --> */}
            <div className="mb-3">
              <div className="btn-group" role="group">
                <button className="btn btn-outline-primary active">All</button>
                <button className="btn btn-outline-primary">Unread</button>
                <button className="btn btn-outline-primary">System</button>
                <button className="btn btn-outline-primary">
                  Investigation
                </button>
                <button className="btn btn-outline-primary">Timesheet</button>
              </div>
            </div>

            {/* <!-- Notification List --> */}
            <div className="list-group bg-white shadow-sm">
              <a
                href="NotificationDetail"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-primary">
                    New Investigation Request
                  </div>
                  A new case (#INV-2039) has been assigned to you.
                </div>
                <span className="badge bg-primary rounded-pill">2m ago</span>
              </a>

              <a
                href="NotificationDetail"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-start bg-light"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Timesheet Approved</div>
                  Your timesheet for Nov 4 was approved by Manager John Doe.
                </div>
                <span className="badge bg-success rounded-pill">1h ago</span>
              </a>

              <a
                href="NotificationDetail"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-warning">
                    Compliance Reminder
                  </div>
                  Upload your background verification document before Nov 10.
                </div>
                <span className="badge bg-warning text-dark rounded-pill">
                  3h ago
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compliance;
