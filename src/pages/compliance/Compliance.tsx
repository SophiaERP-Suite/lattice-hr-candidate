// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import {
  ChevronRight,
  Eye,
  Flag,
} from "lucide-react";

import { useState } from "react";

function Compliance() {
  const [records] = useState([
    {
      company: "Bright Future Ltd",
      checkType: "DBS Check",
      status: "Pending",
      expiry: "—",
    },
    {
      company: "TrustGuard Services",
      checkType: "Criminal Record",
      status: "Valid",
      expiry: "2026-04-12",
    },
    {
      company: "SecureHire",
      checkType: "Document Verification",
      status: "Expiring Soon",
      expiry: "2025-12-01",
    },
  ]);

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Compliance</h1>
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
                    Compliance
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Summary Cards */}
          <div className="col-md-3">
            <div className="card border-start border-warning border-4 shadow-sm">
              <div className="card-body">
                <p className="text-muted mb-1">Pending Checks</p>
                <h4 className="fw-bold text-warning">12</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start border-danger border-4 shadow-sm">
              <div className="card-body">
                <p className="text-muted mb-1">Non-Compliant</p>
                <h4 className="fw-bold text-danger">5</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start border-info border-4 shadow-sm">
              <div className="card-body">
                <p className="text-muted mb-1">Expiring Soon</p>
                <h4 className="fw-bold text-info">3</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start border-success border-4 shadow-sm">
              <div className="card-body">
                <p className="text-muted mb-1">Fully Compliant</p>
                <h4 className="fw-bold text-success">18</h4>
              </div>
            </div>
          </div>

          {/* Compliance Table */}
          <div className="card shadow-sm">
            <div className="card-header fw-bold">
              Compliance Records
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Company</th>
                    <th>Check Type</th>
                    <th>Status</th>
                    <th>Expiry Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((rec, idx) => (
                    <tr key={idx}>
                      <td>{rec.company}</td>
                      <td>{rec.checkType}</td>
                      <td>
                        {rec.status === "Pending" && (
                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>
                        )}
                        {rec.status === "Valid" && (
                          <span className="badge bg-success">Valid</span>
                        )}
                        {rec.status === "Expiring Soon" && (
                          <span className="badge bg-info text-dark">
                            Expiring Soon
                          </span>
                        )}
                      </td>
                      <td>{rec.expiry}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#viewModal"
                        >
                          <Eye size={16} className="me-1" />
                          View
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <Flag size={16} className="me-1" />
                          Flag
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal for Details */}
          <div
            className="modal fade"
            id="viewModal"
            tabIndex={-1}
            aria-labelledby="viewModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="viewModalLabel">
                    Compliance Record Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    <strong>Company:</strong> Bright Future Ltd
                  </p>
                  <p>
                    <strong>Check Type:</strong> DBS Check
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className="badge bg-warning text-dark">Pending</span>
                  </p>
                  <p>
                    <strong>Expiry Date:</strong> —
                  </p>
                  <p className="text-muted">
                    Notes: Awaiting document verification from HR.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Mark as Reviewed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compliance;
