import { Briefcase, ChevronRight, Clock, MapPin } from "lucide-react";

function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Lagos, Nigeria",
      type: "Full-time",
      posted: "2 days ago",
      description: "Build responsive web apps with React and Bootstrap.",
    },
    {
      id: 2,
      title: "Customer Support Officer",
      company: "BrightServe Ltd.",
      location: "Abuja, Nigeria",
      type: "Remote",
      posted: "5 days ago",
      description: "Provide excellent customer service and manage inquiries.",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "SecureCheck",
      location: "Remote",
      type: "Contract",
      posted: "1 week ago",
      description:
        "Work on scalable APIs and manage background check integrations.",
    },
  ];

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0"> Jobs</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Jobs
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
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search job title or company..."
                    />
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Locations</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Remote</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Job Types</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Remote</option>
                      <option>Contract</option>
                    </select>
                  </div>
                  <div className="col-md-2 d-grid">
                    <button className="btn btn-primary">Filter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            {/* ===== Job Listings ===== */}
            <div className="row g-4">
              {jobs.map((job) => (
                <div className="col-md-6 col-lg-4" key={job.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div
                      className="card-body d-flex flex-column"
                      style={{ textAlign: "left" }}
                    >
                      <h5 className="fw-semibold mb-2 ">{job.title}</h5>
                      <p className="mb-1 text-primary">
                        <Briefcase size={16} className="me-1" />
                        {job.company}
                      </p>
                      <p className="mb-1">
                        <MapPin size={16} className="me-1" />
                        {job.location}
                      </p>
                      <p className="mb-3">
                        <Clock size={16} className="me-1" />
                        {job.posted}
                      </p>

                      <p className="flex-grow-1">{job.description}</p>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span
                          className={`badge ${
                            job.type === "Full-time"
                              ? "bg-success"
                              : job.type === "Remote"
                              ? "bg-info "
                              : "bg-warning "
                          }`}
                        >
                          {job.type}
                        </span>
                        <a
                          href="JobDetails"
                          className="btn btn-outline-primary btn-sm"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
