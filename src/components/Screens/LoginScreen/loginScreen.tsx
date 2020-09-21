import React  from 'react'
import { Image, View } from 'react-native';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/auth/auth.redux.actions';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { Images } from '../../../shared/constants/images.constants';
import Typography from '../../atoms/Typography/typography';
import styles from './loginScreen.styles';
import { mb } from '../../../shared/styles/util.styles';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { EAccents } from '../../../shared/styles/variables.styles';
import SocialLoginBar from '../../molecules/SocialLoginBar/socialLoginBar';
import TextInput from '../../atoms/TextInput/textInput';
import useForm from '../../../shared/hooks/useForm.hook';
import loginForm from '../../../shared/forms/login.form';

const LoginScreen: React.FC<RouterScreenProps.ILoginScreenProps> = (props) => {

  const dispatch = useDispatch();
  const { isFormValid, formState, updateInput } = useForm(loginForm)

  const handleLogin = () => {
    dispatch(setUser({
      email: 'test@test.test',
      lastName: 'Test',
      firstName: 'Test'
    }))
    props.navigation.replace(ERouterFlows.HomeDrawer, {
      screen: ERouterFlows.HomeFlow,
      params: {
        screen: ERouterFlows.HomeActionsFlow,
        params: {
          screen: ERouterScreens.ActionsScreen
        }
      }
    })
  }

  const handleRegister = () => {
    props.navigation.navigate(ERouterFlows.AuthFlow, {
      screen: ERouterScreens.RegisterScreen
    })
  }

  return (
    <ScreenLayout style={styles.loginScreen} scroll={true}>
      <View style={styles.logoImageContainer}>
        <Image
          source={Images.logo}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.mainContentContainer}>
        <Typography style={[mb(4)]}>
          Login with existing account:
        </Typography>
        <View style={styles.socialButtonContainer}>
          <SocialLoginBar/>
        </View>
        <Typography style={mb(3)}>
          Or login with email:
        </Typography>
        <TextInput
          name={formState.email.inputName}
          value={formState.email.value}
          onChange={updateInput}
          type={'email-address'}
          placeholder={'Email'}
          returnKeyType={'next'}
          containerStyle={mb(2)}
          autoCapitalize={'none'}
          error={formState.email.error?.formattedMessage}
        />
        <TextInput
          name={formState.password.inputName}
          value={formState.password.value}
          onChange={updateInput}
          type={'default'}
          placeholder={'Password'}
          containerStyle={mb(3)}
          secureTextEntry={true}
          autoCapitalize={'none'}
          autoCorrect={false}
          returnKeyType={'done'}
          error={formState.password.error?.formattedMessage}
        />
        <Button
          onClick={handleLogin}
          style={{alignSelf: 'stretch', ...mb(4)}}
          disabled={!isFormValid}
        >
          Log in
        </Button>
      </View>
      <View>
        <Typography>
          Don’t have account yet?
        </Typography>
        <Button
          onClick={handleRegister}
          type={EButtonType.FLAT}
          labelStyle={{letterSpacing: 1.6}}
          labelColor={EAccents.PRIMARY}
        >
          REGISTER
        </Button>
      </View>
    </ScreenLayout>
  )
}

export default LoginScreen;
