import React, {useEffect, useState} from 'react';
import {
  Container,
  Button,
  Typography,
  TochableWrap,
  FlatList,
  Wrap,
  RadioBox,
  I18nManager,
  Row,
  Switch,
  VectorIcon,
} from 'src/common';
import {THEMES, FONT_SIZES, colors} from 'lib/theme';
import {useAppProvider} from 'src/contexts/AppContext';
import {useSelectedTheme} from 'lib/hooks';
import {resetNavigation} from 'navigators/utils';
import styles from './styles';
import {getGeneralCase, RNRestart} from 'lib/functions';

export default function Themes() {
  const {theme, setTheme, fontSize, setFontSize} = useAppProvider();
  const [selected, setSelected] = useState(theme || THEMES[0].name);
  const [font, setFont] = useState(fontSize || FONT_SIZES[1].value);
  const [isSwitchOn, setIsSwitchOn] = React.useState(I18nManager.isRTL);
  const activeTheme = useSelectedTheme(theme);

  const onSetTheme = async () => {
    setTheme(selected);
    setFontSize(font);
    setRTL();
  };

  const setRTL = async () => {
    if (I18nManager.isRTL !== isSwitchOn) {
      if (I18nManager.isRTL) await I18nManager.forceRTL(false);
      else await I18nManager.forceRTL(true);
      // RNRestart.Restart();
    } else {
      resetNavigation();
    }
  };

  return (
    <Container>
      <Wrap style={{marginTop: 0}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={THEMES}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <TochableWrap
                onPress={() => setSelected(item.name)}
                style={{
                  ...styles.themeItem,
                  backgroundColor: item.primaryColor,
                }}>
                <Typography
                  text={getGeneralCase(item.name)}
                  color={item.primaryTextColor}
                />
                {selected === item.name ? (
                  <VectorIcon
                    iconPack="Ionicons"
                    name="checkmark-done"
                    color={item?.primaryTextColor}
                    size={25}
                  />
                ) : null}
              </TochableWrap>
            );
          }}
          ListFooterComponent={() => (
            <>
              <Wrap>
                <Typography
                  text="Font Size"
                  size={20}
                  fw="bold"
                  style={styles.heading}
                />
                <RadioBox
                  data={FONT_SIZES}
                  onSelection={setFont}
                  style={styles.radio}
                  containerStyle={styles.radioWrap}
                  selected={font || fontSize}
                />
              </Wrap>
              <Row>
                <Typography
                  text="RTL"
                  size={20}
                  fw="bold"
                  style={{marginLeft: 10}}
                />
                <Switch
                  thumbColor={activeTheme?.primaryColor}
                  value={isSwitchOn}
                  onValueChange={setIsSwitchOn}
                  trackColor={{
                    true: activeTheme?.buttonBGColor,
                    false: colors.grey,
                  }}
                  ios_backgroundColor={colors.grey}
                />
              </Row>
              <Wrap style={{marginBottom: 10}}>
                <Button title="Apply" onPress={onSetTheme} />
              </Wrap>
            </>
          )}
        />
      </Wrap>
    </Container>
  );
}
