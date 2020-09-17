import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActionsScreen from '../../../components/Screens/ActionsScreen/actionsScreen';
import TasksScreen from '../../../components/Screens/TasksScreen/tasksScreen';
import WalletScreen from '../../../components/Screens/WalletScreen/walletScreen';
import { ERouterFlows, ERouterScreens } from '../../../shared/types/router.types';
import HomeTabVolunteerOptions from '../../tab/volunteer/homeTab.Volunteer';
import HomeActionsFlow from './homeActions.flow';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeFlowBottomTab = createBottomTabNavigator();
const HomeFlowDrawer = createDrawerNavigator();

const HomeTabFlow = () => {
  return (
    <HomeFlowBottomTab.Navigator
      initialRouteName={ERouterScreens.ActionsScreen}
      screenOptions={HomeTabVolunteerOptions.screenOptions}
      tabBarOptions={HomeTabVolunteerOptions.tabBarOptions}
    >
      <HomeFlowBottomTab.Screen name={ERouterFlows.HomeActionsFlow} component={HomeActionsFlow}/>
      <HomeFlowBottomTab.Screen name={ERouterScreens.TasksScreen} component={TasksScreen} />
      <HomeFlowBottomTab.Screen name={ERouterScreens.WalletScreen} component={WalletScreen} />
    </HomeFlowBottomTab.Navigator>
  )
}

const HomeFlow = () => {
  return (
    <HomeFlowDrawer.Navigator>
      <HomeFlowDrawer.Screen name={ERouterFlows.HomeFlow} component={HomeTabFlow} />
    </HomeFlowDrawer.Navigator>
  )
}

export default HomeFlow;
