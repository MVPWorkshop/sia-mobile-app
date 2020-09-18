import React from 'react';
import { ICircleProps } from './circle.types';
import { View } from 'react-native';
import { accentColor, colors, EAccents, EColors } from '../../../shared/styles/variables.styles';

const Circle: React.FC<ICircleProps> = (props) => {

  const {
    style,
    color = EColors.GREEN,
    size = 8
  } = props;

  return (
    <View
      style={[{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors[color as EColors] || accentColor[color as EAccents]
      }, style]}
    />
  )
}

export default Circle;
