import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image, Linking, ScrollView, View } from 'react-native';
import styles from './appDrawer.styles';
import { Images } from '../../../shared/constants/images.constants';
import Typography from '../../atoms/Typography/typography';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../../shared/types/user.types';
import { RootState } from '../../../redux/redux.types';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { EColors } from '../../../shared/styles/variables.styles';
import { ERouterFlows, ERouterScreens } from '../../../shared/types/router.types';
import { DrawerActions, StackActions } from '@react-navigation/native';
import DrawerOption from '../../atoms/DrawerOption/drawerOption';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import Divider from '../../atoms/Divider/divider';
import { mb } from '../../../shared/styles/util.styles';
import { Icon } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';
import { toggleIsAuthenticated } from '../../../redux/auth/auth.redux.actions';

const AppDrawer: React.FC<DrawerContentComponentProps> = (props) => {

  const user = useSelector<RootState, IUser>(state => state.auth.user);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer);
  }

  const navigateTo = (route?: ERouterScreens | ERouterFlows, params?: any) => () => {
    if (!route) {
      return;
    }

    props.navigation.navigate(route, params)
    closeDrawer()
  }

  const logOut = () => {
    dispatch(toggleIsAuthenticated(false));
    props.navigation.dispatch(StackActions.replace(ERouterFlows.AuthFlow))
  }

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={styles.appDrawer}
    >
      <Button
        onClick={closeDrawer}
        type={EButtonType.FLAT}
        style={styles.closeBtn}
      >
        <Icon
          name='close-a'
          type='fontisto'
          size={18}
          color={getColor(EColors.GRAY_DARKEST)}
        />
      </Button>
      <View style={styles.userImageContainer}>
        <Image
          source={Images.userImg}
          height={75}
          width={75}
          resizeMode={'contain'}
        />
      </View>
      <Typography fontSize={24} fontFamily={EPoppins.Medium}>
        {`${user.firstName} ${user.lastName}`}
      </Typography>
      <Typography color={EColors.GRAY_DARKEST}>
        {user.role}
      </Typography>
      <View style={{flex: 1}}>
        <DrawerOption
          onClick={navigateTo(ERouterScreens.AccountDetailsScreen)}
          label={'My Account'}
          iconName={'user'}
          iconType={'feather'}
        />
        <DrawerOption
          onClick={navigateTo()}
          label={'Notifications'}
          iconName={'bell'}
          iconType={'feather'}
        />
        <DrawerOption
          onClick={navigateTo(ERouterFlows.HomeWalletFlow, {
            screen: ERouterScreens.CouponsScreen
          })}
          label={'Coupons'}
          iconName={'tag'}
          iconType={'feather'}
        />
        <DrawerOption
          onClick={navigateTo()}
          label={'Contact support'}
          iconName={'headphones'}
          iconType={'feather'}
        />
      </View>
      <Button
        onClick={() => {Linking.openURL('http://solidarityinaction.com')}}
        type={EButtonType.FLAT}
        style={{justifyContent: 'flex-start', padding: 0}}
      >
        solidarityinaction.com
      </Button>
      <Divider style={mb(2)}/>
      <DrawerOption
        onClick={logOut}
        label={'Log out'}
        iconName={'log-out'}
        iconType={'feather'}
        iconColor={EColors.GRAY}
        labelColor={EColors.GRAY}
      />
    </ScrollView>
  )
};

export default AppDrawer;
