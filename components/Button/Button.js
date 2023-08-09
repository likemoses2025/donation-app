import PropTypes from 'prop-types';
import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

const Button = props => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      style={[style.button, props.isDisabled && style.disabled]}
      disabled={props.isDisabled}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
