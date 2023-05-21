import {ReactFragment} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface ContainerProps {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[] | ReactFragment | null;
  scroll?: boolean;
  scrollViewStyle?: ViewStyle;
  spinnerType?: 'loading' | 'success' | 'failure';
  onLoaderClose?: () => void;
  header?: boolean;
  headerTitle?: string;
  footer?: boolean;
}

export interface WrapProps {
  style?: ViewStyle;
  autoMargin?: boolean;
  children?: JSX.Element | JSX.Element[] | ReactFragment | null;
}

export interface TochableWrapProps {
  style?: ViewStyle;
  children: JSX.Element | JSX.Element[] | ReactFragment;
  onPress?: () => void;
}

export interface TypographyProps {
  style?: TextStyle;
  text: string | number | undefined;
  color?: string;
  size?: number;
  noOfLine?: number;
  ff?: string;
  fw?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  children?: JSX.Element | JSX.Element[];
  letterSpacing?: boolean;
}

interface ButtonBasics {
  style?: TextStyle;
  type?: 'primary' | 'secondary' | 'disabled';
  titleStyle?: TextStyle;
  onPress: (param?: any) => void;
}
interface ButtonWithText extends ButtonBasics {
  title: string;
  children?: never;
}
interface MessageWithchildren extends ButtonBasics {
  title?: never;
  children: JSX.Element | JSX.Element[];
}
export type BittonProps = ButtonWithText | MessageWithchildren;

export interface TextInputProps {
  onRef?: () => {};
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => {};
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  blurOnSubmit?: boolean;
  maxLength?: number;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  style?: TextStyle;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  labelStyles?: TextStyle;
  labelSize?: number;
  labelColor?: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  editable?: boolean;
  right?: JSX.Element | JSX.Element[] | ReactFragment;
  secureTextEntry?: boolean;
  hint?: string;
}

export interface LinkProps {
  style?: TextStyle;
  title?: string;
  titleStyle?: TextStyle;
  color?: string;
  onPress: (param?: any) => void;
  children?: JSX.Element | JSX.Element[] | ReactFragment;
}

export interface KeyboardAvoidProps {
  style?: ViewStyle;
  children: JSX.Element | JSX.Element[] | ReactFragment;
}

export interface IconProps {
  style?: ImageStyle;
  source: ImageSourcePropType;
  color?: string;
}

export interface SpinnerStatusProps {
  status: boolean;
  type?: string;
}

export interface TransactionProps {
  id?: string;
  personId: string;
  name: string;
  amount: number | null;
  note: string;
  dateTime: string;
  tnsxType: number;
  tnsxNo: string;
  tnsxMedium: number;
}

export interface ThemeType {
  name: string;
  nature: string;
  primaryColor: string;
  primaryTextColor: string;
  secondaryColor: string;
  secondaryTextColor: string;
  statusBarColor: string;
  statusBarStyle: 'dark-content' | 'light-content';
  textColor: string;
  surfaceBGColor: string;
  borderColor: string;
  inputBGColor: string;
  inputBorderColor: string;
  inputTextColor: string;
  inputPlaceholderColor: string;
  buttonBGColor: string;
  buttonBGDisableColor: string;
  buttonTextColor: string;
  linkColor: string;
}

export interface OptionsType {
  name: string;
  value: number;
}
export interface PickerProps {
  show: () => void;
  dismiss: () => void;
}

export interface NotesProps {
  title: string;
  description?: string;
  date?: string;
  type: number;
}

export type AuthData = {
  id: number;
  email: string;
  name: string;
  user_name: string;
  version: number;
  token: string;
  mobile_no: string;
  image?: string;
};
const signIn = (user: AuthData): Promise<AuthData> => {
  return new Promise(resolve => resolve(user));
};

export const authService = {signIn};
