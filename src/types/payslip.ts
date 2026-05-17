export interface PayslipDto {
  payslipId: number;
  jobSeekerId: number;
  employeeName: string;
  employeeAvatar?: string | null;
  month: number;
  year: number;
  standardDays: number;
  daysWorked: number;
  absentDays: number;
  monthlySalary: number;
  dailyRate: number;
  absentDeduction: number;
  amountDue: number;
  status: string;
  statusValue?: number;
  paymentReference?: string | null;
  paymentReceiptPath?: string | null;
  datePaid?: string | null;
  paidByName?: string | null;
  currencyCode: string;
  currencySymbol: string;
}

export interface PayrollSummaryDto {
  month: number;
  year: number;
  totalEmployees: number;
  totalAmountDue: number;
  totalPaid: number;
  totalPending: number;
  currencyCode: string;
  currencySymbol: string;
  // pagination
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  payslips: PayslipDto[];
}