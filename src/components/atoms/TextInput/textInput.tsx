import React, { useEffect, useRef } from 'react';
import { Input as RNEInput, InputProps as RNEInputProps } from 'react-native-elements';
import { ITextInputProps } from './textInput.types';
import styles from './textInput.styles';

const TextInput: React.FC<ITextInputProps> = (props) => {

  const {
    name,
    error,
    value,
    onChange,
    type,
    placeholder,
    autoCapitalize,
    autoCorrect,
    blurOnSubmit,
    returnKeyType,
    secureTextEntry,
    multiline
  } = props;

  const inputRef = useRef<RNEInput>(null);

  const onTextChange: RNEInputProps['onChange'] = (e) => {
    onChange({
      name,
      value: e.nativeEvent.text
    })
  }

  useEffect(() => {
    if (inputRef && inputRef.current && !!error) {
      inputRef.current.shake();
    }
  }, [error, inputRef]);

  return (
    <RNEInput
      renderErrorMessage={!!error}
      errorMessage={error}
      value={value}
      onChange={onTextChange}
      ref={inputRef}
      keyboardType={type}
      placeholder={placeholder}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      inputContainerStyle={styles.inputContainerStyle}
      style={styles.textStyle}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
    />
  )
}

export default TextInput;
