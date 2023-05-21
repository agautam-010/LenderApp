import {Dimensions} from 'react-native';

export const SCREEN_WIDTH: number = Math.round(Dimensions.get('window').width);
export const SCREEN_HEIGHT: number = Math.round(
  Dimensions.get('window').height,
);

export const IGNORE_LOGS = [
  'Non-serializable values were found in the navigation state',
];

export const classStatusTabs = [
  {name: 'Upcoming', value: 1},
  {name: 'Completed', value: 2},
];

export const BOTTOM_COMPONENTS = ['MonthPicker', 'DatePicker'];

export const WEEK_DAYS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const SPINNER_TYPE = {
  LOADING: 'Loading...',
  SUCCESS: 'Success',
  FAILURE: 'Failed',
  SUBMITTING: 'Submitting...',
};

export const REGEX = {
  email: '',
};

// export const API_BASE_URL = 'http://44.204.58.31:3000';
export const API_BASE_URL = 'http://localhost:3000';
export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

export const PickerRefDefVal = {
  show: () => console.log('Show not ready yet'),
  dismiss: () => console.log('Dismiss not ready yet'),
};
