import React, { Fragment } from 'react';
import { IRadioGroupProps } from './radioGroup.types';
import Typography from '../../atoms/Typography/typography';
import { colors, EColors } from '../../../shared/styles/variables.styles';
import { ml } from '../../../shared/styles/util.styles';
import { CheckBox } from 'react-native-elements';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';

const RadioGroup: React.FC<IRadioGroupProps> = (props) => {

  const {
    value,
    options,
    name
  } = props;

  const onChange = (inputValue: string) => () => {
    props.onChange({
      name,
      value: inputValue
    })
  }

  return (
    <Fragment>
      {options.map(option => {
        const isChecked = option.value === value;

        return (
          <CheckBox
            key={option.value}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              margin: 0,
              padding: 8,
              paddingLeft: 0
            }}
            title={
              <Typography
                color={isChecked ? EColors.BLACK : EColors.GRAY_DARKEST}
                fontFamily={EPoppins.Medium}
                style={ml(2)}
                fontSize={20}
              >
                {option.label || option.value}
              </Typography>
            }
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={colors.BLUE}
            uncheckedColor={colors.BLUE}
            checked={isChecked}
            onPress={onChange(option.value)}
          />
        )
      })}
    </Fragment>
  )
}

export default RadioGroup;
