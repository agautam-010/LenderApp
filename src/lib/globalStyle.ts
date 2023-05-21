import {ViewStyle, StyleSheet} from 'react-native';

export const container: ViewStyle = {
  flex: 1,
  paddingHorizontal: 20,
  width: '100%',
};

export const wrap: ViewStyle = {
  width: '100%',
  marginTop: 20,
};

export const row: ViewStyle = {
  width: '100%',
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const centerItem: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const imageStyle = {
  width: '100%',
  height: '100%',
};

const globalStyle = StyleSheet.create({
  addNewBtn: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
  },
});

const GlobalStyle = {
  container,
  wrap,
  row,
  centerItem,
  imageStyle,
  globalStyle,
};

export default GlobalStyle;
