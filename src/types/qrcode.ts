export interface QrCodeData {
  generatedAt: string;
  jobSeekerId: number;
  qrCodeId: number;
  qrToken: string;
  qrUrl: string;
}

export interface GenerateQrCodeResponse {
  data: QrCodeData;
}