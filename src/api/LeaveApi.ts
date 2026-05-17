const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
});

export const createLeaveRequest = async (data: CreateLeaveDto, employerId: number) => {
  const res = await fetch(`${BASE_URL}/leave/${employerId}/request`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to submit leave request");
  return res;
};

export const getMyLeaves = async (
  employerId: number,
  page = 1,
  pageSize = 10,
  status?: string
) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(status ? { status } : {}),
  });

  const res = await fetch(`${BASE_URL}/leave/${employerId}/employee?${params}`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch leave requests");
  return res.json();
};

export interface CreateLeaveDto {
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
}