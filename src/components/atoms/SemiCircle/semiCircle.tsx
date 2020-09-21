import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ISemiCircleProps } from './semiCircle.types';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';

const SemiCircle: React.FC<ISemiCircleProps> = (props) => {

  const {
    color = getColor(EColors.WHITE),
    direction = 'up',
    size = 30
  } = props;

  const getBorderStyles = () => {
    let style: ViewStyle = {
      borderRadius: size
    };

    if (direction === 'up') {
      style.borderBottomLeftRadius = 0;
      style.borderBottomRightRadius = 0;
    } else if (direction === 'down') {
      style.borderTopLeftRadius = 0;
      style.borderTopRightRadius = 0;
    } else if (direction === 'left') {
      style.borderTopRightRadius = 0;
      style.borderBottomRightRadius = 0;
    } else if (direction === 'right') {
      style.borderTopLeftRadius = 0;
      style.borderBottomLeftRadius = 0;
    }

    return style;
  }

  const getSizeStyle = () => {
    let style: ViewStyle = {}

    if (direction === 'up' || direction === 'down') {
      style.width = size * 2;
      style.height = size;
    } else {
      style.width = size;
      style.height = size * 2;
    }

    return style;
  }

  const getLayoutStyle = (): ViewStyle => {
    return {
      backgroundColor: color,
      ...getSizeStyle(),
      ...getBorderStyles()
    }
  }

  return (
    <View style={getLayoutStyle()}/>
  )
}

export default SemiCircle;
