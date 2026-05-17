const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const uploadResumeDoc = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/resume/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const deleteUploadedResume = async (resumeId: number) => {
  const response = await fetch(`${BaseURL}/resume/${resumeId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getUploadedResume = async () => {
  const response = await fetch(`${BaseURL}/resume/jobseeker`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
