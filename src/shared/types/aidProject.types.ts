export enum EVolunteerActionStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED'
}

export interface IVolunteerAction {
  id: string;
  name: string;
  description: string;
  image: number;
  startDateTimestamp: number;
  endDateTimestamp: number;
  isRecurring: boolean;
  addressCountry: string;
  addressCity: string;
  contactEmail: string;
  contactPhone: string;
  organizer: string;
  tasks: string[];
  status: EVolunteerActionStatus;
}

export enum EVolunteerTaskStatus {
  NEUTRAL = 'NEUTRAL',
  APPLIED = 'APPLIED',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
  UNFINISHED = 'UNFINISHED'
}

export interface IVolunteer {
  id: string;
  name: string;
  image: number
}

interface IVolunteerTaskBase {
  id: string;
  actionId: string;
  name: string;
  description: string;
  startDateTimestamp: number;
  endDateTimestamp: number;
  timeHours: number;
  timeMinutes: number;
  durationMinutes: number;
  addressNumber: string;
  requirements: string;
  updates: string[];
  status: EVolunteerTaskStatus;
  isValidated: boolean;
  volunteers: IVolunteer[];
  reward: number;
}
interface IVolunteerTaskTaken extends IVolunteerTaskBase{
  status:
    EVolunteerTaskStatus.APPLIED |
    EVolunteerTaskStatus.FINISHED |
    EVolunteerTaskStatus.UNFINISHED;
  // applier: {
  //
  // }
}
interface IVolunteerTaskNonTaken extends IVolunteerTaskBase {
  status: EVolunteerTaskStatus.CANCELLED | EVolunteerTaskStatus.NEUTRAL;
}

export type IVolunteerTask = IVolunteerTaskNonTaken | IVolunteerTaskTaken;


export enum ECouponStatus {
  UNCLAIMED = 'UNCLAIMED',
  CLAIMED = 'CLAIMED'
}

export interface ICoupon {
  id: string;
  couponImgSrc: number;
  name: string;
  description: string;
  link: string;
  discount: number;
  price: number;
  status: ECouponStatus;
}
