import React from 'react';
import {Image, View, ViewStyle} from 'react-native';
import {getImgSource} from 'lib/functions';
import {renderAvatar, getAvatarDimensions} from './helpers';
import {styles} from './styles';

// Avatar Config
const AVATAR_S = 40;
const AVATAR_M = 56;
const AVATAR_L = 80;

enum SIZE_TYPE {
  SMALL = 'small',
  LARGE = 'large',
  NUMBER = 'number',
}

// Avatar Props
interface AvatarProps {
  borderRadius?: number;
  color?: any;
  imageUri?: string;
  name?: string;
  rounded?: boolean;
  circleColor?: string;
  size?: number | SIZE_TYPE;
  containerStyle?: ViewStyle | any;
}

// Avatar
const Avatar = ({
  borderRadius,
  color,
  imageUri,
  name = '',
  rounded = false,
  circleColor = '',
  size = AVATAR_M,
  containerStyle,
}: AvatarProps) => {
  if (!imageUri) {
    return (
      <View
        style={[
          styles.avatarContainer,
          color && {backgroundColor: color},
          styles.mediumAvatar,
          size === SIZE_TYPE.SMALL && styles.smallAvatar,
          size === SIZE_TYPE.LARGE && styles.largeAvatar,
          rounded && styles.rounded,
          rounded && size === SIZE_TYPE.SMALL && {borderRadius: AVATAR_S / 2},
          rounded && size === SIZE_TYPE.LARGE && {borderRadius: AVATAR_L / 2},
          borderRadius && {borderRadius},
          typeof size === SIZE_TYPE.NUMBER &&
            getAvatarDimensions(size, rounded),
          containerStyle,
        ]}>
        {renderAvatar(name, size)}
      </View>
    );
  } else {
    return (
      <Image
        source={getImgSource(imageUri)}
        style={[
          styles.mediumAvatar,
          size === SIZE_TYPE.SMALL && styles.smallAvatar,
          size === SIZE_TYPE.LARGE && styles.largeAvatar,
          rounded && styles.rounded,
          circleColor != undefined && {borderColor: circleColor},
          rounded && size === SIZE_TYPE.SMALL && {borderRadius: AVATAR_S / 2},
          rounded && size === SIZE_TYPE.LARGE && {borderRadius: AVATAR_L / 2},
          borderRadius ? {borderRadius} : null,
          typeof size === 'number' && getAvatarDimensions(size, rounded),
          containerStyle,
        ]}
      />
    );
  }
};

export default Avatar;
