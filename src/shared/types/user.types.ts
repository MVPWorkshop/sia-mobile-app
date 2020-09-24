export enum EUserRoles {
  VOLUNTEER = 'VOLUNTEER',
  NGO = 'NGO'
}

export enum EDocumentType {
  ID = 'ID',
  PASSPORT = 'PASSPORT',
  DRIVER_LICENSE = 'DRIVER_LICENSE'
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  addressCountry?: string;
  addressCity?: string;
  addressPostalCode?: string;
  addressStreet?: string;
  profession?: string;
  phoneNumber?: string;
  birthDateTimestamp?: number;
  documentType?: EDocumentType;
  role: EUserRoles;
}
