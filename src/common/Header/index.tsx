import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Row, Wrap, TochableWrap} from '../Container';
import {Typography} from '../Typography';
import {styles} from './styles';
import {ROUTES} from 'src/navigators';
import {useNavigation} from '@react-navigation/native';
import {getCamelToGeneralCase} from 'lib/functions';
import {useAppProvider} from 'src/contexts/AppContext';
import {useSelectedTheme} from 'lib/hooks';

export const Header = () => {
  const navigation = useNavigation();
  const navState = navigation.getState();
  const {authData, theme} = useAppProvider();
  const activeTheme = useSelectedTheme(theme);

  return (
    <Wrap style={{...styles.wrap, paddingVertical: 10}}>
      <Row style={styles.row}>
        <Wrap style={styles.backWrap}>
          {navState.index ? (
            <TochableWrap
              style={{marginTop: 0}}
              onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                color={activeTheme?.primaryColor}
                size={25}
              />
            </TochableWrap>
          ) : authData ? (
            <Wrap style={styles.hambergurMenuWrap}>
              <Feather
                name="bar-chart-2"
                color={activeTheme?.primaryColor}
                size={25}
                // onPress={() => navigation.toggleDrawer()}
                style={styles.hambergurMenu}
              />
            </Wrap>
          ) : null}
        </Wrap>
        <Wrap style={styles.titleWrap}>
          <Typography
            text={getCamelToGeneralCase(navState?.routes[navState.index].name)}
            size={18}
            fw="500"
          />
        </Wrap>
        <Row style={styles.actionMenuWrap}>
          <Ionicons
            name="md-settings"
            color={activeTheme?.primaryColor}
            size={25}
            onPress={() => navigation.navigate(ROUTES.Themes)}
          />
        </Row>
      </Row>
    </Wrap>
  );
};
