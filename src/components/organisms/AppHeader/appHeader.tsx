import React from 'react';
import { Image, View } from 'react-native';
import Button from '../../atoms/Button/button';
import { Images } from '../../../shared/constants/images.constants';
import styles from './appHeader.styles';
import { StackHeaderProps } from '@react-navigation/stack';
import { EButtonType } from '../../atoms/Button/button.types';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

const AppHeader: React.FC<StackHeaderProps> = (props) => {

  const {
    insets
  } = props;

  const openDrawer = () => {
    props.navigation.dispatch(DrawerActions.openDrawer)
  }

  return (
    <View style={[styles.appHeader, {paddingTop: insets.top}]}>
      <Button
        onClick={openDrawer}
        type={EButtonType.FLAT}
      >
        <Image
          source={Images.hamburger}
          style={styles.imgHamburger}
        />
      </Button>

      <Image source={Images.logo} style={styles.imgLogo}/>

      <Button
        onClick={() => {}}
        type={EButtonType.FLAT}
      >
        <Image
          source={Images.search}
          style={styles.imgSearch}
        />
      </Button>
    </View>
  )
}

export default AppHeader;
