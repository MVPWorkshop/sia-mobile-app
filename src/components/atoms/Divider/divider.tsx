import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';
import { IWithStyle } from '../../../shared/types/common.types';

const Divider: React.FC<IWithStyle> = (props) => {
  return (
    <View
      style={[{
        width: '100%',
        height: 1,
        backgroundColor: colors.GRAY,
        marginTop: 20,
        marginBottom: 20
      }, props.style]}
    />
  )
}

export default Divider;
