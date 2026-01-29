import { ChevronRight, FileText, User } from "lucide-react";
import { useState } from "react";
import IdentityVerification from "./IdentityVerification";
import Compliance from "./ComplianceMgt";

function ComplianceMgt() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [activeSection, setActiveSection] = useState("documents");

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
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          {/* Page Header */}
          <div className="col-xl-12">
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
                    Compliance Mgt
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div
            className="d-flex flex-wrap justify-content-center gap-15"
            style={{ marginBottom: "30px" }}
          >
            <button
              className={`btn d-flex align-items-center px-4 py-2 rounded-pill ${
                activeSection === "documents"
                  ? "btn-primary text-white"
                  : "btn-outline-primary"
              }`}
              onClick={() => setActiveSection("documents")}
            >
              <FileText className="me-2" size={18} />
              Compliance Documents
            </button>

            <button
              className={`btn d-flex align-items-center px-4 py-2 rounded-pill ${
                activeSection === "identity"
                  ? "btn-warning text-white"
                  : "btn-outline-warning"
              }`}
              onClick={() => setActiveSection("identity")}
            >
              <User className="me-2" size={18} />
              Identity Verification
              {/* <span className="badge bg-danger ms-10">Required</span> */}
            </button>
          </div>

          {activeSection === "documents" && <Compliance />}

          {activeSection === "identity" && <IdentityVerification />}
        </div>
      </div>
    </div>
  );
}

export default ComplianceMgt;
