import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Clock,
  DollarSign,
  MapPin,
} from "lucide-react";

function JobDetails() {
  const job = {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Lagos, Nigeria",
    type: "Full-time",
    posted: "2 days ago",
    salary: "₦350,000 - ₦500,000 / month",
    about:
      "TechNova Solutions is an innovative technology company focused on delivering modern, scalable software solutions for enterprises.",
    description:
      "We are looking for a Frontend Developer proficient in React, Bootstrap, and modern web technologies. You will work with our design and backend teams to build responsive user interfaces.",
    requirements: [
      "Strong knowledge of React and JavaScript (ES6+)",
      "Familiarity with RESTful APIs and version control (Git)",
      "Experience with Bootstrap or Tailwind CSS",
      "Good understanding of UI/UX design principles",
      "Ability to work collaboratively in a remote environment",
    ],
    benefits: [
      "Remote work flexibility",
      "Health insurance coverage",
      "Paid leave and annual bonuses",
      "Career growth and learning support",
    ],
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0"> Job Details</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Job Details
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Jobs</a>
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
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between align-items-start">
                  <div style={{ textAlign: "left" }}>
                    <h4 className="fw-semibold text-primary mb-2">
                      {job.company}
                    </h4>
                    <p className="mb-2">
                      <Briefcase size={15} className="me-1" /> Software
                      Development
                    </p>
                    <p className="mb-1">
                      <MapPin size={15} className="me-1" /> {job.location}
                    </p>
                    <p className="mb-1">
                      <Clock size={15} className="me-1" /> {job.posted}
                    </p>
                    <p className="mb-3">
                      <DollarSign size={15} className="me-1" /> {job.salary}
                    </p>{" "}
                    <p>
                      <span className="badge bg-success fs-6">{job.type}</span>
                    </p>
                  </div>

                  <div className="d-flex flex-column  flex-1 text-end mt-3 mt-md-0">
                    <button className="btn btn-primary btn-md">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="fw-bold mb-2">About the Company</h5>
                <p className="text-dark">{job.about}</p>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            {/* ===== Job Description ===== */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="fw-bold mb-3">Job Description</h5>
                <p>{job.description}</p>

                <hr />

                <h6 className="fw-semibold mt-4 mb-2">Requirements:</h6>
                <ul className="mb-3">
                  {job.requirements.map((req, index) => (
                    <li key={index}>
                      <ArrowRight size={13} /> {req}
                    </li>
                  ))}
                </ul>

                <hr />

                <h6 className="fw-semibold mt-4 mb-2">Benefits:</h6>
                <ul>
                  {job.benefits.map((ben, index) => (
                    <li key={index}>
                      <ArrowRight size={13} /> {ben}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
