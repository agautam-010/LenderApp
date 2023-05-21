import {TypographyProps} from 'lib/types';
import React from 'react';
import {Text} from 'react-native';
import {useSelectedTheme} from 'lib/hooks';
import {getResponsiveFontSize} from 'lib/functions';
import {useAppProvider} from 'src/contexts/AppContext';

export const Typography = ({
  style,
  text,
  color,
  size,
  noOfLine,
  ff,
  fw,
  children,
  letterSpacing = true,
}: TypographyProps) => {
  const {theme, fontSize} = useAppProvider();
  const activeTheme = useSelectedTheme(theme);
  return (
    <Text
      style={{
        color: color ? color : activeTheme?.primaryTextColor,
        fontSize: getResponsiveFontSize(size, fontSize),
        fontWeight: fw,
        letterSpacing: letterSpacing ? 1.5 : 0,
        ...style,
      }}
      numberOfLines={noOfLine}>
      {text}
      {children}
    </Text>
  );
};
