import React from 'react';
import { IVolunteerTaskPreviewProps } from './volunteerTaskPreview.types';
import { View } from 'react-native';
import stylesFactory from './volunteerTaskPreview.styles';
import { EVolunteerTaskStatus } from '../../../shared/types/aidProject.types';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import ChipGroup from '../../molecules/ChipGroup/chipGroup';
import Chip from '../../atoms/Chip/chip';
import { mb, mt } from '../../../shared/styles/util.styles';
import moment from 'moment';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { useDispatch } from 'react-redux';
import { updateVolunteerTask } from '../../../redux/volunteerTask/volunteerTask.redux.actions';

type MetadataReturnType = {
  colors: {
    normal: string;
    light: string;
  };
  labels: {
    btn: string;
  }
}
function getMetadataByTaskStatus(status: EVolunteerTaskStatus): MetadataReturnType {
  let normalColor: string;
  let lightColor: string;
  let btnLabel: string;

  switch (status) {
    case EVolunteerTaskStatus.APPLIED: {
      btnLabel = 'APPLIED'
      normalColor = getColor(EColors.GREEN);
      lightColor = getColor(EColors.GREEN_LIGHTER);
      break;
    }
    case EVolunteerTaskStatus.FINISHED: {
      btnLabel = 'FINISHED'
      normalColor = getColor(EColors.GREEN);
      lightColor = getColor(EColors.GREEN_LIGHTER);
      break;
    }
    case EVolunteerTaskStatus.UNFINISHED: {
      btnLabel = 'UNFINISHED'
      normalColor = getColor(EColors.RED);
      lightColor = getColor(EColors.GRAY_LIGHTER);
      break;
    }
    case EVolunteerTaskStatus.CANCELLED: {
      btnLabel = 'CANCELLED'
      normalColor = getColor(EColors.GRAY_DARKER);
      lightColor = getColor(EColors.GRAY_LIGHTER);
      break;
    }
    case EVolunteerTaskStatus.NEUTRAL: {
      btnLabel = 'APPLY'
      normalColor = getColor(EColors.BLUE);
      lightColor = getColor(EColors.BLUE_LIGHTER);
      break;
    }
  }

  return {
    colors: {
      normal: normalColor,
      light: lightColor
    },
    labels: {
      btn: btnLabel
    }
  };
}

const VolunteerTaskPreview: React.FC<IVolunteerTaskPreviewProps> = (props) => {

  const {
    task,
    cardTitle
  } = props;

  const dispatch = useDispatch();

  const metadata = getMetadataByTaskStatus(task.status);
  const colorTheme = metadata.colors;
  const styles = stylesFactory(colorTheme.normal);

  const startDate = moment.unix(task.startDateTimestamp);
  const endDate = moment.unix(task.endDateTimestamp);
  const durationHours = Math.round(task.durationMinutes / 60);

  const isTaskPositive = task.status === EVolunteerTaskStatus.FINISHED || task.status === EVolunteerTaskStatus.APPLIED;
  const isTaskNeutral = task.status === EVolunteerTaskStatus.NEUTRAL;

  let dateChipText: string[] = [];
  if (startDate.month() === endDate.month()) {
    dateChipText.push(`${startDate.date()} - ${endDate.date()}`);
    dateChipText.push(startDate.format('MMMM'))
  } else {
    dateChipText.push(`${startDate.day()}, ${startDate.format('MMMM')} -`);
    dateChipText.push(`${endDate.day()}, ${endDate.format('MMMM')}`);
  }

  const applyToTask = (taskId: string) => () => {
    if (task.status !== EVolunteerTaskStatus.NEUTRAL) {
      return;
    }

    dispatch(updateVolunteerTask(taskId, {
      status: EVolunteerTaskStatus.APPLIED
    }))
  }

  return (
    <View style={[styles.volunteerTaskPreview, props.style]}>
      <Button type={EButtonType.FLAT} removePadding={true} onClick={() => {}}>
        <View style={styles.contentContainer}>
          <Typography fontSize={14} color={EColors.GRAY_DARKER}>
            {cardTitle}
          </Typography>
          <Typography fontSize={20} fontFamily={EPoppins.Medium}>
            {task.name}
          </Typography>
          <ChipGroup style={[mb(4), mt(2)]}>
            <Chip
              chipIconProps={{
                name: 'calendar',
                type: 'feather',
                color: colorTheme.normal
              }}
              body={{text: dateChipText.join('\n')}}
              backgroundColor={colorTheme.light}
            />
            <Chip
              chipIconProps={{
                name: 'clock',
                type: 'feather',
                color: colorTheme.normal
              }}
              body={{text: `${durationHours} hrs \nduration`}}
              backgroundColor={colorTheme.light}
            />
          </ChipGroup>
          <Typography style={[{flex: 1}]} fontSize={15}>
            {task.description}
          </Typography>
          <Button
            onClick={applyToTask(task.id)}
            iconRight={isTaskPositive ? {
              name: 'check',
              type: 'feather',
            } : undefined
            }
            type={isTaskNeutral ? EButtonType.REGULAR : EButtonType.FLAT}
            labelColor={!isTaskNeutral ? colorTheme.normal : undefined}
            disabled={!isTaskNeutral}
            removePadding={!isTaskNeutral}
            style={!isTaskNeutral ? mt(4) : mt(2)}
            labelStyle={{
              fontFamily: EPoppins.SemiBold
            }}
          >
            {metadata.labels.btn}
          </Button>
        </View>
      </Button>
    </View>
  )
};

export default VolunteerTaskPreview;
