import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';
import style from './style';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 10;

  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View
      style={[style.badge, tabWidth]}
      onPress={() => props.onPress()}
      disabled={props.isInactive}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title]}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
