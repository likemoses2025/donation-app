import {View, Text, Pressable} from 'react-native';
import React from 'react';
import style from './style';

const Category = props => {
  return (
    <Pressable style={style.buttonContainer}>
      <Text style={style.text}>{props.name}</Text>
    </Pressable>
  );
};

export default Category;
