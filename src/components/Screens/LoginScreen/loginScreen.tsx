import React from 'react'
import { Button, Text } from 'react-native';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/auth/auth.redux.actions';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';

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
      <Text>Login screen</Text>
    </ScreenLayout>
  )
}

export default LoginScreen;
