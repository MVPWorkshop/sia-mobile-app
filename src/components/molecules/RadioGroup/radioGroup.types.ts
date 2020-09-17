import { ISelectionOption, onInputChange } from '../../../shared/types/input.types';
import { StyleProp, ViewStyle } from 'react-native';

export interface IRadioGroupProps {
  name: string;
  value: string;
  options: ISelectionOption[];
  onChange: onInputChange<string>;
  style?: StyleProp<ViewStyle>;
}
