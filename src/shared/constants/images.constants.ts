import { AllKeysRequired, DynamicObject } from '../types/util.types';

const images = {
  logo: require('../../../assets/logo.png'),
  registerInitialsImg: require('../../../assets/register_initials_img.png'),
  registerMailImg: require('../../../assets/register_mail_img.png'),
  registerPasswordImg: require('../../../assets/register_password_img.png'),
  registerVolunteeringInfoImg: require('../../../assets/register_volunteering_info_img.png'),
  registerSuccessImg: require('../../../assets/register_success_img.png'),

  verifyAccountLocationImg: require('../../../assets/verify_account_location_img.png'),
  verifyAccountPersonalInfoImg: require('../../../assets/verify_account_personal_info_img.png'),
  verifyAccountIdImg: require('../../../assets/verify_account_id_img.png'),
}

export type ImageKeys = keyof typeof images;
export const Images = images as DynamicObject<number, keyof typeof images, AllKeysRequired>;
