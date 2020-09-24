import { AllKeysRequired, DynamicObject } from '../types/util.types';
import { accentColor, colors, EAccents, EColors } from '../styles/variables.styles';

export function keys<O extends object>(obj: O): (keyof O)[] {
  return Object.keys(obj) as (keyof O)[];
}

export function arrayToObjectsByKey<T extends Array<any>, R extends (T extends Array<infer ArrType> ? ArrType : never), K extends keyof R, V extends R[K]>
(arrayOfObjects: T, key: K): {[key: string]: R} {
  return arrayOfObjects.reduce((obj, item) => {
    return { ...obj, [item[key]]: item};
  }, {});
}

export function sanitizeEmptyFields(data?: DynamicObject<any, string, AllKeysRequired>) {
  const newData: typeof data = {};

  if (!data) {
    return newData;
  }

  Object.keys(data).map(key => {
    if (data[key] === 0 || data[key]) {
      newData[key] = data[key];
    }
  });

  return newData;
}

export function getColor(color: EColors | EAccents | string) {
  if (accentColor[color as EAccents]) {
    return accentColor[color as EAccents];
  } else if (colors[color as EColors]) {
    return colors[color as EColors];
  } else {
    return color;
  }
}

export function padNumber(num: number): string {

  const number = Math.abs(num);

  if (number < 10) {
    return `0${number}`
  } else {
    return number.toString();
  }
}
