import React from 'react';
import { IChipProps } from './chip.types';
import { View } from 'react-native';
import styles from './chip.styles';
import { Icon } from 'react-native-elements';
import { colors, EColors } from '../../../shared/styles/variables.styles';
import Typography from '../Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';

const Chip: React.FC<IChipProps> = (props) => {

  const {
    body,
    backgroundColor = EColors.BLUE_LIGHTER,
    header,
    chipIconProps
  } = props;

  const color = colors[backgroundColor]

  return (
    <View style={[
      styles.chip,
      props.style,
      {backgroundColor: color }
    ]}>
      <View style={[styles.iconContainer, props.iconContainerStyle]}>
        <Icon
          color={colors.BLUE}
          size={18}
          {...chipIconProps}
        />
      </View>
      <View style={[styles.dataContainer, props.dataContainerStyle]}>
        { !!header ?
          <Typography
            fontSize={12}
            color={EColors.GRAY_DARKEST}
            {...header.options}
          >
            {header.text}
          </Typography> : null
        }
        { !!body ?
          <Typography
            fontSize={13}
            fontFamily={EPoppins.Medium}
            {...body.options}
          >
            {body.text}
          </Typography> : null
        }
      </View>
    </View>
  )
};

export default Chip;
