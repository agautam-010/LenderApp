import React from 'react';
import {StyleSheet, View} from 'react-native';
import {styles} from './styles';
import {DIVIDER_ALIGN_TYPE} from 'lib/enums';

// Divider Props
interface DividerProps {
  marginLeft?: number;
  type?: DIVIDER_ALIGN_TYPE;
  color?: string;
}

// Divider
const Divider = ({
  marginLeft = 0,
  type = DIVIDER_ALIGN_TYPE.BLANK,
  color = '',
}: DividerProps) => (
  <View
    style={[
      styles.container,
      type === DIVIDER_ALIGN_TYPE.INSET && {marginLeft},
      type === DIVIDER_ALIGN_TYPE.MIDDLE && styles.mh16,
      {backgroundColor: color ? color : '#eeeeee'},
    ]}
  />
);

export default Divider;
