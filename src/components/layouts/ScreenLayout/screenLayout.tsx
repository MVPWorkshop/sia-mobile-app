import React, { Fragment } from 'react';
import { IScreenLayoutProps } from './screenLayout.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import styles from './screenLayout.styles';
import { StatusBar } from 'expo-status-bar';
import { colors, EColors } from '../../../shared/styles/variables.styles';

const ScreenLayout: React.FC<IScreenLayoutProps> = (props) => {

  const {
    safeArea = true,
    style,
    scroll = false,
    statusBarColor,
    bgColor = EColors.GRAYISH_BLUE
  } = props;

  const renderSafeArea = (children: JSX.Element) => {
    if (!safeArea) {
      return children;
    }

    return (
      <SafeAreaView style={{flexGrow: 1}}>
        {children}
      </SafeAreaView>
    )
  }

  const renderKeyboardAvoidingView = (children: JSX.Element) => {
    if (!scroll) {
      return children;
    }

    return (
      <KeyboardAvoidingScrollView
        contentContainerStyle={{flexGrow: 1}}
      >
        {children}
      </KeyboardAvoidingScrollView>
    )
  }

  const renderMainContent = () => {
    return (
      <Fragment>
        <StatusBar
          backgroundColor={
            statusBarColor ? colors[statusBarColor] :
            bgColor ? colors[bgColor] : undefined
          }
        />
        <View style={[
          styles.screenLayout,
          { backgroundColor: colors[bgColor] },
          style
        ]}>
          {props.children}
        </View>
      </Fragment>
    )
  }

  return (
    renderSafeArea(
      renderKeyboardAvoidingView(
        renderMainContent()
      )
    )
  )
}

export default ScreenLayout;
