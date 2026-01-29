import {
  ChevronRight,
  Eye,
  Flag,
  Shield,
  AlertCircle,
  Upload,
  CheckCircle2,
  Clock,
  XCircle,
  Info,
  Download,
} from "lucide-react";
import { useState } from "react";

function Compliance() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const [records] = useState([
    {
      id: 1,
      company: "Bright Future Ltd",
      checkType: "DBS Check",
      status: "Pending",
      expiry: "—",
      uploadedDate: "2025-01-15",
      notes: "Awaiting document verification from HR.",
    },
    {
      id: 2,
      company: "TrustGuard Services",
      checkType: "Criminal Record",
      status: "Valid",
      expiry: "2026-04-12",
      uploadedDate: "2025-01-10",
      notes: "All checks completed successfully.",
    },
    {
      id: 3,
      company: "SecureHire",
      checkType: "Document Verification",
      status: "Expiring Soon",
      expiry: "2025-12-01",
      uploadedDate: "2024-12-01",
      notes: "Document expiring in 11 months. Renewal required.",
    },
    {
      id: 4,
      company: "Healthcare Plus",
      checkType: "Right to Work",
      status: "Rejected",
      expiry: "—",
      uploadedDate: "2025-01-20",
      notes: "Document unclear. Please resubmit with better quality scan.",
    },
  ]);

  // Calculate compliance statistics
  const stats = {
    pending: records.filter((r) => r.status === "Pending").length,
    nonCompliant: records.filter((r) => r.status === "Rejected").length,
    expiringSoon: records.filter((r) => r.status === "Expiring Soon").length,
    fullyCompliant: records.filter((r) => r.status === "Valid").length,
    total: records.length,
  };

  // const getStatusBadge = (status) => {
  //   switch (status) {
  //     case "Pending":
  //       return <span className="badge bg-warning"><Clock size={14} className="me-5" />Pending</span>;
  //     case "Valid":
  //       return <span className="badge bg-success"><CheckCircle2 size={14} className="me-5" />Valid</span>;
  //     case "Expiring Soon":
  //       return <span className="badge bg-info"><AlertCircle size={14} className="me-5" />Expiring Soon</span>;
  //     case "Rejected":
  //       return <span className="badge bg-danger"><XCircle size={14} className="me-5" />Rejected</span>;
  //     default:
  //       return <span className="badge bg-secondary">Unknown</span>;
  //   }
  // };

  const getCompliancePercentage = () => {
    return Math.round((stats.fullyCompliant / stats.total) * 100);
  };

  return (
    <div className="row">
      {/* Page Header */}
      <div className="d-none col-xl-12">
        <div className="page-title-box d-flex-between flex-wrap gap-15 mb-20">
          <h1 className="page-title fs-18 lh-1">Compliance Management</h1>
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

      {/* Overview Banner - What Compliance Is About */}
      <div className="col-xl-12">
        <div
          className="card mb-20"
          style={{
            background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
            border: "none",
          }}
        >
          <div className="card-body p-20">
            <div className="row align-items-center">
              <div className="col-md-9">
                <div className="flex-column flex-md-row d-flex align-items-start gap-15">
                  <Shield
                    size={48}
                    color="white"
                    style={{ minWidth: "48px" }}
                  />
                  <div>
                    <h3 className="text-white mb-10">
                      Your Compliance & Background Verification Hub
                    </h3>
                    <p
                      className="text-white mb-10"
                      style={{ opacity: 0.95, fontSize: "15px" }}
                    >
                      This section contains all your employment compliance
                      documents, background checks, and certifications required
                      by potential employers. Keep your documents up-to-date to
                      ensure seamless job applications and avoid delays in the
                      hiring process.
                    </p>
                    <div className="d-flex flex-wrap gap-15 mt-15">
                      <div className="d-flex align-items-center gap-10 text-white">
                        <CheckCircle2 size={18} />
                        <span style={{ fontSize: "14px" }}>
                          DBS/Criminal Record Checks
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-10 text-white">
                        <CheckCircle2 size={18} />
                        <span style={{ fontSize: "14px" }}>
                          Right to Work Verification
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-10 text-white">
                        <CheckCircle2 size={18} />
                        <span style={{ fontSize: "14px" }}>
                          Professional Certifications / Liscensing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-md-end mt-md-0 mt-15">
                <div className="bg-white p-20" style={{ borderRadius: "12px" }}>
                  <p className="mb-5 text-muted" style={{ fontSize: "13px" }}>
                    Overall Compliance
                  </p>
                  <h1
                    className="mb-0"
                    style={{
                      fontSize: "48px",
                      color:
                        getCompliancePercentage() >= 75
                          ? "#10B981"
                          : getCompliancePercentage() >= 50
                            ? "#F59E0B"
                            : "#EF4444",
                    }}
                  >
                    {getCompliancePercentage()}%
                  </h1>
                  <p
                    className="mb-0 text-muted mt-5"
                    style={{ fontSize: "12px" }}
                  >
                    {stats.fullyCompliant} of {stats.total} verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Alerts */}
      {(stats.nonCompliant > 0 || stats.expiringSoon > 0) && (
        <div className="col-xl-12">
          {stats.nonCompliant > 0 && (
            <div className="alert alert-danger d-flex align-items-start gap-10 mb-15">
              <AlertCircle size={20} className="mt-5" />
              <div>
                <strong>Action Required:</strong> You have {stats.nonCompliant}{" "}
                rejected document(s). Please resubmit to maintain compliance
                status.
              </div>
            </div>
          )}
          {stats.expiringSoon > 0 && (
            <div className="alert alert-warning d-flex align-items-start gap-10 mb-15">
              <Info size={20} className="mt-5" />
              <div>
                <strong>Renewal Needed:</strong> {stats.expiringSoon}{" "}
                document(s) expiring soon. Renew now to avoid application
                delays.
              </div>
            </div>
          )}
        </div>
      )}

      {/* Summary Cards */}
      <div className="col-md-3 mb-15">
        <div className="card border-start border-warning border-4 shadow-sm h-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-10 mb-10">
              <Clock size={20} className="text-warning" />
              <p className="text-muted mb-0">Pending Review</p>
            </div>
            <h4 className="fw-bold text-warning mb-0">{stats.pending}</h4>
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
              Under verification
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-15">
        <div className="card border-start border-danger border-4 shadow-sm h-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-10 mb-10">
              <XCircle size={20} className="text-danger" />
              <p className="text-muted mb-0">Action Required</p>
            </div>
            <h4 className="fw-bold text-danger mb-0">{stats.nonCompliant}</h4>
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
              Needs resubmission
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-15">
        <div className="card border-start border-info border-4 shadow-sm h-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-10 mb-10">
              <AlertCircle size={20} className="text-info" />
              <p className="text-muted mb-0">Expiring Soon</p>
            </div>
            <h4 className="fw-bold text-info mb-0">{stats.expiringSoon}</h4>
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
              Renewal needed
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-15">
        <div className="card border-start border-success border-4 shadow-sm h-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-10 mb-10">
              <CheckCircle2 size={20} className="text-success" />
              <p className="text-muted mb-0">Verified & Valid</p>
            </div>
            <h4 className="fw-bold text-success mb-0">
              {stats.fullyCompliant}
            </h4>
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
              All compliant
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="col-xl-12 mb-20">
        <div className="card">
          <div className="card-body">
            <div className="d-flex-between align-items-center mb-15">
              <h5 className="mb-0">Compliance Status</h5>
              <span className="badge bg-primary" style={{ fontSize: "14px" }}>
                {getCompliancePercentage()}% Complete
              </span>
            </div>
            <div className="progress" style={{ height: "25px" }}>
              {/* <div
                    className={`progress-bar ${
                      getCompliancePercentage() >= 75 ? "bg-success" : 
                      getCompliancePercentage() >= 50 ? "bg-warning" : "bg-danger"
                    }`}
                    role="progressbar"
                    style={{ width: `${getCompliancePercentage()}%` }}
                    aria-valuenow={getCompliancePercentage()}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <strong>{getCompliancePercentage()}%</strong>
                  </div> */}
            </div>
            <p className="mt-10 mb-0 text-muted" style={{ fontSize: "13px" }}>
              {stats.fullyCompliant} verified documents out of {stats.total}{" "}
              total submissions
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Table */}
      <div className="col-xl-12">
        <div className="card shadow-sm">
          <div className="card-header fw-bold d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Compliance Documents & Background Checks</h5>
            <button
              className="btn btn-success"
              onClick={() => setShowUploadModal(true)}
            >
              <Upload size={16} className="me-5" />
              Upload New Document
            </button>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table
                className="table table-hover table-striped align-middle w-100 mb-0"
                style={{ textAlign: "left" }}
              >
                <thead className="table-light">
                  <tr>
                    <th>Company/Organization</th>
                    <th>Check Type</th>
                    <th>Status</th>
                    <th>Uploaded Date</th>
                    <th>Expiry Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((rec) => (
                    <tr key={rec.id}>
                      <td>
                        <div className="d-flex align-items-center gap-10">
                          <Shield size={18} className="text-muted" />
                          <strong>{rec.company}</strong>
                        </div>
                      </td>
                      <td>{rec.checkType}</td>
                      <td>{/* {getStatusBadge(rec.status)} */}</td>
                      <td>
                        <small className="text-muted">{rec.uploadedDate}</small>
                      </td>
                      <td>
                        <small
                          className={
                            rec.status === "Expiring Soon"
                              ? "text-warning fw-bold"
                              : ""
                          }
                        >
                          {rec.expiry}
                        </small>
                      </td>
                      <td>
                        <div className="d-flex gap-5">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#viewModal"
                            // onClick={() => setSelectedRecord(rec)}
                          >
                            <Eye size={14} className="me-5" />
                            View
                          </button>
                          {rec.status === "Rejected" && (
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => {
                                // setSelectedRecord(rec);
                                setShowUploadModal(true);
                              }}
                            >
                              <Upload size={14} className="me-5" />
                              Resubmit
                            </button>
                          )}
                          {(rec.status === "Valid" ||
                            rec.status === "Pending") && (
                            <button className="btn btn-sm btn-outline-secondary">
                              <Download size={14} className="me-5" />
                              Download
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                <Shield size={20} className="me-10" />
                Compliance Record Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              {selectedRecord && (
                <>
                  <p>
                    <strong>Company/Organization:</strong>
                    {/* {selectedRecord.company} */}
                  </p>
                  <p>
                    <strong>Check Type:</strong>
                    {/* {selectedRecord.checkType} */}
                  </p>
                  <p>
                    <strong>Status:</strong>
                    {/* {getStatusBadge(selectedRecord.status)} */}
                  </p>
                  <p>
                    <strong>Uploaded Date:</strong>
                    {/* {selectedRecord.uploadedDate} */}
                  </p>
                  <p>
                    <strong>Expiry Date:</strong>
                    {/* {selectedRecord.expiry} */}
                  </p>
                  <div className="alert alert-info">
                    <p className="mb-0">
                      <strong>Notes:</strong>
                      {/* {selectedRecord.notes} */}
                    </p>
                  </div>
                  {/* {selectedRecord.status === "Rejected" && ( */}
                  <div className="alert alert-danger">
                    <strong>Action Required:</strong> Please resubmit this
                    document with the corrections mentioned above.
                  </div>
                  {/* )} */}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* {selectedRecord?.status === "Valid" && ( */}
              <button type="button" className="btn btn-primary">
                <Download size={16} className="me-5" />
                Download Certificate
              </button>
              {/* )} */}
              {/* {selectedRecord?.status === "Rejected" && ( */}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  setShowUploadModal(true);
                  // Close the view modal
                  const modal = document.getElementById("viewModal");
                  // const bsModal = window.bootstrap.Modal.getInstance(modal);
                  // bsModal?.hide();
                }}
              >
                <Upload size={16} className="me-5" />
                Resubmit Document
              </button>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowUploadModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {/* {selectedRecord?.status === "Rejected" ? "Resubmit" : "Upload"}  */}
                  Compliance Document
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowUploadModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* Your upload form here */}
                <p>Upload form content goes here...</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowUploadModal(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  <Upload size={16} className="me-5" />
                  Upload Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compliance;
