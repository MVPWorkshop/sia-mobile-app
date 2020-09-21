export enum EUserRoles {
  VOLUNTEER = 'VOLUNTEER'
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
  role?: EUserRoles;
}
