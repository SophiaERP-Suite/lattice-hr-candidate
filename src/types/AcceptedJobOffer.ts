export interface JobOffer {
  jobOfferId: number;
  jobApplicationId: number;
  offerDate: string;
  expiryDate: string;
  offerStatus: string;
  grossAnnualSalary: number;

  employer: Employer;
  job: Job;
  jobSeeker: JobSeeker;
}

export interface Employer {
  employerId: number;
  businessName: string;
  jobSectorId: number;
  employerLogo: string;
  jobSector: string | null;
  companySize: string;
}

export interface Job {
  jobId: number;
  jobTitle: string;
  jobType: string;
  jobDescription: string | null;
  jobResponsibility: string | null;
  jobRequirement: string | null;
}

export interface JobSeeker {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
}