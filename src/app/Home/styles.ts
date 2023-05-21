import {colors} from 'lib/colors';
import GlobalStyle from 'lib/globalStyle';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabsRow: {
    ...GlobalStyle.centerItem,
    flexWrap: 'wrap',
  },
  tabsContainer: {width: 'auto', borderRadius: 20},
  cardWrap: {marginTop: 0},
  cardRow: {padding: 15, marginTop: 0},
  rowWrap: {
    width: '30%',
    marginTop: 0,
    minHeight: 200,
  },
  profileImgWrap: {
    width: 85,
    height: 85,
    marginTop: 5,
    overflow: 'hidden',
    borderRadius: 45,
  },
  cardContentWrap: {
    width: '70%',
    marginTop: 0,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cardBookingBtn: {
    height: 30,
    width: 70,
    backgroundColor: colors.orange,
    marginTop: 10,
  },
  cardJoinBtn: {
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  cardCancelBtn: {
    height: 40,
    width: 90,
    borderColor: colors.grey1,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 20,
  },
});
