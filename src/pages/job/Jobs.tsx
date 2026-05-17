import { Briefcase, ChevronRight, MapPin, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllCities, getAllStates } from "../../api/LocationApi";
import type {
  JobType,
  JobCategory,
  JobSector,
  StateDto,
  CityDto,
  JobDto,
} from "../../types/job";
import {
  getJobTypes,
  getJobCategories,
  getJobSectors,
  SaveJob,
  GetMyFilteredJobs,
} from "../../api/JobApi";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import { getUserInfo } from "../../api/UserApi";
import { NavLink } from "react-router-dom";

function Jobs() {
  const [jobTypes, setJobTypes] = useState<JobType[] | null>(null);
  const [jobs, setJobs] = useState<JobDto[] | null>(null);
  const [jobCategory, setJobCategory] = useState<JobCategory[] | null>(null);
  const [jobSector, setJobSector] = useState<JobSector[] | null>(null);
  const [state, setState] = useState<StateDto[] | null>(null);
  const [city, setCity] = useState<CityDto[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countryId, setCountryId] = useState<number>(1);

  // Filter states
  const [filters, setFilters] = useState({
    searchTerm: "",
    stateId: 0,
    cityId: 0,
    jobTypeId: 0,
    jobSectorId: 0,
    jobCategoryId: 0,
  });

  useEffect(() => {
    fetchUser();
    fetchState(Number(countryId));
  }, []);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const response = await getUserInfo();
      if (!response.result) {
        return;
      }
      setCountryId(response.result.CountryId);

      await fetchState(Number(response.result.CountryId));
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  const pageSize = 12;

  useEffect(() => {
    fetchJobTypes();
    fetchJobSector();
  }, []);

  useEffect(() => {
    fetchMyJobs();
  }, [filters, currentPage]);

  const handleSaveJob = async (jobId: number) => {
    try {
      setIsLoading(true);
      const saveJob = await SaveJob(jobId);

      if (saveJob.statusCode === 200 || saveJob.statusCode === 201) {
        toast.success(saveJob.message);
        await fetchMyJobs();
      } else {
        toast.error(saveJob.message);
      }
    } catch {
      toast.error("Failed to save job");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchState = async (countryId: number) => {
    try {
      const response = await getAllStates(countryId);
      if (response.statusCode === 200) {
        setState(response.data);
        console.log("post", response)
      }
    } catch {
      setState(null);
    }
  };

  const handleStateChange = async (stateId: string) => {
    const stateIdNum = parseInt(stateId);
    setFilters({ ...filters, stateId: stateIdNum, cityId: 0 });

    // Fetch cities for selected state
    if (stateIdNum > 0) {
      await fetchCity(stateIdNum);
    } else {
      setCity(null);
    }
  };

  const fetchCity = async (stateId: number) => {
    try {
      const response = await getAllCities(stateId);
      if (response) {
        setCity(response);
      }
    } catch {
      setCity(null);
    }
  };

  const fetchJobTypes = async () => {
    try {
      const response = await getJobTypes();
      if (response) {
        setJobTypes(response);
      }
    } catch {
      setJobTypes(null);
    }
  };

  useEffect(() => {
    if (filters.jobSectorId > 0) {
      fetchJobCategory(filters.jobSectorId);
    } else {
      setJobCategory(null);
      if (filters.jobCategoryId > 0) {
        setFilters({ ...filters, jobCategoryId: 0 });
      }
    }
  }, [filters.jobSectorId]);

  const fetchJobCategory = async (jobSectorId: number) => {
    try {
      const response = await getJobCategories(jobSectorId);
      if (response) {
        setJobCategory(response);
      }
    } catch {
      setJobCategory(null);
    }
  };

  const fetchMyJobs = async () => {
    try {
      setIsLoading(true);

      const response = await GetMyFilteredJobs({
        page: currentPage,
        pageSize: pageSize,
        searchTerm: filters.searchTerm || undefined,
        stateId: filters.stateId > 0 ? filters.stateId : undefined,
        cityId: filters.cityId > 0 ? filters.cityId : undefined,
        jobTypeId: filters.jobTypeId > 0 ? filters.jobTypeId : undefined,
        jobSectorId: filters.jobSectorId > 0 ? filters.jobSectorId : undefined,
        jobCategoryId:
          filters.jobCategoryId > 0 ? filters.jobCategoryId : undefined,
      });

      if (response) {
        setJobs(response.items || []);
        setTotalJobs(response.totalCount || 0);
      }

      console.log(response, "sdbiwi")
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
      toast.error("Failed to fetch jobs");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchJobSector = async () => {
    try {
      const response = await getJobSectors();
      if (response) {
        setJobSector(response);
        console.log("bicsbdbcd", response)
      }
    } catch {
      setJobSector(null);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMyJobs();
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      stateId: 0,
      cityId: 0,
      jobTypeId: 0,
      jobSectorId: 0,
      jobCategoryId: 0,
    });
    setCity(null);
    setJobCategory(null);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalJobs / pageSize);

  const hashIds = new Hashids("LatticeHrEncode", 10);

  return (
    <div className="app-content-wrap">
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
              <h1 className="page-title fs-18 lh-1 mb-0">Jobs</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Jobs
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

          {/* Filter Card */}
          <div className="col-xl-12">
            <div className="card shadow-sm border-0 mb-3">
              <div className="card-body">
                <form onSubmit={handleSearch}>
                  <div className="row g-3">
                    {/* Search Input */}
                    <div className="col-md-12 col-lg-4">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search job title or company..."
                          value={filters.searchTerm}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              searchTerm: e.target.value,
                            })
                          }
                        />
                        <button className="btn btn-info" type="submit">
                          <Search size={18} />
                        </button>
                      </div>
                    </div>

                    {/* State Filter */}
                    <div className="col-md-6 col-lg-2">
                      <select
                        className="form-select"
                        value={filters.stateId}
                        onChange={(e) => handleStateChange(e.target.value)}
                      >
                        <option value={0}>By States</option>
                        {state != null && state.length > 0 && state?.map((type) => (
                          <option key={type.stateId} value={type.stateId}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City Filter */}
                    <div className="col-md-6 col-lg-2">
                      <select
                        className="form-select"
                        value={filters.cityId}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            cityId: parseInt(e.target.value),
                          })
                        }
                        disabled={!city || city.length === 0}
                      >
                        <option value={0}>By Cities</option>
                        {city != null && city.length > 0 && city?.map((type) => (
                          <option key={type.cityId} value={type.cityId}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Job Type Filter */}
                    <div className="col-md-6 col-lg-2">
                      <select
                        className="form-select"
                        value={filters.jobTypeId}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            jobTypeId: parseInt(e.target.value),
                          })
                        }
                      >
                        <option value={0}>By Job Types</option>
                        {jobTypes?.map((type) => (
                          <option key={type.jobTypeId} value={type.jobTypeId}>
                            {type.typeName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Job Sector Filter */}
                    <div className="col-md-6 col-lg-2">
                      <select
                        className="form-select"
                        value={filters.jobSectorId}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            jobSectorId: parseInt(e.target.value),
                          })
                        }
                      >
                        <option value={0}>By Sectors</option>
                        {jobSector?.map((sector) => (
                          <option
                            key={sector.jobSectorId}
                            value={sector.jobSectorId}
                          >
                            {sector.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Job Category Filter */}
                    <div className="col-md-6 col-lg-2">
                      <select
                        className="form-select"
                        value={filters.jobCategoryId}
                        onChange={(e) =>
                          setFilters({ ...filters, jobCategoryId: parseInt(e.target.value) })
                        }
                        disabled={!jobCategory || jobCategory.length === 0}
                      >
                        <option value={0}>
                          {filters.jobSectorId > 0 ? "By Categories" : "Select Sector"}
                        </option>
                        {jobCategory?.map((category) => (
                          <option key={category.jobCategoryId} value={category.jobCategoryId}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Clear Filters Button */}
                    <div className="col-md-6 col-lg-2">
                      <button
                        type="button"
                        className="btn btn-warning w-100"
                        onClick={clearFilters}
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-3">
              <p className="text-black">
                Showing {jobs?.length || 0} of {totalJobs} jobs
              </p>
            </div>
          </div>

          {/* Job Listings */}
          <div className="col-xl-12">
            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-black">Loading jobs...</p>
              </div>
            ) : jobs && jobs.length > 0 ? (
              <>
                <div className="row g-4">
                  {jobs.map((job) => (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={job.jobId}>
                      <div className="card h-100 shadow-sm border-0 position-relative">
                        {/* Company Logo */}
                        <div className="text-center pt-3">
                          <div className="avatar avatar-big mx-auto">
                            <img
                              src={job.jobPhoto ? `${import.meta.env.VITE_API_URL}/${job.jobPhoto}` : import.meta.env.NO_EMPLOYER_IMAGE_URL}
                              alt="Company Logo"
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        {/* Save Button */}
                        <div className="position-absolute top-0 end-0 m-2">
                          <button
                            className={`btn border-0 ${job.isSaved
                              ? "bg-danger text-white"
                              : "bg-light text-dark"
                              }`}
                            onClick={() => handleSaveJob(job.jobId)}
                            disabled={isLoading}
                            style={{
                              transition: "all 0.2s ease",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            }}
                            aria-label={job.isSaved ? "Unsave job" : "Save job"}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Card Body */}
                        <div className="card-body d-flex flex-column text-start">
                          <h5 className="fw-semibold mb-2">{job.jobTitle}</h5>

                          <p className="mb-1 text-info d-flex align-items-center">
                            <Briefcase size={16} className="me-2" />
                            {job.employer}
                          </p>

                          <p className="mb-1 d-flex align-items-center text-black">
                            <MapPin size={16} className="me-2" />
                            {[job.city, job.state, job.country]
                              .filter(Boolean)
                              .join(", ")}
                          </p>

                          <p className="mb-3 text-black small">
                            Posted on{" "}
                            {job.dateCreated &&
                              new Date(job.publishedDate).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                          </p>

                          <div className="mt-auto d-flex justify-content-between align-items-center">
                            <span
                              className={`badge ${job.jobType === "Full-time"
                                ? "bg-info"
                                : job.jobType === "Part-time"
                                  ? "bg-info"
                                  : job.jobType === "Contract"
                                    ? "bg-warning text-dark"
                                    : job.jobType === "Internship"
                                      ? "bg-warning"
                                      : "bg-info"
                                }`}
                            >
                              {job.jobType || "Not Specified"}
                            </span>

                            {job.hasApplied !== true ? (
                              <a
                                href={`./jobDetails/${hashIds.encode(
                                  String(job.jobId),
                                )}`}
                                className="btn btn-warning btn-sm"
                              >
                                Apply Now
                              </a>
                            ) : (
                              <span className="badge bg-success">Applied</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="d-flex justify-content-center mt-4">
                    <nav>
                      <ul className="pagination">
                        <li
                          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>
                        </li>

                        {[...Array(totalPages)].map((_, index) => (
                          <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? "active" : ""
                              }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}

                        <li
                          className={`page-item ${currentPage === totalPages ? "disabled" : ""
                            }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-5">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-briefcase text-black"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 9.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <h5 className="text-dark mb-2">No jobs found</h5>
                <p className="text-black mb-3">
                  Create a new job to find your next professional
                </p>
                <NavLink to={"/jobForm"} className="btn btn-sucess">
                  <Plus size={16} />  Create Job
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
