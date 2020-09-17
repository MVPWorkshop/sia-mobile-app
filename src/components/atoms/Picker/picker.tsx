import React from 'react';
import { Picker as RNPicker } from '@react-native-community/picker';
import { IPickerProps } from './picker.types';
import styles from './picker.styles';
import { View } from 'react-native';

const Picker: React.FC<IPickerProps> = (props) => {

  const {
    name,
    value,
    options,
  } = props;

  const onChange = (newValue: string | number) => {
    props.onChange({
      name,
      value: newValue.toString()
    })
  }

  return (
    <View style={[styles.picker, props.style]}>
      <RNPicker
        selectedValue={value.toString()}
        onValueChange={onChange}
      >
        {options.map(option => (
          <RNPicker.Item
            key={option.value}
            value={option.value}
            label={option.label || option.value}
          />
        ))}
      </RNPicker>
    </View>
  )
}

export default Picker;
