export interface IdTypeDto {
  identificationTypeId: number;
  typeName: string;
}

export interface UserDocsDto {
  identificationId: number;
  identificationTypeId: number;
  identificationTypeName: string;
  fileName: string;
  fileType: string;
  filePath: string;
  userId: number;
  status: string;
  dateCreated: string; 
}