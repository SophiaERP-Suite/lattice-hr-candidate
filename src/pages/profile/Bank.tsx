import { useState, useEffect } from "react";
import type { BankDetail } from "../../types/bank";
import { createBankDetail, getBankDetails } from "../../api/Bank";
import { toast, ToastContainer } from "react-toastify";
import {
  CheckCheck,
  ChevronRight,
  X,
  Plus,
  Pen,
} from "lucide-react";

function Bank() {
  const [bank, setBank] = useState<BankDetail | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [form, setForm] = useState({
    accountHolderName: "",
    accountNumber: "",
    bankName: "",
    swiftCode: "",
    routingNumber: "",
  });

  useEffect(() => {
    fetchBank();
  }, []);

  const fetchBank = async () => {
    try {
      const res = await getBankDetails();
      if (res?.data) {
        setBank(res.data);
        setForm({
          accountHolderName: res.data.accountHolderName || "",
          accountNumber: res.data.accountNumber || "",
          bankName: res.data.bankName || "",
          swiftCode: res.data.swiftCode || "",
          routingNumber: res.data.routingNumber || "",
        });
      }
    } catch {
      console.error("Failed to load bank details");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("accountHolderName", form.accountHolderName);
      formData.append("accountNumber", form.accountNumber);
      formData.append("bankName", form.bankName);
      formData.append("swiftCode", form.swiftCode);
      formData.append("routingNumber", form.routingNumber);

      const res = await createBankDetail(formData);

      if (!res) {
        toast.error("Action Failed");
        return;
      }

      setBank(res);
      setIsEditing(false);
      toast.success("Action Successful");
      await fetchBank();
    } catch {
      toast.error("Action Failed");
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const cancelEdit = async () => {
    await fetchBank();
    setIsEditing(false);
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Profile</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Bank Details
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Profile">Profile & Resume</a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-12 col-xxl-12 col-xl-12 col-lg-12">
            <div className="card height-equal-2">
              <ToastContainer />
              <div className="card-header d-flex-between">
                <h4>Bank Details</h4>
                {bank && !isEditing && (
                  <button
                    onClick={toggleEditMode}
                    className="btn btn-warning d-flex align-items-center gap-2"
                  >
                    <Pen size={15} /> Edit Details
                  </button>
                )}
              </div>
              <div className="card-body">
                {/* View Mode - Show Bank Details */}
                {bank && !isEditing && (
                  <ul className="bank-info enhanced-list">
                    <li className="d-flex-between py-9 b-bottom">
                      <div className="info-label">
                        <span className="text-body">Account Holder Name:</span>
                      </div>
                      <div className="info-value">{bank.accountHolderName}</div>
                    </li>

                    <li className="d-flex-between py-9 b-bottom">
                      <div className="info-label">
                        <span className="text-body">Account Number:</span>
                      </div>
                      <div className="info-value">
                        <span
                          id="accountNumber"
                          className="account-number"
                          data-full="1234 5678 9012"
                        >
                          {bank.accountNumber}
                        </span>
                        {/* <button
                          id="toggleAccount"
                          className="btn-eye ms-2"
                          type="button"
                        >
                          <EyeIcon size={15} />
                        </button> */}
                      </div>
                    </li>

                    <li className="d-flex-between py-9 b-bottom">
                      <div className="info-label">
                        <span className="text-body">Bank Name:</span>
                      </div>
                      <div className="info-value">{bank.bankName}</div>
                    </li>

                    <li className="d-flex-between py-9 b-bottom">
                      <div className="info-label">
                        <span className="text-body">SWIFT/BIC Code:</span>
                      </div>
                      <div className="info-value">{bank.swiftCode}</div>
                    </li>

                    <li className="d-flex-between py-9 b-bottom">
                      <div className="info-label">
                        <span className="text-body">Routing Number:</span>
                      </div>
                      <div className="info-value">{bank.routingNumber}</div>
                    </li>
                  </ul>
                )}

                {/* Edit Mode - Show Form */}
                {isEditing && (
                  <form
                    onSubmit={handleSubmit}
                    className="row"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="col-md-6 form-group mb-3">
                      <label className="form-label">Account Holder Name</label>
                      <input
                        className="form-control"
                        name="accountHolderName"
                        value={form.accountHolderName}
                        onChange={handleChange}
                        placeholder="Account Holder Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="form-label">Account Number</label>
                      <input
                        name="accountNumber"
                        className="form-control"
                        value={form.accountNumber}
                        onChange={handleChange}
                        placeholder="Account Number"
                        required
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label className="form-label">Bank Name</label>
                      <input
                        name="bankName"
                        className="form-control"
                        value={form.bankName}
                        onChange={handleChange}
                        placeholder="Bank Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label className="form-label">SWIFT Code</label>
                      <input
                        name="swiftCode"
                        className="form-control"
                        value={form.swiftCode}
                        onChange={handleChange}
                        placeholder="SWIFT Code"
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label className="form-label">Routing Number</label>
                      <input
                        name="routingNumber"
                        className="form-control"
                        value={form.routingNumber}
                        onChange={handleChange}
                        placeholder="Routing Number"
                      />
                    </div>

                    <div className="col-12 d-flex justify-content-end gap-2 mt-3">
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="btn btn-dark d-flex align-items-center gap-2"
                      >
                        <X size={15} /> Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success d-flex align-items-center gap-2"
                      >
                        <CheckCheck /> Save
                      </button>
                    </div>
                  </form>
                )}

                {/* No Bank Details - Show Form Always */}
                {!bank && !isEditing && (
                  <>
                    <div className="text-center mb-4">
                      <p>No bank details added yet.</p>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="btn btn-success mt-2 d-flex align-items-center gap-2 mx-auto"
                      >
                        <Plus /> Add Bank Details
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bank;
