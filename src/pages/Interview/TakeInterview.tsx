import { useState } from "react";
import { ChevronRight } from "lucide-react";

function TakeInterview() {
  const questions = [
    "Tell us about yourself.",
    "Describe a time you faced a challenge at work.",
    "Why should we hire you?",
  ];

  const [current, setCurrent] = useState(0);
  // const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  // const handleAnswer = (e) => {
  //   setAnswers({ ...answers, [current]: e.target.value });
  // };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid py-4">
        {/* ===== Page Header ===== */}
        <div className="row mb-4">
          <div className="col-xl-12 w-100">
            <div className="page-title-box d-flex justify-content-between align-items-center flex-wrap gap-2">
              <h1 className="page-title fs-4 lh-1 mb-0">Self Interview</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="Dashboard" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">Self Interview</li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    Take Interview
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-xl-12">
            <div
              className="card shadow-sm p-4 border-0"
              style={{
                width: "100%",
                minHeight: "calc(100vh - 180px)", // full height minus header
                backgroundColor: "#fff",
              }}
            >
              <h4 className="fw-bold mb-3">Question {current + 1}</h4>
              <p className="fs-5">{questions[current]}</p>

              <textarea
                className="form-control mb-4"
                rows={6}
                placeholder="Write your answer here..."
                // value={answers[current] || ""}
                // onChange={handleAnswer}
              ></textarea>

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-secondary px-4"
                  onClick={handlePrev}
                  disabled={current === 0}
                >
                  Previous
                </button>
                {current < questions.length - 1 ? (
                  <button className="btn btn-primary px-4" onClick={handleNext}>
                    Next
                  </button>
                ) : (
                  <button className="btn btn-success px-4">
                    Submit Interview
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeInterview;
