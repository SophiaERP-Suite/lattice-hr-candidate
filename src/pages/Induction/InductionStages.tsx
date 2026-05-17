import { useState, useEffect, useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Layers, Eye, ChevronRight, BookOpen } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Hashids from "hashids";
import type { InductionLevel } from "../../types/induction";
import { getInductionCategoryByCategoryId } from "../../api/InductionApi";

const InductionStages = () => {
  const navigate = useNavigate();
  const { categoryId, assignmentId } = useParams();

  const [levels, setLevels] = useState<InductionLevel[]>([]);
  const [loading, setLoading] = useState(true);
  const [programName, setProgramName] = useState("");

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const decodedCategoryId = useMemo(() => {
    const decoded = hashIds.decode(String(categoryId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [categoryId]);

  useEffect(() => {
    if (decodedCategoryId) fetchStages();
  }, [decodedCategoryId]);

  const fetchStages = async () => {
    try {
      setLoading(true);
      const response = await getInductionCategoryByCategoryId(Number(decodedCategoryId));
      console.log(response)
      if (response.statusCode === 200 || response.statusCode === 201) {
        setLevels(response?.data || []);
        setProgramName(response?.data?.[0]?.categoryName || "Induction Programme");
      }
    } catch (error) {
      toast.error("Could not load induction stages");
      setLevels([]);
    } finally {
      setLoading(false);
    }
  };

  const handleStageClick = (levelId: number) => {
    navigate(`/inductionStage/${categoryId}/modules/${hashIds.encode(levelId.toString())}//${assignmentId}`);
  };

  const renderSkeletonCards = () =>
    [1, 2, 3, 4, 5, 6].map(i => (
      <div key={i} className="col-md-6 col-xl-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="placeholder-wave">
                <span className="placeholder bg-secondary" style={{ width: 48, height: 48, borderRadius: 12, display: "block" }} />
              </div>
              <div className="w-100 placeholder-wave">
                <span className="placeholder col-8 bg-secondary mb-2" style={{ height: 20, display: "block" }} />
                <span className="placeholder col-4 bg-secondary" style={{ height: 14, display: "block" }} />
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
          <h5 className="text-dark mb-2">No Stages Available Yet</h5>
          <p className="text-muted mb-0">
            There are no stages available for this programme yet. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );

  const publishedLevels = levels.filter(l => l.status === "Published");

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <ToastContainer />

        {/* Page header */}
        <div className="row mb-4">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <div>
                <h1 className="page-title fs-18 lh-1">
                  {loading ? (
                    <span className="placeholder col-6 bg-secondary placeholder-wave" style={{ height: 28, width: 200, display: "inline-block" }} />
                  ) : programName}
                </h1>
                <p className="text-muted fs-13 mb-0 mt-1">
                  Work through each stage below in order to complete your induction.
                </p>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active">Stages</li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><NavLink to="/induction">My Induction</NavLink></li>
                  <ChevronRight size={15} style={{ position: "relative", top: 3 }} />
                  <li className="breadcrumb-item"><NavLink to="/dashboard">Home</NavLink></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Progress summary */}
        {!loading && publishedLevels.length > 0 && (
          <div className="card mb-4">
            <div className="card-body py-1 d-flex align-items-center gap-10">
              <Layers size={20} className="text-primary" />
              <span className="fs-14 text-black">
                This programme has <strong>{publishedLevels.length}</strong> stage{publishedLevels.length !== 1 ? "s" : ""} to complete.
                Work through them in order.
              </span>
            </div>
          </div>
        )}

        {/* Stages grid */}
        <div className="row">
          {loading ? renderSkeletonCards() :
            publishedLevels.length === 0 ? renderEmptyState() :
              publishedLevels
                .sort((a, b) => a.inductionLevelNo - b.inductionLevelNo)
                .map((level, index) => (
                  <div key={level.inductionLevelId} className="col-md-6 col-lg-3 mb-4">
                    <div className="card h-100 level-card">
                      <div className="card-body d-flex flex-column">
                        <img src={`${import.meta.env.VITE_API_URL}/${level.imageUrl}`} />
                        <div className="d-flex align-items-center gap-10 mb-3">
                          {/* Stage number circle */}
                          <div style={{
                            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                            background: "linear-gradient(135deg, #3b82f620, transparent)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <span className="fw-bold fs-18 text-primary">{index + 1}</span>
                          </div>

                          <div>
                            <h5 className="mb-1">{level.name}</h5>
                            <span className="badge bg-info" style={{ fontSize: 10 }}>
                              Stage {level.inductionLevelNo}
                            </span>
                          </div>
                        </div>

                        <hr className="my-3" />

                        <button
                          className="btn btn-outline-info btn-sm mt-auto d-flex align-items-center justify-content-center gap-1"
                          onClick={() => handleStageClick(level.inductionLevelId)}
                        >
                          <Eye size={14} /> View Modules
                        </button>
                      </div>
                    </div>
                  </div>
                ))
          }
        </div>

      </div>
      <style>{`
        .level-card {
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #e5e7eb;
        }
        .level-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default InductionStages;