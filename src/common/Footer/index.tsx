import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cloneElement, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Row, TochableWrap, Wrap} from '../Container';
import {Typography} from '../Typography';
import {styles} from './style';
import {Strings, Theme} from 'src/lib';
import {ROUTES} from 'src/navigators';
import {useSelectedTheme} from 'lib/hooks';

export const Footer = () => {
  const {navigate} = useNavigation();
  const [tab] = useState(ROUTES.Root);
  const theme = useSelectedTheme();

  const getIconName = (name: string) => <Typography text={name} size={11} />;

  const navToScreen = (screen: string) => navigate(screen as never);
  return (
    <Wrap
      style={{
        ...styles.wrap,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Theme.hexToRGBA(theme?.primaryColor, 0.8),
      }}>
      <Row style={styles.row}>
        {icons.map(({name, icon, screen}, idx) => (
          <TochableWrap
            onPress={() => navToScreen(screen as never)}
            style={{
              ...styles.tochable,
              marginTop: idx != 2 ? 10 : 0,
            }}
            key={`tab_${idx}`}>
            {cloneElement(icon, {
              color:
                tab === screen ? theme?.secondaryColor : theme?.secondaryColor,
            })}
            {cloneElement(getIconName(name), {
              color:
                tab === screen ? theme?.secondaryColor : theme?.secondaryColor,
              style: {marginTop: 5},
            })}
          </TochableWrap>
        ))}
      </Row>
    </Wrap>
  );
};

const icons = [
  {
    name: Strings.Home,
    icon: <Foundation name="home" color={Theme.colors.white} size={26} />,
    screen: ROUTES.Root,
  },
  {
    name: Strings.Ledger,
    icon: <Ionicons name="calendar" color={Theme.colors.white} size={20} />,
    screen: ROUTES.LEDGER,
  },
  {
    name: Strings.LendAndBorrow,
    icon: (
      <View style={styles.centerButton}>
        <Feather name="plus" size={25} color={Theme.colors.white} />
      </View>
    ),
    screen: ROUTES.TRANSACTIONS,
  },
  {
    name: Strings.Analytics,
    icon: <Feather name="file-text" color={Theme.colors.white} size={22} />,
    screen: ROUTES.CHART,
  },
  {
    name: Strings.Profile,
    icon: <Feather name="user" color={Theme.colors.white} size={22} />,
    screen: ROUTES.PROFILE,
  },
];
