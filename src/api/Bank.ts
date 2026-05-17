const BaseURL = "http://localhost:5127";
const token = localStorage.getItem("token");

export const getBankDetails = async () => {
  const response = await fetch(`${BaseURL}/bank/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const createBankDetail = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/bank`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response.json();
};
