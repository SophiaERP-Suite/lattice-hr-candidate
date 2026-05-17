const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const updateReference = async (data: FormData, ReferenceId: number) => {
  const response = await fetch(`${BaseURL}/reference/${ReferenceId}/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const createReference = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/reference`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const deleteReference = async (referenceId: number) => {
  const response = await fetch(`${BaseURL}/reference/${referenceId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getReferenceType = async () => {
  const response = await fetch(`${BaseURL}/referenceType`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getReferences = async () => {
  const response = await fetch(`${BaseURL}/reference`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
