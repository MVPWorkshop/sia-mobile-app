import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux.types';
import LoginScreen from '../../components/Screens/LoginScreen/loginScreen';
import RegisterScreen from '../../components/Screens/RegisterScreen/registerScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ERouterScreens } from '../../shared/types/router.types';

const AuthFlowStack = createStackNavigator();

const AuthFlow = () => {
  const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
  const isVerified = useSelector<RootState, boolean>(state => state.auth.isVerified);

  if (isLoggedIn && isVerified) {
    return null;
  }

  return (
    <AuthFlowStack.Navigator initialRouteName={ERouterScreens.LoginScreen}>
      <AuthFlowStack.Screen
        name={ERouterScreens.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthFlowStack.Screen
        name={ERouterScreens.RegisterScreen}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </AuthFlowStack.Navigator>
  )
}

export default AuthFlow;
