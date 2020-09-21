import { IVolunteerAction } from '../../../shared/types/aidProject.types';
import { StyleProp, ViewStyle } from 'react-native';

export interface IVolunteerActionPreviewProps {
  action: IVolunteerAction;
  style?: StyleProp<ViewStyle>;
  onClick: () => void;
}
