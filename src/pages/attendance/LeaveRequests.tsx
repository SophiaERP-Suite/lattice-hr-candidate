import { useState, useEffect, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  CalendarDays, ChevronRight, Plus, Clock,
  CheckCircle, XCircle, X, Filter
} from "lucide-react";
import Hashids from "hashids";
import { createLeaveRequest, getMyLeaves, type CreateLeaveDto } from "../../api/LeaveApi";
import type { LeaveRequest, LeaveRequestsResponse } from "../../types/Leave";
import { toast, ToastContainer } from "react-toastify";


const LeaveRequestSkeleton = () => (
  <div className="card mb-3">
    <div className="card-body">
      <div className="row g-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="placeholder-glow">
              <div className="d-flex align-center gap-16">
                <div className="avatar avatar-xl bg-light placeholder rounded-circle" />
                <div className="flex-grow-1">
                  <span className="placeholder col-8 mb-2" />
                  <h2 className="placeholder col-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 placeholder-glow">
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  {[1, 2, 3, 4, 5].map((col) => (
                    <td key={col}><span className="placeholder col-12" /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const STATUS_OPTIONS = ["", "Pending", "Approved", "Rejected", "Cancelled"] as const;
type StatusFilter = typeof STATUS_OPTIONS[number];

function LeaveRequests() {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const { employerId } = useParams();

  const decodedEmployerId = useMemo(() => {
    const decoded = hashIds.decode(String(employerId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [employerId]);

  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("");
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 1,
  });

  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState<CreateLeaveDto>({
    leaveType: "Vacation",
    startDate: "",
    endDate: "",
    reason: "",
  });

  useEffect(() => {
    if (decodedEmployerId) {
      fetchLeaveRequests(1);
    }
  }, [decodedEmployerId, statusFilter]);

  const fetchLeaveRequests = async (page: number) => {
    setLoading(true);
    try {
      const response: LeaveRequestsResponse = await getMyLeaves(
        Number(decodedEmployerId),
        page,
        pagination.pageSize,
        statusFilter || undefined
      );

      if (response?.items) {
        setLeaveRequests(response.items);
        setPagination({
          page: response.page,
          pageSize: response.pageSize,
          totalCount: response.totalCount,
          totalPages: response.totalPages,
        });
      }
    } catch (error) {
      console.error("Failed to fetch leave requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    fetchLeaveRequests(page);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!decodedEmployerId) return;
    setSubmitting(true);

    try {
      const response = await createLeaveRequest(formData, decodedEmployerId);
      console.log("hdhhdhd", response)
      if (response.status === 200 || response.status === 201) {
        await fetchLeaveRequests(1);
        toast.success("Leave Request Successful")
        setFormData({ leaveType: "Vacation", startDate: "", endDate: "", reason: "" });
        setShowRequestForm(false);
      }
    } catch (error) {
      toast.error("Leave Request Failed")
      console.error("Failed to submit leave request:", error);
    } finally {
      setSubmitting(false);
      await fetchLeaveRequests(1);
    }
  };

  const getStatusBadge = (status: LeaveRequest["status"]) => {
    switch (status) {
      case "approved": return <span className="badge bg-label-success"><CheckCircle size={12} className="me-1" />Approved</span>;
      case "pending": return <span className="badge bg-label-warning"><Clock size={12} className="me-1" />Pending</span>;
      case "rejected": return <span className="badge bg-label-danger"><XCircle size={12} className="me-1" />Rejected</span>;
      case "cancelled": return <span className="badge bg-label-secondary"><X size={12} className="me-1" />Cancelled</span>;
      default: return <span className="badge bg-label-secondary">{status}</span>;
    }
  };

  const summaryStats = useMemo(() => ({
    totalRequests: pagination.totalCount,
    pendingCount: leaveRequests.filter((r) => r.status === "pending").length,
    approvedCount: leaveRequests.filter((r) => r.status === "approved").length,
    rejectedCount: leaveRequests.filter((r) => r.status === "rejected").length,
  }), [leaveRequests, pagination.totalCount]);

  if (loading) return <LeaveRequestSkeleton />;

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <ToastContainer />
          {/* Page Title */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Leave Requests</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">Leave Requests</li>
                  <ChevronRight size={15} />
                  <li className="breadcrumb-item">
                    <NavLink to={`/Attendance/${employerId}`}>Attendance</NavLink>
                  </li>
                  <ChevronRight size={15} />
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Home</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Summary Cards */}
          {[
            { label: "Total Requests", value: summaryStats.totalRequests, sub: "All time", icon: <CalendarDays className="w-6 h-6" />, color: "primary" },
            { label: "Approved", value: summaryStats.approvedCount, sub: "Approved", icon: <CheckCircle className="w-6 h-6" />, color: "success" },
            { label: "Pending", value: summaryStats.pendingCount, sub: "Awaiting review", icon: <Clock className="w-6 h-6" />, color: "warning" },
            { label: "Rejected", value: summaryStats.rejectedCount, sub: "Not approved", icon: <XCircle className="w-6 h-6" />, color: "danger" },
          ].map(({ label, value, sub, icon, color }) => (
            <div key={label} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className={`avatar avatar-xl bg-${color}-transparent text-${color}`}>{icon}</div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">{label}</span>
                    <h2 className="mb-5">{value}</h2>
                    <span className="fs-12 text-muted">{sub}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* New Request Form */}
          <div className="col-xl-12 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Request Time Off</h5>
                  <button
                    className={`btn btn-sm ${showRequestForm ? "btn-dark" : "btn-success"}`}
                    onClick={() => setShowRequestForm(!showRequestForm)}
                    disabled={submitting}
                  >
                    {showRequestForm ? <><X size={16} /> Cancel</> : <><Plus size={16} /> New Request</>}
                  </button>
                </div>

                {showRequestForm && (
                  <div className="mt-15">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Leave Type</label>
                          <select
                            className="form-select"
                            value={formData.leaveType}
                            onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
                            required
                            disabled={submitting}
                          >
                            <option value="Vacation">Vacation</option>
                            <option value="Sick">Sick</option>
                            <option value="Personal">Personal</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Remote">Remote</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label className="form-label">Start Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            required
                            disabled={submitting}
                          />
                        </div>
                        <div className="col-md-3">
                          <label className="form-label">End Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={formData.endDate}
                            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                            required
                            disabled={submitting}
                          />
                        </div>
                        <div className="col-md-10">
                          <label className="form-label">Reason</label>
                          <textarea
                            rows={4}
                            className="form-control"
                            placeholder="Brief explanation"
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            required
                            disabled={submitting}
                          />
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                          <button type="submit" className="btn btn-success w-100" disabled={submitting}>
                            {submitting
                              ? <><span className="spinner-border spinner-border-sm me-2" />Submitting...</>
                              : "Submit Request"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Leave History Table */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">My Leave History</h5>
                {/* Status Filter */}
                <div className="d-flex align-items-center gap-2">
                  <Filter size={15} className="text-muted" />
                  <select
                    className="form-select form-select-sm"
                    style={{ width: "140px" }}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                  >
                    <option value="">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <small className="text-muted ms-2">
                    {pagination.totalCount} record{pagination.totalCount !== 1 ? "s" : ""}
                  </small>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Leave Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveRequests.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-4 text-muted">
                            {statusFilter
                              ? `No ${statusFilter.toLowerCase()} leave requests found.`
                              : `No leave requests found. Click "New Request" to create one.`}
                          </td>
                        </tr>
                      ) : (
                        leaveRequests.map((request) => (
                          <tr key={request.leaveRequestId}>
                            <td><span className="fw-medium">{request.leaveType}</span></td>
                            <td>{new Date(request.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td>
                            <td>{new Date(request.endDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td>
                            <td>
                              <span className="text-truncate d-inline-block" style={{ maxWidth: "200px" }}>
                                {request.reason}
                              </span>
                            </td>
                            <td>{getStatusBadge(request.status)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-muted">
                      Page {pagination.page} of {pagination.totalPages}
                    </small>
                    <nav>
                      <ul className="pagination mb-0">
                        <li className={`page-item ${pagination.page === 1 ? "disabled" : ""}`}>
                          <button className="page-link" onClick={() => handlePageChange(pagination.page - 1)}>
                            Previous
                          </button>
                        </li>
                        {[...Array(pagination.totalPages)].map((_, i) => (
                          <li key={i} className={`page-item ${pagination.page === i + 1 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                              {i + 1}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${pagination.page === pagination.totalPages ? "disabled" : ""}`}>
                          <button className="page-link" onClick={() => handlePageChange(pagination.page + 1)}>
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
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

export default LeaveRequests;