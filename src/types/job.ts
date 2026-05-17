export interface JobApply {
  jobId: number;
  coverLetter: string;
}
export interface JobType {
  jobTypeId: number;
  typeName: string;
}
export interface JobCategory {
  jobCategoryId: number;
  categoryName: string;
}
export interface JobSector {
  jobSectorId: number;
  name: string;
}

export interface CountryDto {
  countryId: number;
  name: string;
  code: string;
}

export interface StateDto {
  stateId: number;
  name: string;
  code: string;
  countryId: number;
  countryName: string;
}

export interface CityDto {
  cityId: number;
  name: string;
  code: string;
  stateId: number;
  stateName: string;
}

export interface JobDto {
  jobId: number;
  jobInterviewId: number;
  jobTitle: string;
  jobDescription: string;
  jobExpiration: string;
  jobAmount: number;
  jobResponsibility: string;
  jobRequirement: string;
  jobTypeId: number;
  jobCategoryId: number;
  jobSectorId: number;
  jobCategory: string;
  jobSector: string;
  workModeId: number;
  country: string;
  state: string;
  city: string;
  countryId: number;
  stateId: number;
  cityId: number;
  isPaid: boolean;
  jobViewScope: string;
  jobGrade: string;
  published: boolean;
  jobStatus: string;
  dateCreated: string;
  publishedDate: string;
  jobPhoto: string;
  jobType: string;
  currency: string;
  grade: string;
  shiftStartTime: string;
  shiftEndTime: string;
  workMode: string;
  employer: string;
  isSaved: string;
  hasApplied: boolean;
}

export interface JobApplicationDto {
  jobApplicationId: number;
  status: string;
  applDate: string;
  jobData: JobDataDTO;
}

export interface JobSavedDto {
  savedJobId: number;
  jobId: number;
  jobTitle: string;
  dateSaved: string;
  jobData: JobDataDTO;
}

export interface EmployerDataDTO {
  businessName: string;
  country: string;
  state: string;
  city: string;
}

export interface JobDataDTO {
  jobId: number;
  jobTitle: string;
  jobAmount: number;
  jobPhoto: string;
  jobExpiration: string;
  jobInterviewId: number;
  dateCreated: string;
  jobType: string;
  currency: string;
  country: string;
  state: string;
  city: string;
  hasApplied: boolean;
  employerDetails: EmployerDataDTO;
}

export interface JobFilters {
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  stateId?: number;
  cityId?: number;
  jobTypeId?: number;
  jobSectorId?: number;
  jobCategoryId?: number;
}

export interface JobOfferResponseDto {
  jobOfferId: number;
  jobApplicationId: number;
  employerId: number;

  grossAnnualSalary: number;
  netAnnualPay: number | null;
  netMonthlyPay: number | null;

  department: string | null;
  level: string | null;
  employmentType: string | null;
  reportingManager: string | null;
  responsibleDepartment: string | null;
  responsibleOfficer: string | null;
  benefits: string | null;

  letterTitle: string;
  introduction: string | null;
  responseInstructions: string;
  otherInformation: string | null;

  workStartTime: string;
  workEndTime: string;
  startDate: string;
  expiryDate: string;
  workDays: DayOfWeek[];

  offerDate: string;
  dateAccepted: string;
  dateRejected: string;
  offerStatus: JobOfferStatus;
  employer: EmployerDataDTO;
  job: JobDataDTO;
  terms: Terms;
  jobSeeker: JobSeeker;
}

export interface JobSeeker {
  firstName: string;
  lastName: string;
}

export interface Terms {
  title: string;
  content: string;
}


export type JobOfferStatus = 'Draft' | 'Sent' | 'Accepted' | 'Declined' | 'Cancelled';

export type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';