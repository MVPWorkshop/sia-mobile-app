import React from 'react';
import { IVolunteerActionHeaderProps } from './volunteerActionHeader.types';
import styles from './volunteerActionHeader.styles';
import { Image, View } from 'react-native';
import Typography from '../Typography/typography';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { countriesByAlpha2 } from '../../../shared/constants/country.constants';

const VolunteerActionHeader: React.FC<IVolunteerActionHeaderProps> = (props) => {

  const {
    name,
    addressCity,
    addressCountry,
    image,
    organizer
  } = props;

  return (
    <View style={[styles.volunteerActionHeader, props.style]}>
      <Image source={image} style={[styles.previewImage]}/>
      <View style={{flex: 1}}>
        <Typography
          color={EAccents.PRIMARY}
          fontFamily={EPoppins.Medium}
        >
          {name}
        </Typography>
        { organizer && addressCity && addressCountry ?
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Typography fontSize={13} color={EColors.GRAY_DARKEST}>
              {organizer}
            </Typography>
            <Typography fontSize={13} color={EColors.GRAY_DARKEST}>
              {' • '}
            </Typography>
            <Typography  fontSize={13} color={EColors.GRAY_DARKEST}>
              {`${addressCity}, ${countriesByAlpha2[addressCountry].label}`}
            </Typography>
          </View> : null
        }
      </View>
    </View>
  )
};

export default VolunteerActionHeader;
