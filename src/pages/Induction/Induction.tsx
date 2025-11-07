// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ArrowRight, ChevronRight } from "lucide-react";

function Induction() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Induction</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Induction
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
            {/* ===== Header Section ===== */}

            {/* ===== Induction Overview ===== */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Welcome to Your Induction!</h5>
                <p className="text-muted mb-3">
                  This module helps you get familiar with our company’s culture,
                  ethics, policies, and your specific job responsibilities.
                  Complete each section below to progress in your onboarding
                  journey.
                </p>

                {/* Progress Bar */}
                <div className="progress mb-2" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <small className="text-muted">Progress: 45% completed</small>
                <div>
                  <a
                    href="InductionModules"
                    className="btn btn-warning"
                    style={{ marginTop: "30px" }}
                  >
                    Continue <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Induction;
