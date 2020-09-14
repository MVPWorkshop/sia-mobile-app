import React from 'react'
import { Text } from 'react-native';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';

const WalletScreen: React.FC<RouterScreenProps.IWalletScreenProps> = () => {
  return (
    <ScreenLayout>
      <Text>Wallet screen</Text>
    </ScreenLayout>
  )
}

export default WalletScreen;
