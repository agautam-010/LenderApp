import {Theme} from 'src/lib';
import GlobalStyle from 'lib/globalStyle';
import {IconProps} from 'lib/types';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const Icon = ({
  style,
  source,
  color = Theme.colors.theme.primary,
}: IconProps) => {
  return (
    <Image
      source={source}
      style={{width: '100%', height: '100%', ...style, tintColor: color}}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    ...GlobalStyle.centerItem,
  },
});
