import {createNativeStackNavigator} from '@react-navigation/native-stack';
export const Stack = createNativeStackNavigator();

export const ROUTES = {
  Root: 'Root',
  LOGIN: 'Login',
  REGISTRATION: 'Registration',
  HOME: 'Home',
  LEDGER: 'Ledger',
  TRANSACTIONS: 'Transactions',
  LEND_AND_BORROW: 'LendAndBorrow',
  CHART: 'Analytics',
  PROFILE: 'Profile',
  UpdateProfile: 'UpdateProfile',
  Themes: 'Themes',
  ChangePassword: 'ChangePassword',
  ForgetPassword: 'ForgetPassword',
  AddNote: 'AddNote',
};
