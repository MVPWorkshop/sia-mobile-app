import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen from '../../../components/Screens/WalletScreen/walletScreen';
import { ERouterFlows, ERouterScreens } from '../../../shared/types/router.types';
import HomeTabVolunteerOptions from '../../tab/volunteer/homeTab.Volunteer';
import HomeActionsFlow from './homeActions.flow';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTasksFlow from './homeTasks.flow';
import AppDrawer from '../../../components/organisms/AppDrawer/appDrawer';

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
      <HomeFlowBottomTab.Screen name={ERouterFlows.HomeTasksFlow} component={HomeTasksFlow} />
      <HomeFlowBottomTab.Screen name={ERouterScreens.WalletScreen} component={WalletScreen} />
    </HomeFlowBottomTab.Navigator>
  )
}

const HomeFlow = () => {
  return (
    <HomeFlowDrawer.Navigator
      drawerContent={(props) => <AppDrawer {...props}/>}
    >
      <HomeFlowDrawer.Screen name={ERouterFlows.HomeFlow} component={HomeTabFlow} />
    </HomeFlowDrawer.Navigator>
  )
}

export default HomeFlow;
