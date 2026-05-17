import Hashids from "hashids";
import { CalendarDays, UserCheck, Clock, UserX, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMyCurrentTimesheet, getMyTimesheets, submitTimesheet, getTimesheetById } from "../../api/TimeSheetApi";

// ── Types ─────────────────────────────────────────────────────────────────────

interface TimesheetLineDto {
  lineId: number;
  workDate: string;
  dayName: string;
  clockIn: string | null;
  clockOut: string | null;
  regularHrs: number;
  overtimeHrs: number;
  totalHrs: number;
  leaveType: string | null;
  notes: string | null;
  isLeaveDay: boolean;
  isHoliday: boolean;
}

interface TimesheetSummaryDto {
  timesheetId: number;
  jobSeekerId: number;
  employeeName: string;
  periodStartDate: string;
  periodEndDate: string;
  totalRegularHrs: number;
  totalOvertimeHrs: number;
  totalHours: number;
  status: number;
  statusLabel: string;
  dateCreated: string;
  dateApproved: string | null;
  approverName: string | null;
  notes: string | null;
  // pay fields
  monthlySalary?: number | null;
  dailyRate?: number | null;
  absentDeduction?: number | null;
  amountDue?: number | null;
  standardDays?: number | null;
  daysWorked?: number | null;
  absentDays?: number | null;
  currencyCode?: string;
  currencySymbol?: string;
  lines: TimesheetLineDto[];
  // status: string
}

interface TimesheetListItem {
  timesheetId: number;
  employeeName: string;
  periodStartDate: string;
  periodEndDate: string;
  totalRegularHrs: number;
  totalOvertimeHrs: number;
  totalHours: number;
  status: string;
  dateCreated: string;
  // pay fields
  monthlySalary?: number | null;
  dailyRate?: number | null;
  absentDeduction?: number | null;
  amountDue?: number | null;
  standardDays?: number | null;
  daysWorked?: number | null;
  absentDays?: number | null;
  currencyCode?: string;
  currencySymbol?: string;
}

interface PagedResult {
  items: TimesheetListItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  currencyCode?: string;
  currencySymbol?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const STATUS_MAP: Record<string, { label: string; cls: string }> = {
  "Draft": { label: "Draft", cls: "bg-label-secondary" },
  "Submitted": { label: "Submitted", cls: "bg-label-warning" },
  "Approved": { label: "Approved", cls: "bg-label-success" },
  "Rejected": { label: "Rejected", cls: "bg-label-danger" },
};

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString([], {
    day: "2-digit", month: "short", year: "numeric",
  });
}

function fmtTime(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function fmtCurrency(amount: number | null | undefined, code = "NGN") {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en", {
    style: "currency", currency: code, minimumFractionDigits: 2,
  }).format(amount);
}

// ── Component ─────────────────────────────────────────────────────────────────

const TimeSheet = () => {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const { employerId } = useParams();

  const decodedEmployerId = useMemo(() => {
    const decoded = hashIds.decode(String(employerId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [employerId]);

  // ── State ─────────────────────────────────────────────────────────────────
  const [currentSheet, setCurrentSheet] = useState<TimesheetSummaryDto | null>(null);
  const [paged, setPaged] = useState<PagedResult | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState<number | null>(null);

  // Detail modal
  const [detailSheet, setDetailSheet] = useState<TimesheetSummaryDto | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // ── Fetch ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!decodedEmployerId) return;
    fetchCurrentSheet();
    fetchTimesheets();
  }, [decodedEmployerId, page, statusFilter]);

  const fetchCurrentSheet = async () => {
    try {
      const res = await getMyCurrentTimesheet(Number(decodedEmployerId));
      setCurrentSheet(res);
    } catch {
      // silent
    }
  };

  const fetchTimesheets = async () => {
    setLoading(true);
    try {
      const res = await getMyTimesheets(
        Number(decodedEmployerId), page, pageSize,
        statusFilter || undefined
      );
      setPaged(res);
    } catch {
      toast.error("Failed to load timesheets");
    } finally {
      setLoading(false);
    }
  };

  const handleViewLines = async (timesheetId: number) => {
    setDetailSheet(null);
    setShowDetailModal(true);
    setDetailLoading(true);
    try {
      const res = await getTimesheetById(timesheetId);
      setDetailSheet(res);
    } catch {
      toast.error("Failed to load timesheet details");
    } finally {
      setDetailLoading(false);
    }
  };

  const handleSubmit = async (timesheetId: number) => {
    if (!confirm("Submit this timesheet for approval?")) return;
    setSubmitting(timesheetId);
    try {
      const res = await submitTimesheet(timesheetId);
      if (res.ok) {
        toast.success("Timesheet submitted successfully!");
        fetchTimesheets();
        fetchCurrentSheet();
        // refresh detail if open
        if (showDetailModal && detailSheet?.timesheetId === timesheetId) {
          handleViewLines(timesheetId);
        }
      } else {
        toast.error("Failed to submit timesheet");
      }
    } catch {
      toast.error("Failed to submit timesheet");
    } finally {
      setSubmitting(null);
    }
  };

  // ── Derived ───────────────────────────────────────────────────────────────
  const totalDays = currentSheet?.lines.length ?? 0;
  const presentDays = currentSheet?.lines.filter(l => !l.isLeaveDay && l.clockIn).length ?? 0;
  const lateArrivals = currentSheet?.lines.filter(l => {
    if (!l.clockIn) return false;
    const h = new Date(l.clockIn).getHours();
    const m = new Date(l.clockIn).getMinutes();
    return h > 8 || (h === 8 && m > 5);
  }).length ?? 0;
  const absentDays = currentSheet?.lines.filter(l => !l.isLeaveDay && !l.clockIn).length ?? 0;

  const totalPages = paged?.totalPages ?? 1;
  const currencyCode = paged?.currencyCode ?? currentSheet?.currencyCode ?? "NGN";

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="app-content-wrap">
      <ToastContainer position="top-right" />
      <div className="container-fluid">
        <div className="row">

          {/* Page header */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">My Timesheets</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Timesheets</li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to={`/ClockIn/${employerId}`}>Clock In</NavLink>
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to="/MyJobs">My Jobs</NavLink>
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Home</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Summary Cards */}
          {[
            { label: "Working Days (Period)", value: currentSheet ? totalDays : "—", color: "info", Icon: CalendarDays },
            { label: "Present", value: currentSheet ? presentDays : "—", color: "success", Icon: UserCheck },
            { label: "Late Arrivals", value: currentSheet ? lateArrivals : "—", color: "warning", Icon: Clock },
            { label: "Absent", value: currentSheet ? absentDays : "—", color: "danger", Icon: UserX },
          ].map(({ label, value, color, Icon }) => (
            <div key={label} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className={`avatar avatar-xl bg-${color}-transparent text-${color}`}>
                    <Icon />
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">{label}</span>
                    <h2 className="mb-5">{value}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Current period banner */}
          {currentSheet && (
            <div className="col-xl-12">
              <div className="alert alert-info d-flex align-items-center justify-content-between flex-wrap gap-2 mb-0">
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <span style={{ marginRight: "5px" }}>
                    <strong>Current Period:</strong>{" "}
                    {fmtDate(currentSheet.periodStartDate)} — {fmtDate(currentSheet.periodEndDate)}
                  </span>
                  {" | "}
                  <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                    <strong>Total Hours:</strong> {currentSheet.totalHours}h
                  </span>
                  {/* {currentSheet.amountDue != null && (
                    <span>
                      <strong>Est. Pay:</strong>{" "}
                      <span className="text-success fw-bold">
                        {fmtCurrency(currentSheet.amountDue, currencyCode)}
                      </span>
                    </span>
                  )} */}
                  {" | "}
                  <span style={{ marginLeft: "5px" }} className={`badge ${STATUS_MAP[currentSheet.status]?.cls}`}>
                    Status : {STATUS_MAP[currentSheet.status]?.label ?? currentSheet.statusLabel}
                  </span>
                </div>
                {currentSheet.status === 0 && (
                  <button
                    className="btn btn-sm btn-info"
                    disabled={submitting === currentSheet.timesheetId}
                    onClick={() => handleSubmit(currentSheet.timesheetId)}
                  >
                    {submitting === currentSheet.timesheetId ? "Submitting…" : "Submit for Approval"}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Timesheets Table */}
          <div className="col-xl-12 mt-15">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
                <h4 className="mb-0">Timesheets</h4>
                <select
                  className="form-select form-select-sm"
                  style={{ width: 160 }}
                  value={statusFilter}
                  onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
                >
                  <option value="">All Status</option>
                  <option value="0">Draft</option>
                  <option value="1">Submitted</option>
                  <option value="2">Approved</option>
                  <option value="3">Rejected</option>
                </select>
              </div>

              <div className="card-body pt-15">
                <div className="table-responsive">
                  <table className="table text-nowrap w-100">
                    <thead>
                      <tr>
                        <th>Period</th>
                        <th>Days Worked</th>
                        <th>Regular Hrs</th>
                        <th>Overtime Hrs</th>
                        <th>Total Hrs</th>
                        {/* <th>Est. Pay</th> */}
                        <th>Status</th>
                        <th>Date Created</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan={9} className="text-center py-4">
                            <div className="spinner-border spinner-border-sm me-2" />
                            Loading timesheets…
                          </td>
                        </tr>
                      ) : (paged?.items ?? []).length === 0 ? (
                        <tr>
                          <td colSpan={9} className="text-center py-4 text-muted">
                            No timesheets found
                          </td>
                        </tr>
                      ) : (
                        (paged?.items ?? []).map(item => {
                          const status = STATUS_MAP[item.status] ?? { label: "Unknown", cls: "bg-label-secondary" };
                          return (
                            <tr key={item.timesheetId}>
                              <td>
                                <div>{fmtDate(item.periodStartDate)}</div>
                                <small className="text-muted">to {fmtDate(item.periodEndDate)}</small>
                              </td>
                              <td>
                                {item.daysWorked != null ? (
                                  <span className={item.absentDays ? "text-warning" : "text-success"}>
                                    {item.daysWorked} / {item.standardDays}
                                  </span>
                                ) : "—"}
                                {(item.absentDays ?? 0) > 0 && (
                                  <div>
                                    <small className="text-danger">{item.absentDays} absent</small>
                                  </div>
                                )}
                              </td>
                              <td>
                                <span className="badge bg-label-primary">
                                  {item.totalRegularHrs.toFixed(1)}h
                                </span>
                              </td>
                              <td>
                                {item.totalOvertimeHrs > 0 ? (
                                  <span className="badge bg-label-warning">
                                    {item.totalOvertimeHrs.toFixed(1)}h
                                  </span>
                                ) : <span className="text-muted">—</span>}
                              </td>
                              <td><strong>{item.totalHours.toFixed(1)}h</strong></td>
                              {/* <td>
                                {item.amountDue != null ? (
                                  <span className="fw-medium text-success">
                                    {fmtCurrency(item.amountDue, item.currencyCode ?? currencyCode)}
                                  </span>
                                ) : <span className="text-muted">—</span>}
                              </td> */}
                              <td>
                                <span className={`badge ${status.cls}`}>{status.label}</span>
                              </td>
                              <td>{fmtDate(item.dateCreated)}</td>
                              <td className="text-end">
                                {/*    <button
                                  className="btn btn-sm btn-outline-info me-2"
                                  onClick={() => handleViewLines(item.timesheetId)}
                                >
                                  View Lines
                                </button> */}
                                {item.status === "Draft" && (
                                  <button
                                    className="btn btn-sm btn-outline-success"
                                    disabled={submitting === item.timesheetId}
                                    onClick={() => handleSubmit(item.timesheetId)}
                                  >
                                    {submitting === item.timesheetId ? "…" : "Submit"}
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="table-footer d-flex justify-content-between align-items-center mt-15">
                    <small className="text-muted">
                      Page {page} of {totalPages} — {paged?.totalCount ?? 0} total
                    </small>
                    <ul className="pagination mb-0">
                      <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                        <button className="page-link"
                          onClick={() => setPage(p => p - 1)}>Previous</button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                        <li key={p} className={`page-item ${p === page ? "active" : ""}`}>
                          <button className="page-link" onClick={() => setPage(p)}>{p}</button>
                        </li>
                      ))}
                      <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                        <button className="page-link"
                          onClick={() => setPage(p => p + 1)}>Next</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Detail Modal ─────────────────────────────────────────────────── */}
      {showDetailModal && (
        <div
          className="modal show fade"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h5 className="modal-title mb-0">Timesheet Detail</h5>
                  {detailSheet && (
                    <small className="text-muted">
                      {fmtDate(detailSheet.periodStartDate)} — {fmtDate(detailSheet.periodEndDate)}
                    </small>
                  )}
                </div>
                <button
                  className="btn-close"
                  onClick={() => { setShowDetailModal(false); setDetailSheet(null); }}
                />
              </div>
              <div className="modal-body">
                {detailLoading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" />
                    <p className="mt-3 text-muted">Loading lines…</p>
                  </div>
                ) : detailSheet ? (
                  <>
                    {/* Info row */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <table className="table table-sm table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td width="130"><strong>Status:</strong></td>
                              <td>
                                <span className={`badge ${STATUS_MAP[detailSheet.status]?.cls}`}>
                                  {STATUS_MAP[detailSheet.status]?.label}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td><strong>Days Worked:</strong></td>
                              <td>
                                {detailSheet.daysWorked ?? "—"} / {detailSheet.standardDays ?? "—"} scheduled
                                {(detailSheet.absentDays ?? 0) > 0 && (
                                  <span className="badge bg-label-danger ms-2">
                                    {detailSheet.absentDays} absent
                                  </span>
                                )}
                              </td>
                            </tr>
                            {detailSheet.approverName && (
                              <tr>
                                <td><strong>Approved by:</strong></td>
                                <td>{detailSheet.approverName}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-6">
                        <table className="table table-sm table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td width="130"><strong>Total Hours:</strong></td>
                              <td>
                                <span className="badge bg-label-primary">
                                  {detailSheet.totalHours.toFixed(1)}h
                                </span>
                              </td>
                            </tr>
                            {detailSheet.amountDue != null && (
                              <tr>
                                <td><strong>Est. Pay:</strong></td>
                                <td className="text-success fw-bold">
                                  {fmtCurrency(detailSheet.amountDue, detailSheet.currencyCode ?? currencyCode)}
                                </td>
                              </tr>
                            )}
                            {detailSheet.notes && (
                              <tr>
                                <td><strong>Notes:</strong></td>
                                <td>{detailSheet.notes}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Hours summary cards */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-4">
                        <div className="card border">
                          <div className="card-body p-3 text-center">
                            <small className="text-muted d-block mb-1">Regular Hours</small>
                            <h3 className="mb-0 text-primary">
                              {detailSheet.totalRegularHrs.toFixed(1)}h
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border">
                          <div className="card-body p-3 text-center">
                            <small className="text-muted d-block mb-1">Overtime Hours</small>
                            <h3 className="mb-0 text-warning">
                              {detailSheet.totalOvertimeHrs.toFixed(1)}h
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border">
                          <div className="card-body p-3 text-center">
                            <small className="text-muted d-block mb-1">Total Hours</small>
                            <h3 className="mb-0 text-dark">
                              {detailSheet.totalHours.toFixed(1)}h
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Daily lines table */}
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                          <tr>
                            <th>Date</th>
                            <th>Clock In</th>
                            <th>Clock Out</th>
                            <th>Regular</th>
                            <th>Overtime</th>
                            <th>Total</th>
                            <th>Time-off</th>
                          </tr>
                        </thead>
                        <tbody>
                          {detailSheet.lines.length === 0 ? (
                            <tr>
                              <td colSpan={7} className="text-center text-muted py-4">
                                No daily records found
                              </td>
                            </tr>
                          ) : (
                            detailSheet.lines.map(line => (
                              <tr
                                key={line.lineId}
                                className={
                                  line.isHoliday ? "table-warning bg-opacity-10" :
                                    line.isLeaveDay ? "table-info bg-opacity-10" : ""
                                }
                              >
                                <td>
                                  <div>{fmtDate(line.workDate)}</div>
                                  <small className="text-muted">{line.dayName}</small>
                                </td>
                                <td>{fmtTime(line.clockIn)}</td>
                                <td>{fmtTime(line.clockOut)}</td>
                                <td className={line.regularHrs > 0 ? "fw-medium" : "text-muted"}>
                                  {line.regularHrs > 0 ? `${line.regularHrs.toFixed(1)}h` : "—"}
                                </td>
                                <td>
                                  {line.overtimeHrs > 0 ? (
                                    <span className="badge bg-label-warning">
                                      {line.overtimeHrs.toFixed(1)}h
                                    </span>
                                  ) : "—"}
                                </td>
                                <td>
                                  <span className="badge bg-primary bg-opacity-10 fw-medium">
                                    {line.totalHrs.toFixed(1)}h
                                  </span>
                                </td>
                                <td>
                                  {line.isHoliday
                                    ? <span className="badge bg-label-warning">Holiday</span>
                                    : line.isLeaveDay
                                      ? <span className="badge bg-label-info">
                                        {line.leaveType ?? "Leave"}
                                      </span>
                                      : "—"}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                        {detailSheet.lines.length > 0 && (
                          <tfoot className="table-light fw-bold">
                            <tr>
                              <td colSpan={3} className="text-end">TOTALS</td>
                              <td>{detailSheet.totalRegularHrs.toFixed(1)}h</td>
                              <td>{detailSheet.totalOvertimeHrs.toFixed(1)}h</td>
                              <td>{detailSheet.totalHours.toFixed(1)}h</td>
                              <td />
                            </tr>
                          </tfoot>
                        )}
                      </table>
                    </div>

                    {/* Pay breakdown */}
                    {detailSheet.amountDue != null && (
                      <div className="card border mt-4">
                        <div className="card-header py-2">
                          <h6 className="mb-0">Pay Summary — Period Estimate</h6>
                        </div>
                        <div className="card-body p-0">
                          <table className="table table-sm mb-0">
                            <tbody>
                              <tr>
                                <td className="ps-3">Period Salary</td>
                                <td className="text-end pe-3 fw-medium">
                                  {fmtCurrency(detailSheet.monthlySalary, detailSheet.currencyCode ?? currencyCode)}
                                </td>
                              </tr>
                              <tr>
                                <td className="ps-3 text-muted">
                                  Daily Rate
                                  <small className="ms-1">(÷ {detailSheet.standardDays} days in month)</small>
                                </td>
                                <td className="text-end pe-3 text-muted">
                                  {fmtCurrency(detailSheet.dailyRate, detailSheet.currencyCode ?? currencyCode)}
                                </td>
                              </tr>
                              {(detailSheet.absentDays ?? 0) > 0 && (
                                <tr>
                                  <td className="ps-3 text-danger">
                                    Absent Deduction
                                    <small className="ms-1">
                                      ({detailSheet.absentDays} day{detailSheet.absentDays !== 1 ? "s" : ""})
                                    </small>
                                  </td>
                                  <td className="text-end pe-3 text-danger">
                                    − {fmtCurrency(detailSheet.absentDeduction, detailSheet.currencyCode ?? currencyCode)}
                                  </td>
                                </tr>
                              )}
                              <tr className="table-light">
                                <td className="ps-3 fw-bold">Amount Due</td>
                                <td className="text-end pe-3 fw-bold text-success" style={{ fontSize: "1.1rem" }}>
                                  {fmtCurrency(detailSheet.amountDue, detailSheet.currencyCode ?? currencyCode)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="card-footer py-2">
                          <small className="text-muted">
                            * Estimate for this period only. Final amount confirmed at month end.
                          </small>
                        </div>
                      </div>
                    )}

                    {/* Approval / rejection status */}
                    {detailSheet.status === 2 && detailSheet.approverName && (
                      <div className="alert alert-success mt-4 mb-0">
                        ✓ Approved by <strong>{detailSheet.approverName}</strong>
                        {detailSheet.dateApproved && ` on ${fmtDate(detailSheet.dateApproved)}`}
                      </div>
                    )}
                    {detailSheet.status === 3 && (
                      <div className="alert alert-danger mt-4 mb-0">
                        ✗ Rejected
                        {detailSheet.approverName && <> by <strong>{detailSheet.approverName}</strong></>}
                        {detailSheet.dateApproved && ` on ${fmtDate(detailSheet.dateApproved)}`}
                        {detailSheet.notes && (
                          <p className="mb-0 mt-1 small">
                            <strong>Reason:</strong> {detailSheet.notes}
                          </p>
                        )}
                      </div>
                    )}
                  </>
                ) : null}
              </div>
              <div className="modal-footer">
                {detailSheet?.status === 0 && (
                  <button
                    className="btn btn-success"
                    disabled={submitting === detailSheet.timesheetId}
                    onClick={() => handleSubmit(detailSheet.timesheetId)}
                  >
                    {submitting === detailSheet.timesheetId
                      ? <><span className="spinner-border spinner-border-sm me-2" />Submitting…</>
                      : "Submit for Approval"}
                  </button>
                )}
                <button
                  className="btn btn-dark"
                  onClick={() => { setShowDetailModal(false); setDetailSheet(null); }}
                >
                  <X size={16} className="me-1" /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSheet;