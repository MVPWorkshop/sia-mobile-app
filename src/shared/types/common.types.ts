import { StyleProp, ViewStyle } from 'react-native';

export interface IWithStyle<Style = ViewStyle> {
  style?: StyleProp<Style>;
}
