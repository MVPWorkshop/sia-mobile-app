import { EWalletActions, ClaimCoupon } from './wallet.redux.types';

export function claimCoupon(couponId: string): ClaimCoupon {
  return {
    type: EWalletActions.CLAIM_COUPON,
    payload: {
      couponId
    }
  }
}
