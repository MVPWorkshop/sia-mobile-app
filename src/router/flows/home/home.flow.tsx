import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ERouterFlows } from '../../../shared/types/router.types';
import HomeTabOptions from '../../tab/homeTab';
import HomeActionsFlow from './homeActions.flow';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTasksFlow from './homeTasks.flow';
import AppDrawer from '../../../components/organisms/AppDrawer/appDrawer';
import HomeWalletFlow from './homeWallet.flow';
import useRole from '../../../shared/hooks/useRole.hook';
import HomeCreateActionFlow from './homeCreateAction.flow';

const HomeFlowBottomTab = createBottomTabNavigator();
const HomeFlowDrawer = createDrawerNavigator();

const HomeTabFlow = () => {

  const { isVolunteer, isNgo, isBeneficiary } = useRole();

  return (
    <HomeFlowBottomTab.Navigator
      screenOptions={HomeTabOptions.screenOptions}
      tabBarOptions={HomeTabOptions.tabBarOptions}
    >
      { isVolunteer && <HomeFlowBottomTab.Screen name={ERouterFlows.HomeActionsFlow} component={HomeActionsFlow}/> }
      { isVolunteer && <HomeFlowBottomTab.Screen name={ERouterFlows.HomeTasksFlow} component={HomeTasksFlow} /> }
      { isVolunteer && <HomeFlowBottomTab.Screen name={ERouterFlows.HomeWalletFlow} component={HomeWalletFlow} /> }

      { (isNgo || isBeneficiary) && <HomeFlowBottomTab.Screen name={ERouterFlows.HomeActionsFlow} component={HomeActionsFlow} /> }
      { (isNgo || isBeneficiary) && <HomeFlowBottomTab.Screen name={ERouterFlows.HomeCreateActionFlow} component={HomeCreateActionFlow} /> }
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
