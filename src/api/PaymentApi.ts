import type { PayslipDto } from "../types/payslip";

const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});
export const getMyPayslips = async (
  employerId: number
): Promise<PayslipDto[]> => {
  const res = await fetch(`${BASE_URL}/payroll/${employerId}/my`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch payslips");
  return res.json();
};

export const getMyPayslip = async (
  employerId: number,
  month: number,
  year: number
): Promise<PayslipDto> => {
  const res = await fetch(`${BASE_URL}/payroll/${employerId}/my/${month}/${year}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Payslip not found");
  return res.json();
};