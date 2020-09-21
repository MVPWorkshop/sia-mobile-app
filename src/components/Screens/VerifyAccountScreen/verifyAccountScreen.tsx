import React, { Fragment, useEffect, useRef, useState } from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { RouterScreenProps } from '../../../shared/types/router.types';
import Button from '../../atoms/Button/button';
import useForm from '../../../shared/hooks/useForm.hook';
import verifyAccountForm from '../../../shared/forms/verifyAccount.form';
import styles from './verifyAccountScreen.styles';
import { FlatList, Image, ListRenderItem, View } from 'react-native';
import { AllKeysRequired, DynamicObject } from '../../../shared/types/util.types';
import { Images } from '../../../shared/constants/images.constants';
import { mb, mr } from '../../../shared/styles/util.styles';
import { EButtonType } from '../../atoms/Button/button.types';
import { EColors } from '../../../shared/styles/variables.styles';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import Picker from '../../atoms/Picker/picker';
import { countries } from '../../../shared/constants/country.constants';
import TextInput from '../../atoms/TextInput/textInput';
import RadioGroup from '../../molecules/RadioGroup/radioGroup';
import ImagePickerButton from '../../atoms/ImagePickerButton/imagePickerButton';
import { useDispatch } from 'react-redux';
import { toggleIsVerified, updateUser } from '../../../redux/auth/auth.redux.actions';

enum EVerifyAccountSteps {
  ADDRESS_INFO = 'ADDRESS_INFO',
  PERSONAL_INFO = 'PERSONAL_INFO',
  DOCUMENT_PHOTO = 'DOCUMENT_PHOTO',
}

const stepOrder = [
  EVerifyAccountSteps.ADDRESS_INFO,
  EVerifyAccountSteps.PERSONAL_INFO,
  EVerifyAccountSteps.DOCUMENT_PHOTO
]

const imagesByStep: DynamicObject<number, EVerifyAccountSteps, AllKeysRequired> = {
  [EVerifyAccountSteps.PERSONAL_INFO]: Images.verifyAccountPersonalInfoImg,
  [EVerifyAccountSteps.DOCUMENT_PHOTO]: Images.verifyAccountIdImg,
  [EVerifyAccountSteps.ADDRESS_INFO]: Images.verifyAccountLocationImg
}

const VerifyAccountScreen: React.FC<RouterScreenProps.IVerifyAccountScreenProps> = (props) => {

  const { formState, updateInput } = useForm(verifyAccountForm);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const dispatch = useDispatch();

  const currentStep = stepOrder[currentStepIndex];

  const onFinish = () => {

    dispatch(updateUser({
      addressCountry: formState.addressCountry.value,
      addressCity: formState.addressCity.value,
      addressPostalCode: formState.addressPostalCode.value,
      addressStreet: formState.addressStreet.value,
      profession: formState.profession.value,
      phoneNumber: formState.phoneNumber.value
    }))
    dispatch(toggleIsVerified(true));

    const {
      routeName,
      params
    } = props.route.params.onFinishRoute

    props.navigation.navigate(routeName, params);
  }

  const renderStepContent = (step: EVerifyAccountSteps) => {
    switch (step) {
      case EVerifyAccountSteps.ADDRESS_INFO: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Address info
            </Typography>
            <Picker
              name={formState.addressCountry.inputName}
              value={formState.addressCountry.value}
              options={countries}
              onChange={updateInput}
              style={mb(3)}
            />
            <TextInput
              name={formState.addressCity.inputName}
              value={formState.addressCity.value}
              onChange={updateInput}
              placeholder='Your City'
              containerStyle={mb(3)}
            />
            <TextInput
              name={formState.addressPostalCode.inputName}
              value={formState.addressPostalCode.value}
              onChange={updateInput}
              placeholder='ZIP / Postal code'
              containerStyle={mb(3)}
            />
            <TextInput
              name={formState.addressStreet.inputName}
              value={formState.addressStreet.value}
              onChange={updateInput}
              placeholder='Street & number'
              containerStyle={mb(11)}
            />
          </Fragment>
        )
      }
      case EVerifyAccountSteps.PERSONAL_INFO: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Personal info
            </Typography>
            <TextInput
              name={formState.profession.inputName}
              value={formState.profession.value}
              onChange={updateInput}
              placeholder='Your Profession'
              containerStyle={mb(3)}
            />
            <TextInput
              name={formState.phoneNumber.inputName}
              value={formState.phoneNumber.value}
              onChange={updateInput}
              placeholder='Your Phone Number'
              containerStyle={mb(3)}
            />
            <Typography style={mb(2)}>
              Date of birth
            </Typography>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                name={formState.birthDay.inputName}
                value={formState.birthDay.value}
                onChange={updateInput}
                placeholder='Day'
                containerStyle={[mb(3), mr(1), {flex: 1}]}
                error={formState.birthDay.error?.formattedMessage}
              />
              <TextInput
                name={formState.birthMonth.inputName}
                value={formState.birthMonth.value}
                onChange={updateInput}
                placeholder='Month'
                containerStyle={[mb(3), mr(1), {flex: 1}]}
                error={formState.birthMonth.error?.formattedMessage}
              />
              <TextInput
                name={formState.birthYear.inputName}
                value={formState.birthYear.value}
                onChange={updateInput}
                placeholder='Year'
                containerStyle={[mb(3), {flex: 1}]}
                error={formState.birthYear.error?.formattedMessage}
              />
            </View>
          </Fragment>
        )
      }
      case EVerifyAccountSteps.DOCUMENT_PHOTO: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Verify your ID
            </Typography>
            <Typography color={EColors.GRAY_DARKEST}>
              Take a photo of one of your documents to confirm your identity
            </Typography>
            <RadioGroup
              name={formState.documentType.inputName}
              value={formState.documentType.value}
              options={[
                {value: 'id', label: 'ID Card'},
                {value: 'passport', label: 'Passport'},
                {value: 'driver_license', label: 'Driver\'s License'}
              ]}
              onChange={updateInput}
            />
            <View style={{flexDirection: 'row'}}>
              <ImagePickerButton
                label='Front Page'
                style={[{flex: 1}, mr(2)]}
              />
              <ImagePickerButton
                label='Back Page'
                style={{flex: 1}}
              />
            </View>
          </Fragment>
        )
      }
    }
  }

  const StepContentItem: ListRenderItem<EVerifyAccountSteps> = (info) => {
    const { item } = info;

    return (
      <View style={styles.flatListItem} key={item}>
        <View style={styles.stepImageContainer}>
          <Image
            source={imagesByStep[item]}
            style={styles.stepImage}
          />
        </View>
        {renderStepContent(item)}
      </View>
    )
  }

  const nextStep = () => {
    if (currentStepIndex < stepOrder.length - 1) {
      setCurrentStepIndex(prevState => prevState + 1)
    } else {
      onFinish()
    }
  }

  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prevState => prevState - 1)
    } else {
      props.navigation.goBack();
    }
  }

  useEffect(() => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentStepIndex
      })
    }
  }, [currentStepIndex]);

  return (
    <ScreenLayout
      style={styles.verifyAccountScreen}
      scroll={true}
      bgColor={EColors.GRAYISH_BLUE}
    >
      <View style={styles.logoContainer}>
        <Image
          source={Images.logo}
          style={styles.logo}
        />
      </View>
      <FlatList
        ref={flatListRef}
        data={stepOrder}
        renderItem={StepContentItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        scrollEnabled={false}
        style={mb(10)}
      />
      <View style={styles.stickyButtonContainer}>
        <Button
          onClick={previousStep}
          type={EButtonType.FLAT}
          style={[{width: '50%'}, mr(2)]}
        >
          Back
        </Button>
        <Button
          onClick={nextStep}
          style={{width: '50%'}}
          iconRight={{
            name: 'arrow-forward',
            type: 'material'
          }}
        >
          {
            currentStep === EVerifyAccountSteps.DOCUMENT_PHOTO ?
              'Finish' : 'Continue'
          }
        </Button>
      </View>
    </ScreenLayout>
  )
};

export default VerifyAccountScreen;
