import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {WEEK_DAYS} from 'lib/constants';
import {useSelectedTheme} from 'lib/hooks';
import {Typography} from '../Typography';

interface CallbackProps {
  selectedYear: string;
  selectedMonth: string;
}

const MonthPicker = ({
  customRef,
  onConfirm,
}: {
  customRef: any;
  onConfirm: ({selectedYear, selectedMonth}: CallbackProps) => void;
}) => {
  const theme = useSelectedTheme();
  const [visiable, setVisiable] = useState(false);
  const [selectedMonth, setelectedMonth] = useState(
    WEEK_DAYS[new Date().getMonth()],
  );
  const [selectedYear, setSelectedYear] = useState(
    `${new Date().getFullYear()}`,
  );

  const show = () => setVisiable(true);
  const dismiss = () => setVisiable(false);

  const getYears = () =>
    Array.from({length: 5}, (_, i) => `${i + new Date().getFullYear() - 2}`);

  const onConfirmPress = () => {
    onConfirm({selectedYear, selectedMonth});
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
            selectedValue={selectedYear}
            onValueChange={itemValue => setSelectedYear(itemValue)}>
            {renderPickerItems(getYears())}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={selectedMonth}
            onValueChange={itemValue => setelectedMonth(itemValue)}>
            {renderPickerItems(WEEK_DAYS)}
          </Picker>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MonthPicker;

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
  },
  outerContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    borderBottomWidth: 0.5,
  },
  toolBarButton: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  toolBarButtonText: {
    fontSize: 15,
    color: '#2d4664',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
});
