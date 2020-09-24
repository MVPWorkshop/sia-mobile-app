import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ERouterScreens } from '../../../shared/types/router.types';
import CreateActionScreen from '../../../components/Screens/CreateActionScreen/createActionScreen';
import AppHeader from '../../../components/organisms/AppHeader/appHeader';

const HomeCreateActionStack = createStackNavigator();

const HomeCreateActionFlow = () => {
  return (
    <HomeCreateActionStack.Navigator
      screenOptions={{
        header: AppHeader
      }}
    >
      <HomeCreateActionStack.Screen name={ERouterScreens.CreateActionScreen} component={CreateActionScreen}/>
    </HomeCreateActionStack.Navigator>
  )
}

export default HomeCreateActionFlow;
