// const BaseURL = "http://192.168.1.171:5127";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDE3IiwiZW1haWwiOiJvcGV5ZW1pb2x1YWtpbkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDYW5kaWRhdGUiLCJqdGkiOiIyOGQyZDFhOC00YjZhLTQyODQtODk5ZC0xNDUzOTBlZDZmNDYiLCJleHAiOjE3NzAxMzUxNzQsImlzcyI6IkxhdHRpY2VIUiIsImF1ZCI6IkxhdHRpY2VIUlVzZXJzIn0.AnzQN6U54JvO5hqT70P7ma4s2PfM_U4d-U0m-95xEJA";


// export const uploadComplianceDocument = async (
//   complianceRequirementId: number,
//   file: File
// ) => {
//   const formData = new FormData();
//   formData.append("ComplianceRequirementId", complianceRequirementId.toString());
//   formData.append("file", file);

//   await axios.post(`${API}/upload`, formData, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };


//   export const uploadIdentificationDoc = async (data: FormData) => {
//   const response = await fetch(`${BaseURL}/api/compliance/upload`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     body: data,
//   });
//   return response;
// };

// export const deleteIdentificationDocs = async (identificationId: number) => {
//   const response = await fetch(
//     `${BaseURL}/identification/${identificationId}`,
//     {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   return response.json();
// };

// export const getIdentificationDocs = async () => {
//   const response = await fetch(`${BaseURL}/identification`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.json();
// };

// export const getIdTypes = async () => {
//   const response = await fetch(`${BaseURL}/identificationType`, {
//     method: "GET",
//   });
//   return response.json();
// };
