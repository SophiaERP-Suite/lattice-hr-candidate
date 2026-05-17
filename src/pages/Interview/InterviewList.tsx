import { ArrowRight, Briefcase, ChevronRight, ClipboardCheck, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { JobSeekerAppsInterview } from "../../api/JobApi";
import type { JobApplicationDto } from "../../types/job";
import { NavLink } from "react-router-dom";
import Hashids from "hashids";

function InterviewList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobs, setJobs] = useState<JobApplicationDto[]>([]);
  const [error, setError] = useState("");
  const hashIds = new Hashids("LatticeHrEncode", 10);

  useEffect(() => {
    fetchMyApps();
  }, []);

  const fetchMyApps = async () => {
    try {
      setLoading(true);
      const response = await JobSeekerAppsInterview();
      console.log("res", response);
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

  return (
    <div className="app-content-wrap">
      <div className="container-fluid py-4">
        {/* ===== Page Header ===== */}
        <div className="row mb-4">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Self Interview</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Self Interview
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
          <div className="col-xl-12">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <h5>My Interviews</h5>
              {/* <button className="btn btn-primary px-4">
                + Start New Interview
              </button> */}
            </div>
          </div>{" "}
        </div>

        {/* ===== Interview Cards ===== */}
        {
          loading && !error ?
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading jobs...</p>
            </div>
            :

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
                          <p className="mb-1 d-flex align-items-center text-muted">
                            <MapPin size={16} className="me-2" />
                            {[
                              job.jobData.city,
                              job.jobData.state,
                              job.jobData.country,
                            ]
                              .filter(Boolean)
                              .join(", ") || "Remote"}
                          </p>

                          {/* Spacer pushes button down */}
                          <div className="mt-auto d-flex justify-content-between align-items-center">
                            <NavLink className="btn btn-warning" to={`../TakeInterview/${hashIds.encode(Number(job?.jobData.jobInterviewId))}/${hashIds.encode(Number(job?.jobData.jobId))}`}>
                              Take Interview <ArrowRight size={14} />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <div className="mb-3">
                    <ClipboardCheck size={50} />


                  </div>
                  <h5 className="text-dark mb-2">No interviews found</h5>
                  <p className="text-black mb-3">
                    Find jobs you like here.
                  </p>
                  <NavLink to={"../Jobs"} className="btn btn-success">
                    <Briefcase size={16} /> Find Jobs
                  </NavLink>
                </div>
              )}
            </div>}
      </div>
    </div>
  );
}

export default InterviewList;
