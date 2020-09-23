import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import AuthFlow from './flows/auth.flow';
import HomeFlow from './flows/home/home.flow';
import { ERouterFlows, ERouterScreens } from '../shared/types/router.types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/redux.types';
import VerifyAccountScreen from '../components/Screens/VerifyAccountScreen/verifyAccountScreen';
import { colors } from '../shared/styles/variables.styles';
import AccountDetailsScreen from '../components/Screens/AccountDetailsScreen/accountDetailsScreen';
import RoleSelectScreen from '../components/Screens/RoleSelectScreen/roleSelectScreen';

const RootStack = createStackNavigator();
const RootStackOptions: StackNavigationOptions = {
  headerShown: false
}

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.GRAYISH_BLUE
  }
}

const Router: React.FC = () => {

  const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
  const initialFlow = isLoggedIn ? ERouterFlows.HomeDrawer : ERouterFlows.AuthFlow;

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        initialRouteName={initialFlow}
        screenOptions={RootStackOptions}
      >
        <RootStack.Screen name={ERouterFlows.AuthFlow} component={AuthFlow} />
        <RootStack.Screen name={ERouterFlows.HomeDrawer} component={HomeFlow} />

        <RootStack.Screen name={ERouterScreens.VerifyAccountScreen} component={VerifyAccountScreen} />
        <RootStack.Screen name={ERouterScreens.AccountDetailsScreen} component={AccountDetailsScreen}/>
        <RootStack.Screen name={ERouterScreens.RoleSelectScreen} component={RoleSelectScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
