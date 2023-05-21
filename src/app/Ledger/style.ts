import {StyleSheet} from 'react-native';
import {colors} from 'lib/colors';

const style = StyleSheet.create({
  headerCard: {backgroundColor: colors.disabled, marginTop: 0, padding: 20},
  row: {marginTop: 5},
  btnWrap: {alignItems: 'center'},
  button: {width: '45%', height: 40},
  itemCard: {padding: 20, height: 460},
  listItemBottom: {marginTop: 10},
});

export default style;
