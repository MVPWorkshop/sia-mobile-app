import { WalletReduxActions, EWalletActions, IWalletReduxReducerState } from './wallet.redux.types';
import { Reducer } from 'redux';
import { Images } from '../../shared/constants/images.constants';
import { ECouponStatus } from '../../shared/types/aidProject.types';

const initialState: IWalletReduxReducerState = {
  coupons: {
    '906d6240-9542-4914-af5e-074bbcf298c7': {
      id: '906d6240-9542-4914-af5e-074bbcf298c7',
      couponImgSrc: Images.nikeLogo,
      name: 'Partner 01',
      description: 'More information about this practicular partner.',
      link: 'nike.com',
      discount: 20,
      price: 150,
      status: ECouponStatus.UNCLAIMED
    },
    'f4f0d7a7-9ce8-4151-9be3-6f83fcba4f38': {
      id: 'f4f0d7a7-9ce8-4151-9be3-6f83fcba4f38',
      couponImgSrc: Images.nikeLogo,
      name: 'Partner 02',
      description: 'More information about this practicular partner.',
      link: 'nike.com',
      discount: 20,
      price: 100,
      status: ECouponStatus.UNCLAIMED
    },
    'd29bde41-cc41-4d96-9070-77a2b677af65': {
      id: 'd29bde41-cc41-4d96-9070-77a2b677af65',
      couponImgSrc: Images.nikeLogo,
      name: 'Partner 03',
      description: 'More information about this practicular partner.',
      link: 'nike.com',
      discount: 20,
      price: 50,
      status: ECouponStatus.UNCLAIMED
    },
    '2bd2bfca-35ba-4e45-82d3-ba8e6e143d93': {
      id: '2bd2bfca-35ba-4e45-82d3-ba8e6e143d93',
      couponImgSrc: Images.nikeLogo,
      name: 'Partner 04',
      description: 'More information about this practicular partner.',
      link: 'nike.com',
      discount: 20,
      price: 200,
      status: ECouponStatus.UNCLAIMED
    }
  },
  userTokens: {
    current: 500,
    lastMonthEarned: 180,
    yesterdayEarned: 10
  }
}

const WalletReduxReducer: Reducer<IWalletReduxReducerState, WalletReduxActions> = (state= initialState, action) => {
  switch (action.type) {
    case EWalletActions.CLAIM_COUPON: {
      const { couponId } = action.payload;
      let oldStateCoupons = state.coupons;
      oldStateCoupons[couponId] = {
        ...oldStateCoupons[couponId],
        status: ECouponStatus.CLAIMED
      }

      return {
        ...state,
        coupons: {...oldStateCoupons},
        userTokens: {
          ...state.userTokens,
          current: state.userTokens.current - state.coupons[couponId].price
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default WalletReduxReducer;
