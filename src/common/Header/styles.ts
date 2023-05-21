import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from 'lib/constants';
export const styles = StyleSheet.create({
  wrap: {marginTop: 0, marginVertical: 5},
  row: {marginTop: 0, paddingHorizontal: 20, justifyContent: 'flex-start'},
  backWrap: {
    marginTop: 0,
    width: 50,
  },
  titleWrap: {
    marginTop: 0,
    alignItems: 'center',
    width: SCREEN_WIDTH - 140,
  },
  actionMenuWrap: {
    justifyContent: 'flex-end',
    width: 50,
    marginTop: 0,
  },
  hambergurMenuWrap: {marginTop: 0, height: 25, width: 25},
  hambergurMenu: {transform: [{rotate: '90deg'}]},
});
