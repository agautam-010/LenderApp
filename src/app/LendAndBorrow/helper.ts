import {TransactionProps} from 'lib/types';

export const formInitialValues = {
  id: '',
  personId: '',
  name: '',
  amount: null,
  note: '',
  dateTime: '',
  tnsxType: 0,
  tnsxNo: '',
  tnsxMedium: 0,
};

export const isFormValid = (state: TransactionProps) => {
  return (
    (state?.personId || state?.name) &&
    state?.amount &&
    state?.note &&
    state?.tnsxType &&
    state?.tnsxNo &&
    state?.tnsxMedium
  );
};

export const tnxnTypeArray = [
  {name: 'Lend', value: 1},
  {name: 'Lend Intake', value: 3},
  {name: 'Borrow', value: 2},
  {name: 'Borrow Return', value: 4},
];

export const tnxnMediumArray = [
  {name: 'Paytm', value: 1},
  {name: 'ICICI', value: 2},
  {name: 'PhonePe', value: 3},
  {name: 'GPay', value: 4},
];

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
