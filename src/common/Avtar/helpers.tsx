import React from 'react';
import {Platform, Text} from 'react-native';
import VectorIcon from '../VectorIcon';
import {colors} from 'lib/theme';
import {styles} from './styles';

// Avatar Config
const AVATAR_BG_COLOR = '#9e9e9e';
const AVATAR_ICON = Platform.OS === 'ios' ? 'ios-person' : 'md-person';
const AVATAR_S = 40;
const AVATAR_M = 56;
const AVATAR_L = 80;

enum SIZE_TYPE {
  SMALL = 'small',
  LARGE = 'large',
  NUMBER = 'number',
  NUMERIC = 0,
}

const renderAvatar = (name: string, size: string | number) => {
  let initials;
  let content;
  let avatarIconSize = 32;

  if (!name) {
    if (size === 'small') {
      avatarIconSize = 24;
    }
    if (size === 'large') {
      avatarIconSize = 44;
    }

    content = (
      <VectorIcon
        name={AVATAR_ICON}
        size={avatarIconSize}
        color={colors.white}
      />
    );
  } else {
    const a = name.split(' ');
    const firstLetter = a[0].charAt(0).toUpperCase();
    let secondLetter = '';
    if (a.length > 1) {
      secondLetter = a[a.length - 1].charAt(0).toUpperCase();
    }

    initials = firstLetter + secondLetter;

    content = (
      <Text
        style={[
          styles.initials,
          (size === SIZE_TYPE.SMALL || (size > 30 && size <= 50)) &&
            styles.smallInitials,
          (size === SIZE_TYPE.LARGE || size > 80) && styles.largeInitials,
        ]}>
        {initials}
      </Text>
    );
  }

  return content;
};

const getAvatarDimensions = (size: number, rounded: boolean) => {
  return {
    width: size,
    height: size,
    borderRadius: rounded ? size / 2 : 0,
  };
};

export {renderAvatar, getAvatarDimensions};
