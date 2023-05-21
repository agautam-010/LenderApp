import {StyleSheet, Platform} from 'react-native';
import {colors} from 'lib/theme';

const AVATAR_BG_COLOR_DEFAULT = '#9e9e9e';
const AVATAR_CIRCLE_COLOR_DEFAULT = '#fff';
const AVATAR_S = 40;
const AVATAR_M = 56;
const AVATAR_L = 80;

// ImageCropperPicker Styles
export const styles = StyleSheet.create({
  smallAvatar: {
    width: AVATAR_S,
    height: AVATAR_S,
  },
  mediumAvatar: {
    width: AVATAR_M,
    height: AVATAR_M,
  },
  largeAvatar: {
    width: AVATAR_L,
    height: AVATAR_L,
  },
  rounded: {
    borderRadius: AVATAR_M / 2,
    borderWidth: 1,
    borderColor: AVATAR_CIRCLE_COLOR_DEFAULT,
    margin: 5,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AVATAR_BG_COLOR_DEFAULT,
  },
  initials: {
    top: -1,
    fontWeight: '500',
    color: colors.white,
    fontSize: 22,
    letterSpacing: 1.2,
  },
  smallInitials: {fontSize: 12, letterSpacing: 0.8},
  largeInitials: {top: -2, fontSize: 30, letterSpacing: 1.4},
});
