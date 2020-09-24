import React, { Fragment, useEffect, useRef, useState } from 'react'
import { FlatList, Image, ListRenderItem, View } from 'react-native';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { Images } from '../../../shared/constants/images.constants';
import styles from './registerScreen.styles';
import { EColors } from '../../../shared/styles/variables.styles';
import { AllKeysRequired, DynamicObject } from '../../../shared/types/util.types';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import useForm from '../../../shared/hooks/useForm.hook';
import registerForm from '../../../shared/forms/register.form';
import TextInput from '../../atoms/TextInput/textInput';
import { mb, mr } from '../../../shared/styles/util.styles';
import { CheckBox } from 'react-native-elements';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import Picker from '../../atoms/Picker/picker';
import { useDispatch } from 'react-redux';
import { toggleIsAuthenticated, updateUser } from '../../../redux/auth/auth.redux.actions';

enum ERegistrationSteps {
  INITIALS = 'INITIALS',
  MAIL = 'MAIL',
  PASSWORD = 'PASSWORD',
  VOLUNTEERING_INFO = 'VOLUNTEERING_INFO',
  SUCCESS = 'SUCCESS',
}
const stepOrder = [
  ERegistrationSteps.INITIALS,
  ERegistrationSteps.MAIL,
  ERegistrationSteps.PASSWORD,
  ERegistrationSteps.VOLUNTEERING_INFO,
  ERegistrationSteps.SUCCESS
]

const imageByStep: DynamicObject<number, ERegistrationSteps, AllKeysRequired> = {
  INITIALS: Images.registerInitialsImg,
  MAIL: Images.registerMailImg,
  PASSWORD: Images.registerPasswordImg,
  SUCCESS: Images.successImg,
  VOLUNTEERING_INFO: Images.registerVolunteeringInfoImg
}

const RegisterScreen: React.FC<RouterScreenProps.IRegisterScreenProps> = (props) => {

  const { formState, updateInput } = useForm(registerForm);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const currentStep = stepOrder[currentStepIndex];

  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(updateUser({
      firstName: formState.firstName.value,
      lastName: formState.lastName.value,
      email: formState.email.value,
    }))
    dispatch(toggleIsAuthenticated(true))

    // @ts-ignore
    props.navigation.replace(ERouterFlows.HomeDrawer, {
      screen: ERouterFlows.HomeFlow
    })
  }

  const renderStepContent = (step: ERegistrationSteps) => {
    switch (step) {
      case ERegistrationSteps.INITIALS: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Create account
            </Typography>
            <TextInput
              name={formState.firstName.inputName}
              value={formState.firstName.value}
              onChange={updateInput}
              placeholder={'First name'}
              error={formState.firstName.error?.formattedMessage}
              containerStyle={mb(3)}
            />
            <TextInput
              name={formState.lastName.inputName}
              value={formState.lastName.value}
              onChange={updateInput}
              placeholder={'Last name'}
              error={formState.lastName.error?.formattedMessage}
              containerStyle={mb(12)}
            />
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                checked={!!formState.termsOfService.value}
                onPress={() => updateInput({
                  name: formState.termsOfService.inputName,
                  value: !formState.termsOfService.value
                })}
                containerStyle={{padding: 0}}
              />
              <Typography style={{ flexWrap: 'wrap', flexShrink: 1}} fontSize={15}>
                By doing this you accept the Terms and Conditions of our service.
              </Typography>
            </View>
          </Fragment>
        )
      }
      case ERegistrationSteps.MAIL: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Enter your email
            </Typography>
            <TextInput
              name={formState.email.inputName}
              value={formState.email.value}
              onChange={updateInput}
              autoCapitalize={'none'}
              type={'email-address'}
              placeholder={'Your email address'}
              error={formState.email.error?.formattedMessage}
              containerStyle={mb(25)}
            />
          </Fragment>
        )
      }
      case ERegistrationSteps.PASSWORD: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Create password
            </Typography>
            <TextInput
              name={formState.password.inputName}
              value={formState.password.value}
              onChange={updateInput}
              placeholder={'Your password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
              error={formState.password.error?.formattedMessage}
              containerStyle={mb(25)}
            />
          </Fragment>
        )
      }
      case ERegistrationSteps.VOLUNTEERING_INFO: {
        return (
          <Fragment>
            <Typography fontSize={30} fontFamily={EPoppins.SemiBold} style={mb(4)}>
              Volunteering info
            </Typography>
            <Typography fontFamily={EPoppins.Medium}>
              How much time do you plan to spend on volunteering?
            </Typography>
            <Picker
              name={formState.volunteeringInfo.inputName}
              value={formState.volunteeringInfo.value}
              options={[
                { value: '1-5h/week' },
                { value: '5-10h/week' },
                { value: '10-20h/week' },
                { value: '20+h/week' }
              ]}
              onChange={updateInput}
              style={mb(9)}
            />
            <Typography fontFamily={EPoppins.Medium} >
              Are you already volunteering regularly?
            </Typography>
            <Picker
              name={formState.volunteeringInfo.inputName}
              value={formState.volunteeringInfo.value}
              options={[
                { value: 'Yes' },
                { value: 'No' },
              ]}
              onChange={updateInput}
              style={mb(9)}
            />
          </Fragment>
        )
      }
      case ERegistrationSteps.SUCCESS: {
        return (
          <Fragment>
            <Typography
              fontSize={29}
              fontFamily={EPoppins.SemiBold}
              style={[mb(4), {textAlign: 'center'}]}
            >
              You have successfully created an account!
            </Typography>
          </Fragment>
        )
      }
    }
  }

  const StepContentItem: ListRenderItem<ERegistrationSteps> = (info) => {
    const { item } = info;

    return (
      <View style={styles.flatListItem} key={item}>
        { currentStep === ERegistrationSteps.SUCCESS &&
          <View style={{alignItems: 'flex-end'}}>
            <Button
              onClick={nextStep}
              type={EButtonType.FLAT}
              labelColor={EColors.BLUE}
            >
              Skip
            </Button>
          </View>
        }
        <View style={styles.stepImageContainer}>
          <Image
            source={imageByStep[item]}
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
      onFinish();
    }
  }

  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prevState => prevState - 1)
    } else {
      props.navigation.goBack();
    }
  }

  const handleVerifyAccount = () => {
    dispatch(updateUser({
      firstName: formState.firstName.value,
      lastName: formState.lastName.value,
      email: formState.email.value,
    }))
    props.navigation.replace(ERouterScreens.VerifyAccountScreen, {
      onFinishRoute: {
        routeName: ERouterFlows.HomeDrawer
      }
    })
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
      style={styles.registerScreen}
      bgColor={EColors.GRAYISH_BLUE}
      scroll={true}
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
        style={[mb(10)]}
      />
      {currentStep !== ERegistrationSteps.SUCCESS ?
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
              currentStep === ERegistrationSteps.VOLUNTEERING_INFO ?
                'Finish' : 'Continue'
            }
          </Button>
        </View>
        :
        <View style={styles.stickyButtonContainer}>
          <Button
            onClick={handleVerifyAccount}
            style={{flexGrow: 1}}
          >
            Verify your account
          </Button>
        </View>
      }
    </ScreenLayout>
  )
}

export default RegisterScreen;
