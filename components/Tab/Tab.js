import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 33;

  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      onPress={() => props.onPress(props.tabId)}
      style={[style.tab, props.isInactive && style.isInactiveTab, tabWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.isInactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.defaultProps = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
