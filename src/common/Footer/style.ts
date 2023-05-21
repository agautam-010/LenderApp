import GlobalStyle from "lib/globalStyle";
import { StyleSheet } from "react-native";
import {Theme} from 'src/lib';

export const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Theme.hexToRGBA("#fff", 0.8),
    height: 90,
    marginTop: 0,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  row: { paddingHorizontal: 20, marginTop: 0 },
  tochable: { ...GlobalStyle.centerItem, height: 90, width: "auto" },
  centerButton: {
    height: 40,
    width: 40,
    backgroundColor: Theme.hexToRGBA("#fff", 0.15),
    borderRadius: 20,
    ...GlobalStyle.centerItem,
  },
});
