export interface UserRefDto {
  referenceId: number;
  firstName: string;
  lastName: string;
  description: string;
  phone: string;
  email: string;
  status: string;
  dateCreated: string;
  referenceType: string;
  referenceTypeId: string
}

export interface UpdateUserRefDto {
  firstName: string;
  lastName: string;
  description: string;
  phone: string;
  email: string;
  referenceTypeId: number
}
