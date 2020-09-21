import { ReduxAction } from '../redux.types';
import { ICoupon } from '../../shared/types/aidProject.types';
import { AllKeysRequired, DynamicObject } from '../../shared/types/util.types';

export enum EWalletActions {
  CLAIM_COUPON = 'CLAIM_COUPON'
}

export type ClaimCoupon = ReduxAction<EWalletActions.CLAIM_COUPON, {
  couponId: string;
}>

export type WalletReduxActions =
  ClaimCoupon;

export interface IWalletReduxReducerState {
  coupons: DynamicObject<ICoupon, string, AllKeysRequired>;
  userTokens: {
    current: number;
    lastMonthEarned: number;
    yesterdayEarned: number;
  }
}
