import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  message?: string | React.ReactNode;

  confirmText?: string;
  cancelText?: string;
  confirmColor?: "danger" | "success" | "warning" | "primary";

  inputLabel?: string;
  inputPlaceholder?: string;

  inputLabel2?: string;
  inputPlaceholder2?: string;

  inputLabel3?: string;
  inputPlaceholder3?: string;

  inputLabel4?: string;
  inputPlaceholder4?: string;

  dropdownLabel?: string;
  dropdownOptions?: { value: string | number; label: string }[];
  dropdownPlaceholder?: string;

  fileLabel?: string;
  fileAccept?: string;

  loading?: boolean;

  defaultInputValue?: string;
  defaultInputValue2?: string;
  defaultInputValue3?: string;
  defaultInputValue4?: string;
  defaultDropdownValue?: string;

  headerIcon?: React.ReactNode;
  buttonIcon?: React.ReactNode;

  onConfirm: (data: {
    inputValue?: string;
    inputValue2?: string;
    inputValue3?: string;
    inputValue4?: string;
    dropdownValue?: string;
    file?: File;
  }) => void;

  onCancel: () => void;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "primary",
  inputLabel,
  inputPlaceholder,
  inputLabel2,
  inputPlaceholder2,
  inputLabel3,
  inputPlaceholder3,
  inputLabel4,
  inputPlaceholder4,
  dropdownLabel,
  dropdownOptions = [],
  dropdownPlaceholder = "Select an option",
  fileLabel,
  fileAccept = "*/*",
  loading = false,
  defaultInputValue = "",
  defaultInputValue2 = "",
  defaultInputValue3 = "",
  defaultInputValue4 = "N/A",
  defaultDropdownValue = "",
  headerIcon,
  buttonIcon,
  onConfirm,
  onCancel,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (isOpen) {
      setInputValue(defaultInputValue);
      setInputValue2(defaultInputValue2);
      setInputValue3(defaultInputValue3);
      setInputValue4(defaultInputValue4);
      setDropdownValue(defaultDropdownValue);
      setSelectedFile(null);
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg border-0">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title d-flex align-items-center gap-2">
                {headerIcon} {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                disabled={loading}
                onClick={onCancel}
              />
            </div>

            {/* Body */}
            <div className="modal-body">
              {message && <p className="text-muted">{message}</p>}

              {inputLabel && (
                <div className="mb-3">
                  <label className="form-label">{inputLabel}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={inputPlaceholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              )}

              {inputLabel2 && (
                <div className="mb-3">
                  <label className="form-label">{inputLabel2}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={inputPlaceholder2}
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                  />
                </div>
              )}

              {inputLabel3 && (
                <div className="mb-3">
                  <label className="form-label">{inputLabel3}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={inputPlaceholder3}
                    value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                  />
                </div>
              )}

              {inputLabel4 && (
                <div className="mb-3">
                  <label className="form-label">{inputLabel4}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={inputPlaceholder4}
                    value={inputValue4}
                    onChange={(e) => setInputValue4(e.target.value)}
                  />
                </div>
              )}

              {dropdownLabel && (
                <div className="mb-3">
                  <label className="form-label">{dropdownLabel}</label>
                  <select
                    className="form-select"
                    value={dropdownValue}
                    onChange={(e) => setDropdownValue(e.target.value)}
                  >
                    <option value="">{dropdownPlaceholder}</option>
                    {dropdownOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {fileLabel && (
                <div className="mb-3">
                  <label className="form-label">{fileLabel}</label>
                  <input
                    type="file"
                    className="form-control"
                    accept={fileAccept}
                    onChange={(e) =>
                      setSelectedFile(e.target.files?.[0] || null)
                    }
                  />
                  {selectedFile && (
                    <small className="text-muted">
                      Selected: {selectedFile.name}
                    </small>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                className="btn btn-dark"
                onClick={onCancel}
                disabled={loading}
              >
                <X /> {cancelText}
              </button>

              <button
                className={`btn btn-${confirmColor}`}
                disabled={loading}
                onClick={() =>
                  onConfirm({
                    inputValue,
                    inputValue2,
                    inputValue3,
                    inputValue4,
                    dropdownValue,
                    file: selectedFile || undefined,
                  })
                }
              >
                {buttonIcon} {loading ? "Please wait..." : confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
