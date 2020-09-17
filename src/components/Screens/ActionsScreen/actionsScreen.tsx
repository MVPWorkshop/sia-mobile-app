import React from 'react'
import { Image, Text } from 'react-native';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { Images } from '../../../shared/constants/images.constants';

const ActionsScreen: React.FC<RouterScreenProps.IActionsScreenProps> = () => {
  return (
    <ScreenLayout>
      <Text>Actions screen</Text>
    </ScreenLayout>
  )
}

export default ActionsScreen;
