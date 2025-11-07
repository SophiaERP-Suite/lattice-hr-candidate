// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  // Lock,
  Mail,
  MessageSquare,
  Phone,
  // Search,
  Send,
} from "lucide-react";
import { useState } from "react";

function HelpSupport() {
  // const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Support request submitted successfully!");
  };

  const [active, setActive] = useState<string | null>("faq1");

  const toggleAccordion = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">HelpSupport</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    HelpSupport
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

          <div className="col-xl-12">
            {/* <div className="card" style={{ textAlign: "left" }}>
              <form
                className="d-flex justify-content-center mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="input-group w-75 w-md-50 shadow-sm">
                  <span className="input-group-text bg-white border-end-0">
                    <Search size={18} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search for help topics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </form>
            </div> */}

            {/* ===== FAQ Section ===== */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body" style={{ textAlign: "left" }}>
                <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>

                <div className="accordion" id="faqAccordion">
                  {/* ===== 1 ===== */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq1">
                      <button
                        className="accordion-button d-flex justify-content-between align-items-center"
                        type="button"
                        onClick={() => toggleAccordion("faq1")}
                        style={{ boxShadow: "none" }}
                      >
                        <span>How can I reset my password?</span>
                        {active === "faq1" ? (
                          <ChevronUp size={18} className="text-muted" />
                        ) : (
                          <ChevronDown size={18} className="text-muted" />
                        )}
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className={`accordion-collapse collapse ${
                        active === "faq1" ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        Go to your account settings, click "Change Password",
                        and follow the prompts to set a new one.
                      </div>
                    </div>
                  </div>

                  {/* ===== 2 ===== */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq2">
                      <button
                        className="accordion-button d-flex justify-content-between align-items-center collapsed"
                        type="button"
                        onClick={() => toggleAccordion("faq2")}
                      >
                        <span>How do I contact support?</span>
                        {active === "faq2" ? (
                          <ChevronUp size={18} className="text-muted" />
                        ) : (
                          <ChevronDown size={18} className="text-muted" />
                        )}
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className={`accordion-collapse collapse ${
                        active === "faq2" ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        You can reach our support team by filling out the
                        contact form below or by emailing{" "}
                        <a href="mailto:support@company.com">
                          support@company.com
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Contact Support Form ===== */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body" style={{ textAlign: "left" }}>
                <h4 className="fw-bold mb-3">Contact Support</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E.g., Account access issue"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Describe your issue or question"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <Send size={16} className="me-2" /> Submit Request
                  </button>
                </form>
              </div>
            </div>

            {/* ===== Quick Contact Info ===== */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Need Immediate Help?</h5>
                <div className="d-flex flex-wrap gap-4">
                  <div>
                    <Mail className="text-primary me-2" />
                    support@company.com
                  </div>
                  <div>
                    <Phone className="text-success me-2" />
                    +234 800 123 4567
                  </div>
                  <div>
                    <MessageSquare className="text-info me-2" />
                    Live Chat (Mon–Fri, 9AM–5PM)
                  </div>
                </div>
              </div>
            </div>

            {/* End */}
          </div>
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HelpSupport;
