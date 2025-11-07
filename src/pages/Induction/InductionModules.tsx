// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight } from "lucide-react";

function InductionModules() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Induction Modules</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Induction Modules
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="Induction">Induction</a>
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
            <div className="card ">
              <h6>Continue your Induction</h6>
            </div>
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div
                    className="card-body d-flex flex-column"
                    style={{ textAlign: "left" }}
                  >
                    <h5 className="fw-semibold mb-2">Company Overview</h5>
                    <p className="text-muted flex-grow-1">
                      Learn about our mission, vision, values, and
                      organizational structure.
                    </p>
                    <button className="btn btn-primary mt-auto">
                      Start Module
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div
                    className="card-body d-flex flex-column"
                    style={{ textAlign: "left" }}
                  >
                    <h5 className="fw-semibold mb-2">Workplace Policies</h5>
                    <p className="text-muted flex-grow-1">
                      Understand company policies, ethics, and compliance
                      guidelines.
                    </p>
                    <button className="btn btn-outline-primary mt-auto">
                      Continue
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div
                    className="card-body d-flex flex-column"
                    style={{ textAlign: "left" }}
                  >
                    <h5 className="fw-semibold mb-2">
                      Job Role InductionModules
                    </h5>
                    <p className="text-muted flex-grow-1">
                      Dive into department-specific learning materials and skill
                      InductionModules.
                    </p>
                    <button className="btn btn-outline-secondary mt-auto">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div
                    className="card-body d-flex flex-column"
                    style={{ textAlign: "left" }}
                  >
                    <h5 className="fw-semibold mb-2">Health & Safety</h5>
                    <p className="text-muted flex-grow-1">
                      Learn safety procedures and best practices in the
                      workplace.
                    </p>
                    <button className="btn btn-primary mt-auto">
                      Start Module
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div
                    className="card-body d-flex flex-column"
                    style={{ textAlign: "left" }}
                  >
                    <h5 className="fw-semibold mb-2">
                      Communication InductionModules
                    </h5>
                    <p className="text-muted flex-grow-1">
                      Improve your interpersonal and professional communication
                      skills.
                    </p>
                    <button className="btn btn-outline-primary mt-auto">
                      Start Now
                    </button>
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

export default InductionModules;
