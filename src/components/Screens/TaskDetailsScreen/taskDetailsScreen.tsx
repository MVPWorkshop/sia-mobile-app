import React, { Fragment } from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import styles from './taskDetailsScreen.styles';
import { ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import { EVolunteerTaskStatus, IVolunteerAction, IVolunteerTask } from '../../../shared/types/aidProject.types';
import moment from 'moment';
import Typography from '../../atoms/Typography/typography';
import { colors, EColors } from '../../../shared/styles/variables.styles';
import { Image, View } from 'react-native';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { Icon } from 'react-native-elements';
import { getColor, padNumber } from '../../../shared/utils/common.util';
import { mb } from '../../../shared/styles/util.styles';
import Divider from '../../atoms/Divider/divider';
import ChipGroup from '../../molecules/ChipGroup/chipGroup';
import Chip from '../../atoms/Chip/chip';
import { countriesByAlpha2 } from '../../../shared/constants/country.constants';
import { Images } from '../../../shared/constants/images.constants';
import Button from '../../atoms/Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { updateVolunteerTask } from '../../../redux/volunteerTask/volunteerTask.redux.actions';
import { EButtonType } from '../../atoms/Button/button.types';
import { RootState } from '../../../redux/redux.types';
import ProtectedComponent from '../../atoms/ProtectedComponent/protectedComponent';
import { EUserRoles } from '../../../shared/types/user.types';

const TaskDetailsScreen: React.FC<RouterScreenProps.ITaskDetailsScreenProps> = (props) => {

  const dispatch = useDispatch();

  const {
    route,
    navigation
  } = props;

  const routeParams = route.params as any;
  const taskId = routeParams.volunteerTaskId as string;
  const action = routeParams.volunteerAction as IVolunteerAction;
  const taskName = routeParams.taskName as string;
  const task = useSelector<RootState, IVolunteerTask>(
    state => state.volunteerTask.tasks[taskId]
  )

  if (!task) {
    navigation.goBack();
    return null;
  }

  const startDate = moment.unix(task.startDateTimestamp);
  const endDate = moment.unix(task.endDateTimestamp);

  let dateChipText: string[] = [];
  if (startDate.month() === endDate.month()) {
    dateChipText.push(`${startDate.date()} - ${endDate.date()}`);
    dateChipText.push(startDate.format('MMMM'))
  } else {
    dateChipText.push(`${startDate.day()}, ${startDate.format('MMMM')} -`);
    dateChipText.push(`${endDate.day()}, ${endDate.format('MMMM')}`);
  }

  const isAppliedToTask =
    task.status === EVolunteerTaskStatus.APPLIED
  const isNeutral =
    task.status === EVolunteerTaskStatus.NEUTRAL

  const finishTask = () => {
    // @ts-ignore
    props.navigation.navigate(ERouterScreens.FinishTaskScreen, {
      volunteerTask: task,
      taskName
    })
  }

  const cancelParticipation = () => {
    dispatch(updateVolunteerTask(task.id, {
      status: EVolunteerTaskStatus.NEUTRAL
    }))
    navigation.goBack()
  }

  const applyTask = () => {
    dispatch(updateVolunteerTask(task.id, {
      status: EVolunteerTaskStatus.APPLIED
    }))
    navigation.goBack()
  }

  const validateTask = () => {
    dispatch(updateVolunteerTask(task.id, {
      isValidated: true
    }))
    navigation.goBack()
  }

  const cancelTask = () => {
    dispatch(updateVolunteerTask(task.id, {
      status: EVolunteerTaskStatus.CANCELLED
    }))
    navigation.goBack();
  }

  return (
    <ScreenLayout
      safeArea={false}
      scroll={true}
      style={styles.taskDetailsScreen}
    >
      <View style={[{alignItems: 'center', flexDirection: 'row'}, mb(6)]}>
        <View style={{flexGrow: 1, flexShrink: 1}}>
          <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
            {taskName}
          </Typography>
          <Typography color={EColors.BLUE} fontSize={20} fontFamily={EPoppins.SemiBold}>
            {task.name}
          </Typography>
        </View>
        <View style={{
          marginLeft: 8,
          width: 50,
          height: 50,
          padding: 6,
          borderRadius: 5,
          borderColor: getColor(EColors.BLUE),
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon
            name={'share-google'}
            type={'evilicon'}
            color={getColor(EColors.BLUE)}
            size={28}
          />
        </View>
      </View>
      <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
        DESCRIPTION
      </Typography>
      <Typography fontSize={15}>
        {task.description}
      </Typography>
      <Divider/>
      <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
        REQUIREMENTS
      </Typography>
      <Typography fontSize={15}>
        {task.requirements}
      </Typography>
      <Divider/>
      <ChipGroup>
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
      <Divider/>
      <ChipGroup>
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
              `${Math.round(task.durationMinutes / 60)} Hours`
            ].join('\n')
          }}
        />
        <Chip
          backgroundColor={EColors.GREEN_LIGHTER}
          chipIconProps={{
            name: 'calendar',
            type: 'feather',
            color: colors.GREEN
          }}
          body={{ text: dateChipText.join('\n') }}
        />
      </ChipGroup>
      <Divider/>
      <ChipGroup>
        <Chip
          backgroundColor={EColors.TRANSPARENT}
          chipIconProps={{
            name: 'location-pin',
            type: 'simple-line-icon'
          }}
          header={{text: 'ADDRESS'}}
          body={{text: task.addressNumber}}
        />
        <Chip
          backgroundColor={EColors.TRANSPARENT}
          chipIconProps={{
            name: 'clock',
            type: 'feather'
          }}
          header={{text: 'TIME'}}
          body={{text: `${padNumber(task.timeHours)}:${padNumber(task.timeMinutes)}`}}
        />
      </ChipGroup>
      <ProtectedComponent allowedRoles={[EUserRoles.VOLUNTEER]}>
        {isAppliedToTask ?
          <Fragment>
            <Divider/>
            <Typography
              style={{
                alignSelf: 'center',
                maxWidth: 280,
                textAlign: 'center',
                marginBottom: 32
              }}
              fontSize={15}
            >
              Beneficiary can scan a unique QR code to confirm that certain volunteer finished the task.
            </Typography>
            <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
              <Image
                source={Images.qrCode}
                height={132}
                width={132}
                resizeMode={'contain'}
                style={{marginBottom: 40}}
              />
              <Button
                onClick={finishTask}
                style={mb(2)} extend={true}
              >
                <Typography fontFamily={EPoppins.SemiBold} fontSize={20} color={'white'}>
                  FINISH THE TASK
                </Typography>
              </Button>
              <Button
                onClick={cancelParticipation}
                type={EButtonType.FLAT}
                extend={true}
              >
                Cancel Participation
              </Button>
            </View>
          </Fragment> : null
        }
        { isNeutral ?
          <Fragment>
            <Divider/>
            <Button onClick={applyTask} style={mb(2)} extend={true}>
              <Typography fontFamily={EPoppins.SemiBold} fontSize={20} color={'white'}>
                APPLY
              </Typography>
            </Button>
          </Fragment> : null
        }
      </ProtectedComponent>


      { task.status !== EVolunteerTaskStatus.CANCELLED ?
        <ProtectedComponent allowedRoles={[EUserRoles.NGO]}>
          {
            !task.isValidated ?
              <Button
                onClick={validateTask}
                style={mb(2)} extend={true}
              >
                <Typography fontFamily={EPoppins.SemiBold} fontSize={20} color={'white'}>
                  VALIDATE THE TASK
                </Typography>
              </Button> : null
          }
          <Button
            onClick={cancelTask}
            type={EButtonType.FLAT}
            extend={true}
          >
            Cancel Task
          </Button>
        </ProtectedComponent> : null
      }
    </ScreenLayout>
  )
}

export default TaskDetailsScreen;
