import { ChevronRight, Upload, FileText, Trash2, EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import { getUploadedResume, uploadResumeDoc } from "../../api/ResumeApi";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface ResumeUpload {
  resumeUploadId: number;
  fileName: string;
  filePath: string;
  fileSize: string;
  dateCreated: string;
}

function Resume() {
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const [resumeData, setResumeData] = useState<ResumeUpload | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [upload, setUpload] = useState("Upload");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserCv();
  }, []);

  const fetchUserCv = async () => {
    try {
      const userResume = await getUploadedResume();

      if (!userResume) {
        return;
      }

      setUpload("Update");
      setResumeData(userResume);
      console.log(userResume);
    } catch {
      setResumeData(null);
      setUpload("Upload");
    } finally {
      setLoading2(false);
    }
  };

  const handleViewResume = () => {
    if (resumeData) {
      window.open(resumeData.filePath, "_blank");
    }
  };

  const formatFileSize = (bytes: string): string => {
    const size = parseInt(bytes);
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleUploadResume = async (data: { file?: File }) => {
    if (!data.file) {
      alert("Please select a file");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("ResumeFile", data.file);

    console.log("data for upload", formData);

    try {
      const uploadResume = await uploadResumeDoc(formData);

      if (!uploadResume) {
        return;
      }

      setIsUploadModalOpen(false);
      if (returnTo) {
        navigate(returnTo);
      } else {
        fetchUserCv;
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload resume");
    } finally {
      setLoading(false);
      fetchUserCv();
    }
  };

  const handleDeleteResume = () => {
    if (confirm("Are you sure you want to delete your resume?")) {
    }
  };

  const fileExtension =
    resumeData?.filePath?.split(".").pop()?.toLowerCase() ?? "";

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Resume</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Resume
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

          {/* Action Buttons */}
          <div className="col-xl-12 col-lg-12">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
              <h4 className="fw-bold mb-0">Your Resume</h4>
              <div className="d-flex gap-2">
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="btn btn-success"
                >
                  <Upload size={16} className="me-2" />
                  {upload} Resume
                </button>
                <a href="CvBuilder" className="d-none btn btn-primary">
                  <i className="bi bi-file-earmark-plus me-2"></i>
                  Build your CV
                </a>
              </div>
            </div>
          </div>

          {/* Uploaded Resume Card */}
          {resumeData === null && (
            <div className="col-xl-12 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div>No uploaded Resume </div>
                </div>
              </div>
            </div>
          )}
          {resumeData && (
            <div className="col-xl-12 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-3 rounded">
                        <FileText size={32} />
                      </div>
                      <div>
                        <h6 className="mb-1 text-info fw-semibold">
                          {" "}
                          {resumeData.fileName}
                        </h6>
                        <p className="mb-0 small">Uploaded Resume </p>
                        <p className="mb-0 small">
                          {formatFileSize(resumeData.fileSize)} • Uploaded on{" "}
                          {formatDate(resumeData.dateCreated)}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      {/* <button
                        onClick={handleViewResume}
                        className="btn btn-sm btn-outline-primary"
                      >
                        <Eye size={16} className="me-1" />
                        View
                      </button> */}
                      {/* <button
                        onClick={handleDownloadResume}
                        className="btn btn-sm btn-outline-success"
                      >
                        <Download size={16} className="me-1" />
                        Download
                      </button> */}
                      <button
                        onClick={handleDeleteResume}
                        className="d-none btn btn-sm btn-outline-danger"
                      >
                        <Trash2 size={16} className="me-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    {["jpg", "jpeg", "png", "webp"].includes(fileExtension) && (
                      <img
                        src={`${import.meta.env.VITE_API_URL}${resumeData.filePath}`}
                        alt={resumeData.fileName}
                        style={{ maxWidth: "100%", maxHeight: "400px" }}
                      />
                    )}

                    {fileExtension === "pdf" && (
                      <iframe
                        src={`${import.meta.env.VITE_API_URL}${resumeData.filePath}`}
                        title={resumeData.fileName}
                        width="100%"
                        height="600px"
                      />
                    )}

                    {["doc", "docx"].includes(fileExtension) && (
                      <a
                        href={`${import.meta.env.VITE_API_URL}${resumeData.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <EyeIcon /> View {resumeData.fileName}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CV Builder Sample */}
          <div className="d-none col-xl-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-semibold">CV Builder Preview</h5>
                  <span
                    className="badge bg-info"
                    style={{ marginLeft: "10px" }}
                  >
                    Sample Template
                  </span>
                </div>
              </div>
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center border-bottom pb-3 mb-4">
                  <h2 className="fw-bold mb-1 text-uppercase">John Parker</h2>
                  <p className="mb-1 text-danger">
                    john.parker@example.com | +234 803 456 7890
                  </p>
                  <p className="mb-0">15 Unity Avenue, Ikeja, Lagos, Nigeria</p>
                </div>

                {/* Summary */}
                <section style={{ textAlign: "left" }} className="mb-4">
                  <h5 className="fw-bold text-primary border-bottom pb-1">
                    Professional Summary
                  </h5>
                  <p className="mt-2">
                    A dedicated Compliance and Investigation Specialist with 5+
                    years of experience conducting due diligence, handling
                    employee verification, and managing compliance audits for
                    corporate clients. Skilled in report preparation, data
                    accuracy, and confidentiality.
                  </p>
                </section>

                {/* Education */}
                <section style={{ textAlign: "left" }} className="mb-4">
                  <h5 className="fw-bold text-primary border-bottom pb-1">
                    Education
                  </h5>
                  <p className="mt-2">
                    <strong>B.Sc in Criminology & Security Studies</strong>
                    <br />
                    University of Lagos — 2017
                  </p>
                </section>

                {/* Experience */}
                <section style={{ textAlign: "left" }} className="mb-4">
                  <h5 className="fw-bold text-primary border-bottom pb-1">
                    Work Experience
                  </h5>
                  <div className="mt-2">
                    <h6 className="fw-semibold mb-0">
                      Compliance Manager — SecureCheck Ltd
                    </h6>
                    <small className="text-muted">2019 – Present</small>
                    <ul className="mt-2">
                      <li>
                        Oversees background checks and verification processes
                        for over 200 clients.
                      </li>
                      <li>
                        Coordinates with field agents to ensure timely reporting
                        and accuracy.
                      </li>
                      <li>
                        Improved compliance workflow by 25% through process
                        optimization.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Skills */}
                <section style={{ textAlign: "left" }} className="mb-4">
                  <h5 className="fw-bold text-primary border-bottom pb-1">
                    Key Skills
                  </h5>
                  <ul className="mt-2 row row-cols-2 list-unstyled">
                    <li>✔ Report Writing</li>
                    <li>✔ Data Verification</li>
                    <li>✔ Compliance Management</li>
                    <li>✔ Excel & Data Entry</li>
                    <li>✔ Communication</li>
                    <li>✔ Team Leadership</li>
                  </ul>
                </section>

                {/* References */}
                <section style={{ textAlign: "left" }}>
                  <h5 className="fw-bold text-primary border-bottom pb-1">
                    References
                  </h5>
                  <p className="mt-2">Available upon request.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        title="Upload Your Resume"
        message="Upload your resume in PDF, DOC, or DOCX format (Max 5MB)"
        confirmText="Upload"
        cancelText="Cancel"
        confirmColor="success"
        buttonIcon={<Upload size={16} />}
        headerIcon={<FileText size={20} />}
        fileLabel="Select Resume File"
        fileAccept=".pdf,.doc,.docx"
        loading={loading}
        onConfirm={handleUploadResume}
        onCancel={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
}

export default Resume;
