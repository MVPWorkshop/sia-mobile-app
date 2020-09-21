import React  from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { View } from 'react-native';
import { mb } from '../../../shared/styles/util.styles';
import { RouterScreenProps } from '../../../shared/types/router.types';
import styles from './couponsScreen.styles';
import UserCoupons from '../../organisms/UserCoupons/userCoupons';

const CouponsScreen: React.FC<RouterScreenProps.ICouponsScreenProps> = () => {
  return (
    <ScreenLayout
      safeArea={false}
      scroll={true}
      style={styles.couponsScreen}
    >
      <View style={mb(4)}>
        <Typography fontFamily={EPoppins.SemiBold} fontSize={24}>
          Coupons
        </Typography>
      </View>
      <UserCoupons/>
    </ScreenLayout>
  )
}

export default CouponsScreen;
