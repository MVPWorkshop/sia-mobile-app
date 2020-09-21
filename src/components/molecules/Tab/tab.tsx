import React from 'react';
import styles from './tab.styles';
import { ITabProps } from './tab.types';
import { View } from 'react-native';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';

const Tab: React.FC<ITabProps> = (props) => {

  const {
    name,
    label,
    style,
    selectedName
  } = props;

  const onClick = () => {
    if (props.onClick) {
      props.onClick(name);
    }
  }

  const isSelected = selectedName === name;

  return (
    <View style={[styles.tab, style]}>
      <Button
        onClick={onClick}
        type={isSelected ?
          EButtonType.REGULAR : EButtonType.FLAT
        }
        labelColor={isSelected ?
          getColor(EColors.WHITE) : getColor(EColors.BLACK)
        }
        style={styles.btn}
      >
        {label}
      </Button>
    </View>
  )
}

export default Tab;
