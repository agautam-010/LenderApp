import {StyleSheet} from 'react-native';
import {colors} from 'lib/theme';

// ImageCropperPicker Styles
export const styles = StyleSheet.create({
  imagePickerModalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  imagePickerModalContainer2: {
    backgroundColor: colors.white,
    width: '90%',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 4,
    flexDirection: 'column',
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey1,
    width: '100%',
  },
  buttonText: {
    flex: 1,
    color: colors.red,
    fontSize: 18,
    // padding: 10,
    textAlign: 'center',
    paddingVertical: 20,
  },
});
