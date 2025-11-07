// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight } from "lucide-react";

function Payroll() {
  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Payroll</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    Payroll
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Header */}
          <div className="col-xl-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold text-primary">
                {/* Payroll */}

              </h3>
              <button className="btn btn-outline-primary">
                Download Latest Payslip
              </button>
            </div>
          </div>

          {/* Payroll Summary */}
          <div className="col-xl-12">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Current Payroll Summary</h5>
                <div className="row">
                  <div className="col-md-3">
                    <p className="mb-1 text-muted">Pay Period</p>
                    <p className="fw-semibold">Oct 2025</p>
                  </div>
                  <div className="col-md-3">
                    <p className="mb-1 text-muted">Job Title</p>
                    <p className="fw-semibold">Field Investigator</p>
                  </div>
                  <div className="col-md-3">
                    <p className="mb-1 text-muted">Payment Status</p>
                    <span className="badge bg-success">Paid</span>
                  </div>
                  <div className="col-md-3">
                    <p className="mb-1 text-muted">Date Paid</p>
                    <p className="fw-semibold">02 Nov 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Breakdown */}
          <div className="col-xl-12">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Earnings Breakdown</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Basic Salary</span>
                        <span>₦250,000</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Bonus</span>
                        <span>₦30,000</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Allowance</span>
                        <span>₦20,000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Tax</span>
                        <span>-₦15,000</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Other Deductions</span>
                        <span>-₦5,000</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between fw-bold">
                        <span>Net Pay</span>
                        <span>₦280,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="col-xl-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Payment History</h5>
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Pay Period</th>
                        <th>Date Paid</th>
                        <th>Status</th>
                        <th>Net Pay</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Sep 2025</td>
                        <td>03 Oct 2025</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td>₦275,000</td>
                        <td>
                          <a href="Payslip" className="btn btn-sm btn-outline-secondary">
                            View Payslip
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Aug 2025</td>
                        <td>03 Sep 2025</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td>₦270,000</td>
                        <td>
                          <button className="btn btn-sm btn-outline-secondary">
                            View Payslip
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payroll;
