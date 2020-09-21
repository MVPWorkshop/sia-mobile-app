import React, { Fragment } from 'react';
import { mb } from '../../../shared/styles/util.styles';
import Typography from '../Typography/typography';
import { View } from 'react-native';
import { EColors } from '../../../shared/styles/variables.styles';
import { IDataInfoBoxProps } from './dataInfoBox.types';

const DataInfoBox: React.FC<IDataInfoBoxProps> = (props) => {
  return (
    <Fragment>
      <View style={mb(0.5)}>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          {props.header}
        </Typography>
      </View>
      { typeof props.body === 'string' ?
        <Typography fontSize={18}>
          {props.body}
        </Typography> : props.body
      }
    </Fragment>
  )
}

export default DataInfoBox;
