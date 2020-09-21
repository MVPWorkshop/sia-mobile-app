import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../../shared/styles/variables.styles';
import styles from './socialShareButtons.styles';

const SocialShareButtons: React.FC = () => {
  return (
    <View style={styles.socialShareButtons}>
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
      <View style={styles.linkBtnContainer}>
        <Icon
          type={'feather'}
          name={'link'}
          color={colors.BLUE}
        />
      </View>
    </View>
  )
};

export default SocialShareButtons;
