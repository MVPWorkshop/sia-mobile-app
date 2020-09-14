import React from 'react'
import { Text } from 'react-native';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';

const RegisterScreen: React.FC<RouterScreenProps.IRegisterScreenProps> = () => {
  return (
    <ScreenLayout>
      <Text>Register screen</Text>
    </ScreenLayout>
  )
}

export default RegisterScreen;
