import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

const KeyboardAvoidingScrollView: React.FC = (props) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={-1200}
    >
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='interactive'
      >
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingScrollView;
