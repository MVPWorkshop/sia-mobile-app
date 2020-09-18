import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ERouterScreens } from '../../../shared/types/router.types';
import ActionsScreen from '../../../components/Screens/ActionsScreen/actionsScreen';
import AppHeader from '../../../components/organisms/AppHeader/appHeader';
import ActionDetailsScreen from '../../../components/Screens/ActionDetailsScreen/actionDetailsScreen';

const HomeActionsFlowStack = createStackNavigator();

const HomeActionsFlow = () => {
  return (
    <HomeActionsFlowStack.Navigator
      screenOptions={{
        header: AppHeader,
      }}
    >
      <HomeActionsFlowStack.Screen name={ERouterScreens.ActionsScreen} component={ActionsScreen} />
      <HomeActionsFlowStack.Screen name={ERouterScreens.ActionDetailsScreen} component={ActionDetailsScreen} />
    </HomeActionsFlowStack.Navigator>
  )
}

export default HomeActionsFlow;
