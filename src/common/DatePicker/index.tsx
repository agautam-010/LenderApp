import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {SHORT_MONTHS} from 'lib/constants';
import {useSelectedTheme} from 'lib/hooks';
import {Typography} from '../Typography';
import {daysInMonth, getYears, DatePickerProps} from './helper';
import styles from './styles';

const DatePicker = ({customRef, onConfirm, onCancel}: DatePickerProps) => {
  const theme = useSelectedTheme();
  const [visiable, setVisiable] = useState(false);
  const [days, setDays] = useState<string[]>([]);
  const [selectedMonth, setelectedMonth] = useState(
    SHORT_MONTHS[new Date().getMonth()],
  );
  const [selectedYear, setSelectedYear] = useState(
    `${new Date().getFullYear()}`,
  );
  const [currentDay, setCurrentDay] = useState<string>(
    `${new Date().getDate()}`,
  );

  const show = () => setVisiable(true);
  const dismiss = () => {
    setVisiable(false);
    onCancel && onCancel();
    Keyboard.dismiss();
  };

  const onConfirmPress = () => {
    onConfirm(`${currentDay} ${selectedMonth}, ${selectedYear}`);
    dismiss();
  };

  const renderPickerItems = (data: string[]) => {
    let items = data.map((value: string, index: number) => (
      <Picker.Item
        key={'r-' + index}
        label={'' + value}
        value={value}
        color={theme?.textColor}
      />
    ));
    return items;
  };

  useEffect(() => {
    customRef.current = {show, dismiss};
  }, []);

  useEffect(() => {
    const selectedMonthInx = SHORT_MONTHS.indexOf(selectedMonth);
    const noArr = Array.from(
      {length: daysInMonth(selectedYear, selectedMonthInx)},
      (_, i) => `${i + 1}`,
    );
    setDays(noArr);
  }, [selectedYear, selectedMonth]);

  if (!visiable) return null;

  return (
    <TouchableOpacity style={styles.modal} activeOpacity={1}>
      <View
        style={[
          styles.outerContainer,
          {backgroundColor: theme?.surfaceBGColor},
        ]}>
        <View style={[styles.toolBar, {borderColor: theme?.borderColor}]}>
          <TouchableOpacity style={styles.toolBarButton} onPress={dismiss}>
            <Typography text="Cancel" />
          </TouchableOpacity>
          <View style={{flex: 1}} />
          <TouchableOpacity
            style={styles.toolBarButton}
            onPress={onConfirmPress}>
            <Typography text="Confirm" />
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={currentDay}
            onValueChange={itemValue => setCurrentDay(itemValue)}>
            {renderPickerItems(days)}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={selectedMonth}
            onValueChange={itemValue => setelectedMonth(itemValue)}>
            {renderPickerItems(SHORT_MONTHS)}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={selectedYear}
            onValueChange={itemValue => setSelectedYear(itemValue)}>
            {renderPickerItems(getYears())}
          </Picker>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DatePicker;
