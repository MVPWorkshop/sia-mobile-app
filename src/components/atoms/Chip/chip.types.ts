import { IconProps } from 'react-native-elements';
import { EColors } from '../../../shared/styles/variables.styles';
import { ITypographyProps } from '../Typography/typography.types';
import { StyleProp, ViewStyle } from 'react-native';

export interface IChipProps {
  chipIconProps: IconProps;
  backgroundColor?: EColors | string;
  style?: StyleProp<ViewStyle>;
  dataContainerStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  header?: {
    text: string;
    options?: ITypographyProps;
  },
  body?: {
    text: string;
    options?: ITypographyProps;
  }
}
