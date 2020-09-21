import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { IColorTheme } from '../../../shared/types/common.types';
import { getColor, keys } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';
import { View } from 'react-native';
import { mb } from '../../../shared/styles/util.styles';
import Coupon from '../Coupon/coupon';

const UserCoupons: React.FC = () => {
  const coupons = useSelector<RootState, RootState['wallet']['coupons']>(state => state.wallet.coupons);

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
    <Fragment>
      {renderCoupons()}
    </Fragment>
  )
}

export default UserCoupons;
