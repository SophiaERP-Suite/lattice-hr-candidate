import { BookOpen, CheckCircle, ChevronRight, Clock, PlayCircle, TrendingUp, UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getInductionAssigmentsByJobSeekerId } from "../../api/InductionApi";
import type { InductionAssignment } from "../../types/induction";
import Hashids from "hashids";

const statusConfig: Record<string, { label: string; class: string; icon: React.ElementType }> = {
  Pending: { label: "Not Started", class: "bg-warning", icon: Clock },
  InProgress: { label: "In Progress", class: "bg-primary", icon: PlayCircle },
  Completed: { label: "Completed", class: "bg-success", icon: CheckCircle },
};

function InductionModules() {
  const [inductionAssignments, setInductionAssignments] = useState<InductionAssignment[]>([]);
  const [loading, setLoading] = useState(true);

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const fetchJobSeekerAssignedProgrammes = async () => {
    try {
      setLoading(true);
      const response = await getInductionAssigmentsByJobSeekerId();
      console.log(response)
      if (response.statusCode === 200) {
        setInductionAssignments(response.data ?? []);
      } else {
        setInductionAssignments([]);
      }
    } catch (err) {
      console.error("Failed to fetch assignments", err);
      setInductionAssignments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobSeekerAssignedProgrammes();
  }, []);

  const completed = inductionAssignments.filter(a => a.status === "Completed").length;
  const inProgress = inductionAssignments.filter(a => a.status === "InProgress").length;
  const pending = inductionAssignments.filter(a => a.status === "Pending").length;

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">

          {/* Page header */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-4">
              <h1 className="page-title fs-18 lh-1">Induction Modules</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Induction Programmes</li>
                  <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                  <li className="breadcrumb-item"><NavLink to="/dashboard">Home</NavLink></li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Summary stats */}
          {!loading && inductionAssignments.length > 0 && (

            <div className="col-xl-12 mb-4">
              <div className="row g-3">
                {[
                  { label: "Total Assigned", value: inductionAssignments.length, color: "#6366f1", bg: "#eef2ff", icon: BookOpen },
                  { label: "In Progress", value: inProgress, color: "#3b82f6", bg: "#eff6ff", icon: TrendingUp },
                  { label: "Completed", value: completed, color: "#22c55e", bg: "#f0fdf4", icon: CheckCircle },
                  { label: "Not Started", value: pending, color: "#f59e0b", bg: "#fffbeb", icon: Clock },
                ].map(stat => {
                  const Icon = stat.icon;
                  return (
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6" key={stat.label}>
                      <div className="card">
                        <div className="card-body mini-card-body d-flex align-center gap-16">
                          <div className="avatar avatar-xl text-purple" style={{ color: stat.color, background: stat.bg }}>
                            <Icon size={30} style={{ color: stat.color }} />
                          </div>
                          <div className="card-content">
                            <span className="d-block fs-16 mb-5">{stat.label}</span>
                            <h2 className="mb-5">{stat.value}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Main card */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex align-items-center gap-2">
                {/* <BookOpen size={1} /> */}
                <h5 className="mb-0">Your Induction Programmes</h5>
              </div>

              <div className="card-body mt-15">

                {/* Loading */}
                {loading && (
                  <div className="row g-4">
                    {[1, 2, 3].map(i => (
                      <div className="col-md-6 col-lg-4" key={i}>
                        <div className="card border h-100 mb-0">
                          <div className="card-body placeholder-wave">
                            <span className="placeholder col-8 bg-secondary mb-3" style={{ height: 20, display: "block" }} />
                            <span className="placeholder col-12 bg-secondary mb-1" style={{ height: 14, display: "block" }} />
                            <span className="placeholder col-10 bg-secondary mb-3" style={{ height: 14, display: "block" }} />
                            <span className="placeholder col-4 bg-secondary" style={{ height: 34, display: "block", borderRadius: 6 }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty state */}
                {!loading && inductionAssignments.length === 0 && (
                  <div className="text-center py-5">
                    <BookOpen size={48} className="text-muted mb-3" />
                    <h5 className="text-muted">No induction programmes assigned yet</h5>
                    <p className="text-muted fs-13">
                      Your employer will assign induction programmes to you. Check back soon.
                    </p>
                  </div>
                )}

                {/* Programme cards */}
                {!loading && inductionAssignments.length > 0 && (
                  <div className="row g-4">
                    {inductionAssignments.map(assignment => {
                      const status = statusConfig[assignment.status] ?? statusConfig["Pending"];
                      const StatusIcon = status.icon;
                      const isCompleted = assignment.status === "Completed";

                      return (
                        <div className="col-md-6 col-lg-4" key={assignment.assignmentId}>
                          <div
                            className="card border h-100 mb-0"
                            style={{
                              borderColor: isCompleted ? "#22c55e" : "#e5e7eb",
                              transition: "box-shadow 0.2s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                          >
                            <div className="card-body d-flex flex-column">

                              <h5 className="fw-semibold mb-2 text-info">{assignment.businessame}</h5>
                              {/* Title */}
                              <h6 className="fw-semibold mb-2">{assignment.categoryName}</h6>

                              {/* Status badge */}
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className={`badge ${status.class} d-flex align-items-center gap-1`} style={{ fontSize: 11 }}>
                                  <StatusIcon size={11} />
                                  {status.label}
                                </span>
                                {isCompleted && <CheckCircle size={18} color="#22c55e" />}
                              </div>

                              {/* Dates */}
                              <div className="d-flex flex-column gap-1 mb-3">
                                <small className="text-muted d-flex align-items-center gap-1">
                                  <Clock size={12} />
                                  Assigned: {new Date(assignment.dateAssigned).toLocaleDateString("en-GB", {
                                    day: "2-digit", month: "short", year: "numeric"
                                  })}
                                </small>
                                {isCompleted && assignment.dateCompleted && (
                                  <small className="text-success d-flex align-items-center gap-1">
                                    <CheckCircle size={12} />
                                    Completed: {new Date(assignment.dateCompleted).toLocaleDateString("en-GB", {
                                      day: "2-digit", month: "short", year: "numeric"
                                    })}
                                  </small>
                                )}
                              </div>

                              {/* CTA button */}
                              <NavLink
                                to={`/inductionStage/${hashIds.encode(assignment.inductionCategoryId.toString())}/${hashIds.encode(assignment.assignmentId.toString())}`}
                                className={`btn mt-auto d-flex align-items-center justify-content-center gap-2 ${isCompleted ? "btn-outline-success" : "btn-primary"
                                  }`}
                              >
                                {isCompleted ? (
                                  <><CheckCircle size={15} /> Review</>
                                ) : assignment.status === "InProgress" ? (
                                  <><PlayCircle size={15} /> Continue</>
                                ) : (
                                  <><PlayCircle size={15} /> Start Module</>
                                )}
                              </NavLink>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InductionModules;