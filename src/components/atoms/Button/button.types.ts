import { StyleProp, ViewStyle } from 'react-native';
import { ITypographyProps } from '../Typography/typography.types';
import { IconProps } from 'react-native-elements';

export enum EButtonType {
  FLAT = 'FLAT',
  REGULAR = 'REGULAR',
  OUTLINED = 'OUTLINED'
}

export interface IButtonProps {
  extend?: boolean;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: EButtonType;
  style?: StyleProp<ViewStyle>;
  labelColor?: ITypographyProps['color'];
  labelStyle?: ITypographyProps['style'];
  iconLeft?: {
    name: IconProps['name'],
    type: IconProps['type']
  };
  iconRight?: {
    name: IconProps['name'],
    type: IconProps['type']
  };
  removePadding?: boolean;
}
