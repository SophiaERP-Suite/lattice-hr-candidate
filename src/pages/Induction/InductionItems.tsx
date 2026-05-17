import { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, CheckCircle, Circle,
  FileText, Video, ClipboardList, PenLine,
  HelpCircle, AlignLeft, ChevronRight, CheckCheck,
  RotateCcw, Trophy, Lock
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Hashids from "hashids";
import { completeAssignment, completeInductionItem, getCompletedItems, getInductionItemsBySection, getInductionSectionsBySectionId, submitChecklistResponse, submitQuizAnswers } from "../../api/InductionApi";
import type { InductionItem, Section } from "../../types/induction";

// ── Type maps ─────────────────────────────────────────────────
const typeIcon: Record<string, React.ElementType> = {
  Text: AlignLeft, Document: FileText, Video: Video,
  Checklist: ClipboardList, Signature: PenLine, Quiz: HelpCircle,
};

const typeBadgeColor: Record<string, string> = {
  Text: "#6366f1", Document: "#f59e0b", Video: "#ef4444",
  Checklist: "#10b981", Signature: "#8b5cf6", Quiz: "#3b82f6",
};

// ITEM RENDERERS — each calls onComplete when done

const TextItem = ({ item, onComplete, completed }: {
  item: InductionItem;
  onComplete: () => void;
  completed: boolean;
}) => (
  <div className="d-flex flex-column gap-3">
    <div className="p-4 rounded" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
      <p className="mb-0" style={{ lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
        {item.itemContent || <span className="text-muted fst-italic">No content provided</span>}
      </p>
    </div>
    {!completed && (
      <button className="btn btn-success d-flex align-items-center gap-2 mt-15 align-self-start" onClick={onComplete}>
        <CheckCheck size={16} /> I have read this
      </button>
    )}
    {completed && (
      <div className="d-flex align-items-center mt-15 gap-2 p-2 rounded"
        style={{ background: "#f0fdf4", border: "1px solid #22c55e", width: "fit-content" }}>
        <CheckCircle size={16} color="#22c55e" />
        <small className="text-success fw-semibold">Completed</small>
      </div>
    )}
  </div>
);

const DocumentItem = ({ item, onComplete, completed }: {
  item: InductionItem;
  onComplete: () => void;
  completed: boolean;
}) => {
  const url = `${import.meta.env.VITE_API_URL}${item.documentLink}`;
  const isPdf = url?.toLowerCase().endsWith(".pdf");

  return (
    <div className="d-flex flex-column gap-3">
      {item.itemContent && <p className="text-muted mb-0">{item.itemContent}</p>}
      {isPdf ? (
        <iframe src={url} style={{ width: "100%", height: 500, border: "1px solid #e2e8f0", borderRadius: 8 }} title={item.itemName} />
      ) : (
        <a href={url} target="_blank" rel="noreferrer"
          className="btn btn-outline-success d-inline-flex align-items-center gap-2"
          style={{ width: "fit-content" }}>
          <FileText size={16} /> Open Document
        </a>
      )}
      {!completed && (
        <button className="btn btn-info d-flex align-items-center gap-2 align-self-start mt-15" onClick={onComplete}>
          <CheckCheck size={16} /> Mark as Read
        </button>
      )}
      {completed && (
        <div className="d-flex align-items-center gap-2 p-2 rounded mt-15"
          style={{ background: "#f0fdf4", border: "1px solid #22c55e", width: "fit-content" }}>
          <CheckCircle size={16} color="#22c55e" />
          <small className="text-success fw-semibold">Completed</small>
        </div>
      )}
    </div>
  );
};

const VideoItem = ({ item, onComplete, completed }: {
  item: InductionItem;
  onComplete: () => void;
  completed: boolean;
}) => {
  const url = item.documentLink ?? "";
  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
  const isVimeo = url.includes("vimeo.com");

  const getEmbedUrl = () => {
    if (isYoutube) {
      const id = url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (isVimeo) {
      const id = url.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${id}`;
    }
    return `${import.meta.env.VITE_API_URL}${item.documentLink}`;
  };

  return (
    <div className="d-flex flex-column gap-3">
      {item.itemContent && <p className="text-muted mb-0">{item.itemContent}</p>}
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 8, overflow: "hidden" }}>
        <iframe src={getEmbedUrl()} allowFullScreen title={item.itemName}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
      </div>
      {!completed && (
        <button className="btn btn-success d-flex align-items-center gap-2 align-self-start mt-15" onClick={onComplete}>
          <CheckCheck size={16} /> I have watched this
        </button>
      )}
      {completed && (
        <div className="d-flex align-items-center gap-2 p-2 rounded mt-15"
          style={{ background: "#f0fdf4", border: "1px solid #22c55e", width: "fit-content" }}>
          <CheckCircle size={16} color="#22c55e" />
          <small className="text-success fw-semibold">Completed</small>
        </div>
      )}
    </div>
  );
};

const ChecklistItem = ({ item, onComplete, completed }: {
  item: InductionItem;
  onComplete: () => void;
  completed: boolean;
}) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const lines = item.checklistLines ?? [];
  const allChecked = lines.length > 0 && lines.every(l => checked[l.id]);

  const toggle = async (id: string) => {
    if (completed) return;
    const newValue = !checked[id];
    setChecked(prev => ({ ...prev, [id]: newValue }));

    try {
      await submitChecklistResponse({
        inductionChecklistLineId: Number(id),
        isTicked: newValue,
      });
    } catch {
      console.error("Failed to save checklist tick");
    }
  };

  useEffect(() => {
    if (allChecked && !completed) {
      onComplete();
    }
  }, [allChecked, completed]);

  return (
    <div className="d-flex flex-column gap-2">
      {lines.map(line => (
        <div key={line.id}
          className="d-flex align-items-center gap-3 p-3 rounded"
          style={{
            border: `1px solid ${checked[line.id] ? "#22c55e" : "#e2e8f0"}`,
            background: checked[line.id] ? "#f0fdf4" : "white",
            cursor: completed ? "default" : "pointer",
            transition: "all 0.2s",
          }}
          onClick={() => toggle(line.id)}
        >
          {checked[line.id] ? <CheckCircle size={18} color="#22c55e" /> : <Circle size={18} color="#9ca3af" />}
          <span style={{ textDecoration: checked[line.id] ? "line-through" : "none", color: checked[line.id] ? "#6b7280" : "inherit" }}>
            {line.lineText}
          </span>
        </div>
      ))}
      {allChecked && (
        <div className="d-flex align-items-center gap-2 mt-1 p-2 rounded"
          style={{ background: "#f0fdf4", border: "1px solid #22c55e" }}>
          <CheckCircle size={16} color="#22c55e" />
          <small className="text-success fw-semibold">All items checked — auto completing...</small>
        </div>
      )}
    </div>
  );
};

const SignatureItem = ({ item, onComplete, completed }: {
  item: InductionItem;
  onComplete: (sig: string) => void;
  completed: boolean;
}) => {
  const [sig, setSig] = useState("");

  return (
    <div className="d-flex flex-column gap-3">
      <div className="p-4 rounded" style={{ background: "#fafafa", border: "1px solid #e2e8f0", maxHeight: 300, overflowY: "auto" }}>
        <p style={{ lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{item.itemContent}</p>
      </div>
      {!completed ? (
        <div>
          <label className="form-label fs-13 fw-semibold">
            Type your full name to confirm you have read and agree to the above
          </label>
          <div className="d-flex gap-2">
            <input type="text" className="form-control" placeholder="Your full name"
              value={sig} onChange={e => setSig(e.target.value)} />
            <button className="btn btn-success flex-shrink-0" disabled={!sig.trim()} onClick={() => onComplete(sig)}>
              Sign
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center gap-2 p-3 rounded"
          style={{ background: "#f0fdf4", border: "1px solid #22c55e" }}>
          <CheckCircle size={18} color="#22c55e" />
          <span className="text-success fw-semibold">Signed — completed</span>
        </div>
      )}
    </div>
  );
};

const QuizItem = ({ item, onComplete, completed }: {
  item: InductionItem;
  onComplete: (score: number, passed: boolean) => void;
  completed: boolean;
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [attemptKey, setAttemptKey] = useState(0);

  const questions = item.quizQuestions ?? [];
  const passMark = item.passMarkPercent ?? 70;

  const score = submitted
    ? Math.round((questions.filter(q => answers[q.id] === q.correctOption).length / questions.length) * 100)
    : 0;
  const passed = score >= passMark;

  const handleSubmit = async () => {

    const correctCount = questions.filter(
      q => answers[q.id] === q.correctOption
    ).length;

    const calculatedScore = Math.round(
      (correctCount / questions.length) * 100
    );

    const passed = calculatedScore >= passMark;

    setSubmitted(true);

    try {
      await submitQuizAnswers({
        inductionItemId: Number(item.inductionItemId),
        attemptNumber: attemptKey + 1,
        answers: questions.map(q => ({
          inductionQuizQuestionId: Number(q.id),
          selectedOption: answers[q.id] ?? "",
        })),
      });
    } catch {
      console.error("Failed to save quiz answers");
    }

    if (passed) {
      onComplete(calculatedScore, true);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setAttemptKey(k => k + 1);
  };

  return (
    <div className="d-flex flex-column gap-4" key={attemptKey}>
      <div className="d-flex align-items-center justify-content-between">
        <small className="text-muted">{questions.length} question{questions.length !== 1 ? "s" : ""}</small>
        <small className="text-muted">Pass mark: <strong>{passMark}%</strong></small>
      </div>

      {questions.map((q, qi) => {
        const isCorrect = submitted && answers[q.id] === q.correctOption;
        const isWrong = submitted && !!answers[q.id] && !isCorrect;

        return (
          <div key={q.id} className="border rounded p-3"
            style={{ background: submitted ? (isCorrect ? "#f0fdf4" : isWrong ? "#fef2f2" : "white") : "white" }}>
            <p className="fw-semibold mb-3 fs-14">
              <span className="badge bg-info me-2">{qi + 1}</span>
              {q.questionText}
            </p>
            <div className="d-flex flex-column gap-2">
              {(["A", "B", "C", "D"] as const).map(opt => {
                const optKey = `option${opt}` as "optionA" | "optionB" | "optionC" | "optionD";
                const optText = q[optKey];
                if (!optText) return null;

                const isSelected = answers[q.id] === opt;
                const showCorrect = submitted && q.correctOption === opt;
                const showWrong = submitted && isSelected && q.correctOption !== opt;

                return (
                  <div key={opt}
                    className="d-flex align-items-center gap-2 p-2 rounded"
                    style={{
                      border: `1px solid ${showCorrect ? "#22c55e" : showWrong ? "#ef4444" : isSelected ? "#3b82f6" : "#e2e8f0"}`,
                      background: showCorrect ? "#f0fdf4" : showWrong ? "#fef2f2" : isSelected ? "#eff6ff" : "white",
                      cursor: submitted ? "default" : "pointer",
                      transition: "all 0.15s",
                    }}
                    onClick={() => !submitted && setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                  >
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                      border: `2px solid ${showCorrect ? "#22c55e" : showWrong ? "#ef4444" : isSelected ? "#3b82f6" : "#d1d5db"}`,
                      background: isSelected ? (showWrong ? "#ef4444" : showCorrect ? "#22c55e" : "#3b82f6") : "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {isSelected && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                    </div>
                    <span className="fw-semibold" style={{ fontSize: 13, minWidth: 16 }}>{opt}.</span>
                    <span style={{ fontSize: 13 }}>{optText}</span>
                    {showCorrect && <CheckCircle size={14} color="#22c55e" className="ms-auto" />}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {!submitted ? (
        <button className="btn btn-success d-flex align-items-center gap-2 align-self-start"
          disabled={Object.keys(answers).length < questions.length}
          onClick={handleSubmit}>
          <CheckCheck size={16} /> Submit Quiz
        </button>
      ) : (
        <div className="p-4 rounded text-center"
          style={{ background: passed ? "#f0fdf4" : "#fef2f2", border: `1px solid ${passed ? "#22c55e" : "#ef4444"}` }}>
          <div className="fs-2 fw-bold mb-1" style={{ color: passed ? "#16a34a" : "#dc2626" }}>{score}%</div>
          <div className="fw-semibold mb-2" style={{ color: passed ? "#16a34a" : "#dc2626" }}>
            {passed ? "🎉 Passed!" : "❌ Failed — below pass mark"}
          </div>
          <small className="text-muted d-block mb-3">
            {questions.filter(q => answers[q.id] === q.correctOption).length} of {questions.length} correct
          </small>
          {!passed && (
            <button className="btn btn-outline-warning btn-sm d-flex align-items-center gap-1 mx-auto" onClick={handleRetry}>
              <RotateCcw size={14} /> Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// COMPLETION SCREEN
const CompletionScreen = ({ sectionName, onBack }: { sectionName: string; onBack: () => void }) => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
    <div className="text-center">
      <div className="mb-4" style={{
        width: 80, height: 80, borderRadius: "50%", background: "#f0fdf4",
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
      }}>
        <Trophy size={40} color="#22c55e" />
      </div>
      <h2 className="fw-bold mb-2">Module Complete!</h2>
      <p className="text-muted mb-4">
        You have successfully completed <strong>{sectionName}</strong>.
      </p>
      <button className="btn btn-success d-flex align-items-center gap-2 mx-auto" onClick={onBack}>
        <ArrowLeft size={16} /> Back to Modules
      </button>
    </div>
  </div>
);

// MAIN PAGE

const CandidateModuleItems = () => {
  const { assignmentId, levelId, sectionId } = useParams();
  const navigate = useNavigate();
  const hashIds = new Hashids("LatticeHrEncode", 10);

  const [section, setSection] = useState<Section | null>(null);
  const [items, setItems] = useState<InductionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  const [showCompletion, setShowCompletion] = useState(false);

  const decodedSectionId = useMemo(() => {
    const decoded = hashIds.decode(String(sectionId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [sectionId]);

  const decodedAssignmentId = useMemo(() => {
    const decoded = hashIds.decode(String(assignmentId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [assignmentId]);

  useEffect(() => {
    if (!decodedSectionId) return;
    (async () => {
      try {
        const [sectionRes, itemsRes, completedRes] = await Promise.all([
          getInductionSectionsBySectionId(decodedSectionId),
          getInductionItemsBySection(decodedSectionId),
          getCompletedItems(Number(decodedAssignmentId))
        ]);
        if (sectionRes.statusCode === 200) setSection(sectionRes.data);
        if (itemsRes.statusCode === 200) setItems(itemsRes.data ?? []);
        if (completedRes.status) {
          const completedSet = new Set<number>(completedRes.data);
          setCompletedIds(completedSet);
        }
      } catch {
        toast.error("Failed to load module");
      } finally {
        setLoading(false);
      }
    })();
  }, [decodedSectionId]);

  useEffect(() => {
    getCompleted()
  }, []);

  const getCompleted = async () => {
    const response = await getCompletedItems(Number(decodedAssignmentId))
    console.log("commm  res", response)

    if (response.status) {
      const completedSet = new Set<number>(response.data);
      setCompletedIds(completedSet);
    }
  }

  const current = items[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === items.length - 1;
  // const progress = items.length > 0 ? (completedIds.size / items.length) * 100 : 0;
  const mandatoryItems = items.filter(i => i.isMandatory);
  const completedMandatory = mandatoryItems.filter(i =>
    completedIds.has(Number(i.inductionItemId))
  );

  const progress =
    mandatoryItems.length > 0
      ? (completedMandatory.length / mandatoryItems.length) * 100
      : 0;
  const currentCompleted = current ? completedIds.has(Number(current.inductionItemId)) : false;
  const TypeIcon = current ? (typeIcon[current.itemType] ?? AlignLeft) : AlignLeft;

  const handleFinishModule = async () => {
    try {
      setCompleting(true);
      const response = await completeAssignment(Number(decodedAssignmentId));
      setTimeout(() => setShowCompletion(true), 600);
      console.log("complete", response)
    } catch {
      setCompleting(false);
    } finally {
      setCompleting(false);
    }
  }

  // ── Mark item complete ───
  const markComplete = async (extra?: { quizScore?: number; quizPassed?: boolean; signatureName?: string }) => {
    if (!current || currentCompleted) return;
    try {
      setCompleting(true);

      const response = await completeInductionItem({
        assignmentId: Number(decodedAssignmentId),
        inductionItemId: Number(current.inductionItemId),
        ...extra,
      });

      if (response.status === true) {
        setCompletedIds(prev => new Set([...prev, Number(current.inductionItemId)]));

        if (isLast) {
          setTimeout(() => setShowCompletion(true), 600);
        } else {
          setTimeout(() => setCurrentIndex(i => i + 1), 600);
        }

      } else {
        toast.error("Failed to save progress");
      }

    } catch {
      toast.error("Failed to save progress — please try again");
    } finally {
      getCompleted()
      setCompleting(false);
    }
  };

  const canGoNext = () => {
    if (!current) return false;
    if (current.isMandatory && !currentCompleted) return false;
    return true;
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <div className="spinner-border text-info" />
    </div>
  );

  // if (showCompletion) return (
  //   <div className="app-content-area">
  //     <div className="app-content-wrap">
  //       <div className="container-fluid">
  //         <CompletionScreen
  //           sectionName={section?.sectionName || "Module"}
  //           onBack={() => navigate(`/induction/${assignmentId}/stages/${levelId}`)}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <ToastContainer />

        {/* Page header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <div>
                <h1 className="page-title fs-18 lh-1">{section?.sectionName || "Module"}</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Items</li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to={`/induction/${assignmentId}/stages/${levelId}`}>Modules</NavLink>
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to={`/induction/${assignmentId}`}>Stages</NavLink>
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to="/induction">My Induction</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Page header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <div>
                <h1 className="page-title fs-18 lh-1">Instructions</h1>
                {section?.instructions && (
                  <p className="text-muted fs-13 mb-0 mt-1">{section.instructions}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          {/* Left — item viewer */}
          <div className="col-xl-8">

            {/* Progress bar */}
            <div className="card mb-3">
              <div className="card-body py-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted fw-semibold">
                    Item {currentIndex + 1} of {items.length}
                  </small>
                  <small className="text-muted">{Math.round(progress)}% complete</small>
                </div>
                <div className="progress" style={{ height: 6 }}>
                  <div className="progress-bar bg-success"
                    style={{ width: `${progress}%`, transition: "width 0.4s" }} />
                </div>
              </div>
            </div>

            {/* Item card */}
            {current && (
              <div className="card mb-4">
                <div className="card-header d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center justify-content-center rounded"
                    style={{ width: 32, height: 32, background: typeBadgeColor[current.itemType] + "20", color: typeBadgeColor[current.itemType], flexShrink: 0 }}>
                    <TypeIcon size={16} />
                  </span>
                  <h5 className="mb-0 flex-grow-1">{current.itemName}</h5>
                  <span className="badge"
                    style={{ background: typeBadgeColor[current.itemType] + "20", color: typeBadgeColor[current.itemType], fontSize: 11 }}>
                    {current.itemType}
                  </span>
                  {current.isMandatory && (
                    <span className="badge bg-danger" style={{ fontSize: 10 }}>Required</span>
                  )}
                </div>

                <div className="card-body mt-15">
                  {completing && (
                    <div className="text-center py-3">
                      <div className="spinner-border spinner-border-sm text-success me-2" />
                      <small className="text-muted">Saving progress...</small>
                    </div>
                  )}

                  {!completing && (() => {
                    switch (current.itemType) {
                      case "Text":
                        return <TextItem item={current} onComplete={() => markComplete()} completed={currentCompleted} />;
                      case "Document":
                        return <DocumentItem item={current} onComplete={() => markComplete()} completed={currentCompleted} />;
                      case "Video":
                        return <VideoItem item={current} onComplete={() => markComplete()} completed={currentCompleted} />;
                      case "Checklist":
                        return <ChecklistItem item={current} onComplete={() => markComplete()} completed={currentCompleted} />;
                      // case "Signature":
                      //   return <SignatureItem item={current} onComplete={(sig) => markComplete({ signatureName: sig })} completed={currentCompleted} />;
                      case "Quiz":
                        return <QuizItem item={current} onComplete={(score, passed) => markComplete({ quizScore: score, quizPassed: passed })} completed={currentCompleted} />;
                      default:
                        return null;
                    }
                  })()}
                </div>

                {/* Navigation */}
                <div className="card-footer d-flex justify-content-between align-items-center mt-15">
                  <button
                    className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                    onClick={() => setCurrentIndex(i => i - 1)}
                    disabled={isFirst}
                  >
                    <ArrowLeft size={14} /> Previous
                  </button>

                  {/* Mandatory lock hint */}
                  {current.isMandatory && !currentCompleted && (
                    <small className="text-muted d-flex align-items-center gap-1">
                      <Lock size={12} /> Complete this item to continue
                    </small>
                  )}

                  {isLast ? (
                    <button
                      className="btn btn-success btn-sm d-flex align-items-center gap-1"
                      disabled={!canGoNext()}
                      onClick={() => setShowCompletion(true)}
                    // onClick={() => handleFinishModule()}
                    >
                      <CheckCircle size={14} /> Finish Module
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm d-flex align-items-center gap-1"
                      disabled={!canGoNext()}
                      onClick={() => setCurrentIndex(i => i + 1)}
                    >
                      Next <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right — sidebar contents */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">Module Contents</h6>
              </div>
              <div className="card-body mt-15 p-2">
                {items.map((item, idx) => {
                  const Icon = typeIcon[item.itemType] ?? AlignLeft;
                  const isCurrent = idx === currentIndex;
                  const isDone = completedIds.has(Number(item.inductionItemId));
                  // const isLocked = idx > currentIndex && item.isMandatory &&
                  //   !completedIds.has(Number(items[idx - 1]?.inductionItemId));

                  const previousItem = items[idx - 1];
                  const previousMandatoryIncomplete =
                    previousItem?.isMandatory &&
                    !completedIds.has(Number(previousItem?.inductionItemId));

                  const isLocked = idx > currentIndex && previousMandatoryIncomplete;

                  return (
                    <div key={item.inductionItemId}
                      className="d-flex align-items-center gap-2 p-2 rounded mb-1"
                      style={{
                        background: isCurrent ? "#eff6ff" : "transparent",
                        border: isCurrent ? "1px solid #bfdbfe" : "1px solid transparent",
                        cursor: isLocked ? "not-allowed" : "pointer",
                        opacity: isLocked ? 0.5 : 1,
                        transition: "all 0.15s",
                      }}
                      onClick={() => !isLocked && setCurrentIndex(idx)}
                    >
                      <span style={{ color: typeBadgeColor[item.itemType], flexShrink: 0 }}>
                        <Icon size={14} />
                      </span>
                      <span className="fs-13 flex-grow-1" style={{
                        color: isCurrent ? "#1d4ed8" : isDone ? "#6b7280" : "inherit",
                        fontWeight: isCurrent ? 600 : 400,
                      }}>
                        {item.itemName}
                      </span>
                      {isDone && <CheckCircle size={13} color="#22c55e" />}
                      {isCurrent && !isDone && <ChevronRight size={13} color="#3b82f6" />}
                      {isLocked && <Lock size={12} color="#9ca3af" />}
                      {item.isMandatory && !isDone && !isCurrent && !isLocked && (
                        <span className="badge bg-danger" style={{ fontSize: 9 }}>req</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default CandidateModuleItems;