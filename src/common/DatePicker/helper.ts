const mod = (n: number, x: number) => ((n % x) + x) % x;

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const daysInMonth = (year: number | string, month: number | string) => {
  if (typeof year === 'string') year = parseInt(year);
  if (typeof month === 'string') month = parseInt(month);
  if (isNaN(year) || isNaN(month)) return NaN;

  const modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1
    ? isLeapYear(year)
      ? 29
      : 28
    : 31 - ((modMonth % 7) % 2);
};

export const getYears = () =>
  Array.from({length: 5}, (_, i) => `${i + new Date().getFullYear() - 2}`);

export interface DatePickerProps {
  customRef: any;
  onConfirm: (date: string) => void;
  onCancel?: () => void;
}
