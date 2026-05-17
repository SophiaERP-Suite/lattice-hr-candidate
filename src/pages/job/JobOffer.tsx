import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { CheckCircle, XCircle, ChevronRight, Briefcase, MapPin, Clock, Calendar, Building2, User, FileText, AlertCircle, X, Trash, Trash2, Upload } from "lucide-react";
import Hashids from "hashids";
import dayjs from "dayjs";
import { AcceptOffer, GetOffer, RejectOffer } from "../../api/JobApi";
import type { JobOfferResponseDto } from "../../types/job";
import NegotiationChat from "../../components/NegotiationChat";
import Modal from "../../components/modal";
import { toast, ToastContainer } from "react-toastify";

const hashIds = new Hashids("LatticeHrEncode", 10);

type ModalType =
  | "accept"
  | "reject"
  | null;

function JobOffer() {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<JobOfferResponseDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const applicationId = id ? Number(hashIds.decode(id)[0]) : null;

  useEffect(() => {
    if (applicationId) fetchOffer();
  }, [applicationId]);

  const fetchOffer = async () => {
    try {
      setLoading(true);
      const response = await GetOffer(applicationId!);
      console.log("Offer response:", response.data.responseInstructions);
      if (response.statusCode === 200 && response.data) {
        setOffer(response.data);
      } else {
        setError("No offer found for this application.");
      }
    } catch {
      setError("Failed to load job offer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (data: { file?: File }) => {
    try {
      setActionLoading(true);

      if (!data.file) {
        alert("Please select a file");
        return;
      }

      const formData = new FormData()
      formData.append("CandidateSignature", data.file)

      const response = await AcceptOffer(Number(offer?.jobOfferId), formData);
      console.log(" hhs  cschsxuh ", response)
      if (response.statusCode === 400) {
        toast.success(response.message)
      } else if (response.statusCode === 200 || response.statusCode === 201) {
        toast.success(response.message)
      }
      setActionSuccess("accepted");
      setOffer(prev => prev ? { ...prev, offerStatus: "Accepted" as const } : prev);
    } catch {
      // setError("Failed to accept offer. Please try again.");
      toast.error("Failed to accept offer")
    } finally {
      setActionLoading(false);
      setModalType(null)
    }
  };

  const handleReject = async () => {
    try {
      setActionLoading(true);
      const response = await RejectOffer(Number(offer?.jobOfferId));
      console.log("hbwdbdbhwd", response)
      if (response.statusCode === 400) {
        toast.success(response.message)
      } else if (response.statusCode === 200 || response.statusCode === 201) {
        toast.success(response.message)
      }
      setActionSuccess("rejected");
      // setOffer(prev => prev ? { ...prev, offerStatus: "Rejected" as const } : prev);
    } catch {
      // setError("Failed to reject offer. Please try again.");
      toast.error("Failed to reject offer")
    } finally {
      setActionLoading(false);
      setModalType(null)
    }
  };

  const getStatusBadge = (status: string) => {
    const map: Record<string, string> = {
      Sent: "bg-info",
      Accepted: "bg-success",
      Rejected: "bg-danger",
      Draft: "bg-secondary",
      Expired: "bg-warning text-dark",
    };
    return map[status] ?? "bg-secondary";
  };

  const DAY_OF_WEEK_MAP: Record<number, string> = {
    0: "Sunday", 1: "Monday", 2: "Tuesday",
    3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday",
  };

  const formatWorkDays = (days: (number | string)[] = []) =>
    days.map(d => typeof d === "number" ? DAY_OF_WEEK_MAP[d] ?? String(d) : d).join(", ");

  const formatTime = (t: string) => t ? t.substring(0, 5) : "N/A";

  const openAcceptModal = () => {
    setModalType("accept");
  };

  const opentRejectModal = () => {
    setModalType("reject");
  };

  const closeModal = () => {
    setModalType(null);
  };

  // ── Loading ──
  if (loading) return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3 text-muted">Loading your offer...</p>
        </div>
      </div>
    </div>
  );

  if (error || !offer) return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="text-center py-5">
          <AlertCircle size={48} className="text-muted mb-3" />
          <h5 className="text-dark">{error ?? "Offer not found"}</h5>
          <NavLink to="../MyApplications" className="btn btn-primary mt-3">
            Back to Applications
          </NavLink>
        </div>
      </div>
    </div>
  );

  const isPending = offer.offerStatus?.toLowerCase() === "sent";
  const isAccepted = offer.offerStatus?.toLowerCase() === "accepted";
  const isRejected = offer.offerStatus?.toLowerCase() === "rejected";
  const isCancelled = offer.offerStatus?.toLowerCase() === "cancelled";

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <ToastContainer />
        <Modal
          isOpen={modalType === "accept"}
          title="Accept Job Offer"
          message="Your signature would be needed"
          confirmText="Upload"
          cancelText="Cancel"
          confirmColor="success"
          buttonIcon={<Upload size={20} />}
          headerIcon={<FileText size={20} />}
          fileLabel="Select File"
          fileAccept="image/*,.pdf,.doc,.docx"
          loading={loading}
          onConfirm={handleAccept}
          onCancel={closeModal}
        />

        <Modal
          isOpen={modalType === "reject"}
          title="Reject Job Offer"
          message="Are you sure you want to reject this offer"
          confirmText="Reject"
          cancelText="Cancel"
          confirmColor="danger"
          buttonIcon={<Trash2 size={20} />}
          headerIcon={<Trash2 size={20} />}
          loading={loading}
          onConfirm={handleReject}
          onCancel={closeModal}
        />

        {/* ── Breadcrumb ── */}
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0">Job Offer</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">Job Offer</li>
                  <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                  <li className="breadcrumb-item">
                    <NavLink to="../MyApplications">My Applications</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* ── Action success banner ── */}
        {actionSuccess && (
          <div className={`alert ${actionSuccess === "accepted" ? "alert-success" : "alert-danger"} d-flex align-items-center gap-2 mb-3`}>
            {actionSuccess === "accepted"
              ? <><CheckCircle size={18} /> You have <strong>accepted</strong> this job offer. Congratulations!</>
              : <><XCircle size={18} /> You have <strong>declined</strong> this job offer.</>
            }
          </div>
        )}

        {error && (
          <div className="alert alert-danger mb-3">{error}</div>
        )}

        <div className="row g-4">

          {/* ── Left: Offer Letter ── */}
          <div className="col-xl-8">
            <div className="card shadow-sm">
              <div className="card-body p-5" style={{ backgroundColor: "white" }}>

                {/* Company Header */}
                <div className="text-center mb-4 pb-3 border-bottom">
                  <h3 className="text-primary mb-1">{offer.employer.businessName ?? "Company Name"}</h3>
                  <p className="text-muted mb-0">{offer.responsibleDepartment}</p>
                </div>

                {/* Date & Status */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="mb-0 text-muted">
                    <strong>Date:</strong> {dayjs(offer.offerDate).format("DD MMMM YYYY")}
                  </p>
                  <span className={`badge d-none ${getStatusBadge(offer.offerStatus)} px-3 py-2`}>
                    {offer.offerStatus}
                  </span>
                </div>

                {/* Letter Title */}
                <div className="text-center mb-4">
                  <h4 className="text-primary mb-0">{offer.letterTitle?.toUpperCase()}</h4>
                </div>

                {/* Introduction */}
                <div className="mb-4">
                  <p className="mb-3"><strong>Dear {offer.employer?.businessName ?? "Candidate"},</strong></p>
                  {offer.introduction
                    ? <div dangerouslySetInnerHTML={{ __html: offer.introduction }} />
                    : <p className="text-muted">N/A</p>}
                </div>

                {/* Position Details */}
                <div className="mb-4">
                  <h6 className="text-primary mb-3 border-bottom pb-2">POSITION DETAILS</h6>
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr><td style={{ width: "40%" }}><strong>Job Title:</strong></td><td>{offer.job.jobTitle}</td></tr>
                      <tr><td><strong>Department:</strong></td><td>{offer.department}</td></tr>
                      <tr><td><strong>Level:</strong></td><td>{offer.level}</td></tr>
                      <tr><td><strong>Employment Type:</strong></td><td>{offer.employmentType}</td></tr>
                      {offer.reportingManager && (
                        <tr><td><strong>Reporting To:</strong></td><td>{offer.reportingManager}</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Compensation */}
                <div className="mb-4">
                  <h6 className="text-primary mb-3 border-bottom pb-2">COMPENSATION</h6>
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td style={{ width: "40%" }}><strong>Gross Annual Salary:</strong></td>
                        <td>{offer.job.currency}{offer.grossAnnualSalary?.toLocaleString()}</td>
                      </tr>
                      {offer.netAnnualPay && (
                        <tr><td><strong>Net Annual Pay:</strong></td><td>{offer.job.currency}{Number(offer.netAnnualPay).toLocaleString()}</td></tr>
                      )}
                      {offer.netMonthlyPay && (
                        <tr><td><strong>Net Monthly Pay:</strong></td><td>{offer.job.currency}{Number(offer.netMonthlyPay).toLocaleString()}</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Benefits */}
                {offer.benefits && (
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">BENEFITS & PERKS</h6>
                    <div dangerouslySetInnerHTML={{ __html: offer.benefits }} />
                  </div>
                )}

                {/* Work Schedule */}
                <div className="mb-4">
                  <h6 className="text-primary mb-3 border-bottom pb-2">WORK SCHEDULE</h6>
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr><td style={{ width: "40%" }}><strong>Start Date:</strong></td><td>{dayjs(offer.startDate).format("DD MMMM YYYY")}</td></tr>
                      <tr><td><strong>Working Days:</strong></td><td>{formatWorkDays(offer.workDays)}</td></tr>
                      <tr><td><strong>Working Hours:</strong></td><td>{formatTime(offer.workStartTime)} – {formatTime(offer.workEndTime)}</td></tr>
                      {/* <tr><td><strong>Place of Work:</strong></td><td>{offer.placeOfWork}</td></tr>
                      {offer.probationPeriod && (
                        <tr><td><strong>Probation Period:</strong></td><td>{offer.probationPeriod}</td></tr>
                      )} */}
                    </tbody>
                  </table>
                </div>

                {/* Other Information */}
                {offer.otherInformation && (
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">ADDITIONAL INFORMATION</h6>
                    <div dangerouslySetInnerHTML={{ __html: offer.otherInformation }} />
                  </div>
                )}

                {/* Terms & Conditions */}
                {offer.terms.content && (
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">TERMS & CONDITIONS</h6>
                    <div dangerouslySetInnerHTML={{ __html: offer.terms.content }} />
                  </div>
                )}

                {/* Response Instructions */}
                {offer.responseInstructions && (
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">INSTRUCTIONS</h6>
                    <div dangerouslySetInnerHTML={{ __html: offer.responseInstructions }} />
                  </div>
                )}

                {/* Closing */}
                <div className="mb-5">
                  <p className="mb-1">We look forward to welcoming you to our team!</p>
                  <p className="mb-0 mt-4">Yours sincerely,</p>
                  <div style={{ marginTop: "60px" }}>
                    <p className="mb-0">_______________________________</p>
                    <p className="mb-0"><strong>{offer.responsibleOfficer ?? "N/A"}</strong></p>
                    <p className="text-muted mb-0">{offer.responsibleDepartment ?? "N/A"}</p>
                  </div>
                </div>

                {/* Acceptance Section */}
                <div className="pt-4 border-top">
                  <h6 className="mb-3"><strong>ACCEPTANCE OF OFFER</strong></h6>
                  <p>I, {offer.jobSeeker.firstName ?? ""} {offer.jobSeeker.lastName ?? "the undersigned"}, accept the above offer of employment.</p>
                  <div className="row mt-4">
                    <div className="col-md-6"><p className="mb-0">Signature: _______________________________</p></div>
                    <div className="col-md-6"><p className="mb-0">Date: ________________________________</p></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Right: Summary & Actions ── */}
          <div className="col-xl-4">

            {isPending && new Date(offer.expiryDate) >= new Date() && actionSuccess !== 'rejected' && offer?.offerStatus !== "Cancelled" && offer.offerStatus !== "Declined" && offer.offerStatus !== "Accepted" && (
              <div className="card shadow-sm mb-4 border-0">
                <div className="card-header text-white">
                  <h6 className="mb-0"><FileText size={16} className="me-2" />Respond to Offer</h6>
                </div>
                <div className="card-body">
                  <p className="text-muted small mb-3">
                    Please review the offer carefully before responding. This offer expires on{" "}
                    <strong>{dayjs(offer.expiryDate).format("DD MMM YYYY")}</strong>.
                  </p>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => openAcceptModal()}
                      disabled={actionLoading}
                    >
                      {actionLoading ? <span className="spinner-border spinner-border-sm me-2" /> : <CheckCircle size={16} className="me-2" />}
                      Accept Offer
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => opentRejectModal()}
                      disabled={actionLoading}
                    >
                      {actionLoading ? <span className="spinner-border spinner-border-sm me-2" /> : <XCircle size={16} className="me-2" />}
                      Decline Offer
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Accepted State */}
            {isAccepted && (
              <div className="card border-success mb-4">
                <div className="card-body text-center py-4">
                  <CheckCircle size={44} className="text-success mb-2" />
                  <h6 className="text-success">Offer Accepted</h6>
                  <p className="text-muted small mb-0">
                    You accepted this offer on{" "}
                    {offer.dateAccepted ? dayjs(offer.dateAccepted).format("DD MMM YYYY") : "N/A"}.
                  </p>
                </div>
              </div>
            )}



            {/* Rejected State */}
            {/* {isRejected && ( */}
            <>
              {/* Declined notice - compact */}
              <div className="alert alert-danger d-flex align-items-center gap-2 mb-3 py-2">
                <XCircle size={18} className="flex-shrink-0" />
                <span className="small">You declined this offer. You can negotiate below.</span>
              </div>

              {/* Negotiation Chat */}
              <NegotiationChat
                jobOfferId={offer.jobOfferId}
                currentUserId={1}
                currentUserType="Candidate"
                currentUserName={`${offer.jobSeeker.firstName} ${offer.jobSeeker.lastName}`}
              />
            </>
            {/* )} */}

            {/* Offer Summary Card */}
            <div className="card shadow-sm mb-4 border-0">
              <div className="card-header">
                <h6 className="mb-0"><Briefcase size={16} className="me-2" />Offer Summary</h6>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <small className="text-muted d-block">Position</small>
                      <strong>{offer.job.jobTitle}</strong>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <Building2 size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <small className="text-muted d-block">Department</small>
                      <strong>{offer.department}</strong>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <User size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <small className="text-muted d-block">Employment Type</small>
                      <strong>{offer.employmentType}</strong>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <Calendar size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <small className="text-muted d-block">Start Date</small>
                      <strong>{dayjs(offer.startDate).format("DD MMM YYYY")}</strong>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <small className="text-muted d-block">Working Hours</small>
                      <strong>{formatTime(offer.workStartTime)} – {formatTime(offer.workEndTime)}</strong>
                    </div>
                  </li>
                  <li className="d-none align-items-center gap-2">
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <small className="text-muted d-block">Place of Work</small>
                      {/* <strong>{offer.placeOfWork}</strong> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expiry Warning */}
            {isPending && dayjs(offer.expiryDate).diff(dayjs(), "day") <= 3 && (
              <div className="alert alert-warning d-flex gap-2">
                <AlertCircle size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <strong>Offer Expiring Soon!</strong>
                  <p className="mb-0 small">
                    This offer expires on <strong>{dayjs(offer.expiryDate).format("DD MMM YYYY")}</strong>. Please respond before then.
                  </p>
                </div>
              </div>
            )}

            <NavLink to="../MyApplications" className="btn btn-outline-secondary w-100">
              ← Back to Applications
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobOffer;