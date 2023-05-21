// import RNRestart from 'react-native-restart';
import {Platform, PixelRatio} from 'react-native';
import {TOAST_TYPES} from 'lib/enums';
import {Toast as ToastMessage} from 'src/common';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './constants';
import {ROUTES} from 'src/navigators';
import {Strings} from 'src/lib';
import {OptionsType} from './types';

export const Toast = (
  message: string,
  type = TOAST_TYPES.SUCCESS,
  props: {
    position: 'top' | 'bottom';
    visibilityTime?: number;
    autoHide?: boolean;
    topOffset?: number;
    bottomOffset?: number;
    keyboardOffset?: number;
    onShow?: () => void;
    onHide?: () => void;
    onPress?: () => void;
  } = {
    position: 'bottom',
    bottomOffset: 60,
  },
) => {
  ToastMessage.show({
    type: type,
    text1: message,
    text2: '',
    ...props,
  });
};

export const getCamelToGeneralCase = (text: string) =>
  text == ROUTES.Root ? Strings.Home : text.replace(/([a-z])([A-Z])/g, '$1 $2');

export const getGeneralCase = (text: string) => {
  const rg = /(^\w{1}|\.\s*\w{1})/gi;
  text = text.replace(rg, toReplace => toReplace.toUpperCase());
  return text;
};

export const getResponsiveFontSize = (
  size: number | undefined,
  appFontSize: number,
) => {
  let userSize = appFontSize;
  if (size && size > 14) {
    userSize = appFontSize + (size - 14);
  }
  if (size && size < 14) {
    userSize = appFontSize - (14 - size);
  }
  return userSize;
};

export const hexToRGBA = (hex: string | undefined, opacity: number = 1) => {
  let c: any;
  if (hex && /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      opacity +
      ')'
    );
  }
};

export function getImgSource(src: string | number) {
  let imgSource;
  if (typeof src === 'string') imgSource = {uri: src};
  if (typeof src === 'number') imgSource = src;
  return imgSource;
}

export const RNRestart = () =>
  console.log('Pass RNRestart from react-native-restart lib');

export const formatDate = (date: Date) => {
  return date.toLocaleString(undefined, {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    hour12: true,
    minute: '2-digit',
  });
};

export const getTitleFromArrayObj = (array: OptionsType[], val: number) => {
  const item = array.find(item => item.value === val);
  return item ? item.name : null;
};

export const wscale: number = SCREEN_WIDTH / 375;
export const hscale: number = SCREEN_HEIGHT / 667;
export const normalize = (
  size: number,
  based: 'width' | 'height' = 'width',
) => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
