import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActionsScreen from '../../components/Screens/ActionsScreen/actionsScreen';
import TasksScreen from '../../components/Screens/TasksScreen/tasksScreen';
import WalletScreen from '../../components/Screens/WalletScreen/walletScreen';
import { ERouterScreens } from '../../shared/types/router.types';

const HomeFlowBottomTab = createBottomTabNavigator();

const HomeFlow = () => {
  return (
    <HomeFlowBottomTab.Navigator initialRouteName={ERouterScreens.ActionsScreen}>
      <HomeFlowBottomTab.Screen name={ERouterScreens.ActionsScreen} component={ActionsScreen}/>
      <HomeFlowBottomTab.Screen name={ERouterScreens.TasksScreen} component={TasksScreen} />
      <HomeFlowBottomTab.Screen name={ERouterScreens.WalletScreen} component={WalletScreen} />
    </HomeFlowBottomTab.Navigator>
  )
}

export default HomeFlow;
