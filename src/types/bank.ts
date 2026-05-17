export interface BankDetail {
  bankDetailId: number;
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  swiftCode?: string;
  routingNumber?: string;
}