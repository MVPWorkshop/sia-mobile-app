import { AllKeysRequired, DynamicObject } from '../types/util.types';

const images = {
  logo: require('../../../assets/logo.png')
}

export type ImageKeys = keyof typeof images;
export const Images = images as DynamicObject<number, keyof typeof images, AllKeysRequired>;
