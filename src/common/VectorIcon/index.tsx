import React from 'react';
import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import {colors} from 'lib/colors';
import {styles} from './styles';
import {TouchableRipple} from 'src/common';

const ICON_COLOR = colors.black;
const ICON_SIZE = 22;

type VectorIconProps = Ionicons['props'] & {
  iconPack?:
    | 'Ionicons'
    | 'AntDesign'
    | 'FontAwesome'
    | 'Feather'
    | 'EvilIcons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'FontAwesome5'
    | 'Foundation';
};

export const VectorIcon = ({
  name,
  size = ICON_SIZE,
  color = ICON_COLOR,
  iconPack = 'Feather',
  onPress,
}: VectorIconProps) => {
  const iconSize = Platform.OS === 'ios' ? size + 2 : size;

  return onPress ? (
    <TouchableRipple
      borderless
      style={[styles.centerInContainer]}
      onPress={onPress}>
      <GetIconPack
        iconPack={iconPack}
        name={name}
        color={color}
        size={iconSize}
        style={[
          {
            height: iconSize,
            width: iconSize,
          },
          styles.icon,
        ]}
      />
    </TouchableRipple>
  ) : (
    <GetIconPack
      iconPack={iconPack}
      name={name}
      color={color}
      size={iconSize}
      style={[
        {
          height: iconSize,
          width: iconSize,
        },
        styles.icon,
      ]}
    />
  );
};

export default VectorIcon;

const GetIconPack = ({iconPack, ...rest}: any) => {
  if (iconPack == 'Ionicons') {
    return <Ionicons {...rest} />;
  }
  if (iconPack == 'AntDesign') {
    return <AntDesign {...rest} />;
  }
  if (iconPack == 'FontAwesome') {
    return <FontAwesome {...rest} />;
  }
  if (iconPack == 'Feather') {
    return <Feather {...rest} />;
  }
  if (iconPack == 'EvilIcons') {
    return <EvilIcons {...rest} />;
  }
  if (iconPack == 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons {...rest} />;
  }
  if (iconPack == 'MaterialIcons') {
    return <MaterialIcons {...rest} />;
  }
  if (iconPack == 'FontAwesome5') {
    return <FontAwesome5 {...rest} />;
  }
  if (iconPack == 'Foundation') {
    return <Foundation {...rest} />;
  }

  return <Feather {...rest} />;
};
