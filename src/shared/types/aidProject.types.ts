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
}

export enum EVolunteerTaskStatus {
  NEUTRAL = 'NEUTRAL',
  APPLIED = 'APPLIED',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
  UNFINISHED = 'UNFINISHED'
}

interface IVolunteerTaskBase {
  id: string;
  actionId: string;
  name: string;
  description: string;
  startDateTimestamp: number;
  endDateTimestamp: number;
  durationMinutes: number;
  addressNumber: string;
  requirements: string;
  updates: string[];
  status: EVolunteerTaskStatus;
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
