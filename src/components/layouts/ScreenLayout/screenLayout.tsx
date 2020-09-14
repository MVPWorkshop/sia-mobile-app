import React, { Fragment } from 'react';
import { IScreenLayoutProps } from './screenLayout.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenLayout: React.FC<IScreenLayoutProps> = (props) => {

  const {
    safeArea = true
  } = props;

  if (safeArea) {
    return (
      <SafeAreaView>
        {props.children}
      </SafeAreaView>
    )
  }

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default ScreenLayout;
