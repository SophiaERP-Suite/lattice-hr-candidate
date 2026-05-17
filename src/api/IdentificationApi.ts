const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const updateIdentificationDoc = async (
  data: FormData,
  docId: number,
) => {
  const response = await fetch(`${BaseURL}/identification/${docId}/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const uploadIdentificationDoc = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/identification`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const deleteIdentificationDocs = async (identificationId: number) => {
  const response = await fetch(
    `${BaseURL}/identification/${identificationId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response;
};

export const getIdentificationDocs = async () => {
  const response = await fetch(`${BaseURL}/identification`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getIdTypes = async () => {
  const response = await fetch(`${BaseURL}/identificationType`, {
    method: "GET",
  });
  return response.json();
};
