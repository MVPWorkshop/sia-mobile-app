import React from 'react';
import { mb } from '../../../shared/styles/util.styles';
import Typography from '../Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { View } from 'react-native';
import { IDataSectionTitleProps } from './dataSectionTitle.types';

const DataSectionTitle: React.FC<IDataSectionTitleProps> = (props) => {
  return (
    <View style={mb(4)}>
      <Typography fontFamily={EPoppins.SemiBold} fontSize={24}>
        {props.title}
      </Typography>
    </View>
  )
};

export default DataSectionTitle;
