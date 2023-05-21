import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from 'lib/constants';

export default StyleSheet.create({
  themeItem: {
    height: 100,
    margin: 5,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: (SCREEN_WIDTH - 70) / 3,
  },
  selectedOverlay: {
    marginTop: 0,
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
  },
  heading: {marginLeft: 10, alignSelf: 'flex-start'},
  radio: {width: 100, alignItems: 'center'},
  radioWrap: {justifyContent: 'flex-start'},
  applyButton: {position: 'absolute', right: 10},
});
