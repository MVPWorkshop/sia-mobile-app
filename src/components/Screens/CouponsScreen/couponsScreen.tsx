import React, { useEffect } from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { View } from 'react-native';
import { mb } from '../../../shared/styles/util.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { getColor, keys } from '../../../shared/utils/common.util';
import Coupon from '../../organisms/Coupon/coupon';
import { IColorTheme } from '../../../shared/types/common.types';
import { EColors } from '../../../shared/styles/variables.styles';
import { RouterScreenProps } from '../../../shared/types/router.types';
import styles from './couponsScreen.styles';

const CouponsScreen: React.FC<RouterScreenProps.ICouponsScreenProps> = () => {

  const coupons = useSelector<RootState, RootState['wallet']['coupons']>(state => state.wallet.coupons);

  useEffect(() => {
    console.log('changes')
  }, [coupons])

  const renderCoupons = () => {
    const colorThemes: IColorTheme[] = [
      {
        normal: getColor(EColors.PINK),
        lighter: getColor(EColors.PINK_LIGHTER)
      },
      {
        normal: getColor(EColors.GREEN),
        lighter: getColor(EColors.GREEN_LIGHTER)
      },
      {
        normal: getColor(EColors.BLUE),
        lighter: getColor(EColors.BLUE_LIGHTER)
      }
    ]

    return keys(coupons).map((couponId, index) => {
      return (
        <View style={mb(4)} key={couponId + index}>
          <Coupon
            coupon={coupons[couponId]}
            colorTheme={colorThemes[index % 3]}
          />
        </View>
      )
    })
  }

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
      {renderCoupons()}
    </ScreenLayout>
  )
}

export default CouponsScreen;
