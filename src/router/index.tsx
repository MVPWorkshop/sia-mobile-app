import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import AuthFlow from './flows/auth.flow';
import HomeFlow from './flows/home.flow';
import { ERouterFlows, ERouterScreens } from '../shared/types/router.types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/redux.types';
import VerifyAccountScreen from '../components/Screens/VerifyAccountScreen/verifyAccountScreen';

const RootStack = createStackNavigator();
const RootStackOptions: StackNavigationOptions = {
  headerShown: false
}

const Router: React.FC = () => {

  const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
  const initialFlow = isLoggedIn ? ERouterFlows.HomeFlow : ERouterFlows.AuthFlow;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={initialFlow}
        screenOptions={RootStackOptions}
      >
        <RootStack.Screen name={ERouterFlows.AuthFlow} component={AuthFlow} />
        <RootStack.Screen name={ERouterFlows.HomeFlow} component={HomeFlow} />

        <RootStack.Screen name={ERouterScreens.VerifyAccountScreen} component={VerifyAccountScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
