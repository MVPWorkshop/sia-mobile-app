import React from 'react';
import { View } from 'react-native';
import styles from './volunteerActionPreview.styles';
import { IVolunteerActionPreviewProps } from './volunteerActionPreview.types';
import VolunteerActionHeader from '../../atoms/VolunteerActionHeader/volunteerActionHeader';
import { mb, mr } from '../../../shared/styles/util.styles';
import Chip from '../../atoms/Chip/chip';
import { colors, EColors } from '../../../shared/styles/variables.styles';
import Typography from '../../atoms/Typography/typography';
import moment from 'moment';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import Circle from '../../atoms/Circle/circle';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';

const VolunteerActionPreview: React.FC<IVolunteerActionPreviewProps> = (props) => {

  const {
    name,
    image,
    organizer,
    addressCity,
    addressCountry,
    description,
    isRecurring,
    startDateTimestamp,
    endDateTimestamp,
    tasks
  } = props.action;

  const openDetails = () => {
    console.log('Details opened for ' + name)
  }

  return (
    <View style={[styles.volunteerActionPreview, props.style]}>
      <Button onClick={openDetails} type={EButtonType.FLAT} style={{padding: 0, flex: 1}}>
        <View style={{flex: 1, padding: 16}}>
          <VolunteerActionHeader
            name={name}
            image={image}
            addressCity={addressCity}
            addressCountry={addressCountry}
            organizer={organizer}
            style={mb(6)}
          />
          <View style={styles.chipContainer}>
            <Chip
              chipIconProps={{
                name: 'refresh-ccw',
                type: 'feather'
              }}
              body={{
                text: isRecurring ? 'Recurring action' : 'Non recurring action'
              }}
              style={[{flex: 1}, mr(2)]}
            />
            <Chip
              backgroundColor={EColors.PINK_LIGHTER}
              style={{flex: 1}}
              chipIconProps={{
                name: 'calendar',
                type: 'feather',
                color: colors.PINK
              }}
              body={{
                text: [
                  moment.unix(startDateTimestamp).format('Do MMM'),
                  moment.unix(endDateTimestamp).format('Do MMM')
                ].join('\n')
              }}
            />
          </View>
          <Typography
            color={EColors.GRAY_DARKEST}
            fontSize={15}
            fontFamily={EPoppins.Light}
            textProps={{
              numberOfLines: 2,
              ellipsizeMode: 'tail'
            }}
            style={{flex: 1}}
          >
            {description}
          </Typography>
        </View>
      </Button>
      <View style={styles.taskCountContainer}>
        <Circle style={mr(3)}/>
        <Typography>
          {tasks.length} Active Tasks
        </Typography>
      </View>
    </View>
  )
}

export default VolunteerActionPreview;
