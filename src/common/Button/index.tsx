import {Typography} from '../Typography';
import {BUTTON_TYPES} from 'lib/enums';
import GlobalStyle from 'lib/globalStyle';
import {BittonProps} from 'lib/types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelectedTheme} from 'lib/hooks';
import TouchableRipple from '../TouchableRipple';

export const Button = ({
  style,
  title,
  type = 'primary',
  titleStyle,
  onPress,
  children,
}: BittonProps) => {
  const theme = useSelectedTheme();
  return (
    <TouchableRipple
      onPress={onPress}
      style={{
        backgroundColor:
          type === BUTTON_TYPES.PRIMARY
            ? theme?.buttonBGColor
            : BUTTON_TYPES.DISABLED
            ? theme?.buttonBGDisableColor
            : theme?.buttonBGColor,
        ...styles.button,
        ...style,
      }}
      disabled={type === BUTTON_TYPES.DISABLED}>
      {title ? (
        <Typography
          text={title}
          style={{...titleStyle}}
          color={theme?.buttonTextColor}
          size={titleStyle?.fontSize || 16}
        />
      ) : (
        children
      )}
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    ...GlobalStyle.centerItem,
  },
});
