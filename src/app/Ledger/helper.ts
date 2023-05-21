export const TNSX_TYPE = {
  DEBIT: [1, 4],
  CREDIT: [2, 3],
};

export const getAmount = (amount: number) => {
  var formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return formatter.format(amount);
};

export const getSum = (data: object[], key: string = 'amount') =>
  data.reduce((sum, current: any) => sum + current[key], 0);

export const getDateTime = (dateTime: string, type: string = 'date') => {
  const dateTimeArray = dateTime.split(' ');
  return type == 'date' ? dateTimeArray[0] : dateTimeArray[1];
};

export const isCreditTnsx = (tnsxId: number) =>
  TNSX_TYPE.CREDIT.includes(tnsxId);
