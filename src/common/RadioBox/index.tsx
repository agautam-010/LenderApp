import React, {useEffect, useState} from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import {Row} from '../Container';
import TouchableRipple from '../TouchableRipple';
import {styles} from './styles';
import {hexToRGBA} from 'lib/theme';
import {getGeneralCase, getResponsiveFontSize} from 'lib/functions';
import {Typography, VectorIcon} from '../';
import {useSelectedTheme} from 'lib/hooks';
import {useAppProvider} from 'src/contexts/AppContext';

interface RadioBox {
  data: {name: string; value: number}[];
  onSelection: (value: number) => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  selected: number | undefined;
}

const RadioBox = ({
  data,
  onSelection,
  containerStyle = {},
  style = {},
  textStyle = {},
  selected = 0,
}: RadioBox) => {
  const [radio, setRadio] = useState<number>(0);
  const {theme, fontSize} = useAppProvider();
  const selectedTheme = useSelectedTheme(theme);

  useEffect(() => {
    setRadio(selected);
  }, [selected]);

  return (
    <Row style={{...styles.tabsRow, ...containerStyle}}>
      {data.map(({name, value}) => (
        <TouchableRipple
          style={{
            backgroundColor:
              radio === value
                ? selectedTheme?.secondaryColor
                : hexToRGBA(selectedTheme?.secondaryColor),
            marginLeft: value > 0 ? 10 : 0,
            ...styles.tabsContainer,
            ...style,
          }}
          onPress={() => onSelection(value)}
          key={`item_${value}`}>
          <Typography
            text={getGeneralCase(name)}
            color={
              radio === value
                ? selectedTheme?.secondaryTextColor
                : selectedTheme?.secondaryTextColor
            }
            style={{margin: 10, ...textStyle}}
          />
          {radio === value && (
            <VectorIcon
              iconPack="Ionicons"
              name="checkmark-circle-outline"
              color={selectedTheme?.primaryColor}
              size={getResponsiveFontSize(20, fontSize)}
            />
          )}
        </TouchableRipple>
      ))}
    </Row>
  );
};

export default RadioBox;
