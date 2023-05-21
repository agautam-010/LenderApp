import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {classStatusTabs} from 'lib/constants';
import {BUTTON_TYPES} from 'lib/enums';
import GlobalStyle from 'lib/globalStyle';
import {images} from 'lib/images';
import {useState} from 'react';
import {Image} from 'react-native';
import {Button, Container, Typography} from 'src/common';
import {Card, Row, TochableWrap, Wrap} from 'src/common/Container';
import {colors} from 'lib/colors';
import {SvgUri} from 'react-native-svg';

export default function ChartCom() {
  return (
    <Container>
      <SvgUri
        width="100%"
        height="100%"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      />
    </Container>
  );
}
