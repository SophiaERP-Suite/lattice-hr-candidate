const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const GetAllQuestions = async (jobId: number) => {
  const response = await fetch(
    `${BaseURL}/interviews/${jobId}/questions`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const CheckHasSubmitted = async (jobId: number) => {
  const response = await fetch(
    `${BaseURL}/interviews/${jobId}/has-submitted`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const UploadAnswer = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/interviews/upload-answer`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response.json();
};
