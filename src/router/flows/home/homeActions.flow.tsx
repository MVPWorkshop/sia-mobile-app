import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ERouterScreens } from '../../../shared/types/router.types';
import ActionsScreen from '../../../components/Screens/ActionsScreen/actionsScreen';
import AppHeader from '../../../components/organisms/AppHeader/appHeader';

const HomeActionsFlowStack = createStackNavigator();

const HomeActionsFlow = () => {
  return (
    <HomeActionsFlowStack.Navigator
      screenOptions={{
        header: AppHeader,
      }}
    >
      <HomeActionsFlowStack.Screen name={ERouterScreens.ActionsScreen} component={ActionsScreen} />
    </HomeActionsFlowStack.Navigator>
  )
}

export default HomeActionsFlow;
