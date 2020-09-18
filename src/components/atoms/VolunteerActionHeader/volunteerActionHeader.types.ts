import { StyleProp, ViewStyle } from 'react-native';

export interface IVolunteerActionHeaderProps {
  name: string;
  image: number;
  organizer?: string;
  addressCity?: string;
  addressCountry?: string;
  style?: StyleProp<ViewStyle>;
}
