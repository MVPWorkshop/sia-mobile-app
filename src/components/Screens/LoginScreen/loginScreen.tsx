import React from 'react'
import { Button, Image, Text } from 'react-native';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/auth/auth.redux.actions';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { Images } from '../../../shared/constants/images.constants';

const LoginScreen: React.FC<RouterScreenProps.ILoginScreenProps> = (props) => {

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({
      email: 'test@test.test',
      lastName: 'Test',
      firstName: 'Test'
    }))
    props.navigation.navigate(ERouterFlows.HomeFlow, {
      screen: ERouterScreens.ActionsScreen
    })
  }

  return (
    <ScreenLayout>
      <Button
        title={'Login'}
        onPress={handleLogin}
      />
      <Image source={Images.logo} />
      <Text style={{
        fontFamily: EPoppins.Regular
      }}>Login screen</Text>
    </ScreenLayout>
  )
}

export default LoginScreen;
