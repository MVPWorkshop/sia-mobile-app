import React, { Fragment, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { IColorTheme } from '../../../shared/types/common.types';
import { getColor, keys } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';
import { View } from 'react-native';
import { mb } from '../../../shared/styles/util.styles';
import Coupon from '../Coupon/coupon';
import { IUserCouponsProps } from './userCoupons.types';
import { ECouponStatus } from '../../../shared/types/aidProject.types';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';

const UserCoupons: React.FC<IUserCouponsProps> = (props) => {
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

    let couponNodes: ReactNode[] = []
    keys(coupons).forEach((couponId, index) => {
      const couponElement = (
        <View style={mb(4)} key={couponId + index}>
          <Coupon
            coupon={coupons[couponId]}
            colorTheme={colorThemes[index % 3]}
          />
        </View>
      );

      if (props.onlyClaimed) {
        if (coupons[couponId].status === ECouponStatus.CLAIMED) {
          couponNodes.push(couponElement);
        }
      } else {
        couponNodes.push(couponElement);
      }
    })

    if (couponNodes.length === 0) {
      return (
        <Typography
          color={EColors.BLUE}
          style={mb(6)}
          fontFamily={EPoppins.SemiBold}
          fontSize={18}
        >
          You haven't claimed any coupons yet, find some in the coupons store
        </Typography>
      )
    } else {
      return couponNodes;
    }
  }

  return (
    <Fragment>
      {renderCoupons()}
    </Fragment>
  )
}

export default UserCoupons;
