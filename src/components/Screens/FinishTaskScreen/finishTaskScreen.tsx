import React, { useEffect, useState } from 'react';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import styles from './finishTaskScreen.styles';
import { EVolunteerTaskStatus, IVolunteerTask } from '../../../shared/types/aidProject.types';
import Typography from '../../atoms/Typography/typography';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';
import { Image, Modal, View } from 'react-native';
import { Images } from '../../../shared/constants/images.constants';
import Button from '../../atoms/Button/button';
import { EButtonType } from '../../atoms/Button/button.types';
import { Icon } from 'react-native-elements';
import { getColor } from '../../../shared/utils/common.util';
import { useDispatch } from 'react-redux';
import { updateVolunteerTask } from '../../../redux/volunteerTask/volunteerTask.redux.actions';

const FinishTaskScreen: React.FC<RouterScreenProps.IFinishTaskScreenProps> = (props) => {

  const [isModalVisible, setIsModalVisible] = useState<undefined | boolean>(undefined);
  const dispatch = useDispatch();

  const {
    route,
    navigation
  } = props;

  const routeParams = route.params as any;
  const task = routeParams.volunteerTask as IVolunteerTask;
  const taskName = routeParams.taskName as string;

  const toggleModal = (value: boolean) => () => {
    setIsModalVisible(value);
  }

  useEffect(() => {
    dispatch(updateVolunteerTask(task.id, {
      status: EVolunteerTaskStatus.FINISHED
    }))

    if (isModalVisible === false) {
      navigation.goBack();
    }
  }, [isModalVisible])

  useEffect(() => {
    const timeout = setTimeout(toggleModal(true), 3000);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <ScreenLayout
      scroll={true}
      safeArea={false}
      style={styles.finishTaskScreen}
    >
      <View>
        <Typography fontSize={14} color={EColors.GRAY_DARKEST}>
          {taskName}
        </Typography>
        <Typography color={EColors.BLUE} fontSize={20} fontFamily={EPoppins.SemiBold}>
          {task.name}
        </Typography>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch'}}>
        <Image
          source={Images.qrWithOutline}
          height={216}
          width={212}
          style={{marginBottom: 70}}
        />
        <Typography fontSize={15} style={{maxWidth: 250, textAlign: 'center'}}>
          Scan the QR Code to get the coins for the finished action.
        </Typography>
      </View>
      <Modal
        transparent={true}
        visible={!!isModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentBackground}>
            <View style={styles.modalContent}>
              <Image
                source={Images.successImg}
              />
              <Button
                onClick={toggleModal(false)}
                type={EButtonType.FLAT}
                style={{
                  position: 'absolute',
                  right: 8,
                  top: 48
                }}
              >
                <Icon
                  name='close-a'
                  type='fontisto'
                  size={18}
                  color={getColor(EColors.GRAY_DARKEST)}
                />
              </Button>
              <View style={{flexGrow: 1, alignItems: 'center'}}>
                <Typography color={EAccents.PRIMARY} fontFamily={EPoppins.SemiBold} fontSize={24}>
                  Congratulations!
                </Typography>
                <Typography fontFamily={EPoppins.Medium}>
                  you've got coins!
                </Typography>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8
                }}>
                  <Image source={Images.coinsIcon} />
                  <Typography
                    color={EColors.BLUE}
                    fontFamily={EPoppins.SemiBold}
                    fontSize={35}
                  >
                    50
                  </Typography>
                </View>
              </View>
              <Button
                onClick={toggleModal(false)}
                style={{alignSelf: 'stretch'}}
              >
                Great
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenLayout>
  )
}

export default FinishTaskScreen;
