import React, { useState } from 'react';
import { ICouponProps } from './coupon.types';
import { Image, Linking, ScrollView, View } from 'react-native';
import styleFunction from './coupon.styles';
import Typography from '../../atoms/Typography/typography';
import { Images } from '../../../shared/constants/images.constants';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { mb, mr } from '../../../shared/styles/util.styles';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import SvgDashedLine from '../../atoms/SvgDashedLine/svgDashedLine';
import SemiCircle from '../../atoms/SemiCircle/semiCircle';
import { ECouponStatus } from '../../../shared/types/aidProject.types';
import { useDispatch } from 'react-redux';
import { claimCoupon } from '../../../redux/wallet/wallet.redux.actions';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';

const Coupon: React.FC<ICouponProps> = (props) => {

  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const styles = styleFunction(scrollWidth, props.colorTheme);

  const dispatch = useDispatch();

  const claimCurrentCoupon = () => {
    dispatch(claimCoupon(props.coupon.id))
  }

  const {
    name,
    description,
    link,
    couponImgSrc,
    discount,
    price
  } = props.coupon;

  const isClaimed = props.coupon.status === ECouponStatus.CLAIMED;

  return (
    <View style={styles.coupon}>
      <ScrollView
        style={styles.scrollContainer}
        horizontal={true}
        onLayout={event => setScrollWidth(event.nativeEvent.layout.width)}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        bounces={true}
        bouncesZoom={true}
        pagingEnabled={true}
      >
        <View style={styles.couponRepresentationContainer}>
          <View style={{flexDirection: 'row', flexGrow: 1}}>
            <View style={{maxWidth: 200, paddingVertical: 13}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
                <View style={styles.logoImageContainer}>
                  <Image
                    source={couponImgSrc}
                    style={{width: 30, height: 330}}
                    resizeMode={'contain'}
                  />
                </View>
                <Typography fontSize={20} fontFamily={EPoppins.Medium}>
                  {name}
                </Typography>
              </View>
              <Typography>
                {description}
              </Typography>
              <Button
                onClick={() => Linking.openURL(`http://${link}`)}
                type={EButtonType.FLAT}
                removePadding={true}
                style={{justifyContent: 'flex-start', flexGrow: 1, alignItems: 'flex-end'}}
                labelColor={props.colorTheme.normal}
              >
                {link}
              </Button>
            </View>

            <View style={{flex: 1}}/>

            <View style={mr(5)}>
              <SemiCircle
                direction={'down'}
                size={15}
                color={getColor(EColors.GRAYISH_BLUE)}
              />
              <View style={{overflow: 'hidden', height: 140}}>
                <SvgDashedLine color={getColor(EColors.GRAYISH_BLUE)}/>
              </View>
              <SemiCircle
                direction={'up'}
                size={15}
                color={getColor(EColors.GRAYISH_BLUE)}
              />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Typography fontFamily={EPoppins.Medium} style={{position: 'absolute', transform: [{rotate: '-90deg'}]}}>
                {`${discount}% Discount`}
              </Typography>
            </View>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Typography fontFamily={EPoppins.Medium} fontSize={18}>
            Price
          </Typography>
          <View style={[{flexDirection: 'row', alignItems: 'center'}, mb(5)]}>
            <Image source={Images.coinsIcon}/>
            <Typography fontFamily={EPoppins.SemiBold} fontSize={30} style={{marginLeft: 10}}>
              {price}
            </Typography>
          </View>
          <Button
            onClick={claimCurrentCoupon}
            extend={true}
            style={styles.getCouponBtn}
            disabled={isClaimed}
          >
            {isClaimed ? 'Claimed' : 'Get coupon'}
          </Button>
        </View>
      </ScrollView>
    </View>
  )
};

export default Coupon;
