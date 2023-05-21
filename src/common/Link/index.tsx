import {Typography} from '../Typography';
import {Theme} from 'src/lib';
import GlobalStyle from 'lib/globalStyle';
import {LinkProps} from 'lib/types';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSelectedTheme} from 'lib/hooks';

export const Link = ({
  style,
  title,
  titleStyle,
  color,
  onPress,
  children,
}: LinkProps) => {
  const theme = useSelectedTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        ...style,
      }}>
      {title ? (
        <Typography
          text={title}
          style={{...styles.link, ...titleStyle}}
          color={color || theme?.linkColor}
          size={titleStyle?.fontSize || 14}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...GlobalStyle.centerItem,
  },
  link: {textDecorationLine: 'underline'},
});
