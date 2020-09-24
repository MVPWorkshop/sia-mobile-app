import React, { Fragment } from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import VolunteerActionHeader from '../../atoms/VolunteerActionHeader/volunteerActionHeader';
import { EVolunteerActionStatus, IVolunteer, IVolunteerAction } from '../../../shared/types/aidProject.types';
import Typography from '../../atoms/Typography/typography';
import { colors, EColors } from '../../../shared/styles/variables.styles';
import { Image, View } from 'react-native';
import { mb, mr, mt } from '../../../shared/styles/util.styles';
import Divider from '../../atoms/Divider/divider';
import Chip from '../../atoms/Chip/chip';
import styles from './actionDetailsScreen.styles';
import { countriesByAlpha2 } from '../../../shared/constants/country.constants';
import ChipGroup from '../../molecules/ChipGroup/chipGroup';
import moment from 'moment';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import SocialShareButtons from '../../molecules/SocialShareButtons/socialShareButtons';
import VolunteerTaskPreview from '../../organisms/VolunteerTaskPreview/volunteerTaskPreview';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import ProtectedComponent from '../../atoms/ProtectedComponent/protectedComponent';
import { EUserRoles } from '../../../shared/types/user.types';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { updateVolunteerAction } from '../../../redux/volunteerAction/volunteerAction.redux.actions';
import { CheckBox } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';

const ActionDetailsScreen: React.FC<RouterScreenProps.IActionDetailsScreenProps> = (props) => {

  const {
    route,
    navigation
  } = props;

  const routeParams = route.params as any;
  const actionId = routeParams.volunteerActionId as string;
  const action = useSelector<RootState, IVolunteerAction>(state => state.volunteerAction.actions.filter(action => action.id === actionId)[0])

  const dispatch = useDispatch();
  const tasks = useSelector<RootState, RootState['volunteerTask']['tasks']>(
    state => state.volunteerTask.tasks
  )

  const getActionTaskData = () => {
    let volunteers: IVolunteer[] = [];
    let volunteerAdded = new Map<string, boolean>();
    let reward = 0;

    action.tasks.forEach(taskId => {
      const task = tasks[taskId];
      reward += task.reward;

      task.volunteers.forEach(volunteer => {
        if (!volunteerAdded.get(volunteer.id)) {
          volunteers.push(volunteer);
          volunteerAdded.set(volunteer.id, true)
        }
      })
    })

    return {
      actionVolunteers: volunteers,
      actionTotalReward: reward
    };
  }


  const { actionVolunteers, actionTotalReward } = getActionTaskData();

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

  const cancelAction = () => {
    dispatch(updateVolunteerAction(action.id, {
      status: EVolunteerActionStatus.CANCELLED
    }))
    navigation.goBack();
  }

  const openTaskCreationForm = () => {
    // @ts-ignore
    navigation.navigate(ERouterFlows.HomeActionsFlow, {
      screen: ERouterScreens.CreateTaskScreen,
      params: {
        actionId: action.id
      }
    })
  }

  const startDate = moment.unix(action.startDateTimestamp);
  const endDate = moment.unix(action.endDateTimestamp);

  const renderTaskResults = () => {
    return action.tasks.map(taskId => {
      const task = tasks[taskId];

      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}} key={taskId}>
          <CheckBox
            checked={task.isValidated}
            containerStyle={mr(4)}
          />
          <Typography style={{flex: 1}}>
            {`${task.name} - ${task.isValidated ? 'Validated' : 'Not validated yet'}`}
          </Typography>
        </View>
      )
    })
  }

  return (
    <ScreenLayout
      scroll={true}
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

      <ProtectedComponent allowedRoles={[EUserRoles.NGO]}>
        <View style={[mb(2), {alignSelf: 'stretch'}]}>
          <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
            RESULTS
          </Typography>
          {renderTaskResults()}
        </View>
        <Divider/>
      </ProtectedComponent>

      <ProtectedComponent allowedRoles={[EUserRoles.NGO]}>
        <View style={[mb(2), {alignSelf: 'stretch'}]}>
          <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
            VOLUNTEERS
          </Typography>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {
              actionVolunteers.map((volunteer, index) => {
                return (
                  <View
                    key={volunteer.id}
                    style={{
                      backgroundColor: getColor(EColors.BLUE_LIGHTER),
                      width: 116,
                      height: 113,
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      marginLeft: index === 0 ? 0 : 16
                    }}
                  >
                    <Image
                      style={{width: 43, height: 43, resizeMode: 'contain', borderRadius: 25}}
                      source={volunteer.image}
                    />
                    <Typography style={{textAlign: 'center'}}>
                      {volunteer.name}
                    </Typography>
                  </View>
                )
              })
            }
          </View>
        </View>
        <Divider/>
      </ProtectedComponent>

      <ProtectedComponent allowedRoles={[EUserRoles.NGO]}>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          TOTAL REWARD
        </Typography>
        <Typography fontSize={36} fontFamily={EPoppins.Medium} color={EColors.BLUE}>
          {actionTotalReward}
        </Typography>
      </ProtectedComponent>

      { action.status !== EVolunteerActionStatus.CANCELLED ?
        <Fragment>
          { action.tasks.length ?
            <Fragment>
              <View style={{alignSelf: 'stretch'}}>
                <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
                  TASKS
                </Typography>
              </View>
              {
                action.tasks.map((taskId, index) => (
                  <VolunteerTaskPreview
                    action={action}
                    key={taskId}
                    onClick={openTaskDetails(taskId, `Task ${index + 1}`)}
                    cardTitle={`Task ${index + 1}`}
                    task={tasks[taskId]}
                    style={mt(4)}
                  />
                ))
              }
              <Divider/>
            </Fragment>: null
          }

          <ProtectedComponent allowedRoles={[EUserRoles.NGO]}>
            <Button
              onClick={openTaskCreationForm}
              style={[mb(2), mt(4)]}
              extend={true}
              iconLeft={{
                name: 'pluscircle',
                type: 'antdesign',
              }}
            >
              <Typography fontFamily={EPoppins.SemiBold} fontSize={20} color={EColors.WHITE}>
                CREATE TASK
              </Typography>
            </Button>
            <Button
              onClick={cancelAction}
              type={EButtonType.FLAT}
              extend={true}
            >
              Cancel Action
            </Button>
          </ProtectedComponent>
        </Fragment> : null
      }
    </ScreenLayout>
  )
};

export default ActionDetailsScreen;
