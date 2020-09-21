import React from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import VolunteerActionHeader from '../../atoms/VolunteerActionHeader/volunteerActionHeader';
import { IVolunteerAction } from '../../../shared/types/aidProject.types';
import Typography from '../../atoms/Typography/typography';
import { colors, EColors } from '../../../shared/styles/variables.styles';
import { View } from 'react-native';
import { mb, mt } from '../../../shared/styles/util.styles';
import Divider from '../../atoms/Divider/divider';
import Chip from '../../atoms/Chip/chip';
import styles from './actionDetailsScreen.styles';
import { countriesByAlpha2 } from '../../../shared/constants/country.constants';
import ChipGroup from '../../molecules/ChipGroup/chipGroup';
import moment from 'moment';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import SocialShareButtons from '../../molecules/SocialShareButtons/socialShareButtons';
import VolunteerTaskPreview from '../../organisms/VolunteerTaskPreview/volunteerTaskPreview';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';

const ActionDetailsScreen: React.FC<RouterScreenProps.IActionDetailsScreenProps> = (props) => {

  const tasks = useSelector<RootState, RootState['volunteerTask']['tasks']>(
    state => state.volunteerTask.tasks
  )

  const {
    route,
    navigation
  } = props;

  const routeParams = route.params as any;
  const action = routeParams.volunteerAction as IVolunteerAction;

  if (!action) {
    navigation.goBack();
    return null;
  }

  const openTaskDetails = (volunteerTaskId: string, taskName: string) => () => {
    // @ts-ignore
    props.navigation.navigate(ERouterFlows.HomeActionsFlow, {
      screen: ERouterScreens.TaskDetailsScreen,
      params: {
        volunteerTaskId,
        volunteerAction: action,
        taskName
      }
    })
  }

  const startDate = moment.unix(action.startDateTimestamp);
  const endDate = moment.unix(action.endDateTimestamp);

  return (
    <ScreenLayout
      keyboardAvoiding={true}
      safeArea={false}
      style={styles.actionDetailsScreen}
    >
      <VolunteerActionHeader
        name={action.name}
        image={action.image}
        style={mb(6)}
      />
      <View style={[mb(2), {alignSelf: 'stretch'}]}>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          DESCRIPTION
        </Typography>
      </View>
      <Typography fontSize={15}>
        {action.description}
      </Typography>
      <Divider/>
      <ChipGroup style={mb(4)}>
        <Chip
          chipIconProps={{
            name: 'map',
            type: 'feather'
          }}
          header={{text: 'LOCATION'}}
          body={{text: `${action.addressCity}, ${countriesByAlpha2[action.addressCountry].label}`}}
        />
        <Chip
          chipIconProps={{
            name: 'user',
            type: 'feather'
          }}
          header={{text: 'ORGANIZER'}}
          body={{text: action.organizer}}
        />
      </ChipGroup>
      <View style={[mb(2), {alignSelf: 'stretch'}]}>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          CONTACT
        </Typography>
      </View>
      <ChipGroup>
        <Chip
          backgroundColor={EColors.PINK_LIGHTER}
          chipIconProps={{
            name: 'mail',
            type: 'ionicons',
            color: colors.PINK
          }}
          body={{text: action.contactEmail}}
        />
        <Chip
          backgroundColor={EColors.PINK_LIGHTER}
          chipIconProps={{
            name: 'telephone',
            type: 'foundation',
            color: colors.PINK
          }}
          body={{text: action.contactPhone}}
        />
      </ChipGroup>
      <Divider/>
      <ChipGroup style={mb(5)}>
        <Chip
          backgroundColor={EColors.GREEN_LIGHTER}
          chipIconProps={{
            name: 'timer-sand',
            type: 'material-community',
            color: colors.GREEN
          }}
          body={{
            text: [
              'Duration',
              `${startDate.diff(endDate, 'days')} Days`
            ].join('\n')
          }}
        />
        <Chip
          backgroundColor={EColors.GREEN_LIGHTER}
          chipIconProps={{
            name: 'refresh-ccw',
            type: 'feather',
            color: colors.GREEN
          }}
          body={{text: action.isRecurring ? 'Recurring' : 'Non recurring'}}
        />
      </ChipGroup>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, marginRight: 4}}>
          <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
            START DATE
          </Typography>
          <Typography color={EColors.BLUE}>
            {startDate.format('DD / MMM / YYYY')}
          </Typography>
        </View>
        <View style={{flex: 1}}>
          <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
            END DATE
          </Typography>
          <Typography color={EColors.RED}>
            {endDate.format('DD / MMM / YYYY')}
          </Typography>
        </View>
      </View>
      <Divider/>
      <Typography fontFamily={EPoppins.Medium}>
        SHARE THIS ACTION
      </Typography>
      <SocialShareButtons/>
      <Divider />
      <View style={{alignSelf: 'stretch'}}>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          TASKS
        </Typography>
      </View>
      {
        action.tasks.map((taskId, index) => (
          <VolunteerTaskPreview
            key={taskId}
            onClick={openTaskDetails(taskId, `Task ${index + 1}`)}
            cardTitle={`Task ${index + 1}`}
            task={tasks[taskId]}
            style={mt(4)}
          />
        ))
      }
    </ScreenLayout>
  )
};

export default ActionDetailsScreen;
