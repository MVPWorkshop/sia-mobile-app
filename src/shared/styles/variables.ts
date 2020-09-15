import { AllKeysRequired, DynamicObject } from '../types/util.types';

export enum EColors {
  BLUE = 'BLUE',
  BLUE_LIGHTER = 'BLUE_LIGHTER',
  GREEN = 'GREEN',
  GREEN_LIGHTER = 'GREEN_LIGHTER',
  PINK = 'PINK',
  PINK_LIGHTER = 'PINK_LIGHTER',
  BLACK = 'BLACK',
  GRAY = 'GRAY',
  GRAY_LIGHTER = 'GRAY_LIGHTER',
  GRAY_DARKER = 'GRAY_DARKER',
  WHITE = 'WHITE',
  RED = 'RED',
}

export const colors: DynamicObject<string, EColors, AllKeysRequired> = {
  BLACK: '#000000',
  BLUE: '#22B6FF',
  BLUE_LIGHTER: '#F1FCFF',
  GRAY: '#DCDCDC',
  GRAY_DARKER: '#CBCBCB',
  GRAY_LIGHTER: '#F6F6F6',
  GREEN: '#00AE91',
  GREEN_LIGHTER: '#F4FFF1',
  PINK: '#F98AEB',
  PINK_LIGHTER: '#FDEDFB',
  RED: '#ED4848',
  WHITE: '#FFFFFF'
}

export enum EAccents {
  PRIMARY = 'PRIMARY',
  SUCCESS = 'SUCCESS',
  DANGER = 'DANGER',
  NEUTRAL = 'NEUTRAL',
}

export const accentColor: DynamicObject<string, EAccents, AllKeysRequired> = {
  DANGER: colors.RED,
  NEUTRAL: colors.GRAY_DARKER,
  PRIMARY: colors.BLUE,
  SUCCESS: colors.GREEN
}
