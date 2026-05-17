import { Briefcase, ChevronRight, MapPin, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { SavedJobs, UnsaveJob } from "../../api/JobApi";
import type { JobSavedDto } from "../../types/job";
import Hashids from "hashids";
import { NavLink } from "react-router-dom";
import Modal from "../../components/modal";
import { toast } from "react-toastify";

function JobsSaved() {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobId, setJobId] = useState<number>(0);
  const [jobs, setJobs] = useState<JobSavedDto[]>([]);
  const [error, setError] = useState("");
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  useEffect(() => {
    fetchMyApps();
  }, []);

  const fetchMyApps = async () => {
    try {
      setLoading(true);
      const response = await SavedJobs();
      console.log("res job saved", response);
      if (!response) {
        return;
      }
      setJobs(response);
    } catch {
      setError("Could not get fetch details");
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = (jobId: number) => {
    if (jobId === 0 || !jobId) {
      setIsUploadModalOpen(true);
      toast.error("Invalid job selected")
    }
    setJobId(Number(jobId))
    setIsUploadModalOpen(true);
  };

  const handleDeleteSaveJob = async () => {
    try {
      setLoading(true);
      const response = await UnsaveJob(jobId);

      if (response.status === 200) {
        toast.success("Job deleted successfully")
      } else {
        toast.error("Failed to delete job")
      }

      console.log("delete", response);
    } catch {
      toast.error("Failed to delete job")
      setLoading(false);
    } finally {
      setIsUploadModalOpen(false);
      fetchMyApps();
    }
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0">Saved Jobs</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Saved Jobs
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

          <Modal
            isOpen={isUploadModalOpen}
            title="Delete Saved Jobs"
            message="Are you sure you want delete this job?"
            confirmText="Delete"
            cancelText="Cancel"
            confirmColor="danger"
            buttonIcon={<Trash size={16} />}
            headerIcon={<Trash size={20} />}
            loading={loading}
            onConfirm={handleDeleteSaveJob}
            onCancel={() => setIsUploadModalOpen(false)}
          />

          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-between flex-wrap gap-3">
                <h4 className="d-flex-items gap-10 mb-0">Saved Jobs</h4>
                <div className="d-flex flex-wrap gap-15">
                  <NavLink className="btn btn-success text-white" to={"../Jobs"}>
                    <Briefcase size={16} />  Find Jobs
                  </NavLink>
                  <div className="d-none dataTables-sorting-control">
                    <select className="form-select sorting-dropdown">
                      <option value="">Sort by:</option>
                      <option value="1_asc">ID (Low to High)</option>
                      <option value="1_desc">ID (High to Low)</option>
                      <option value="2_asc">Name (A-Z)</option>
                      <option value="2_desc">Name (Z-A)</option>
                      <option value="5_asc">Company (A-Z)</option>
                      <option value="5_desc">Company (Z-A)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body pt-15">
                {jobs && jobs.length > 0 ? (
                  <div className="row g-4">
                    {jobs.map((job) => (
                      <div
                        className="col-md-6 col-lg-4 col-xl-3"
                        key={job.jobData.jobId}
                      >
                        <div className="card h-100 shadow-sm border-0 position-relative">
                          {/* Company Logo */}
                          <div className="text-center pt-3">
                            <div className="avatar avatar-big mx-auto">
                              <img
                                src={`${import.meta.env.VITE_API_URL}/${job.jobData.jobPhoto}`}
                                alt="Company Logo"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-2">
                            <button
                              className="btn btn-danger border-0"
                              // onClick={() => handleDeleteSaveJob(job.jobId)}
                              onClick={() => deleteJob(job.jobData.jobId)}
                            >
                              {loading ? (
                                <div className="text-center py-2">
                                  <div
                                    className="spinner-border text-primary"
                                    role="status"
                                  >
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <Trash size={14} />
                              )}
                            </button>
                          </div>
                          {/* Card Body */}
                          <div className="card-body d-flex flex-column text-start">
                            {/* Job Title */}
                            <h5 className="fw-semibold mb-2">
                              {job.jobData.jobTitle}
                            </h5>

                            {/* Employer */}
                            <p className="mb-1 text-primary d-flex align-items-center">
                              <Briefcase size={16} className="me-2" />
                              {job.jobData.employerDetails?.businessName ||
                                "N/A"}
                            </p>

                            {/* Location */}
                            <p className="mb-1 d-flex align-items-center">
                              <MapPin size={16} className="me-2" />
                              {[
                                job.jobData.city,
                                job.jobData.state,
                                job.jobData.country,
                              ]
                                .filter(Boolean)
                                .join(", ") || "Remote"}
                            </p>

                            {/* Posted Date */}
                            <p className="mb-3 text small">
                              Posted on{" "}
                              {job.jobData.dateCreated
                                ? new Date(
                                  job.jobData.dateCreated,
                                ).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })
                                : "N/A"}
                            </p>

                            {/* Posted Date */}
                            <p className="mb-3 text small">
                              Expire on{" "}
                              {job.jobData.jobExpiration
                                ? new Date(
                                  job.jobData.jobExpiration,
                                ).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })
                                : "N/A"}
                            </p>

                            {/* Spacer pushes button down */}
                            <div className="mt-auto d-flex justify-content-between align-items-center">
                              {/* Job Type Badge */}
                              <span
                                className={`badge ${job.jobData.jobType === "Full-time"
                                  ? "bg-info"
                                  : job.jobData.jobType === "Part-time"
                                    ? "bg-info"
                                    : job.jobData.jobType === "Contract"
                                      ? "bg-warning text-dark"
                                      : job.jobData.jobType === "Internship"
                                        ? "bg-secondary"
                                        : "bg-primary"
                                  }`}
                              >
                                {job.jobData.jobType || "Not Specified"}
                              </span>

                              {job.jobData.hasApplied !== true ? (
                                <a
                                  href={`./jobDetails/${hashIds.encode(
                                    String(job.jobId),
                                  )}`}
                                  className="btn btn-warning btn-sm"
                                >
                                  Apply Now
                                </a>
                              ) : (
                                <span className="badge bg-success">Applied</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <div className="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="bi bi-briefcase text-muted"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 9.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    </div>
                    <h5 className="text-dark mb-2">No jobs found</h5>
                    <p className="text-black mb-3">
                      Find jobs you like here.
                    </p>
                    <NavLink to={"../Jobs"} className="btn btn-success">
                      <Briefcase size={16} /> Find Jobs
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsSaved;
