import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import { Briefcase, CheckCheck, ChevronRight, ClipboardCheck } from "lucide-react";
import type { InterviewQuestion } from "../../types/Interview";
import { CheckHasSubmitted, GetAllQuestions, UploadAnswer } from "../../api/InterviewApi";

const InterviewDetails = () => {
  const params = useParams();
  const hashIds = new Hashids("LatticeHrEncode", 10);

  const [audioAnswer, setAudioAnswer] = useState<File | null>(null);
  const [interview, setInterview] = useState<InterviewQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [attempted, setAttempted] = useState<boolean | null>(null); // ✅ null = not yet checked
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const hashId = useMemo(() => {
    return hashIds.decode(String(params.id))[0];
  }, [params.id]);

  const jobId = useMemo(() => {
    return hashIds.decode(String(params.jobId))[0];
  }, [params.jobId]);

  useEffect(() => {
    if (hashId) {
      initPage();
    }
  }, [hashId]);

  const initPage = async () => {
    setLoading(true);
    setError("");
    try {
      await Promise.all([checkAttempt(), fetchInterviewQuestions()]);
    } finally {
      setLoading(false);
    }
  };

  const checkAttempt = async () => {
    try {
      const response = await CheckHasSubmitted(Number(jobId));
      setAttempted(response.data === true);
      console.log("attt", response.data)
    } catch {
      setError("Could not validate attempt");
      setAttempted(false);
    }
  };

  const fetchInterviewQuestions = async () => {
    try {
      const response = await GetAllQuestions(Number(hashId));
      if (response) {
        setInterview(response);
      } else {
        setError("No interview questions found");
      }
    } catch {
      setError("Could not fetch interview details");
    }
  };

  const submitAnswer = async () => {
    if (!audioAnswer) {
      toast.error("Please select an audio file");
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("AudioFile", audioAnswer);
      formData.append("InterviewQuestionId", "0");
      formData.append("JobId", jobId.toString());

      const response = await UploadAnswer(formData);

      if (response.StatusCode === 400) {
        toast.warning(response.message);
      } else {
        toast.success(response.message);
        setAttempted(true);
      }
    } catch {
      toast.error("Failed to submit answer");
    } finally {
      setAudioAnswer(null);
      setSubmitting(false);
    }
  };

  const Breadcrumb = () => (
    <div className="page-title-box d-flex justify-content-between align-items-center flex-wrap gap-2">
      <h1 className="page-title fs-4 lh-1 mb-0">Self Interview</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
          <ChevronRight size={15} className="mx-1" />
          <li className="breadcrumb-item"><NavLink to="/SelfInterview">Self Interview</NavLink></li>
          <ChevronRight size={15} className="mx-1" />
          <li className="breadcrumb-item active">Take Interview</li>
        </ol>
      </nav>
    </div>
  );

  if (loading || attempted === null) {
    return (
      <div className="app-content-wrap">
        <ToastContainer />
        <div className="container-fluid py-4">
          <div className="row mb-4">
            <div className="col-xl-12"><Breadcrumb /></div>
          </div>
          <div className="row">
            <div className="col-xl-12 text-center py-5">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2 text-muted">Loading questions...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (attempted === true) {
    return (
      <div className="app-content-wrap">
        <ToastContainer />
        <div className="container-fluid py-4">
          <div className="row mb-4">
            <div className="col-xl-12"><Breadcrumb /></div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                      <div className="text-center py-5 px-4">
                        <div className="mb-4">
                          <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                              stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="fw-bold mb-3">Thank You!</h4>
                        <p className="text-muted mb-4">
                          You've already submitted your interview responses.
                          We appreciate your time and will review your application shortly.
                        </p>
                        <div className="d-flex gap-3 d-sm-flex justify-content-sm-center">
                          <NavLink to="/SelfInterview" className="btn btn-outline-warning px-4" style={{ marginRight: "10px" }}>
                            <ClipboardCheck size={16} className="me-1" /> View All Interviews
                          </NavLink>
                          <NavLink to="/Jobs" className="btn btn-success px-4">
                            <Briefcase size={16} className="me-1" /> Find Jobs
                          </NavLink>
                        </div>
                      </div>
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

  return (
    <div className="app-content-wrap">
      <ToastContainer />
      <div className="container-fluid py-4">
        <div className="row mb-4">
          <div className="col-xl-12"><Breadcrumb /></div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card shadow-sm border-0">
              <div className="card-header">
                <h4 className="fw-bold mb-0">Interview Questions</h4>
              </div>
              <div className="card-body p-4">

                {error && <div className="alert alert-danger mb-4">{error}</div>}

                {interview.length > 0 ? (
                  <div className="questions-list">

                    {interview.map((q, index) => (
                      <div key={index} className="mb-5 pb-4 border-bottom">
                        <div className="d-flex gap-3 align-items-start">
                          <span className="badge bg-info rounded-circle p-3 flex-shrink-0">
                            {index + 1}
                          </span>
                          <h5 className="mb-0">{q.questionText}</h5>
                        </div>
                      </div>
                    ))}

                    {/* Audio Upload */}
                    <div className="audio-upload mt-4">
                      <label htmlFor="audio" className="form-label fw-bold">
                        Upload your answer (audio):
                      </label>
                      <input
                        id="audio"
                        type="file"
                        className="form-control"
                        accept="audio/*"
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (file) setAudioAnswer(file);
                        }}
                      />
                      {audioAnswer && (
                        <div className="mt-2 text-success">
                          Selected: <strong>{audioAnswer.name}</strong>
                        </div>
                      )}
                      <small className="text-muted">
                        Accepted formats: MP3, WAV, M4A (max 50MB)
                      </small>
                    </div>

                    {/* Submit */}
                    <div className="text-end mt-4">
                      <button
                        onClick={submitAnswer}
                        className="btn btn-success px-5 d-inline-flex align-items-center gap-2"
                        disabled={submitting || !audioAnswer}
                      >
                        <CheckCheck size={16} />
                        {submitting ? "Submitting..." : "Submit All Answers"}
                      </button>
                    </div>
                  </div>
                ) : (
                  !error && <p className="text-center py-5 text-muted">No questions available</p>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;