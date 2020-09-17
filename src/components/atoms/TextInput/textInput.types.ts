import { onInputChange } from '../../../shared/types/input.types';
import { Input as RNEInput, InputProps as RNEInputProps } from 'react-native-elements';
import { StyleProp, ViewStyle } from 'react-native';

export interface ITextInputProps {
  name: string;
  value: string;
  onChange: onInputChange<string>;
  error?: string;
  placeholder: string;
  type?: RNEInputProps['keyboardType'];
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: RNEInputProps['autoCapitalize'];
  blurOnSubmit?: boolean;
  returnKeyType?: RNEInputProps['returnKeyType'];
  onRefChange?: (ref: RNEInput) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
