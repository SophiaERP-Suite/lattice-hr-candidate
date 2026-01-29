const BaseURL = "http://localhost:5127";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDE0IiwiZW1haWwiOiJwYXRkZWxwaEBnbWFpbC5jb20iLCJVc2VyVHlwZSI6IkNhbmRpZGF0ZSIsImp0aSI6ImU1ZDE1NTU2LTBjZjctNGE5NC1hNTYwLWY1ODkwNTQ1NjZjNSIsImV4cCI6MTc3MDA2MjUzMiwiaXNzIjoiTGF0dGljZUhSIiwiYXVkIjoiTGF0dGljZUhSVXNlcnMifQ.t9kmZvDAT4vdpboiWK6gvdjW8jg8ceRxpQdc-Q17rM4";

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
  const response = await fetch(
    `${BaseURL}/reference/${referenceId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
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

