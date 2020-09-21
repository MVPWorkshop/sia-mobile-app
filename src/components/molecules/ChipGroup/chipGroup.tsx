import React from 'react';
import { View } from 'react-native';
import Chip from '../../atoms/Chip/chip';
import { IChipProps } from '../../atoms/Chip/chip.types';
import { getSpacingSize } from '../../../shared/styles/util.styles';
import { IWithStyle } from '../../../shared/types/common.types';

const ChipGroup: React.FC<IWithStyle> = (props) => {

  const groupChips = () => {
    let numberOfChips =
      React.Children
        .toArray(props.children)
        .filter(child => React.isValidElement(child) && child.type === Chip)
        .length

    let chipsCounter = 0;

    return React.Children.map(props.children, (child) => {
      if (React.isValidElement(child) && child.type === Chip) {
        chipsCounter++;

        return React.cloneElement<IChipProps>(child, {
          ...child.props,
          style: {
            flex: 1,
            marginRight: chipsCounter !== numberOfChips ? getSpacingSize(2) : 0,
            ...child.props.style,
          }
        })
      }

      return null;
    })
  }

  return (
    <View style={[{flexDirection: 'row'}, props.style]}>
      {groupChips()}
    </View>
  )
}

export default ChipGroup;
