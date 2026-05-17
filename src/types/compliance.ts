export interface ComplianceRequirementDto {
  complianceRequirementId: number;
  title: string;
  description: string;
  isRequired: boolean;
  allowsMultiple: boolean;
}

export interface UserComplianceDto {
  userComplianceId: number;
  complianceRequirementId: number;
  title: string;
  status: "NotSubmitted" | "Pending" | "Approved" | "Rejected";
  lastUpdated: string;
}
