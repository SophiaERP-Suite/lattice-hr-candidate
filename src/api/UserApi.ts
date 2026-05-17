const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const getUserInfo = async () => {
  const response = await fetch(`${BaseURL}/jobseeker/JobSeekerInfo`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const updateUserProfile = async (formData: FormData) => {

  const response = await fetch(`${BaseURL}/jobseeker/JobSeekerUpdate`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await response.json();
};
