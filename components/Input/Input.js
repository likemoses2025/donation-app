import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import style from './style';
import PropTypes from 'prop-types';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        placeholder={props.placeHolder ? props.placeHolder : null}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
