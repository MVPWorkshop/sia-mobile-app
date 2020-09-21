import React, { Fragment } from 'react';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import Typography from '../../atoms/Typography/typography';
import { Image, View } from 'react-native';
import DataInfoBox from '../../atoms/DataInfoBox/dataInfoBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { Icon } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';
import styles from './accountDetailsScreen.styles';
import { labelByDocumentType } from '../../../shared/constants/user.constants';
import Divider from '../../atoms/Divider/divider';
import DataSectionTitle from '../../atoms/DataSectionTitle/dataSectionTitle';
import { Images } from '../../../shared/constants/images.constants';
import { countriesByAlpha2 } from '../../../shared/constants/country.constants';
import moment from 'moment'

const AccountDetailsScreen: React.FC<RouterScreenProps.IAccountDetailsScreenProps> = (props) => {

  const authState = useSelector<RootState, RootState['auth']>(state => state.auth)
  const user = authState.user;

  const verifyAccount = () => {
    props.navigation.replace(ERouterScreens.VerifyAccountScreen, {
      onFinishRoute: {
        routeName: ERouterScreens.AccountDetailsScreen
      }
    })
  }

  return (
    <ScreenLayout
      scroll={true}
      style={styles.accountDetailsScreen}
    >
      <DataSectionTitle title={'Account info'} />

      <DataInfoBox
        header={'VERIFICATION STATUS'}
        body={
          authState.isVerified ?
            <View style={{flexDirection: 'row'}}>
              <Typography
                color={EColors.BLUE}
                fontSize={20}
                style={{marginRight: 8}}
              >
                Approved
              </Typography>
              <Icon
                name={'check-all'}
                type={'material-community'}
                color={getColor(EColors.BLUE)}
              />
            </View>
            :
            <Button
              onClick={verifyAccount}
              type={EButtonType.FLAT}
              style={{paddingLeft: 0}}
              labelColor={EColors.BLUE}
            >
              Verify your account
            </Button>
        }
      />

      { user.documentType &&
        <DataInfoBox
          header={'VERIFICATION DOCUMENT'}
          body={labelByDocumentType[user.documentType]}
        />
      }

      <Divider/>

      <DataInfoBox
        header={'YOUR EMAIL'}
        body={user.email}
      />

      <Divider/>

      <DataInfoBox
        header={'YOUR PASSWORD'}
        body={'••••••••••••'}
      />

      <Divider />

      <DataSectionTitle title={'Personal info'} />

      <View style={styles.userImageContainer}>
        <Image
          source={Images.userImg}
          height={75}
          width={75}
          resizeMode={'contain'}
        />
      </View>

      {
        user.addressStreet && user.addressPostalCode && user.addressCountry && user.addressPostalCode ?
          <Fragment>
            <DataInfoBox
              header={'ADDRESS'}
              body={[
                `${countriesByAlpha2[user.addressCountry].label}, ${user.addressCity}, ${user.addressPostalCode}`,
                user.addressStreet
              ].join('\n')}
            />
            <Divider />
          </Fragment> : null
      }

      {
        user.phoneNumber ?
          <Fragment>
            <DataInfoBox
              header={'PHONE NUMBER'}
              body={user.phoneNumber}
            />
            <Divider />
          </Fragment> : null
      }

      {
        user.birthDateTimestamp ?
          <Fragment>
            <DataInfoBox
              header={'PHONE NUMBER'}
              body={moment.unix(user.birthDateTimestamp).format('DD / MMM / YYYY')}
            />
            <Divider />
          </Fragment> : null
      }

      {
        user.profession ?
          <Fragment>
            <DataInfoBox
              header={'PROFESSION'}
              body={user.profession}
            />
            <Divider />
          </Fragment> : null
      }
    </ScreenLayout>
  )
}

export default AccountDetailsScreen;
