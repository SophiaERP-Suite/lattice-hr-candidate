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
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setCv({ ...cv, [e.target.name]: e.target.value });
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
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-white mb-3">
                <h5 className="mb-0">CV Builder</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={cv.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={cv.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={cv.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={cv.address}
                      onChange={handleChange}
                      placeholder="Enter address"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Professional Summary</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      name="summary"
                      value={cv.summary}
                      onChange={handleChange}
                      placeholder="Write a short professional summary"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Education</label>
                    <textarea
                      className="form-control"
                      rows={2}
                      name="education"
                      value={cv.education}
                      onChange={handleChange}
                      placeholder="E.g., B.Sc in Computer Science, 2020"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Experience</label>
                    <textarea
                      className="form-control"
                      rows={2}
                      name="experience"
                      value={cv.experience}
                      onChange={handleChange}
                      placeholder="E.g., Software Developer at XYZ, 2021–2023"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Skills</label>
                    <input
                      type="text"
                      className="form-control"
                      name="skills"
                      value={cv.skills}
                      onChange={handleChange}
                      placeholder="E.g., React, Node.js, SQL"
                    />
                  </div>

                  <button type="button" className="btn btn-primary w-100">
                    Save / Generate CV
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right side - CV Preview */}
          <div className="col-lg-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVBuilder;
