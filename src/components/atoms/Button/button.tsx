import React, { Fragment } from 'react';
import { EButtonType, IButtonProps } from './button.types';
import styles, { btnIconSize } from './button.styles';
import {
  Platform,
  StyleProp,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle
} from 'react-native';
import Typography from '../Typography/typography';
import { ITypographyProps } from '../Typography/typography.types';
import { EColors } from '../../../shared/styles/variables.styles';
import { Icon, IconProps } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';

const ButtonComponent: React.FC<TouchableNativeFeedbackProps | TouchableOpacityProps> = (props) => {
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback {...props}/>;
  } else {
    return <TouchableOpacity {...props}/>;
  }
}

const Button: React.FC<IButtonProps> = (props) => {

  const {
    disabled,
    loading,
    onClick,
    type = EButtonType.REGULAR,
    children,
    style,
    labelColor,
    iconLeft,
    iconRight,
    labelStyle,
    removePadding,
    extend
  } = props;

  const isDisabled = disabled || loading;
  const isThereIcon = !!iconLeft || !!iconRight;

  const handlePress = () => {
    if (!isDisabled) {
      onClick();
    }
  }

  const getButtonStyle = () => {
    let buttonStyle: StyleProp<ViewStyle> = [styles.button];

    if (type === EButtonType.REGULAR) {
      buttonStyle.push(styles.buttonRegular);
    } else if (type === EButtonType.FLAT) {
      buttonStyle.push(styles.buttonFlat);
    } else if (type === EButtonType.OUTLINED) {
      buttonStyle.push(styles.buttonOutlined)
    }

    if (removePadding) {
      buttonStyle.push({
        padding: 0
      })
    }

    if (extend) {
      buttonStyle.push({
        width: '100%'
      })
    }

    if (isDisabled) {
      buttonStyle.push(styles.disabled);
    }

    buttonStyle.push(style);

    return buttonStyle;
  }

  const getLabelColor = (): NonNullable<ITypographyProps['color']> => {
    if (labelColor) {
      return labelColor;
    }

    if (type === EButtonType.FLAT) {
      return EColors.GRAY_DARKEST;
    }

    return EColors.WHITE;
  }

  const renderIcon = (iconName?: IconProps['name'], iconType?: IconProps['type'], otherProps?: Omit<IconProps, 'name' | 'type'>) => {
    return (
      <View style={isThereIcon && styles.iconContainer}>
        {iconName && iconType ?
          <Icon
            name={iconName}
            type={iconType}
            color={getColor(getLabelColor())}
            size={btnIconSize}
            {...(otherProps || {})}
          /> : null}
      </View>
    )
  }

  const renderContent = () => {
    return (
      <View style={getButtonStyle()}>
        {renderIcon(iconLeft?.name, iconLeft?.type, iconLeft?.otherIconProps)}
        {
          typeof children === 'string' ?
            <Typography
              color={getLabelColor()}
              style={labelStyle}
            >
              {children}
            </Typography>
            :
            <Fragment>
              {children}
            </Fragment>
        }
        {renderIcon(iconRight?.name, iconRight?.type, iconRight?.otherIconProps)}
      </View>
    )
  }

  return (
    <ButtonComponent
      onPress={handlePress}
      disabled={isDisabled}
    >
      {renderContent()}
    </ButtonComponent>
  )
}

export default Button;
