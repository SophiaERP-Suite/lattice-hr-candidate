import {
  ChevronRight,
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Shield,
  Plus,
  Trash2,
  Eye,
  CheckCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import {
  deleteIdentificationDocs,
  getIdentificationDocs,
  getIdTypes,
  uploadIdentificationDoc,
} from "../../api/IdentificationApi";
import { toast, ToastContainer } from "react-toastify";
import type { IdTypeDto, UserDocsDto } from "../../types/identification";
import {
  createReference,
  deleteReference,
  getReferences,
} from "../../api/Reference";
import type { UserRefDto } from "../../types/reference";

type ModalType = "add" | "edit" | "delete" | "addReference" | null;

function IdentityVerification() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState("");
  const [idTypes, setIdTypes] = useState<IdTypeDto[]>([]);
  const [userDocs, setUserDocs] = useState<UserDocsDto[]>([]);
  const [userRef, setUserRef] = useState<UserRefDto[]>([]);
  const [modalType, setModalType] = useState<ModalType>(null);

  //   const getProgressPercentage = () => {
  //     const statuses = Object.values(verificationStatus);
  //     const completed = statuses.filter((s) => s === "completed").length;
  //     return Math.round((completed / statuses.length) * 100);
  //   };

  useEffect(() => {
    fetchIdTypes();
    fetchUserIdentificationDocs();
    fetchJobSeekerReference();
  }, []);

  const fetchIdTypes = async () => {
    try {
      const response = await getIdTypes();

      if (!response) {
        return;
      }
      setIdTypes(response);
    } catch {
      setIdTypes([]);
    }
  };

  const fetchJobSeekerReference = async () => {
    try {
      setLoading(true);
      const userRef = await getReferences();

      if (!userRef) {
        return;
      }

      console.log("User Ref", userRef);
      setUserRef(userRef);
    } catch {
      setUserRef([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserIdentificationDocs = async () => {
    try {
      setLoading(true);
      const userDocs = await getIdentificationDocs();

      if (!userDocs) {
        return;
      }

      console.log("User docs", userDocs);
      setUserDocs(userDocs);
    } catch {
      setUserDocs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddReference = async (data: {
    inputValue?: string;
    inputValue2?: string;
    inputValue3?: string;
    inputValue4?: string;
  }) => {
    try {
      console.log("id", data);
      const { inputValue, inputValue2, inputValue3, inputValue4 } = data;

      if (!inputValue || !inputValue2 || !inputValue3 || !inputValue4) {
        console.error("Missing required fields");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("Email", inputValue2 ?? "N/A");
      formData.append("Name", inputValue ?? "N/A");
      formData.append("Phone", inputValue3 ?? "N/A");
      formData.append("Company", inputValue4 ?? "N/A");

      const response = await createReference(formData);

      if (!response) {
        toast.error("Could not add reference");
        return;
      }

      await fetchJobSeekerReference();
    } catch (error: any) {
      console.error("Could not add reference", error);
    } finally {
      setLoading(false);
    }
  };

  const getRefBadge = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success";
      case "pending":
        return "bg-warning text-dark";
      case "rejected":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  const openAddModal = () => {
    setModalType("add");
  };

  const openAddRefModal = () => {
    setModalType("addReference");
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleConfirm = async (data: {
    dropdownValue?: string;
    file?: File;
  }) => {
    try {
      console.log("id", data);
      const { dropdownValue, file } = data;

      if (!dropdownValue || !file) {
        console.error("Missing required fields");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("IdentificationTypeId", dropdownValue);
      formData.append("File", file);
      const response = await uploadIdentificationDoc(formData);

      if (!response) {
        toast.error("Upload Failed");
        return;
      }

      await fetchUserIdentificationDocs();
    } catch (error: any) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFile = async (identificationId: number) => {
    try {
      if (!identificationId) {
        toast.error("Please select a means of identification");
        return;
      }

      setLoading(true);

      const response = await deleteIdentificationDocs(identificationId);

      if (!response) {
        toast.error("Delete Failed");
        return;
      }

      await fetchUserIdentificationDocs();
    } catch (error: any) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRef = async (referenceId: number) => {
    try {
      if (!referenceId) {
        toast.error("Please select a means of identification");
        return;
      }

      setLoading(true);

      const response = await deleteReference(referenceId);

      if (!response) {
        toast.error("Delete Failed");
        return;
      }

      await fetchJobSeekerReference();
    } catch (error: any) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <ToastContainer />
        <Modal
          isOpen={modalType === "add"}
          title="Upload File"
          message="Please select Identification type and select a file for upload"
          confirmText="Upload"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<Upload size={16} />}
          headerIcon={<FileText size={20} />}
          dropdownLabel="Category"
          dropdownOptions={idTypes.map((type) => ({
            value: type.identificationTypeId,
            label: type.typeName,
          }))}
          fileLabel="Select File"
          fileAccept="image/*,.pdf,.doc,.docx"
          loading={loading}
          onConfirm={handleConfirm}
          onCancel={closeModal}
        />

        <Modal
          isOpen={modalType === "addReference"}
          title="New Reference"
          message="Add a new reference"
          confirmText="Confirm"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<CheckCheck size={16} />}
          headerIcon={<FileText size={20} />}
          inputLabel="Enter Name"
          inputPlaceholder="Enter Name"
          inputLabel2="Enter Email"
          inputPlaceholder2="Enter Email"
          inputLabel3="Enter Phone"
          inputPlaceholder3="Enter Phone"
          inputLabel4="Enter Company"
          inputPlaceholder4="Enter Company"
          loading={loading}
          onConfirm={handleAddReference}
          onCancel={closeModal}
        />

        <div className="row">
          {/* Page Header */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-20">
              <h1 className="page-title fs-18 lh-1">Identity Verification</h1>
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
                    Identity Verification
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Overview Banner */}
          <div className="col-xl-12">
            <div
              className="card mb-20"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
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
                          Verify Your Identity to Unlock Full Access
                        </h3>
                        <p
                          className="text-white mb-10"
                          style={{ opacity: 0.95, fontSize: "15px" }}
                        >
                          Complete your identity verification to access all job
                          opportunities, apply to positions, and build your
                          professional profile. All information is encrypted and
                          stored securely in compliance with data protection
                          regulations.
                        </p>
                        <div className="d-flex flex-wrap gap-15 mt-15">
                          <div className="d-flex align-items-center gap-10 text-white">
                            <CheckCircle2 size={18} />
                            <span style={{ fontSize: "14px" }}>
                              Secure & Encrypted
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-10 text-white">
                            <CheckCircle2 size={18} />
                            <span style={{ fontSize: "14px" }}>
                              GDPR Compliant
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-10 text-white">
                            <CheckCircle2 size={18} />
                            <span style={{ fontSize: "14px" }}>
                              One-Time Process
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none col-md-3 text-md-end mt-md-0 mt-15">
                    <div
                      className="bg-white p-20"
                      style={{ borderRadius: "12px" }}
                    >
                      <p
                        className="mb-5 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        Verification Progress
                      </p>
                      {/* <h1
                        className="mb-0"
                        style={{
                          fontSize: "48px",
                          color:
                            getProgressPercentage() >= 75
                              ? "#10B981"
                              : getProgressPercentage() >= 50
                                ? "#F59E0B"
                                : "#EF4444",
                        }}
                      >
                        {getProgressPercentage()}%
                      </h1> */}
                      <p
                        className="mb-0 text-muted mt-5"
                        style={{ fontSize: "12px" }}
                      >
                        Complete to unlock features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="col-xl-12">
            <div className="alert alert-info d-flex align-items-start gap-10 mb-20">
              <AlertCircle size={20} className="mt-5" />
              <div>
                <strong>Why We Need This:</strong> Identity verification ensures
                a safe and trustworthy platform for both job seekers and
                employers. Your documents are reviewed within 24-48 hours.
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="d-none col-xl-12 mb-20">
            <div className="card">
              <div className="card-body">
                {/* <div className="d-flex-between align-items-center mb-15">
                  <h5 className="mb-0">Overall Verification Status</h5>
                  <span
                    className="badge bg-primary"
                    style={{ fontSize: "14px" }}
                  >
                    {getProgressPercentage()}% Complete
                  </span>
                </div>
                <div className="progress" style={{ height: "25px" }}>
                  <div
                    className={`progress-bar ${
                      getProgressPercentage() >= 75
                        ? "bg-success"
                        : getProgressPercentage() >= 50
                          ? "bg-warning"
                          : "bg-danger"
                    }`}
                    role="progressbar"
                    style={{ width: `${getProgressPercentage()}%` }}
                  >
                    <strong>{getProgressPercentage()}%</strong>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Verification Documents */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Required Documents</h4>
                <button
                  className="btn btn-success"
                  onClick={() => openAddModal()}
                >
                  <Plus /> Add Doc
                </button>
              </div>
              <div className="card-body mt-5">
                {loading && (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "100px" }}
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {!loading &&
                  userDocs.map((doc) => {
                    return (
                      <div
                        key={doc.identificationId}
                        className="verification-item mb-20 p-15"
                        style={{
                          border: "1px solid #E5E7EB",
                          borderRadius: "8px",
                        }}
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="d-flex align-items-start gap-15">
                              {/* {doc.icon} */}
                              <div>
                                <h5 className="mb-5">
                                  {doc.identificationTypeName}
                                </h5>
                                <p
                                  className="text-muted mb-5"
                                  style={{ fontSize: "14px" }}
                                >
                                  {doc.fileName} - {doc.fileType}
                                </p>
                                <div className="d-flex gap-10 flex-wrap">
                                  <span
                                    className={`badge ${
                                      doc.status === "completed"
                                        ? "bg-success"
                                        : doc.status === "pending"
                                          ? "bg-warning text-dark"
                                          : doc.status === "rejected"
                                            ? "bg-danger"
                                            : "bg-secondary"
                                    }`}
                                  >
                                    {doc.status.replace("_", " ").toUpperCase()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 text-md-end  mt-md-0 mt-15">
                            <a
                              href={doc.filePath}
                              className="btn btn-info"
                              style={{ marginRight: "7px" }}
                            >
                              <Eye size={16} />
                            </a>
                            <button
                              onClick={() =>
                                handleDeleteFile(doc.identificationId)
                              }
                              className="btn btn-danger"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* References */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">References</h4>
                <button
                  className="btn btn-success"
                  onClick={() => openAddRefModal()}
                >
                  <Plus /> Add Reference
                </button>
              </div>
              <div className="card-body">
                {/* Government ID */}
                {userRef.map((ref) => (
                  <div
                    key={ref.referenceId}
                    className="verification-item mb-20 p-15"
                    style={{ border: "1px solid #E5E7EB", borderRadius: "8px" }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start gap-15">
                          {/* <User size={24} className="text-primary mt-5" /> */}
                          <div>
                            <h5 className="mb-5">{ref.name}</h5>

                            <p
                              className="text-black mb-5"
                              style={{ fontSize: "14px" }}
                            >
                              Company: {ref.company}
                            </p>

                            <p
                              className="text-black mb-5"
                              style={{ fontSize: "14px" }}
                            >
                              Email: {ref.email}
                            </p>

                            <p
                              className="text-black mb-5"
                              style={{ fontSize: "14px" }}
                            >
                              Phone: {ref.phone}
                            </p>

                            <span
                              className={`badge ${getRefBadge(ref.status)}`}
                            >
                              {ref.status || "PENDING"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 text-md-end mt-md-0 mt-15">
                        {/* <a
                          href={doc.filePath}
                          className="btn btn-info"
                          style={{ marginRight: "7px" }}
                        >
                          <Eye size={16} />
                        </a> */}
                        <button
                          onClick={() => handleDeleteRef(ref.referenceId)}
                          className="btn btn-danger"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="d-none col-xl-12 mt-20">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="mb-15">Need Help?</h5>
                <div className="row">
                  <div className="col-md-6 mb-10">
                    <p className="mb-5">
                      <strong>Acceptable File Formats:</strong>
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      JPG, PNG, PDF (Max size: 5MB per file)
                    </p>
                  </div>
                  <div className="col-md-6 mb-10">
                    <p className="mb-5">
                      <strong>Review Time:</strong>
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      Documents are typically reviewed within 24-48 hours
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="mb-5">
                      <strong>Having Issues?</strong>
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      Contact our support team at{" "}
                      <a href="mailto:support@latticehr.com">
                        support@latticehr.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentityVerification;
