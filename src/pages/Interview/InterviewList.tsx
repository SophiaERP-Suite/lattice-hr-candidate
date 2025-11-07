import { ArrowRight, ChevronRight } from "lucide-react";

function InterviewList() {
  const interviews = [
    {
      id: 1,
      title: "Frontend Developer Screening",
      status: "Not Started",
      progress: 0,
    },
    {
      id: 2,
      title: "Customer Service Evaluation",
      status: "In Progress",
      progress: 50,
    },
    { id: 3, title: "Technical Interview", status: "Completed", progress: 100 },
  ];

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
        <div className="row">
          {interviews.map((item) => (
            <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
              {/* <Link
                to={`/SelfInterview/${item.id}`}
                className="text-decoration-none"
              > */}
              <a
                href="TakeInterview"
                className="text-decoration-none"
                style={{ transition: "background 0.2s" }}
                // onMouseEnter={(e) =>
                //   (e.currentTarget.style.backgroundColor = "#000")
                // }
                // onMouseLeave={(e) =>
                //   (e.currentTarget.style.backgroundColor = "transparent")
                // }
              >
                <div className="card shadow-sm border-0 hover-shadow h-100">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="fw-semibold text-dark mb-1">{item.title}</h5>
                    <small
                      className={`fw-medium ${
                        item.status === "Completed"
                          ? "text-success"
                          : item.status === "In Progress"
                          ? "text-warning"
                          : "text-muted"
                      }`}
                    >
                      {item.status}
                    </small>

                    <div className="mt-3">
                      <div
                        className="progress"
                        style={{ height: "6px", borderRadius: "3px" }}
                      >
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <small className="text-muted">
                        {item.progress}% complete
                      </small>
                    </div>
                    <a
                      href="TakeInterview"
                      className="text-decoration-none btn btn-warning mt-4"
                      style={{ transition: "background 0.2s" }}
                      // onMouseEnter={(e) =>
                      //   (e.currentTarget.style.backgroundColor = "#000")
                      // }
                      // onMouseLeave={(e) =>
                      //   (e.currentTarget.style.backgroundColor = "transparent")
                      // }
                    >
                      Continue <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
                {/* </Link> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewList;
