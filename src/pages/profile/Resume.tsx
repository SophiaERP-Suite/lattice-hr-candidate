// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight } from "lucide-react";
// import john from "../../assets/images/avatar/avatar-thumb-001.webp";

function Resume() {
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
                    <a href="Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold">Your Resume</h4>
              <a href="CvBuilder" className="btn btn-primary">
                <i className="bi bi-file-earmark-plus me-2"></i>Build your CV
              </a>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="bg-white shadow rounded p-5 mx-auto">
              {/* Header */}
              <div className="text-center border-bottom pb-3 mb-4">
                <h2 className="fw-bold mb-1 text-uppercase">John Parker</h2>
                <p className="mb-1 text-danger">
                  john.parker@example.com | +234 803 456 7890
                </p>
                <p className="mb-0">15 Unity Avenue, Ikeja, Lagos, Nigeria</p>
              </div>

              {/* Summary */}
              <section style={{textAlign: "left"}} className="mb-4">
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
              </section >

              {/* Education */}
              <section style={{textAlign: "left"}} className="mb-4">
                <h5 className="fw-bold text-primary border-bottom pb-1">
                  Education
                </h5>
                <p className="mt-2">
                  <strong>B.Sc in Criminology & Security Studies</strong>
                  <br />
                  University of Lagos — 2017
                </p>
              </section >

              {/* Experience */}
              <section style={{textAlign: "left"}} className="mb-4">
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
                      Oversees background checks and verification processes for
                      over 200 clients.
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
              </section >

              {/* Skills */}
              <section style={{textAlign: "left"}} className="mb-4">
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
              </section >

              {/* References */}
              <section style={{textAlign: "left"}}>
                <h5 className="fw-bold text-primary border-bottom pb-1">
                  References
                </h5>
                <p className="mt-2">Available upon request.</p>
              </section >
            </div>
          </div>

          {/* <!-- More cards --> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
