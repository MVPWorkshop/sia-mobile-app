import { ViewStyle } from 'react-native';

const baseSpacing = 4;

/**
 * @description For given spacing returns the actual size in pixels,
 * similar to boostrap
 * @param spacing
 * @param spacingSize
 */
export function getSpacingSize(spacing: number, spacingSize: number = baseSpacing) {
  return spacing * baseSpacing;
}

/**
 * @description Margin top style
 * @param spacing
 */
export const mt = (spacing: number): ViewStyle => ({
  marginTop: getSpacingSize(spacing)
});

/**
 * @description Margin bottom style
 * @param spacing
 */
export const mb = (spacing: number): ViewStyle => ({
  marginBottom: getSpacingSize(spacing)
});

/**
 * @description Margin left style
 * @param spacing
 */
export const ml = (spacing: number): ViewStyle => ({
  marginLeft: getSpacingSize(spacing)
});

/**
 * @description Margin right style
 * @param spacing
 */
export const mr = (spacing: number): ViewStyle => ({
  marginRight: getSpacingSize(spacing)
});
