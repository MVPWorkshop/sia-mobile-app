import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export type EFontFamily =
  EPoppins;

export interface ITypographyProps {
  fontSize?: number;
  fontFamily?: EFontFamily;
  color?: EAccents | EColors | string;
  style?: StyleProp<TextStyle>;
  textProps?: TextProps;
}
