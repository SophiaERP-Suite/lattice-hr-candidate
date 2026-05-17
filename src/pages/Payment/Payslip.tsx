import { ChevronRight, Download, Printer } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Hashids from "hashids";
import fullLogo from "../../assets/images/logo/lattice-logo.png";
import { getMyPayslips, getMyPayslip } from "../../api/PaymentApi";
import type { PayslipDto } from "../../types/payslip";

// ── Helpers ───────────────────────────────────────────────────────────────────

const BASE_URL = import.meta.env.VITE_API_URL;

const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

const fmtCurrency = (amount: number | null | undefined, code = "NGN") => {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en", {
    style: "currency", currency: code, minimumFractionDigits: 2,
  }).format(amount);
};

const fmtDate = (d: string | null | undefined) => {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
};

// ── Component ─────────────────────────────────────────────────────────────────

function Payslip() {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const { employerId } = useParams();

  const decodedEmployerId = useMemo(() => {
    const decoded = hashIds.decode(String(employerId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [employerId]);

  const now = new Date();
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [payslip, setPayslip] = useState<PayslipDto | null>(null);
  const [allPayslips, setAllPayslips] = useState<PayslipDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const years = Array.from({ length: 4 }, (_, i) => now.getFullYear() - i);

  // Load all payslips once for the month/year dropdowns
  useEffect(() => {
    if (!decodedEmployerId) return;
    getMyPayslips(decodedEmployerId).then(setAllPayslips).catch(() => { });
  }, [decodedEmployerId]);

  useEffect(() => {
    if (!decodedEmployerId) return;
    loadPayslip();
  }, [decodedEmployerId, selectedMonth, selectedYear]);

  const loadPayslip = async () => {
    if (!decodedEmployerId) return;
    setLoading(true);
    setNotFound(false);
    setPayslip(null);
    try {
      const data = await getMyPayslip(decodedEmployerId, selectedMonth, selectedYear);
      console.log("pay", data)
      setPayslip(data);
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => window.print();

  const currencyCode = payslip?.currencyCode ?? "NGN";

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">

          {/* Header */}
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">My Payslip</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Payslip</li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><a href="MyJobs">My Jobs</a></li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><a href="Dashboard">Home</a></li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Month/Year selector */}
          <div className="col-xl-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  <div className="col-md-3">
                    <label className="form-label fw-medium">Month</label>
                    <select
                      className="form-select"
                      value={selectedMonth}
                      onChange={e => setSelectedMonth(Number(e.target.value))}
                    >
                      {MONTHS.map((m, i) => (
                        <option key={i + 1} value={i + 1}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label fw-medium">Year</label>
                    <select
                      className="form-select"
                      value={selectedYear}
                      onChange={e => setSelectedYear(Number(e.target.value))}
                    >
                      {years.map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  {/* Quick jump from history */}
                  {allPayslips.length > 0 && (
                    <div className="col-md-4">
                      <label className="form-label fw-medium">Jump to</label>
                      <select
                        className="form-select"
                        value={`${selectedMonth}-${selectedYear}`}
                        onChange={e => {
                          const [m, y] = e.target.value.split("-").map(Number);
                          setSelectedMonth(m);
                          setSelectedYear(y);
                        }}
                      >
                        {allPayslips.map(p => (
                          <option key={p.payslipId} value={`${p.month}-${p.year}`}>
                            {MONTHS[p.month - 1]} {p.year} —{" "}
                            {p.status === "Paid" ? "✓ Paid" : "Pending"}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">

                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" />
                    <p className="mt-3 text-muted">Loading payslip…</p>
                  </div>
                ) : notFound ? (
                  <div className="text-center py-5 text-muted">
                    <i className="ri-file-unknow-line fs-48 d-block mb-3" />
                    <h6>No payslip found</h6>
                    <p className="small mb-0">
                      No payslip has been generated for {MONTHS[selectedMonth - 1]} {selectedYear} yet.
                    </p>
                  </div>
                ) : payslip ? (
                  <div className="payslip-wrapper" id="payslip-print-area">
                    <div className="watermark">PAYSLIP</div>

                    {/* Header */}
                    <div className="payslip-header">
                      <div className="company-info">
                        <div className="payslip-logo mb-15">
                          <img className="light-logo" src={fullLogo} alt="Logo" />
                        </div>
                      </div>
                      <div className="employee-info text-end text-xs-start">
                        <h2 className="text-primary mb-10">PAYSLIP</h2>
                        <p className="mb-5">
                          <strong>Pay Period:</strong>{" "}
                          {MONTHS[payslip.month - 1]} {payslip.year}
                        </p>
                        {payslip.datePaid && (
                          <p className="mb-5">
                            <strong>Pay Date:</strong> {fmtDate(payslip.datePaid)}
                          </p>
                        )}
                        <p>
                          <strong>Payslip #:</strong> PS-{payslip.year}-{String(payslip.payslipId).padStart(5, "0")}
                        </p>
                      </div>
                    </div>

                    {/* Employee info */}
                    <div className="row gy-15 mb-25">
                      <div className="col-md-6">
                        <h4 className="mb-15">Employee Information</h4>
                        <table className="table table-bordered w-100">
                          <tbody>
                            <tr>
                              <th style={{ width: "40%" }}>Name</th>
                              <td>{payslip.employeeName}</td>
                            </tr>
                            <tr>
                              <th>Pay Period</th>
                              <td>{MONTHS[payslip.month - 1]} {payslip.year}</td>
                            </tr>
                            <tr>
                              <th>Days Scheduled</th>
                              <td>{payslip.standardDays} working days</td>
                            </tr>
                            <tr>
                              <th>Days Worked</th>
                              <td>
                                <span className={payslip.absentDays > 0 ? "text-warning" : "text-success"}>
                                  {payslip.daysWorked}
                                </span>
                                {payslip.absentDays > 0 && (
                                  <span className="text-danger ms-2 small">
                                    ({payslip.absentDays} absent)
                                  </span>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-6">
                        <h4 className="mb-15">Payment Details</h4>
                        <table className="table table-bordered w-100">
                          <tbody>
                            <tr>
                              <th style={{ width: "40%" }}>Status</th>
                              <td>
                                {payslip.status === "Paid" ? (
                                  <span className="badge bg-label-success">✓ Paid</span>
                                ) : (
                                  <span className="badge bg-label-warning">Pending</span>
                                )}
                              </td>
                            </tr>
                            {payslip.datePaid && (
                              <tr>
                                <th>Date Paid</th>
                                <td>{fmtDate(payslip.datePaid)}</td>
                              </tr>
                            )}
                            {payslip.paymentReference && (
                              <tr>
                                <th>Reference</th>
                                <td>{payslip.paymentReference}</td>
                              </tr>
                            )}
                            {payslip.paidByName && (
                              <tr>
                                <th>Processed By</th>
                                <td>{payslip.paidByName}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Earnings & Deductions */}
                    <div className="d-none earnings-deductions mb-25">
                      <div className="row gy-15">
                        <div className="col-md-6">
                          <h4 className="mb-15">Earnings</h4>
                          <table className="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th className="text-end">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Monthly Gross Salary</td>
                                <td className="text-end">
                                  {fmtCurrency(payslip.monthlySalary, currencyCode)}
                                </td>
                              </tr>
                              <tr className="total-row">
                                <td><strong>Total Earnings</strong></td>
                                <td className="text-end">
                                  <strong>{fmtCurrency(payslip.monthlySalary, currencyCode)}</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-15">Deductions</h4>
                          <table className="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th className="text-end">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {payslip.absentDeduction > 0 && (
                                <tr>
                                  <td>
                                    Absent Deduction
                                    <small className="text-muted d-block">
                                      {payslip.absentDays} day{payslip.absentDays !== 1 ? "s" : ""} × {fmtCurrency(payslip.dailyRate, currencyCode)}
                                    </small>
                                  </td>
                                  <td className="text-end text-danger">
                                    − {fmtCurrency(payslip.absentDeduction, currencyCode)}
                                  </td>
                                </tr>
                              )}
                              {payslip.absentDeduction === 0 && (
                                <tr>
                                  <td className="text-muted">No deductions</td>
                                  <td className="text-end text-muted">—</td>
                                </tr>
                              )}
                              <tr className="total-row">
                                <td><strong>Total Deductions</strong></td>
                                <td className="text-end">
                                  <strong className="text-danger">
                                    − {fmtCurrency(payslip.absentDeduction, currencyCode)}
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Net pay */}
                    <div className="row gy-15 mb-25">
                      <div className="col-md-6 offset-md-6">
                        <table className="table table-bordered w-100">
                          <tbody>
                            <tr className="table-total">
                              <th style={{ width: "50%" }}>Amount</th>
                              <td className="text-end text-success fw-bold fs-5">
                                {fmtCurrency(payslip.amountDue, currencyCode)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Receipt / Proof of Payment */}
                    {payslip.status === "Paid" && payslip.paymentReceiptPath && (
                      <div className="row mb-25">
                        <div className="col-12">
                          <h4 className="mb-15">Proof of Payment</h4>
                          <div className="border rounded p-3 text-center">
                            {payslip.paymentReceiptPath.toLowerCase().endsWith(".pdf") ? (
                              <div className="py-4">
                                <i className="ri-file-pdf-line fs-42 text-success d-block mb-2" />
                                <p className="text-muted small mb-2">
                                  Payslip available as PDF
                                </p>
                                <a
                                  href={`${BASE_URL}/${payslip.paymentReceiptPath}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-sm btn-outline-success"
                                >
                                  <Download size={14} className="me-1" />
                                  View Payslip PDF
                                </a>
                              </div>
                            ) : (
                              <>
                                <iframe
                                  src={`${BASE_URL}/${payslip.paymentReceiptPath}`}
                                  // alt="Payment receipt"
                                  // className="img-fluid rounded mb-2"
                                  // style={{ maxHeight: 350, objectFit: "contain" }}
                                  style={{ width: '100%', height: '600px', border: '1px solid #dee2e6', borderRadius: '4px' }}
                                  title="Resume"
                                />
                                <div>
                                  <a
                                    href={`${BASE_URL}/${payslip.paymentReceiptPath}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm btn-outline-primary"
                                  >
                                    <Download size={14} className="me-1" />
                                    View Full Size
                                  </a>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Not yet paid notice */}
                    {payslip.status !== "Paid" && (
                      <div className="row mb-25">
                        <div className="col-12">
                          <div className="alert alert-warning">
                            <i className="ri-time-line me-2" />
                            Payment has not been confirmed by your employer yet for this period.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="row gy-15 mt-25">
                      <div className="col-12">
                        <p className="text-muted small">
                          This is a system-generated payslip. For any discrepancies,
                          please contact HR within 7 days.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Sidebar actions */}
          <div className="col-xl-3">
            <div className="sidebar-sticky">
              <div className="card">
                <div className="card-body">
                  <h6 className="mb-3">Actions</h6>
                  <div className="d-flex-column flex-wrap gap-10">
                    <button
                      className="btn btn-info w-100"
                      onClick={handlePrint}
                      disabled={!payslip}
                    >
                      <Printer size={14} className="me-1" /> Print Payslip
                    </button>
                    {payslip?.paymentReceiptPath && (
                      <a
                        href={`${BASE_URL}/${payslip.paymentReceiptPath}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-success w-100"
                      >
                        <Download size={14} className="me-1" /> Download Payslip
                      </a>
                    )}
                  </div>

                  {/* Payslip history list */}
                  {allPayslips.length > 0 && (
                    <div className="mt-4">
                      <h6 className="mb-3">Payment History</h6>
                      <div className="list-group">
                        {allPayslips.map(p => (
                          <button
                            key={p.payslipId}
                            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${p.month === selectedMonth && p.year === selectedYear
                              ? "active"
                              : ""
                              }`}
                            onClick={() => {
                              setSelectedMonth(p.month);
                              setSelectedYear(p.year);
                            }}
                          >
                            <span className="small">
                              {MONTHS[p.month - 1]} {p.year}
                            </span>
                            {p.status === "Paid" ? (
                              <span className="badge bg-success">Paid</span>
                            ) : (
                              <span className="badge bg-warning text-dark">Pending</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
}

export default Payslip;