import React from 'react';
import { Text, TextStyle } from 'react-native';
import { ITypographyProps } from './typography.types';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { accentColor, colors, defaultFontSize, EAccents, EColors } from '../../../shared/styles/variables.styles';

const Typography: React.FC<ITypographyProps> = (props) => {

  const {
    fontSize = defaultFontSize,
    fontFamily = EPoppins.Regular,
    color = EColors.BLACK,
    style,
    textProps,
    children
  } = props;

  const typographyStyle: TextStyle = {
    fontFamily,
    fontSize,
    color:
      colors[color as EColors] ||
      accentColor[color as EAccents] ||
      color
  }

  return (
    <Text style={[
      typographyStyle,
      style,
      textProps?.style
    ]}>
      {children}
    </Text>
  )
}

export default Typography;
