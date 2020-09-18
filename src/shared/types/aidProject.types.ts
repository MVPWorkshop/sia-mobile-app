export interface IVolunteerAction {
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
