import {
  ChevronRight,
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Shield,
  Plus,
  Trash2,
  CheckCheck,
  User,
  Phone,
  Mail,
  Pen,
  File,
} from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import {
  deleteIdentificationDocs,
  getIdentificationDocs,
  getIdTypes,
  updateIdentificationDoc,
  uploadIdentificationDoc,
} from "../../api/IdentificationApi";
import { toast, ToastContainer } from "react-toastify";
import type { IdTypeDto, UserDocsDto } from "../../types/identification";
import {
  createReference,
  deleteReference,
  getReferences,
  getReferenceType,
  updateReference,
} from "../../api/Reference";
import type { UserRefDto } from "../../types/reference";

type ModalType =
  | "add"
  | "edit"
  | "deleteRef"
  | "editRef"
  | "editDoc"
  | "deleteDoc"
  | "addReference"
  | null;

export interface ReferenceType {
  referenceTypeId: number;
  typeName: string;
  isEnabled: boolean;
  dateCreated: string;
}

function IdentityVerification() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [refid, setRefId] = useState<number | null>(null);
  const [addDoc, setAddDoc] = useState<number>(0);
  const [idNo, setIdNo] = useState<number | null>(null);
  const [idTypes, setIdTypes] = useState<IdTypeDto[]>([]);
  const [userDocs, setUserDocs] = useState<UserDocsDto[]>([]);
  const [userRef, setUserRef] = useState<UserRefDto[]>([]);
  const [selectedRef, setSelectedRef] = useState<UserRefDto | null>(null);
  const [selectedRefId, setSelectedRefId] = useState<number | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<UserDocsDto | null>(null);
  const [selectedDocId, setSelectedDocId] = useState<number | null>(null);
  const [refType, setRefType] = useState<ReferenceType[]>([]);
  const [modalType, setModalType] = useState<ModalType>(null);

  useEffect(() => {
    fetchIdTypes();
    fetchUserIdentificationDocs();
    fetchJobSeekerReference();
    fetchReferenceType();
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

  const fetchReferenceType = async () => {
    try {
      setLoading(true);
      const refType = await getReferenceType();

      if (!refType) {
        return;
      }

      console.log("User Ref", refType);
      setRefType(refType);
    } catch {
      setUserRef([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobSeekerReference = async () => {
    try {
      setLoading2(true);
      const userRef = await getReferences();

      if (!userRef) {
        return;
      }

      console.log("User Ref", userRef);

      setUserRef(userRef);
    } catch {
      setUserRef([]);
    } finally {
      setLoading2(false);
    }
  };

  const fetchUserIdentificationDocs = async () => {
    try {
      setLoading(true);
      const userDocs = await getIdentificationDocs();

      if (!userDocs || userDocs.length === 0) {
        setUserDocs([]);
        setAddDoc(0);
        return;
      }

      setAddDoc(1);
      setUserDocs(userDocs);
    } catch {
      setUserDocs([]);
      setAddDoc(0);
    } finally {
      setLoading(false);
    }
  };

  const handleAddReference = async (data: {
    inputValue?: string;
    inputValue2?: string;
    inputValue3?: string;
    inputValue4?: string;
    inputValue5?: string;
    dropdownValue?: string;
  }) => {
    try {
      const {
        inputValue,
        inputValue2,
        inputValue3,
        inputValue4,
        inputValue5,
        dropdownValue,
      } = data;

      if (
        !inputValue ||
        !inputValue2 ||
        !inputValue3 ||
        !inputValue4 ||
        !inputValue5 ||
        !dropdownValue
      ) {
        console.error("Missing required fields");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("Email", inputValue3 ?? "N/A");
      formData.append("FirstName", inputValue ?? "N/A");
      formData.append("LastName", inputValue2 ?? "N/A");
      formData.append("Phone", inputValue4 ?? "N/A");
      formData.append("Description", inputValue5 ?? "N/A");
      formData.append("ReferenceTypeId", dropdownValue ?? 0);

      const response = await createReference(formData);

      if (!response) {
        toast.error("Could not add reference");
        return;
      }

      await fetchJobSeekerReference();
      closeModal();
    } catch (error: any) {
      console.error("Could not add reference", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditReference = async (data: {
    inputValue?: string;
    inputValue2?: string;
    inputValue3?: string;
    inputValue4?: string;
    inputValue5?: string;
    dropdownValue?: string;
  }) => {
    try {
      const {
        inputValue,
        inputValue2,
        inputValue3,
        inputValue4,
        inputValue5,
        dropdownValue,
      } = data;

      if (
        !inputValue ||
        !inputValue2 ||
        !inputValue3 ||
        !inputValue4 ||
        !inputValue5 ||
        !dropdownValue
      ) {
        console.error("Missing required fields");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("Email", inputValue3 ?? "N/A");
      formData.append("FirstName", inputValue ?? "N/A");
      formData.append("LastName", inputValue2 ?? "N/A");
      formData.append("Phone", inputValue4 ?? "N/A");
      formData.append("Description", inputValue5 ?? "N/A");
      formData.append("ReferenceTypeId", dropdownValue ?? 0);

      const response = await updateReference(formData, Number(selectedRefId));

      if (!response) {
        toast.error("Could not add reference");
        return;
      }

      toast.success("Reference updated successfully.")
      await fetchJobSeekerReference();
      closeModal();
    } catch (error: any) {
      console.error("Could not add reference", error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteDocsModal = (identificationId: number) => {
    setModalType("deleteDoc");
    setIdNo(identificationId);
  };

  const openDeleteRefModal = (referenceId: number) => {
    setModalType("deleteRef");
    setRefId(referenceId);
  };

  const openAddModal = () => {
    setModalType("add");
  };

  const openAddRefModal = () => {
    setModalType("addReference");
  };

  const openEditRefModal = (referenceId: number) => {
    const reference = userRef.find((r) => r.referenceId === referenceId);
    setSelectedRefId(referenceId);
    setSelectedRef(reference || null);
    setModalType("editRef");
  };

  const openEditDocModal = (docId: number) => {
    const doc = userDocs.find((r) => r.identificationId === docId);
    setSelectedDocId(docId);
    setSelectedDoc(doc || null);
    setModalType("editDoc");
  };

  const closeModal = () => {
    setModalType(null);
    setRefId(null);
    setSelectedRefId(null);
    setSelectedRef(null);
    setSelectedDocId(null);
    setSelectedDoc(null);
  };

  const handleConfirm = async (data: {
    dropdownValue?: string;
    file?: File;
  }) => {
    try {
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

      if (response.status !== 200) {
        toast.error("Upload Failed");
        return;
      }

      toast.success("Identification added successfully.")
      closeModal();
    } catch (error: any) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
      fetchUserIdentificationDocs();
    }
  };

  const handleEditDoc = async (data: {
    dropdownValue?: string;
    file?: File;
  }) => {
    try {
      const { dropdownValue, file } = data;

      if (!dropdownValue || !file) {
        console.error("Missing required fields");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("IdentificationTypeId", dropdownValue);
      formData.append("File", file);

      const response = await updateIdentificationDoc(
        formData,
        Number(selectedDocId),
      );

      if (response.status !== 200) {
        toast.error("Upload Failed");
        return;
      }

      toast.success("Indentification updated successfully.")
      closeModal();
    } catch (error: any) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
      fetchUserIdentificationDocs();
    }
  };

  const handleDeleteFile = async () => {
    try {
      const identificationId = idNo;
      if (!identificationId) {
        toast.error("Please select a means of identification");
        return;
      }

      setLoading(true);
      const response = await deleteIdentificationDocs(identificationId);

      if (response.status !== 200 && response.status !== 204) {
        toast.error("Delete Failed");
        return;
      }

      toast.success("Identification deleted successfully.");
      await fetchUserIdentificationDocs();
      closeModal();

    } catch (error: any) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleDeleteRef = async () => {
    try {
      const referenceId = refid;
      if (!referenceId) {
        toast.error("Please select a reference to be deleted");
        return;
      }

      setLoading2(true);

      const response = await deleteReference(referenceId);

      if (!response) {
        toast.error("Delete Failed");
        return;
      }

      await fetchJobSeekerReference();
      closeModal();
    } catch (error: any) {
      console.error("Delete failed:", error);
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <ToastContainer />
        <Modal
          isOpen={modalType === "editDoc"}
          title="Update Identification Document"
          message="Please select a file for update"
          confirmText="Update"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<Pen size={16} />}
          headerIcon={<FileText size={20} />}
          dropdownLabel="Category"
          dropdownOptions={idTypes.map((type) => ({
            value: type.identificationTypeId,
            label: type.typeName,
          }))}
          defaultDropdownValue={
            selectedDoc?.identificationTypeId?.toString() || ""
          }
          fileLabel="Select File"
          fileAccept="image/*,.pdf,.doc,.docx"
          loading={loading}
          onConfirm={handleEditDoc}
          onCancel={closeModal}
        />

        <Modal
          isOpen={modalType === "add"}
          title="Upload An Identification Document"
          message="Please select Identification type and select a file and upload"
          confirmText="Upload"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<Upload size={20} />}
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
          isOpen={modalType === "deleteRef"}
          title="Delete Reference"
          message="Are you sure you want to delete this reference"
          confirmText="Delete"
          cancelText="Cancel"
          confirmColor="danger"
          buttonIcon={<Trash2 size={16} />}
          headerIcon={<User size={20} />}
          loading={loading}
          onConfirm={handleDeleteRef}
          onCancel={closeModal}
        />

        <Modal
          isOpen={modalType === "deleteDoc"}
          title="Delete Document"
          message="Are you sure you want to delete this document"
          confirmText="Delete"
          cancelText="Cancel"
          confirmColor="danger"
          buttonIcon={<Trash2 size={16} />}
          headerIcon={<File size={20} />}
          loading={loading}
          onConfirm={handleDeleteFile}
          onCancel={closeModal}
        />

        <Modal
          isOpen={modalType === "addReference"}
          title="New Reference"
          message="Add a new reference"
          confirmText="Submit"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<CheckCheck size={16} />}
          headerIcon={<FileText size={20} />}
          inputLabel="First Name"
          inputPlaceholder="First Name"
          dropdownLabel="Reference Type"
          dropdownPlaceholder="Select A Reference Type"
          dropdownOptions={refType.map((ref) => ({
            value: ref.referenceTypeId,
            label: ref.typeName,
          }))}
          inputLabel2="Last Name"
          inputPlaceholder2="Last Name"
          inputLabel3="Email"
          inputPlaceholder3="Email"
          inputLabel4="Mobile Number"
          inputPlaceholder4="Mobile Number"
          inputLabel5="Desrciption"
          inputPlaceholder5="Description"
          loading={loading}
          onConfirm={handleAddReference}
          onCancel={closeModal}
        />

        <Modal
          isOpen={modalType === "editRef"}
          title="Update Reference"
          message="Update reference record"
          confirmText="Submit"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<CheckCheck size={16} />}
          headerIcon={<FileText size={20} />}
          inputLabel="First Name"
          inputPlaceholder="First Name"
          defaultInputValue={selectedRef?.firstName || ""}
          dropdownLabel="Reference Type"
          dropdownPlaceholder="Select A Reference Type"
          dropdownOptions={refType.map((ref) => ({
            value: ref.referenceTypeId,
            label: ref.typeName,
          }))}
          defaultDropdownValue={selectedRef?.referenceTypeId}
          inputLabel2="Last Name"
          inputPlaceholder2="Last Name"
          defaultInputValue2={selectedRef?.lastName || ""}
          inputLabel3="Email"
          inputPlaceholder3="Email"
          defaultInputValue3={selectedRef?.email || ""}
          inputLabel4="Mobile Number"
          inputPlaceholder4="Mobile Number"
          defaultInputValue4={selectedRef?.phone || ""}
          inputLabel5="Desrciption"
          inputPlaceholder5="Description"
          defaultInputValue5={selectedRef?.description || ""}
          loading={loading}
          onConfirm={handleEditReference}
          onCancel={closeModal}
        />

        <div className="row">
          {/* Page Header */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-20">
              <h1 className="page-title fs-18 lh-1">Identity Verification</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Identity Verification
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Profile">Profile & Resume</a>
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
                  <div className="col-md-10">
                    <div className="flex-column flex-md-row d-flex align-items-start gap-15">
                      <Shield
                        size={48}
                        color="white"
                        style={{ minWidth: "48px" }}
                      />
                      <div>
                        <h3 className="text-white mb-10">
                          Get verified. Get more noticed.
                        </h3>
                        <p
                          className="text-white mb-10"
                          style={{ opacity: 0.95, fontSize: "15px" }}
                        >
                          Complete identity verification to rank higher for
                          matching jobs. Earn a verified badge once your
                          references are approved.
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
          <div className="d-none col-xl-12">
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
                <h4 className="mb-0">Upload Identity Document</h4>
                {addDoc === 0 ? (
                  <button
                    className="btn btn-success"
                    onClick={() => openAddModal()}
                  >
                    <Plus /> Add Doc
                  </button>
                ) : (
                  <></>
                )}
              </div>
              <div className="card-body mt-5">
                {loading && (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "100px", marginTop: "15px" }}
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
                          marginTop: "15px",
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

                                <div className="d-none gap-10 flex-wrap">
                                  <span
                                    className={`badge ${doc.status === "completed"
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
                            <button
                              onClick={() =>
                                openEditDocModal(doc.identificationId)
                              }
                              className="btn btn-warning"
                              style={{ marginRight: "7px" }}
                            >
                              <Pen size={16} />
                            </button>
                            <button
                              onClick={() =>
                                openDeleteDocsModal(doc.identificationId)
                              }
                              className="btn btn-danger"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="col-md-12">
                            <div style={{ maxWidth: "500px" }}>
                              <img
                                src={`${baseUrl}${doc.filePath}`}
                                alt="documents"
                              />

                              <p
                                className="text-muted mb-5"
                                style={{ fontSize: "14px" }}
                              >
                                <a
                                  href={`${baseUrl}${doc.filePath}`}
                                  target="_blank"
                                  className="text-info"
                                >
                                  {doc.fileName} - {doc.fileType}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {!loading && userDocs.length === 0 && (
                  <div>No Uploaded Docs</div>
                )}
              </div>
            </div>
          </div>

          {/* References */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">
                  References <br />
                  <span className="text-muted small">Provide a Reference</span>
                </h4>
                <button
                  className="btn btn-success"
                  onClick={() => openAddRefModal()}
                >
                  <Plus /> Add Reference
                </button>
              </div>
              <div className="card-body">
                {loading2 && (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "100px", marginTop: "15px" }}
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {!loading &&
                  userRef.length > 0 &&
                  userRef.map((ref) => (
                    <div
                      key={ref.referenceId}
                      className="verification-item mb-20 p-15"
                      style={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        marginTop: "15px",
                      }}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="d-flex align-items-start gap-15">
                            <div>
                              <h5 className="mb-5" style={{ color: "blue" }}>
                                {ref.lastName || "_"} {ref.firstName || "_"}
                              </h5>

                              <p
                                className="text-black mb-5"
                                style={{ fontSize: "14px" }}
                              >
                                {ref.description || "_"}
                              </p>
                              <p
                                className="text-black mb-5"
                                style={{ fontSize: "14px" }}
                              >
                                <Mail size={14} /> {ref.email || "_"}
                              </p>

                              <p
                                className="text-black mb-5"
                                style={{ fontSize: "14px" }}
                              >
                                <Phone size={14} /> {ref.phone || "_"}
                              </p>

                              <span className="badge bg-warning">
                                {ref.referenceType || "_"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 text-md-end mt-md-0 mt-15">
                          <button
                            onClick={() => openEditRefModal(ref.referenceId)}
                            className="btn btn-warning"
                            style={{ marginRight: "7px" }}
                          >
                            <Pen size={16} />
                          </button>
                          <button
                            onClick={() => openDeleteRefModal(ref.referenceId)}
                            className="btn btn-danger"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                {!loading2 && userRef.length === 0 && (
                  <div className="text-center">No Uploaded References</div>
                )}
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
