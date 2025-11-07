// import avatar1 from "/assets/images/avatar/avatar-thumb-010.webp"
import { ChevronRight } from "lucide-react";
// import john from "../../assets/images/avatar/avatar-thumb-001.webp";
import { useState } from "react";

function CVBuilder() {
  const [cv, setCv] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: [{ degree: "", institution: "", year: "" }],
    experience: [{ role: "", company: "", duration: "", description: "" }],
    skills: "",
    certifications: [""],
    languages: "",
    referees: [{ name: "", contact: "" }],
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCv({ ...cv, [e.target.name]: e.target.value });
  };

  // Handle change for array fields (like education, experience)
  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: string
  ) => {
    const updatedArray = [...(cv as any)[field]];
    updatedArray[index][e.target.name] = e.target.value;
    setCv({ ...cv, [field]: updatedArray });
  };

  // Add new item to array field
  const addArrayItem = (field: string, newItem: any) => {
    setCv({ ...cv, [field]: [...(cv as any)[field], newItem] });
  };

  // Remove an item from array
  const removeArrayItem = (field: string, index: number) => {
    const updatedArray = [...(cv as any)[field]];
    updatedArray.splice(index, 1);
    setCv({ ...cv, [field]: updatedArray });
  };

  const handleSubmit = () => {
    console.log("CV Data:", cv);
    alert("Your CV has been saved!");
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Cv Builder</h1>
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
                    <a href="resume">Resume</a>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item active" aria-current="page">
                    Cv Builder
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Left side - CV Form */}
          <div className="col-lg-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-white mb-3">
                <h5 className="mb-0">CV Builder</h5>
              </div>
              <div className="card-body">
                <form style={{ textAlign: "left" }}>
                  {/* ===== Personal Info ===== */}
                  <h5 className="fw-semibold mb-3 text-primary">
                    Personal Information
                  </h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={cv.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={cv.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={cv.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={cv.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* ===== Summary ===== */}
                  <h5 className="fw-semibold mb-3 mt-4 text-primary">
                    Professional Summary
                  </h5>
                  <textarea
                    className="form-control mb-4"
                    rows={4}
                    name="summary"
                    value={cv.summary}
                    onChange={handleChange}
                    placeholder="Brief summary of your career and skills"
                  ></textarea>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <form style={{ textAlign: "left" }}>
                  {/* ===== Education ===== */}
                  <h5 className="fw-semibold mb-3 mt-4 text-primary">
                    Education
                  </h5>
                  {cv.education.map((edu, index) => (
                    <div key={index} className="border rounded p-3 mb-3">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Degree</label>
                          <input
                            type="text"
                            className="form-control"
                            name="degree"
                            value={edu.degree}
                            onChange={(e) =>
                              handleArrayChange(e, index, "education")
                            }
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Institution</label>
                          <input
                            type="text"
                            className="form-control"
                            name="institution"
                            value={edu.institution}
                            onChange={(e) =>
                              handleArrayChange(e, index, "education")
                            }
                          />
                        </div>
                        <div className="col-md-3 mb-3">
                          <label className="form-label">Year</label>
                          <input
                            type="text"
                            className="form-control"
                            name="year"
                            value={edu.year}
                            onChange={(e) =>
                              handleArrayChange(e, index, "education")
                            }
                          />
                        </div>
                        {cv.education.length > 1 && (
                          <div className="col-md-1 d-flex align-items-end">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() =>
                                removeArrayItem("education", index)
                              }
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mb-4"
                    onClick={() =>
                      addArrayItem("education", {
                        degree: "",
                        institution: "",
                        year: "",
                      })
                    }
                  >
                    + Add Education
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <form style={{ textAlign: "left" }}>
                  {/* ===== Experience ===== */}
                  <h5 className="fw-semibold mb-3 mt-4 text-primary">
                    Work Experience
                  </h5>
                  {cv.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border rounded p-3 mb-3 "
                    >
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Role</label>
                          <input
                            type="text"
                            className="form-control"
                            name="role"
                            value={exp.role}
                            onChange={(e) =>
                              handleArrayChange(e, index, "experience")
                            }
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            value={exp.company}
                            onChange={(e) =>
                              handleArrayChange(e, index, "experience")
                            }
                          />
                        </div>
                        <div className="col-md-3 mb-3">
                          <label className="form-label">Duration</label>
                          <input
                            type="text"
                            className="form-control"
                            name="duration"
                            value={exp.duration}
                            onChange={(e) =>
                              handleArrayChange(e, index, "experience")
                            }
                          />
                        </div>
                        {cv.experience.length > 1 && (
                          <div className="col-md-1 d-flex align-items-end">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() =>
                                removeArrayItem("experience", index)
                              }
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          name="description"
                          value={exp.description}
                          onChange={(e) =>
                            handleArrayChange(e, index, "experience")
                          }
                        ></textarea>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mb-4"
                    onClick={() =>
                      addArrayItem("experience", {
                        role: "",
                        company: "",
                        duration: "",
                        description: "",
                      })
                    }
                  >
                    + Add Experience
                  </button>

                  {/* ===== Skills ===== */}
                  <h5 className="fw-semibold mb-3 mt-4 text-primary">Skills</h5>
                  <input
                    type="text"
                    className="form-control mb-4"
                    name="skills"
                    value={cv.skills}
                    onChange={handleChange}
                    placeholder="E.g., React, Node.js, SQL"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <form style={{ textAlign: "left" }}>
                  {/* ===== Certifications ===== */}
                  <h5 className="fw-semibold mb-3 mt-4 text-primary">
                    Certifications
                  </h5>
                  {cv.certifications.map((cert, index) => (
                    <div key={index} className="d-flex mb-2 align-items-center">
                      <input
                        type="text"
                        className="form-control me-2"
                        value={cert}
                        onChange={(e) => {
                          const updated = [...cv.certifications];
                          updated[index] = e.target.value;
                          setCv({ ...cv, certifications: updated });
                        }}
                      />
                      {cv.certifications.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() =>
                            removeArrayItem("certifications", index)
                          }
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mb-4"
                    onClick={() => addArrayItem("certifications", "")}
                  >
                    + Add Certification
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <form style={{ textAlign: "left" }}>
                  {/* ===== Referees ===== */}
                  <h5 className="fw-semibold mb-3 mt-4 text-primary">
                    Referees
                  </h5>
                  {cv.referees.map((ref, index) => (
                    <div
                      key={index}
                      className="border rounded p-3 mb-3 "
                    >
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={ref.name}
                            onChange={(e) =>
                              handleArrayChange(e, index, "referees")
                            }
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Contact Info</label>
                          <input
                            type="text"
                            className="form-control"
                            name="contact"
                            value={ref.contact}
                            onChange={(e) =>
                              handleArrayChange(e, index, "referees")
                            }
                          />
                        </div>
                      </div>
                      {cv.referees.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeArrayItem("referees", index)}
                        >
                          Remove Referee
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mb-4"
                    onClick={() =>
                      addArrayItem("referees", { name: "", contact: "" })
                    }
                  >
                    + Add Referee
                  </button>

                  {/* ===== Submit Button ===== */}
                  <div className="d-grid mt-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-md"
                      onClick={handleSubmit}
                    >
                      Save / Generate CV
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Right side - CV Preview */}
          {/* <div className="col-lg-12">
            <div className="card shadow-sm border-0">
              <div className="card-header text-white mb-3">
                <h5 className="mb-0">CV Preview</h5>
              </div>
              <div className="card-body">
                <h4>{cv.fullName || "Your Name Here"}</h4>
                <p className="text-muted">
                  {cv.email && `📧 ${cv.email}`}{" "}
                  {cv.phone && ` | 📞 ${cv.phone}`}
                </p>
                <p>{cv.address}</p>

                <h6 className="mt-4 text-primary">Summary</h6>
                <p>{cv.summary || "Write a short professional summary..."}</p>

                <h6 className="mt-4 text-primary">Education</h6>
                <p>
                  {cv.education || "Add your educational qualifications..."}
                </p>

                <h6 className="mt-4 text-primary">Experience</h6>
                <p>{cv.experience || "Add your past work experience..."}</p>

                <h6 className="mt-4 text-primary">Skills</h6>
                <p>{cv.skills || "List your professional skills..."}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CVBuilder;
