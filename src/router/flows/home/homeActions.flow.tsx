import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ERouterScreens } from '../../../shared/types/router.types';
import ActionsScreen from '../../../components/Screens/ActionsScreen/actionsScreen';
import AppHeader from '../../../components/organisms/AppHeader/appHeader';
import ActionDetailsScreen from '../../../components/Screens/ActionDetailsScreen/actionDetailsScreen';
import TaskDetailsScreen from '../../../components/Screens/TaskDetailsScreen/taskDetailsScreen';
import FinishTaskScreen from '../../../components/Screens/FinishTaskScreen/finishTaskScreen';

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
      <HomeActionsFlowStack.Screen name={ERouterScreens.TaskDetailsScreen} component={TaskDetailsScreen} />
      <HomeActionsFlowStack.Screen name={ERouterScreens.FinishTaskScreen} component={FinishTaskScreen} />
    </HomeActionsFlowStack.Navigator>
  )
}

export default HomeActionsFlow;
