import React from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { ICreateTaskScreenParams, RouterScreenProps } from '../../../shared/types/router.types';
import { useDispatch } from 'react-redux';
import useForm from '../../../shared/hooks/useForm.hook';
import createTaskForm from '../../../shared/forms/createTask.form';
import { EAccents } from '../../../shared/styles/variables.styles';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { mb, mr } from '../../../shared/styles/util.styles';
import Typography from '../../atoms/Typography/typography';
import TextInput from '../../atoms/TextInput/textInput';
import DataInfoBox from '../../atoms/DataInfoBox/dataInfoBox';
import Divider from '../../atoms/Divider/divider';
import { View } from 'react-native';
import styles from './createTaskScreen.styles';
import Picker from '../../atoms/Picker/picker';
import { hourPickerOptions, minutePickerOptions } from '../../../shared/constants/common.constants';
import Button from '../../atoms/Button/button';
import { EVolunteerTaskStatus, IVolunteerTask } from '../../../shared/types/aidProject.types';
import uuid from 'v4-uuid';
import moment from 'moment';
import { createNewTask } from '../../../redux/volunteerTask/volunteerTask.redux.actions';

const CreateTaskScreen: React.FC<RouterScreenProps.ICreateTaskScreenProps> = (props) => {

  const dispatch = useDispatch();
  const { formState, resetForm, isFormValid, updateInput } = useForm(createTaskForm);

  const createTask = () => {
    const task: IVolunteerTask = {
      id: uuid(),
      actionId: (props.route.params as unknown as ICreateTaskScreenParams).actionId,
      reward: formState.rewardAmount.value,
      isValidated: false,
      volunteers: [],
      status: EVolunteerTaskStatus.NEUTRAL,
      durationMinutes: (Number(formState.durationHours.value) * 60) + Number(formState.durationMinutes.value),
      timeHours: formState.durationHours.value,
      timeMinutes: formState.durationMinutes.value,
      updates: [],
      requirements: formState.requirements.value,
      name: formState.name.value,
      description: formState.description.value,
      addressNumber: formState.addressNumber.value,
      startDateTimestamp: moment(
        `${formState.startDateDay.value}/${formState.startDateMonth.value}/${formState.startDateYear.value}`,
        'DD/MM/YYYY'
      ).unix(),
      endDateTimestamp: moment(
        `${formState.endDateDay.value}/${formState.endDateMonth.value}/${formState.endDateYear.value}`,
        'DD/MM/YYYY'
      ).unix()
    }

    dispatch(createNewTask(task));
    resetForm();
    props.navigation.goBack();
  }

  return (
    <ScreenLayout
      scroll={true}
      safeArea={false}
      style={styles.createTaskScreen}
    >
      <Typography
        fontSize={20}
        color={EAccents.PRIMARY}
        fontFamily={EPoppins.SemiBold}
        style={mb(4)}
      >
        Create new task
      </Typography>

      <DataInfoBox
        header={'NAME OF THE TASK'}
        body={
          <TextInput
            name={formState.name.inputName}
            value={formState.name.value}
            error={formState.name.error?.formattedMessage}
            onChange={updateInput}
            placeholder={'Name of your task'}
            containerStyle={mb(4)}
          />
        }
      />

      <DataInfoBox
        header={'DESCRIPTION'}
        body={
          <TextInput
            name={formState.description.inputName}
            value={formState.description.value}
            error={formState.description.error?.formattedMessage}
            onChange={updateInput}
            placeholder={'Write more about your task...'}
            height={200}
          />
        }
      />

      <Divider/>

      <DataInfoBox
        header={'START DATE'}
        body={
          <View style={{flexDirection: 'row'}}>
            <TextInput
              name={formState.startDateDay.inputName}
              value={formState.startDateDay.value}
              error={formState.startDateDay.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'DAY'}
              containerStyle={[{flex: 1}, mr(2)]}
            />
            <TextInput
              name={formState.startDateMonth.inputName}
              value={formState.startDateMonth.value}
              error={formState.startDateMonth.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'MONTH'}
              containerStyle={[{flex: 1}, mr(2)]}
            />
            <TextInput
              name={formState.startDateYear.inputName}
              value={formState.startDateYear.value}
              error={formState.startDateYear.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'YEAR'}
              containerStyle={{flex: 1}}
            />
          </View>
        }
      />

      <DataInfoBox
        header={'END DATE'}
        body={
          <View style={{flexDirection: 'row'}}>
            <TextInput
              name={formState.endDateDay.inputName}
              value={formState.endDateDay.value}
              error={formState.endDateDay.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'DAY'}
              containerStyle={[{flex: 1}, mr(2)]}
            />
            <TextInput
              name={formState.endDateMonth.inputName}
              value={formState.endDateMonth.value}
              error={formState.endDateMonth.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'MONTH'}
              containerStyle={[{flex: 1}, mr(2)]}
            />
            <TextInput
              name={formState.endDateYear.inputName}
              value={formState.endDateYear.value}
              error={formState.endDateYear.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'YEAR'}
              containerStyle={{flex: 1}}
            />
          </View>
        }
      />

      <Divider/>

      <DataInfoBox
        header={'Time (Hours : Minutes)'}
        body={
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <Picker
              name={formState.timeHours.inputName}
              value={formState.timeHours.value}
              options={hourPickerOptions}
              onChange={updateInput}
              style={[{flex: 1}, mr(4)]}
            />
            <Picker
              name={formState.timeMinutes.inputName}
              value={formState.timeMinutes.value}
              options={minutePickerOptions}
              onChange={updateInput}
              style={{flex: 1}}
            />
          </View>
        }
      />

      <DataInfoBox
        header={'DURATION (Hours : Minutes)'}
        body={
          <View style={{flexDirection: 'row'}}>
            <Picker
              name={formState.durationHours.inputName}
              value={formState.durationHours.value}
              options={hourPickerOptions}
              onChange={updateInput}
              style={[{flex: 1}, mr(4)]}
            />
            <Picker
              name={formState.durationMinutes.inputName}
              value={formState.durationMinutes.value}
              options={minutePickerOptions}
              onChange={updateInput}
              style={{flex: 1}}
            />
          </View>
        }
      />

      <Divider/>

      <DataInfoBox
        header={'ADDRESS'}
        body={
          <TextInput
            name={formState.addressNumber.inputName}
            value={formState.addressNumber.value}
            error={formState.addressNumber.error?.formattedMessage}
            onChange={updateInput}
            placeholder={'Your address here'}
          />
        }
      />

      <Divider/>

      <DataInfoBox
        header={'Requirements'}
        body={
          <TextInput
            name={formState.requirements.inputName}
            value={formState.requirements.value}
            error={formState.requirements.error?.formattedMessage}
            onChange={updateInput}
            placeholder={'Specific requirements of the task'}
          />
        }
      />

      <Divider/>

      <DataInfoBox
        header={'Task reward'}
        body={
          <TextInput
            name={formState.rewardAmount.inputName}
            value={formState.rewardAmount.value}
            error={formState.rewardAmount.error?.formattedMessage}
            onChange={updateInput}
            placeholder={'Reward amount'}
            containerStyle={mb(8)}
          />
        }
      />

      <Button
        onClick={createTask}
        extend={true}
        disabled={!isFormValid}
      >
        CREATE TASK
      </Button>
    </ScreenLayout>
  )
}

export default CreateTaskScreen;
