// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight, Download, Mail, Printer, Save } from "lucide-react";
import fullLogo from "../../assets/images/logo/lattice-logo.png";

function Payslip() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Payslip</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="MyJobs">My Jobs</a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    Payslip
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Payment History */}
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="payslip-wrapper">
                  <div className="watermark">PAYSLIP</div>

                  {/* <!-- Header Section --> */}
                  <div className="payslip-header">
                    <div className="company-info">
                      <div className="payslip-logo mb-15">
                        <img
                          className="light-logo"
                          src={fullLogo}
                          alt="Company Logo"
                        />
                        {/* <img
                          className="dark-logo"
                          src="assets/images/logo/logo-white.svg"
                          alt="Company Logo"
                        /> */}
                      </div>
                      <h5 className="mb-5">ABC Corporation</h5>
                      <p className="mb-5">123 Business Street</p>
                      <p className="mb-5">City, State 10001</p>
                      <p>Tax ID: 12-3456789</p>
                    </div>
                    <div className="employee-info text-end text-xs-start">
                      <h2 className="text-primary mb-10">PAYSLIP</h2>
                      <p className="mb-5">
                        <strong>Pay Period:</strong> 01/05/2025 - 31/05/2025
                      </p>
                      <p className="mb-5">
                        <strong>Pay Date:</strong> 05/06/2025
                      </p>
                      <p>
                        <strong>Payslip #:</strong> PS-2025-05678
                      </p>
                    </div>
                  </div>

                  {/* <!-- Employee Information --> */}
                  <div className="row gy-15 mb-25">
                    <div className="col-md-6">
                      <h4 className="mb-15">Employee Information</h4>
                      <table className="table table-bordered w-100">
                        <tbody>
                          <tr>
                            <th style={{ width: "40%" }}>Employee ID</th>
                            <td>EMP-12345</td>
                          </tr>
                          <tr>
                            <th>Name</th>
                            <td>John Parker</td>
                          </tr>
                          <tr>
                            <th>Department</th>
                            <td>Information Technology</td>
                          </tr>
                          <tr>
                            <th>Designation</th>
                            <td>Senior Developer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-15">Payment Details</h4>
                      <table className="table table-bordered w-100">
                        <tbody>
                          <tr>
                            <th style={{ width: "40%" }}>Bank Name</th>
                            <td>National Bank</td>
                          </tr>
                          <tr>
                            <th>Account Number</th>
                            <td>XXXXXX7890</td>
                          </tr>
                          <tr>
                            <th>PAN Number</th>
                            <td>ABCDE1234F</td>
                          </tr>
                          <tr>
                            <th>Payment Mode</th>
                            <td>Bank Transfer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <!-- Earnings & Deductions --> */}
                  <div className="earnings-deductions mb-25">
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
                              <td>Basic Salary</td>
                              <td className="text-end">$4,000.00</td>
                            </tr>
                            <tr>
                              <td>House Rent Allowance</td>
                              <td className="text-end">$1,600.00</td>
                            </tr>
                            <tr>
                              <td>Transport Allowance</td>
                              <td className="text-end">$400.00</td>
                            </tr>
                            <tr>
                              <td>Bonus</td>
                              <td className="text-end">$500.00</td>
                            </tr>
                            <tr className="total-row">
                              <td>Total Earnings</td>
                              <td className="text-end">$6,500.00</td>
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
                            <tr>
                              <td>Income Tax</td>
                              <td className="text-end">$650.00</td>
                            </tr>
                            <tr>
                              <td>Provident Fund</td>
                              <td className="text-end">$500.00</td>
                            </tr>
                            <tr>
                              <td>Health Insurance</td>
                              <td className="text-end">$150.00</td>
                            </tr>
                            <tr>
                              <td>Professional Tax</td>
                              <td className="text-end">$100.00</td>
                            </tr>
                            <tr className="total-row">
                              <td>Total Deductions</td>
                              <td className="text-end">$1,400.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Net Pay --> */}
                  <div className="row gy-15 mb-25">
                    <div className="col-md-6 offset-md-6">
                      <table className="table table-bordered w-100">
                        <tbody>
                          <tr className="table-total">
                            <th style={{ width: "60%" }}>Net Pay</th>
                            <td className="text-end">$5,100.00</td>
                          </tr>
                          <tr>
                            <th>Net Pay in Words</th>
                            <td>Five Thousand One Hundred Dollars Only</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <!-- Leave Summary (optional) --> */}
                  <div className="row mb-25">
                    <div className="col-12">
                      <h4 className="mb-15">Leave Summary</h4>
                      <table className="table table-bordered w-100">
                        <thead>
                          <tr>
                            <th>Leave Type</th>
                            <th>Entitled</th>
                            <th>Availed</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Annual Leave</td>
                            <td>20</td>
                            <td>5</td>
                            <td>15</td>
                          </tr>
                          <tr>
                            <td>Sick Leave</td>
                            <td>10</td>
                            <td>2</td>
                            <td>8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <!-- Signature Area --> */}
                  <div className="row signature-area">
                    <div className="col-md-6 col-sm-6 col-6">
                      <p className="border-top pt-5">Employee Signature</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 text-end">
                      <p className="border-top pt-5">Authorized Signature</p>
                    </div>
                  </div>

                  {/* <!-- Footer Note --> */}
                  <div className="row gy-15 mt-25">
                    <div className="col-12">
                      <p className="text-muted">
                        This is a computer generated payslip and does not
                        require a signature.
                      </p>
                      <p className="text-muted">
                        For any discrepancies, please contact HR department
                        within 7 days of receiving this payslip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="sidebar-sticky">
              <div className="card">
                <div className="d-flex-column flex-wrap gap-10">
                  <a
                    href="payroll-payslip-print.html"
                    target="_blank"
                    className="btn btn-info w-100"
                  >
                    <Printer size={14} /> Print
                  </a>
                  <a
                    href="assets/documents/payslip.pdf"
                    target="_blank"
                    className="btn btn-success w-100"
                  >
                    <Save size={14} /> Save
                  </a>
                  <a
                    href="assets/documents/payslip.pdf"
                    target="_blank"
                    className="btn btn-warning w-100"
                  >
                    <Download size={14} /> Download
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#emailSend"
                  >
                    <Mail size={14} />  Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payslip;
