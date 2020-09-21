import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Button from '../../atoms/Button/button';
import { Images } from '../../../shared/constants/images.constants';
import styles from './appHeader.styles';
import { StackHeaderProps } from '@react-navigation/stack';
import { EButtonType } from '../../atoms/Button/button.types';
import { DrawerActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { colors } from '../../../shared/styles/variables.styles';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { ml } from '../../../shared/styles/util.styles';
import { ERouterFlows, ERouterScreens } from '../../../shared/types/router.types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';

const AppHeader: React.FC<StackHeaderProps> = (props) => {

  const {
    insets
  } = props;

  const openDrawer = () => {
    props.navigation.dispatch(DrawerActions.openDrawer)
  }

  const isVerified = useSelector<RootState, boolean>(state => state.auth.isVerified);

  const handleVerification = () => {
    props.navigation.navigate(ERouterScreens.VerifyAccountScreen, {
      onFinishRoute: {
        routeName: ERouterFlows.HomeDrawer
      }
    })
  }

  return (
    <View>
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
      { !isVerified ?
        <TouchableOpacity onPress={handleVerification} >
          <View style={styles.userVerificationBanner}>
            <View style={{backgroundColor: colors.WHITE, borderRadius: 30}}>
              <Icon
                name='error-outline'
                type='material'
                color={colors.BLUE}
              />
            </View>
            <Typography fontFamily={EPoppins.Medium} fontSize={14} style={ml(6)}>
              Please verify your account
            </Typography>
          </View>
        </TouchableOpacity> : null
      }
    </View>
  )
}

export default AppHeader;
