import { StyleProp, ViewStyle } from 'react-native';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';

export interface ICircleProps {
  style?: StyleProp<ViewStyle>;
  color?: EColors | EAccents;
  size?: number;
}
