import { ChevronRight, Save, Upload, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  getAllStates,
  getAllCities,
  fetchCountries,
} from "../../api/LocationApi";
import type { UserDto } from "../../types/profile";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useForm, useWatch } from "react-hook-form";
import { getUserInfo, updateUserProfile } from "../../api/UserApi";
import type { CountryDto, StateDto, CityDto } from "../../types/job";
import { fetchJobSectors, getJobCategories } from "../../api/JobApi";

interface UpdateProfileForm {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  DateOfBirth: string;
  Gender: string;
  Address: string;
  CountryId: number;
  StateId: number;
  CityId: number;
  ProfilePhoto?: FileList;
  JobCategoryId: number;
  JobSectorId: number
}

export interface JobCategory {
  jobCategoryId: number;
  categoryName: string;
}

interface JobSectorData {
  jobSectorId: number;
  name: string;
}

function ProfileUpdate() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDto>();
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [states, setStates] = useState<StateDto[]>([]);
  const [cities, setCities] = useState<CityDto[]>([]);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const isInitializing = useRef(true);
  const [jobSectors, setJobSectors] = useState<JobSectorData[]>([]);
  const [jobCategories, setJobCategories] = useState<
    JobCategory[]
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<UpdateProfileForm>({
    defaultValues: {
      CountryId: 0,
      StateId: 0,
      CityId: 0,
    }
  });

  const selectedCountryId = useWatch({
    control,
    name: "CountryId",
  });

  const selectedStateId = useWatch({
    control,
    name: "StateId",
  });

  const jobSectorId = useWatch({
    control,
    name: "JobSectorId",
  });

  useEffect(() => {
    getJobInfo()
  }, []);

  const getJobInfo = async () => {
    const jobSectorsRes = await fetchJobSectors();
    if (!jobSectorsRes) {
      return;
    }
    const jobSectorsData = await jobSectorsRes.json();
    setJobSectors(jobSectorsData || []);
  }

  useEffect(() => {
    const fetchCandidateJobCategories = async () => {
      if (!jobSectorId || jobSectorId === 0) {
        setJobCategories([]);
        return;
      }

      try {
        const response = await getJobCategories(Number(jobSectorId));

        if (response && Array.isArray(response)) {
          setJobCategories(response);
        } else if (response && response.data) {
          setJobCategories(
            Array.isArray(response.data) ? response.data : [],
          );
        } else {
          setJobCategories([]);
          toast.error("No categories found for this sector");
        }
      } catch (error) {
        console.error("Error fetching candidate job categories:", error);
        setJobCategories([]);
        toast.error("Failed to load job categories");
      }
    };

    fetchCandidateJobCategories();
  }, [jobSectorId]);

  useEffect(() => {
    const initData = async () => {
      try {
        await Promise.all([fetchUser(), fetchAllCountries()]);
      } catch (error) {
        console.error("Initialization error:", error);
      } finally {
        setInitialLoad(false);
      }
    };
    initData();
  }, []);

  useEffect(() => {
    if (isInitializing.current) return;
    if (!selectedCountryId || selectedCountryId === 0) {
      setStates([]);
      setValue("StateId", 0);
      setValue("CityId", 0);
      return;
    }
    fetchStates(Number(selectedCountryId));
  }, [selectedCountryId]);

  useEffect(() => {
    if (isInitializing.current) return;
    if (!selectedStateId || selectedStateId === 0) {
      setCities([]);
      setValue("CityId", 0);
      return;
    }
    fetchCities(Number(selectedStateId));
  }, [selectedStateId]);

  const fetchUser = async () => {
    try {
      const response = await getUserInfo();
      if (response?.result) {
        const userData = response.result;
        setUser(userData);
        if (userData.countryId > 0) await fetchStates(userData.countryId);
        if (userData.stateId > 0) await fetchCities(userData.stateId);
        if (userData.jobSectorId > 0) {
          const cats = await getJobCategories(userData.jobSectorId);
          setJobCategories(Array.isArray(cats) ? cats : cats?.data ?? []);
        }

        reset({
          FirstName: userData.firstName || "",
          LastName: userData.lastName || "",
          Email: userData.email || "",
          Phone: userData.phone || "",
          DateOfBirth: userData.dateOfBirth?.split("T")[0] || "",
          Gender: userData.gender || "",
          Address: userData.address || "",
          CountryId: userData.countryId || 0,
          StateId: userData.stateId || 0,
          CityId: userData.cityId || 0,
          JobSectorId: userData.jobSectorId || 0,
          JobCategoryId: userData.jobCategoryId || 0,
        });

        if (userData.profilePhoto) {
          setPhotoPreview(`${import.meta.env.VITE_API_URL}${userData.profilePhoto}`);
        }
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      toast.error("Failed to load user data");
    } finally {
      isInitializing.current = false;
    }
  };

  const fetchAllCountries = async () => {
    try {
      const response = await fetchCountries();
      const res = await response.json();

      if (res?.data && Array.isArray(res.data)) {
        setCountries(res.data);
      } else if (Array.isArray(res)) {
        setCountries(res);
      } else {
        console.error("Unexpected countries response:", response);
        setCountries([]);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
      setCountries([]);
    }
  };

  const fetchStates = async (countryId: number) => {
    try {
      const response = await getAllStates(countryId);

      if (response?.data && Array.isArray(response.data)) {
        setStates(response.data);
      } else if (Array.isArray(response)) {
        setStates(response);
      } else {
        console.error("Unexpected states response:", response);
        setStates([]);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
  };

  const fetchCities = async (stateId: number) => {
    try {
      const response = await getAllCities(stateId);
      // Check response structure
      if (response?.data && Array.isArray(response.data)) {
        setCities(response.data);
      } else if (Array.isArray(response)) {
        setCities(response);
      } else {
        console.error("Unexpected cities response:", response);
        setCities([]);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: UpdateProfileForm) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("FirstName", data.FirstName);
      formData.append("LastName", data.LastName);
      formData.append("Email", data.Email);
      formData.append("MobileNo", data.Phone);
      formData.append("DateOfBirth", data.DateOfBirth);
      formData.append("Gender", data.Gender);
      formData.append("Address", data.Address);
      formData.append("CountryId", data.CountryId.toString());
      formData.append("StateId", data.StateId.toString());
      formData.append("CityId", data.CityId.toString());
      formData.append("JobSectorId", data.JobSectorId.toString());
      formData.append("JobCategoryId", data.JobCategoryId.toString());

      if (data.ProfilePhoto && data.ProfilePhoto.length > 0) {
        formData.append("ProfilePhoto", data.ProfilePhoto[0]);
      }

      const response = await updateUserProfile(formData);

      console.log("res", response)

      if (response.result.statusCode) {
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          navigate("/Profile");
        }, 2000);
      } else {
        toast.error(response.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred while updating profile");
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-content-wrap">
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Update Profile</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Update Profile
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <NavLink to="/Profile">Profile</NavLink>
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="/Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-12">
            {initialLoad ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading profile data...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card">
                  <div className="card-header">
                    <h4>Personal Information</h4>
                  </div>
                  <div className="card-body pt-15">
                    {/* Profile Photo Upload */}
                    <div className="row mb-20">
                      <div className="col-12 text-center">
                        <div className="mb-15">
                          <div className="avatar avatar-big radius-100 mb-15">
                            {photoPreview ? (
                              <img
                                className="radius-100"
                                src={photoPreview}
                                alt="Profile preview"
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                className="radius-100 bg-light d-flex align-items-center justify-content-center"
                                style={{ width: "120px", height: "120px" }}
                              >
                                <Upload size={40} className="text-muted" />
                              </div>
                            )}
                          </div>
                        </div>
                        <label htmlFor="profilePhoto" className="btn btn-success">
                          <Upload size={16} className="me-5" />
                          Upload New Photo
                        </label>
                        <input
                          type="file"
                          id="profilePhoto"
                          className="d-none"
                          accept="image/png, image/jpeg, image/jpg, image/webp"
                          {...register("ProfilePhoto", {
                            onChange: handlePhotoChange,
                            validate: (files: FileList | undefined) => {
                              if (!files || files.length === 0) return true;

                              const file = files[0];

                              if (file.size > 2 * 1024 * 1024) {
                                return "Max file size is 2MB";
                              }

                              const allowedTypes = [
                                "image/jpeg",
                                "image/png",
                                "image/jpg",
                                "image/webp",
                              ];

                              if (!allowedTypes.includes(file.type)) {
                                return "Only JPG, PNG or WEBP images allowed";
                              }

                              return true;
                            },
                          })}
                        />
                        {errors.ProfilePhoto && (
                          <p className="error-msg text-danger mt-10">
                            {errors.ProfilePhoto.message}
                          </p>
                        )}
                        <p
                          className="text-muted mt-10 mb-0"
                          style={{ fontSize: "12px" }}
                        >
                          Allowed formats: JPG, PNG, WEBP (Max 2MB)
                        </p>
                      </div>
                    </div>

                    <div className="row" style={{ rowGap: "20px" }}>
                      {/* First Name */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter first name"
                          {...register("FirstName", {
                            required: "First name is required",
                          })}
                        />
                        {errors.FirstName && (
                          <p className="error-msg text-danger">
                            {errors.FirstName.message}
                          </p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter last name"
                          {...register("LastName", {
                            required: "Last name is required",
                          })}
                        />
                        {errors.LastName && (
                          <p className="error-msg text-danger">
                            {errors.LastName.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email address"
                          {...register("Email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.Email && (
                          <p className="error-msg text-danger">
                            {errors.Email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          defaultValue={user?.phone}
                          placeholder="Enter phone number"
                          {...register("Phone", {
                            required: "Phone number is required",
                          })}
                        />
                        {errors.Phone && (
                          <p className="error-msg text-danger">
                            {errors.Phone.message}
                          </p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          Date of Birth <span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          {...register("DateOfBirth", {
                            required: "Date of birth is required",
                          })}
                        />
                        {errors.DateOfBirth && (
                          <p className="error-msg text-danger">
                            {errors.DateOfBirth.message}
                          </p>
                        )}
                      </div>

                      {/* Gender */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          Gender <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("Gender", {
                            required: "Gender is required",
                          })}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.Gender && (
                          <p className="error-msg text-danger">
                            {errors.Gender.message}
                          </p>
                        )}
                      </div>

                      {/* Country */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          Country <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("CountryId", {
                            required: "Country is required",
                            validate: (value: number) =>
                              value !== 0 || "Please select a country",
                          })}
                        >
                          <option value={0}>Select Country</option>
                          {countries?.map((country) => (
                            <option
                              key={country.countryId}
                              value={country.countryId}
                            >
                              {country.name}
                            </option>
                          ))}
                        </select>
                        {errors.CountryId && (
                          <p className="error-msg text-danger">
                            {errors.CountryId.message}
                          </p>
                        )}
                      </div>

                      {/* State */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          State <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          disabled={!states || states.length === 0}
                          {...register("StateId", {
                            required: "State is required",
                            validate: (value: number) =>
                              value !== 0 || "Please select a state",
                          })}
                        >
                          <option value={0}>Select State</option>
                          {states && states.length > 0 ? (
                            states.map((state) => (
                              <option key={state.stateId} value={state.stateId}>
                                {state.name}
                              </option>
                            ))
                          ) : (
                            <option value={0}>
                              {selectedCountryId ? "Loading states..." : "Select a country first"}
                            </option>
                          )}
                        </select>
                        {errors.StateId && (
                          <p className="error-msg text-danger">
                            {errors.StateId.message}
                          </p>
                        )}
                      </div>

                      {/* City */}
                      <div className="col-lg-6 col-md-6">
                        <label className="form-label">
                          City <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          disabled={!cities || cities.length === 0}
                          {...register("CityId", {
                            required: "City is required",
                            validate: (value: number) =>
                              value !== 0 || "Please select a city",
                          })}
                        >
                          <option value={0}>Select City</option>
                          {cities && cities.length > 0 ? (
                            cities.map((city) => (
                              <option key={city.cityId} value={city.cityId}>
                                {city.name}
                              </option>
                            ))
                          ) : (
                            <option value={0}>
                              {selectedStateId ? "Loading cities..." : "Select a state first"}
                            </option>
                          )}
                        </select>
                        {errors.CityId && (
                          <p className="error-msg text-danger">
                            {errors.CityId.message}
                          </p>
                        )}
                      </div>

                      {/* Address */}
                      <div className="col-lg-6">
                        <label className="form-label">
                          Address <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Enter your address"
                          {...register("Address", {
                            required: "Address is required",
                          })}
                        ></textarea>
                        {errors.Address && (
                          <p className="error-msg text-danger">
                            {errors.Address.message}
                          </p>
                        )}
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Job Sector <span className="text-danger">*</span></label>
                        <div className="input-area">
                          <select
                            className="form-control"

                            {...register("JobSectorId", {
                              required: "Required",
                            })}
                          >
                            <option value="">Select Job Sector</option>
                            {jobSectors.map((data) => (
                              <option
                                key={data.jobSectorId}
                                value={data.jobSectorId}
                              >
                                {data.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <p className="error-msg">
                          {errors.JobSectorId?.message}
                        </p>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Job Category<span className="text-danger">*</span></label>
                        <select
                          className="form-control"
                          {...register("JobCategoryId", {
                            required: "Required",
                          })}
                          disabled={jobCategories.length === 0}
                        >
                          <option value="">Select Job Category</option>
                          {jobCategories.map((data) => (
                            <option
                              key={data.jobCategoryId}
                              value={data.jobCategoryId}
                            >
                              {data.categoryName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {errors.JobCategoryId?.message}
                      </p>
                    </div>
                  </div>

                  <div className="card-footer text-end" style={{ marginTop: "30px" }}>
                    <button
                      type="button"
                      className="btn btn-dark me-10"
                      onClick={() => navigate("/Profile")}
                      style={{ marginRight: "10px" }}
                      disabled={loading}
                    >
                      <X size={16} />
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-5"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Updating...
                        </>
                      ) : (
                        <>
                          <Save size={16} />
                          Update Profile
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;