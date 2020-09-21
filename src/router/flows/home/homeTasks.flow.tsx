import { createStackNavigator } from '@react-navigation/stack';
import AppHeader from '../../../components/organisms/AppHeader/appHeader';
import { ERouterScreens } from '../../../shared/types/router.types';
import TaskDetailsScreen from '../../../components/Screens/TaskDetailsScreen/taskDetailsScreen';
import FinishTaskScreen from '../../../components/Screens/FinishTaskScreen/finishTaskScreen';
import React from 'react';
import TasksScreen from '../../../components/Screens/TasksScreen/tasksScreen';

const HomeTasksFlowStack = createStackNavigator();

const HomeTasksFlow = () => {
  return (
    <HomeTasksFlowStack.Navigator
      screenOptions={{
        header: AppHeader,
      }}
    >
      <HomeTasksFlowStack.Screen name={ERouterScreens.TasksScreen} component={TasksScreen} />
      <HomeTasksFlowStack.Screen name={ERouterScreens.TaskDetailsScreen} component={TaskDetailsScreen} />
      <HomeTasksFlowStack.Screen name={ERouterScreens.FinishTaskScreen} component={FinishTaskScreen} />
    </HomeTasksFlowStack.Navigator>
  )
}

export default HomeTasksFlow;
