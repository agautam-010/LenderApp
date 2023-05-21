import {StyleSheet, View} from 'react-native';
import {Theme} from 'src/lib';
import GlobalStyle from 'lib/globalStyle';
import React from 'react';
import {Row} from '../Container';
import {Typography} from '../Typography';
import {useSelectedTheme} from 'lib/hooks';

export const OrSeperator = ({title = 'OR'}: {title?: string}) => {
  const theme = useSelectedTheme();
  return (
    <Row style={{alignItems: 'center'}}>
      <View style={[styles.border, {backgroundColor: theme?.borderColor}]} />
      <View style={[styles.orWrap, {backgroundColor: theme?.primaryColor}]}>
        <Typography text={title.toLocaleUpperCase()} />
      </View>
      <View style={[styles.border, {backgroundColor: theme?.borderColor}]} />
    </Row>
  );
};

const styles = StyleSheet.create({
  orWrap: {
    ...GlobalStyle.centerItem,
    height: 50,
    width: 100,

    paddingHorizontal: 10,
    borderRadius: 25,
  },
  border: {
    height: 1,
    width: '34%',
  },
});
