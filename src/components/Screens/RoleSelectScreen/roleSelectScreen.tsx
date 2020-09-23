import React from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { RouterScreenProps } from '../../../shared/types/router.types';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/auth/auth.redux.actions';
import { EUserRoles } from '../../../shared/types/user.types';
import styles from './roleSelectScreen.styles';
import { Image, View } from 'react-native';
import { Images } from '../../../shared/constants/images.constants';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { EColors } from '../../../shared/styles/variables.styles';
import Typography from '../../atoms/Typography/typography';
import { Icon } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';
import Divider from '../../atoms/Divider/divider';

const RoleSelectScreen: React.FC<RouterScreenProps.ISelectRoleScreenProps> = (props) => {

  const dispatch = useDispatch();

  const onRoleSelect = (role: EUserRoles) => () => {
    dispatch(updateUser({ role }))

    const { routeName, params } = props.route.params;

    props.navigation.replace(routeName, params)
  }

  return (
    <ScreenLayout style={styles.roleSelectScreen}>
      <View style={styles.logoImageContainer}>
        <Image
          source={Images.logo}
          style={styles.logoImage}
        />
      </View>

      <Button
        onClick={onRoleSelect(EUserRoles.VOLUNTEER)}
        extend={true}
        type={EButtonType.FLAT}
      >
        <Image source={Images.volunteerIcon} />
        <Typography style={{flex: 1, textAlign: 'center'}} fontSize={20}>
          I'm a volunteer
        </Typography>
        <Icon
          name={'arrow-right'}
          type={'feather'}
          color={getColor(EColors.BLUE)}
        />
      </Button>

      <Divider/>

      <Button
        onClick={onRoleSelect(EUserRoles.NGO)}
        extend={true}
        type={EButtonType.FLAT}
      >
        <Image source={Images.ngoIcon} />
        <Typography style={{flex: 1, textAlign: 'center'}} fontSize={20}>
          I'm an NGO
        </Typography>
        <Icon
          name={'arrow-right'}
          type={'feather'}
          color={getColor(EColors.BLUE)}
        />
      </Button>

    </ScreenLayout>
  )
}

export default RoleSelectScreen;
