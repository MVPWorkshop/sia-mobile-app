import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppHeader from '../../../components/organisms/AppHeader/appHeader';
import { ERouterScreens } from '../../../shared/types/router.types';
import WalletScreen from '../../../components/Screens/WalletScreen/walletScreen';
import CouponsScreen from '../../../components/Screens/CouponsScreen/couponsScreen';

const HomeWalletFlowStack = createStackNavigator();

const HomeWalletFlow = () => {
  return (
    <HomeWalletFlowStack.Navigator
      screenOptions={{
        header: AppHeader
      }}
    >
      <HomeWalletFlowStack.Screen name={ERouterScreens.WalletScreen} component={WalletScreen} />
      <HomeWalletFlowStack.Screen name={ERouterScreens.CouponsScreen} component={CouponsScreen} />
    </HomeWalletFlowStack.Navigator>
  )
}

export default HomeWalletFlow;
