import { useState, useEffect, useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ClipboardList, Eye, ChevronRight, BookOpen } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Hashids from "hashids";
import type { Level, Section } from "../../types/induction";
import { getInductionLevelById, getInductionSectionsByLevelId } from "../../api/InductionApi";


const CandidateInductionModules = () => {
  const navigate = useNavigate();
  const { categoryId, sectionId, assignmentId } = useParams();

  const [level, setLevel] = useState<Level | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState({ page: true });

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const decodedSectionId = useMemo(() => {
    const decoded = hashIds.decode(String(sectionId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [sectionId]);

  useEffect(() => {
    if (decodedSectionId) {
      fetchLevelData();
      fetchSections();
    }
  }, [decodedSectionId]);

  const fetchLevelData = async () => {
    try {
      const response = await getInductionLevelById(Number(decodedSectionId));
      if (response?.data) setLevel(response.data);
    } catch {
      toast.error("Could not load level details");
    }
  };

  const fetchSections = async () => {
    // try {
    // setLoading({ page: true });
    const response = await getInductionSectionsByLevelId(Number(decodedSectionId));
    const sectionsData = response?.data || [];
    console.log(sectionsData)
    setSections(sectionsData);
    // } catch {
    //   toast.error("Could not load induction modules");
    //   setSections([]);
    // } finally {
    setLoading({ page: false });
    // }
  };

  const handleModuleClick = (sectionId: string) => {
    navigate(`/inductionStage/${categoryId}/modules/${hashIds.encode(sectionId.toString())}/items-preview/${assignmentId}`);
  };

  const publishedSections = sections
    .filter(s => s.publishStatus === "Published")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const renderSkeletonSections = () =>
    [1, 2, 3, 4].map(i => (
      <div key={i} className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="placeholder-wave">
                <span className="placeholder bg-secondary" style={{ width: 48, height: 48, borderRadius: 12, display: "block" }} />
              </div>
              <div className="w-100 placeholder-wave">
                <span className="placeholder col-8 bg-secondary mb-2" style={{ height: 18, display: "block" }} />
                <span className="placeholder col-5 bg-secondary" style={{ height: 13, display: "block" }} />
              </div>
            </div>
            <hr />
            <div className="placeholder-wave">
              <span className="placeholder col-5 bg-secondary" style={{ height: 34, borderRadius: 6, display: "block" }} />
            </div>
          </div>
        </div>
      </div>
    ));

  const renderEmptyState = () => (
    <div className="col-12">
      <div className="card">
        <div className="card-body text-center py-5">
          <BookOpen size={64} className="text-muted mb-3" style={{ opacity: 0.5 }} />
          <h5 className="text-dark mb-2">No Modules Available Yet</h5>
          <p className="text-black mb-0">
            There are no modules available for this stage yet. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <ToastContainer />

        {/* Page header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <div>
                <h1 className="page-title fs-18 lh-1">
                  {loading.page ? (
                    <span className="placeholder bg-secondary placeholder-wave"
                      style={{ height: 28, width: 200, display: "inline-block", borderRadius: 4 }} />
                  ) : level?.name || "Modules"}
                </h1>
                <p className="text-muted fs-13 mb-0 mt-1">
                  {loading.page ? (
                    <span className="placeholder bg-secondary placeholder-wave"
                      style={{ height: 14, width: 250, display: "inline-block", borderRadius: 4 }} />
                  ) : `Stage ${level?.inductionLevelNo} — work through each module below.`}
                </p>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Modules</li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to={`/induction/${categoryId}`}>Stages</NavLink>
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to="/induction">My Induction</NavLink>
                  </li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Home</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Module count banner */}
        {!loading.page && publishedSections.length > 0 && (
          <div className="card mb-4">
            <div className="card-body py-0 d-flex align-items-center gap-10">
              <ClipboardList size={20} className="text-primary" />
              <span className="fs-14 text-black">
                This stage has <strong>{publishedSections.length}</strong> module{publishedSections.length !== 1 ? "s" : ""}.
                Complete them in order.
              </span>
            </div>
          </div>
        )}

        {/* Modules grid */}
        <div className="row">
          {loading.page ? renderSkeletonSections() :
            publishedSections.length === 0 ? renderEmptyState() :
              publishedSections.map((section, index) => (
                <div key={section.inductionSectionId} className="col-md-4 mb-4">
                  <div
                    className="card h-100 section-card"
                    onClick={() => handleModuleClick(section.inductionSectionId)}
                  >
                    <div className="card-body d-flex flex-column">

                      {/* Header */}
                      <div className="d-flex align-items-center gap-10 mb-3">
                        <div style={{
                          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                          background: "#3b82f620",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <span className="fw-bold fs-18 text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <h5 className="mb-0">{section.sectionName}</h5>
                        </div>
                      </div>

                      {/* Instructions */}
                      {section.instructions && (
                        <p className="text-muted fs-13 mb-3"><span className="text-black">Instructions</span><br />{section.instructions}</p>
                      )}

                      <hr className="my-3 mt-auto" />

                      {/* CTA */}
                      <button
                        className="btn btn-outline-info btn-sm d-flex align-items-center justify-content-center gap-1"
                        onClick={(e) => { e.stopPropagation(); handleModuleClick(section.inductionSectionId); }}
                      >
                        <Eye size={14} /> View Items
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

      </div>


      <style>{`
        .section-card {
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #e5e7eb;
          cursor: pointer;
        }
        .section-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default CandidateInductionModules;