import { StyleSheet } from 'react-native';
import { IColorTheme } from '../../../shared/types/common.types';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';

const styles = (scrollWidth: number, colorTheme: IColorTheme) => StyleSheet.create({
  coupon: {
    width: '100%',
    height: 170,
    overflow: 'hidden'
  },
  scrollContainer: {
    flex: 1,
  },
  couponRepresentationContainer: {
    width: scrollWidth,
    backgroundColor: colorTheme.lighter,
    marginRight: 30,
    paddingHorizontal: 24,
    paddingVertical: 0,
    borderRadius: 13
  },
  priceContainer: {
    width: 200,
    alignItems: 'center'
  },
  getCouponBtn: {
    backgroundColor: colorTheme.normal
  },
  logoImageContainer: {
    width: 40,
    height: 40,
    backgroundColor: getColor(EColors.WHITE),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 16
  }
});

export default styles;
