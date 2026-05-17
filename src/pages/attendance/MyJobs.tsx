import { Briefcase, ChevronRight, Coins, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import { GetAcceptedOffers } from "../../api/JobApi";
import type { JobOffer } from "../../types/AcceptedJobOffer";
import { NavLink } from "react-router-dom";

function MyJobs() {
  const [jobs, setJobs] = useState<JobOffer[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAcceptedJobs();
  }, []);

  const fetchAcceptedJobs = async () => {
    try {
      setIsLoading(true);
      const response = await GetAcceptedOffers();
      console.log("jjobb", response)
      if (response) {
        setJobs(response.data || []);
      }
    } catch (error) {
      console.error("Error fetching accepted jobs:", error);
      setJobs([]);
      toast.error("Failed to fetch jobs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClockIn = async (jobId: number) => {
    try {
      toast.success("Clocked in successfully");
      // You might want to redirect or update UI
    } catch {
      toast.error("Failed to clock in");
    }
  };

  const hashIds = new Hashids("LatticeHrEncode", 10);

  return (
    <div className="app-content-wrap">
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0">My Jobs</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">My Jobs</li>
                  <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                  <li className="breadcrumb-item"><NavLink to="/dashboard">Home</NavLink></li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Job Listings */}
          <div className="col-xl-12">
            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading your jobs...</p>
              </div>
            ) : jobs && jobs.length > 0 ? (
              <>
                <div className="row g-4">
                  {jobs.map((job) => (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={job.job.jobId}>
                      <div className="card h-100 shadow-sm border-0">
                        {/* Company Logo */}
                        <div className="text-center pt-3">
                          <div className="avatar avatar-big mx-auto">
                            <img
                              src={job.employer.employerLogo}
                              alt={job.employer.businessName}
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="card-body d-flex flex-column text-start">
                          <h5 className="fw-semibold mb-2">{job.job.jobTitle}</h5>

                          <p className="mb-1 text-primary d-flex align-items-center">
                            <Briefcase size={16} className="me-2" />
                            {job.employer.businessName}
                          </p>

                          <p className="mb-3 text-muted small">
                            {job.job.jobType || "Not Specified"}
                          </p>

                          {/* Clock In Button */}
                          <div className="mt-auto">
                            <NavLink
                              to={(`/ClockIn/${hashIds.encode(job.employer.employerId.toString())}`)}
                              className="btn btn-success w-100 mb-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-clock me-2"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                              </svg>
                              Clock In
                            </NavLink>
                            <NavLink
                              to={(`/Payslip/${hashIds.encode(job.employer.employerId.toString())}`)}
                              className="btn btn-info w-100"
                            >
                              <Coins size={16} />
                              Payslip
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
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
                <h5 className="text-dark mb-2">No accepted jobs yet</h5>
                <p className="text-muted mb-3">
                  You haven't been accepted to any jobs. Keep applying!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJobs;