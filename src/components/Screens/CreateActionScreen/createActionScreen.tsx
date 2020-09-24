import React, { Fragment } from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import Typography from '../../atoms/Typography/typography';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import styles from './createActionScreen.styles';
import { mb, mr } from '../../../shared/styles/util.styles';
import DataInfoBox from '../../atoms/DataInfoBox/dataInfoBox';
import useForm from '../../../shared/hooks/useForm.hook';
import createActionForm from '../../../shared/forms/createAction.form';
import TextInput from '../../atoms/TextInput/textInput';
import Divider from '../../atoms/Divider/divider';
import { View } from 'react-native';
import Picker from '../../atoms/Picker/picker';
import { countries } from '../../../shared/constants/country.constants';
import { Icon } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';
import Button from '../../atoms/Button/button';
import { useDispatch } from 'react-redux';
import { addVolunteerAction } from '../../../redux/volunteerAction/volunteerAction.redux.actions';
import moment from 'moment';
import { Images } from '../../../shared/constants/images.constants';
import uuid from 'v4-uuid';
import { EVolunteerActionStatus, IVolunteerAction } from '../../../shared/types/aidProject.types';

const CreateActionScreen: React.FC<RouterScreenProps.ICreateActionScreenProps> = (props) => {

  const dispatch = useDispatch();

  const { isFormValid, formState, updateInput, resetForm } = useForm(createActionForm);

  const createAction = () => {

    const newAction: IVolunteerAction = {
      id: uuid(),
      name: formState.name.value,
      tasks: [],
      isRecurring: formState.recurringAction.value === 'Yes',
      startDateTimestamp: moment(
        `${formState.startDateDay.value}/${formState.startDateMonth.value}/${formState.startDateYear.value}`,
        'DD/MM/YYYY'
      ).unix(),
      endDateTimestamp: moment(
        `${formState.endDateDay.value}/${formState.endDateMonth.value}/${formState.endDateYear.value}`,
        'DD/MM/YYYY'
      ).unix(),
      contactPhone: formState.phone.value,
      contactEmail: formState.email.value,
      organizer: 'Unicef',
      addressCountry: formState.addressCountry.value,
      addressCity: formState.addressCity.value,
      description: formState.description.value,
      image: Images.newActionImg,
      status: EVolunteerActionStatus.ACTIVE
    }

    dispatch(addVolunteerAction(newAction))

    resetForm();
    // @ts-ignore
    props.navigation.navigate(ERouterFlows.HomeActionsFlow, {
      screen: ERouterScreens.ActionDetailsScreen,
      params: {
        volunteerAction: newAction
      }
    });
  }

  return (
    <ScreenLayout
      safeArea={false}
      scroll={true}
      style={styles.createActionScreen}
    >
      <Typography
        fontSize={20}
        color={EAccents.PRIMARY}
        fontFamily={EPoppins.SemiBold}
        style={mb(4)}
      >
        Create new action
      </Typography>

      <DataInfoBox
        header={'NAME OF THE ACTION'}
        body={
          <TextInput
            name={formState.name.inputName}
            value={formState.name.value}
            error={formState.name.error?.formattedMessage}
            onChange={updateInput}
            placeholder={'Name of your action'}
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
            placeholder={'Write more about your action...'}
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

      <Divider />

      <DataInfoBox
        header={'RECURRING ACTION'}
        body={
          <Picker
            name={formState.recurringAction.inputName}
            value={formState.recurringAction.value}
            options={[
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' }
            ]}
            onChange={updateInput}
            style={{alignSelf: 'stretch'}}
          />
        }
      />

      <Divider/>

      <DataInfoBox
        header={'RECURRING ACTION'}
        body={
          <Fragment>
            <Picker
              name={formState.addressCountry.inputName}
              value={formState.addressCountry.value}
              options={countries}
              onChange={updateInput}
              style={[{alignSelf: 'stretch'}, mb(4)]}
            />
            <TextInput
              name={formState.addressCity.inputName}
              value={formState.addressCity.value}
              error={formState.addressCity.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'Your city'}
            />
          </Fragment>
        }
      />

      <Divider/>

      <DataInfoBox
        header={'CONTACT INFO'}
        body={
          <Fragment>
            <TextInput
              name={formState.email.inputName}
              value={formState.email.value}
              error={formState.email.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'Your email here'}
              containerStyle={mb(4)}
              autoCapitalize={'none'}
              leftIcon={
                <Icon
                  name={'mail'}
                  type={'feather'}
                  style={mr(4)}
                  color={getColor(EColors.BLUE)}
                />
              }
            />
            <TextInput
              name={formState.phone.inputName}
              value={formState.phone.value}
              error={formState.phone.error?.formattedMessage}
              onChange={updateInput}
              placeholder={'Your phone here'}
              containerStyle={mb(8)}
              leftIcon={
                <Icon
                  name={'phone'}
                  type={'feather'}
                  style={mr(4)}
                  color={getColor(EColors.BLUE)}
                />
              }
            />
          </Fragment>
        }
      />

      <Button
        onClick={createAction}
        extend={true}
        disabled={!isFormValid}
      >
        CREATE ACTION
      </Button>
    </ScreenLayout>
  )
};

export default CreateActionScreen;
