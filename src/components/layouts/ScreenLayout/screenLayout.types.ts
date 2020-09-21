import { StyleProp, ViewStyle } from 'react-native';
import { EColors } from '../../../shared/styles/variables.styles';

export interface IScreenLayoutProps {
  bgColor?: EColors;
  statusBarColor?: EColors;
  safeArea?: boolean;
  style?: StyleProp<ViewStyle>;
  scroll?: boolean;
}
