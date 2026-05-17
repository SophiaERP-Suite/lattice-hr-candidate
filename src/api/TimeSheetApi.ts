const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
});

export const getTimesheetById = async (timesheetId: number) => {
  const res = await fetch(`${BASE_URL}/timesheet/${timesheetId}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch timesheet");
  return res.json();
};

export const getMyCurrentTimesheet = async (employerId: number) => {
  const res = await fetch(`${BASE_URL}/timesheet/${employerId}/current`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch current timesheet");
  return res.json();
};

export const getMyTimesheets = async (
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
  const res = await fetch(`${BASE_URL}/timesheet/${employerId}/my?${params}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch timesheets");
  return res.json();
};

export const submitTimesheet = async (timesheetId: number) => {
  const res = await fetch(`${BASE_URL}/timesheet/${timesheetId}/submit`, {
    method: "POST",
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to submit timesheet");
  return res;
};
