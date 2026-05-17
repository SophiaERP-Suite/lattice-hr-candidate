import type { JobFilters } from "../types/job";

const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const fetchJobSectors = async () => {
  const response = await fetch(`${BaseURL}/job-meta/sectors`, {
    method: "GET",
  });

  return response;
};

export const AcceptOffer = async (jobOfferId: number, data: FormData) => {
  const response = await fetch(
    `${BaseURL}/jobOffer/${jobOfferId}/accept`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data
    },
  );
  return response.json();
};

export const RejectOffer = async (jobOfferId: number) => {
  const response = await fetch(
    `${BaseURL}/jobOffer/${jobOfferId}/reject`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const GetAcceptedOffers = async () => {
  const response = await fetch(
    `${BaseURL}/jobOffer/acceptedOffers`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const GetOffer = async (jobApplicationId: number) => {
  const response = await fetch(
    `${BaseURL}/jobOffer/${jobApplicationId}/jobseeker`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const GetMyFilteredJobs = async (filters: JobFilters = {}) => {
  const params = new URLSearchParams();

  params.set("page", String(filters.page ?? 1));
  params.set("pageSize", String(filters.pageSize ?? 10));

  if (filters.searchTerm) {
    params.set("searchTerm", filters.searchTerm);
  }
  if (filters.stateId != null && filters.stateId > 0) {
    params.set("stateId", String(filters.stateId));
  }
  if (filters.cityId != null && filters.cityId > 0) {
    params.set("cityId", String(filters.cityId));
  }
  if (filters.jobTypeId != null && filters.jobTypeId > 0) {
    params.set("jobTypeId", String(filters.jobTypeId));
  }
  if (filters.jobSectorId != null && filters.jobSectorId > 0) {
    params.set("jobSectorId", String(filters.jobSectorId));
  }
  if (filters.jobCategoryId != null && filters.jobCategoryId > 0) {
    params.set("jobCategoryId", String(filters.jobCategoryId));
  }

  const url = `${BaseURL}/jobs/candidate/jobs?${params.toString()}`;

  console.log("FINAL URL:", url);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Server error:", errorText);
    throw new Error("Failed to fetch jobs");
  }

  return await response.json();
};

export const SaveJob = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/save/${jobId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const UnsaveJob = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/unsave/${jobId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const SavedJobs = async () => {
  const response = await fetch(`${BaseURL}/jobs/saved`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const ApplyJob = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/job-application/apply`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response.json();
};

export const JobSeekerAppsInterview = async () => {
  const response = await fetch(
    `${BaseURL}/job-application/JobSeekerAppsInterview`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.json();
};

export const GetMyApplications = async () => {
  const response = await fetch(
    `${BaseURL}/job-application/JobSeekerApplications`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.json();
};

export const GetMyJobs = async (page: number, pageSize: number) => {
  const response = await fetch(
    `${BaseURL}/jobs/${page}/${pageSize}/jobSeeker`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const GetJob = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/${jobId}/jobSeeker`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("GetJob response:", response);
  return response.json();
};

export const getJobTypes = async () => {
  const response = await fetch(`${BaseURL}/job-meta/types`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getJobSectors = async () => {
  const response = await fetch(`${BaseURL}/job-meta/sectors`, {
    method: "GET",
  });

  return response.json();
};

export const getJobCategories = async (jobSectorId: number) => {
  const response = await fetch(
    `${BaseURL}/job-meta/${jobSectorId}/categories`,
    {
      method: "GET",
    },
  );

  return response.json();
};
