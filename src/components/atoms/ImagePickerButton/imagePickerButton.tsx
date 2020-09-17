import React, { Fragment, useState } from 'react';
import Button from '../Button/button';
import { EButtonType } from '../Button/button.types';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import { mr } from '../../../shared/styles/util.styles';
import { accentColor } from '../../../shared/styles/variables.styles';
import Typography from '../Typography/typography';
import { IImagePickerBtnProps } from './imagePickerButton.types';
import PermissionUtil from '../../../shared/utils/permission.util';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerButton: React.FC<IImagePickerBtnProps> = (props) => {

  const [isPictureTaken, setIsPictureTaken] = useState(false);

  const takePicture = async () => {
    try {
      await PermissionUtil.getImagePermission();

      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setIsPictureTaken(true);
      }
    } catch (error) {
      console.log(error)
      alert('Please grant permissions in order to take the picture of your identity document');
    }
  }

  return (
    <View
      style={[
        {alignItems: 'center'},
        props.style
      ]}
    >
      <Button
        onClick={takePicture}
        type={EButtonType.OUTLINED}
      >
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
          {
            !isPictureTaken ?
              <Fragment>
                <Icon
                  name={'camera'}
                  type={'feather'}
                  size={24}
                  style={mr(2)}
                />

                <Icon
                  name={'plus'}
                  type={'feather'}
                  reverse={true}
                  color={accentColor.PRIMARY}
                  size={16}
                />
              </Fragment>
              :
              <Fragment>
                <Icon
                  name={'check'}
                  type={'feather'}
                  reverse={true}
                  color={accentColor.PRIMARY}
                  size={16}
                />
              </Fragment>
          }
        </View>
      </Button>
      <Typography>
        {props.label}
      </Typography>
    </View>
  )
}

export default ImagePickerButton;
