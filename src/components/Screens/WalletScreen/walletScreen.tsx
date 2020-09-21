import React, { Fragment, useState } from 'react'
import { Image, View } from 'react-native';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import styles from './walletScreen.styles';
import { mb } from '../../../shared/styles/util.styles';
import Typography from '../../atoms/Typography/typography';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { EColors } from '../../../shared/styles/variables.styles';
import { Images } from '../../../shared/constants/images.constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import Divider from '../../atoms/Divider/divider';
import UserCoupons from '../../organisms/UserCoupons/userCoupons';
import TextInput from '../../atoms/TextInput/textInput';
import useForm from '../../../shared/hooks/useForm.hook';
import supportForm from '../../../shared/forms/support.form';
import Button from '../../atoms/Button/button';

const WalletScreen: React.FC<RouterScreenProps.IWalletScreenProps> = () => {

  const userTokens = useSelector<RootState, RootState['wallet']['userTokens']>(state => state.wallet.userTokens);
  const { isFormValid, formState, updateInput } = useForm(supportForm);
  const [displaySupport, setDisplaySupport] = useState(true)

  return (
    <ScreenLayout
      scroll={true}
      safeArea={false}
      style={styles.walletScreen}
    >
      <View style={mb(4)}>
        <Typography fontFamily={EPoppins.SemiBold} fontSize={24}>
          My Tokens
        </Typography>
      </View>

      <View style={{
        alignItems: 'center',
        alignSelf: 'stretch'
      }}>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          NUMBER OF MY TOKENS
        </Typography>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Images.coinsIcon}
          />
          <Typography fontFamily={EPoppins.SemiBold} color={EColors.BLUE} fontSize={30}>
            {userTokens.current}
          </Typography>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flex: 1, alignItems: 'center', marginRight: 8}}>
            <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
              YESTERDAY EARNINGS
            </Typography>
            <Typography fontFamily={EPoppins.SemiBold} fontSize={30}>
              {userTokens.yesterdayEarned}
            </Typography>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
              LAST MONTH EARNINGS
            </Typography>
            <Typography fontFamily={EPoppins.SemiBold} fontSize={30}>
              {userTokens.lastMonthEarned}
            </Typography>
          </View>
        </View>
      </View>
      <Divider/>
      <View style={mb(4)}>
        <Typography fontFamily={EPoppins.SemiBold} fontSize={24}>
          My Coupons
        </Typography>
      </View>
      <UserCoupons/>
      <View style={mb(4)}>
        <Typography fontFamily={EPoppins.SemiBold} fontSize={24}>
          Contact Support
        </Typography>
      </View>
      { displaySupport ?
        <Fragment>
          <TextInput
            name={formState.message.inputName}
            value={formState.message.value}
            onChange={updateInput}
            error={formState.message.error?.formattedMessage}
            placeholder={'Send a message to our team'}
            multiline={true}
            containerStyle={mb(4)}
          />
          <Button
            onClick={() => setDisplaySupport(false)}
            disabled={!isFormValid}
            style={{
              alignSelf: 'flex-end',
              width: 170
            }}
          >
            Send
          </Button>
        </Fragment> :
        <Typography color={EColors.GREEN}>
          Your message was successfully sent!
        </Typography>
      }
    </ScreenLayout>
  )
}

export default WalletScreen;
