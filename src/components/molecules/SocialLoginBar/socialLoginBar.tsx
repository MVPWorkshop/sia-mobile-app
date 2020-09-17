import React from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';

const SocialLoginBar = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        type={'fontisto'}
        name={'google'}
        reverse={true}
        color={'#DB4437'}
      />
      <Icon
        type={'fontisto'}
        name={'facebook'}
        reverse={true}
        color={'#3B5998'}
      />
      <Icon
        type={'fontisto'}
        name={'twitter'}
        reverse={true}
        color={'#00ACEE'}
      />
      <Icon
        type={'fontisto'}
        name={'linkedin'}
        reverse={true}
        color={'#0E76A8'}
      />
    </View>
  )
}

export default SocialLoginBar;
