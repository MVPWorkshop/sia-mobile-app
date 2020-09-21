import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';

const Divider: React.FC = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: colors.GRAY,
        marginTop: 20,
        marginBottom: 20
      }}
    />
  )
}

export default Divider;
