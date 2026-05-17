import { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import {
  BriefcaseBusiness,
  CheckCheck,
  ChevronRight,
  FileText,
  MapPin,
  Upload,
} from "lucide-react";
import type { JobDto } from "../../types/job";
import { ApplyJob, GetJob } from "../../api/JobApi";
import { getUploadedResume } from "../../api/ResumeApi";
import type { ResumeUpload } from "../profile/Resume";
import Modal from "../../components/modal";
import DOMPurify from "dompurify";

const JobDetails = () => {
  const params = useParams();
  const [job, setJob] = useState<JobDto>();
  const [pageLoading, setPageLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const [resumeData, setResumeData] = useState<ResumeUpload | null>(null);
  const [resumeUploaded, setResumeUploaded] = useState<boolean>(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [cvLoading, setCvLoading] = useState(true);
  const navigate = useNavigate()

  const hashId = useMemo(() => {
    const decoded = hashIds.decode(String(params.id));
    return decoded.length > 0 ? decoded[0] : null;
  }, [params.id]);

  if (!hashId) {
    setError("Invalid job link");
    return;
  }

  useEffect(() => {
    fetchJob();
    fetchUserCv();
  }, []);

  const fetchUserCv = async () => {
    try {
      setCvLoading(true);
      const userResume = await getUploadedResume();

      if (userResume) {
        setResumeData(userResume);
        setResumeUploaded(true);
        setErrorMsg("");
      } else {
        setResumeData(null);
        setResumeUploaded(false);
        setErrorMsg("You have not uploaded your resume");
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
      setResumeData(null);
      setResumeUploaded(false);
      setErrorMsg("Failed to load your resume");
    } finally {
      setCvLoading(false);
    }
  };

  const applyJob = () => {
    if (!resumeUploaded || !resumeData) {
      setErrorMsg("You have not uploaded your resume");
      setResumeUploaded(false);

      return;
    }

    setIsUploadModalOpen(true);
  };

  const fetchJob = async () => {
    try {
      if (!hashId) {
        setError("Invalid job link.");
        return;
      }

      setPageLoading(true);
      const response = await GetJob(Number(hashId));

      if (!response) {
        return;
      } else {
        setJob(response.data);
      }
    } catch {
      setError("Could not get fetch details");
    } finally {
      setPageLoading(false);
    }
  };

  const HandleJobApply = async (coverLetter?: string) => {
    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("JobId", hashId.toString());
      formData.append("CoverLetter", coverLetter ?? "");

      const jobApplication = await ApplyJob(formData);

      if (jobApplication.statusCode === 400) {
        toast.error(jobApplication.message);
        return;
      }

      if (jobApplication.statusCode === 200 || jobApplication.statusCode === 201) {
        toast.success(jobApplication.message);
        setIsUploadModalOpen(false);
        setTimeout(() => navigate("/Jobs"), 1500);
      }
    } catch {
      toast.error("Job Application Failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="app-content-wrap">
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="spinner-border text-primary mt20 d-flex justify-content-center align-items-center"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!pageLoading && error) {
    return (
      <div className="app-content-wrap">
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body pt-15">
                  <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                    <div>{error}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        {" "}
        <ToastContainer />
        {/* Upload Modal */}
        <Modal
          isOpen={isUploadModalOpen}
          title="Apply Now"
          message={job?.jobTitle}
          resume={resumeData?.fileName}
          confirmText="Submit"
          jobId={params.id}
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<CheckCheck size={16} />}
          headerIcon={<FileText size={20} />}
          inputPlaceholder5="Cover Letter"
          inputLabel5="Cover Letter (Optional)"
          loading={submitting}
          onConfirm={({ inputValue5 }: { inputValue5?: string }) =>
            HandleJobApply(inputValue5)
          }
          onCancel={() => setIsUploadModalOpen(false)}
        />

        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Job Details</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    <NavLink to="/job-details">
                      Job Details{" "}
                    </NavLink>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    <NavLink to="/Jobs">
                      Job Management{" "}
                    </NavLink>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Home</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="">
                  <h2 className="mb-15">{job?.jobTitle}</h2>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-big">
                      <img
                        src={`${import.meta.env.VITE_API_URL}/${job?.jobPhoto}`}
                        alt="Company Logo"
                        className="radius-50 border"
                      />
                    </div>
                    <div>
                      <h4 className="mb-5">
                        <span
                          className={`badge me-2 d-none
                          ${job?.published === true ? "bg-success" : "bg-warning"}
                          `}
                        >
                          {" "}
                          {job?.published === true
                            ? "Published"
                            : "UnPublished"}
                        </span>
                      </h4>
                      <div className="text-black">
                        <span className="me-3">
                          <MapPin size={14} /> {job?.city}, {job?.state},{" "}
                          {job?.country}
                        </span>
                        <span>
                          <BriefcaseBusiness size={14} /> {job?.jobType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body pt-15">
                <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                  <div></div>
                  <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-10">
                    {resumeUploaded === false && (
                      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-10">
                        <span className="text-danger">{errorMsg}</span>
                        <NavLink
                          to={`../resume?returnTo=../jobDetails/${params.id}`}
                          className="btn btn-info btn-md"
                        >
                          <Upload className="me-2" size={16} />
                          Upload Resume
                        </NavLink>
                      </div>
                    )}

                    <button
                      disabled={cvLoading || !resumeUploaded}
                      className="btn btn-warning"
                      onClick={applyJob}
                    >
                      {cvLoading ? "Checking resume..." : "Apply"}
                    </button>
                  </div>
                </div>

                <div className="mb-20">
                  <h4 className="mb-20">Job Details</h4>
                  <hr />
                  <div className="row mt-15" style={{ fontSize: "16px" }}>
                    <div className="col-md-6">
                      <p className="mb-5">
                        <strong>Salary:</strong>{" "}
                        {job?.jobAmount?.toLocaleString("en-NG", {
                          style: "currency",
                          currency: job?.currency || "NGN",
                        })}
                      </p>
                      <p className="mb-5">
                        <strong>Job Type:</strong> Full-time
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-5">
                        <strong>Date Created:</strong>{" "}
                        {job?.dateCreated &&
                          new Date(job.dateCreated).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                      </p>
                      <p className="mb-5">
                        <strong>Expiry Date:</strong>{" "}
                        {job?.jobExpiration &&
                          new Date(job.jobExpiration).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-5">
                        <strong>Grade Required:</strong> {job?.grade}
                      </p>
                      <p className="mb-5">
                        <strong>Location:</strong> {job?.city}, {job?.state},{" "}
                        {job?.country}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-5">
                        <strong>Job Sector:</strong> {job?.jobSector}
                      </p>
                      <p className="mb-5">
                        <strong>Job Category:</strong> {job?.jobCategory}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-5">
                        <strong>Work Mode:</strong> {job?.workMode}
                      </p>
                      <p className="mb-5">
                        <strong>View Scope:</strong> {job?.jobViewScope}
                      </p>
                    </div>

                    {/* <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Start Date:</strong> Nov 15, 2025
                        </p>
                        <p className="mb-0">
                          <strong>End Date:</strong> Jan 31, 2026
                        </p>
                      </div> */}
                    {job?.jobType === "Shift" && (
                      <>
                        <div className="col-md-6">
                          <p className="mb-5">
                            <strong>Shift Start Time:</strong>{" "}
                            {job?.shiftStartTime}
                          </p>
                          <p className="mb-5">
                            <strong>Shift End Time:</strong> {job?.shiftEndTime}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="mb-5">
                            <strong>Duration:</strong> 8 hours
                          </p>
                          <p className="mb-0">
                            <strong>Shift Type:</strong> Day
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="mb-15">
                  <h4 className="mb-15">Job Description</h4>
                  <hr />
                  <p
                    className="mt-15"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(job?.jobDescription || "")
                    }}
                  ></p>
                </div>

                <div className="mb-15">
                  <h4 className="mb-15">Job Requirements</h4>
                  <hr />
                  <p
                    className="mt-15"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(job?.jobRequirement || "")
                    }}
                  ></p>
                </div>

                <div className="mb-15">
                  <h4 className="mb-15">Job Responsibility</h4>
                  <hr />
                  <p
                    className="mt-15"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(job?.jobResponsibility || "")
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
