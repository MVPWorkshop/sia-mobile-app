import React from 'react'
import { Text } from 'react-native';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';

const ActionsScreen: React.FC<RouterScreenProps.IActionsScreenProps> = () => {
  return (
    <ScreenLayout>
      <Text>Actions screen</Text>
    </ScreenLayout>
  )
}

export default ActionsScreen;
