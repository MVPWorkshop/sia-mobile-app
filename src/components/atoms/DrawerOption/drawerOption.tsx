import { getColor } from '../../../shared/utils/common.util';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';
import Button from '../Button/button';
import React from 'react';
import { IDrawerOptionProps } from './drawerOption.types';
import { EButtonType } from '../Button/button.types';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import Typography from '../Typography/typography';
import { ml } from '../../../shared/styles/util.styles';

const DrawerOption: React.FC<IDrawerOptionProps> = (props) => {

  const {
    label,
    iconType,
    iconName,
    labelColor,
    iconColor,
    onClick
  } = props;

  return (
    <Button
      onClick={onClick}
      iconLeft={{
        name: iconName,
        type: iconType,
        otherIconProps: {
          color: iconColor ? getColor(iconColor) : getColor(EAccents.PRIMARY),
          size: 22
        }
      }}
      labelColor={EColors.BLACK}
      type={EButtonType.FLAT}
      style={{
        justifyContent: 'flex-start',
        paddingLeft: 4
      }}
    >
      <Typography
        fontFamily={EPoppins.Medium}
        style={ml(5)}
        color={labelColor ? getColor(labelColor) : EColors.BLACK}
      >
        {label}
      </Typography>
    </Button>
  )
}

export default DrawerOption;
