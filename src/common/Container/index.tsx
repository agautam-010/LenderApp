import {StatusBar} from 'react-native';
import GlobalStyle from 'lib/globalStyle';
import {
  ContainerProps,
  KeyboardAvoidProps,
  TochableWrapProps,
  WrapProps,
} from 'lib/types';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../Header';
import {Footer} from '../Footer';
import Spinner from '../Spinner';
import {styles} from './styles';
import {BOTTOM_COMPONENTS} from 'lib/constants';
import {useSelectedTheme} from 'lib/hooks';
import {useAppProvider} from 'src/contexts/AppContext';
import {hexToRGBA} from 'lib/theme';

export const Container = ({
  style,
  children,
  scroll,
  scrollViewStyle,
  spinnerType,
  onLoaderClose,
  header = true,
  headerTitle = '',
  footer = true,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const {authData, theme} = useAppProvider();
  const selectedTheme = useSelectedTheme(theme);

  const bottomChildrens = React.Children.toArray(children).filter((x: any) =>
    BOTTOM_COMPONENTS.includes(x?.type?.name),
  );
  const allOtherChildren = React.Children.toArray(children).filter(
    (x: any) => x.type.name !== 'MonthPicker',
  );

  return (
    <View style={{flex: 1, backgroundColor: selectedTheme?.surfaceBGColor}}>
      <Wrap style={{...styles.safeView, marginTop: insets.top}}>
        {header ? <Header /> : null}
        <Spinner
          type={spinnerType || 'loading'}
          onLoaderClose={onLoaderClose}
        />
        {scroll ? (
          <ScrollView
            style={[style, {marginBottom: footer && authData ? 90 : 0}]}
            contentContainerStyle={[{paddingHorizontal: 20}, scrollViewStyle]}
            showsVerticalScrollIndicator={false}
            stickyHeaderHiddenOnScroll={false}>
            {allOtherChildren}
          </ScrollView>
        ) : (
          <View
            style={[
              GlobalStyle.container,
              style,
              {marginBottom: footer && authData ? 90 : 0},
            ]}>
            {allOtherChildren}
          </View>
        )}
      </Wrap>
      {bottomChildrens ? bottomChildrens : null}
      {footer && authData ? <Footer /> : null}
      <StatusBar
        backgroundColor={selectedTheme?.statusBarColor}
        barStyle={selectedTheme?.statusBarStyle}
      />
    </View>
  );
};

export const Wrap = ({style, autoMargin = true, children}: WrapProps) => {
  return (
    <View style={[autoMargin ? GlobalStyle.wrap : {}, style]}>{children}</View>
  );
};

export const Row = ({style, children, autoMargin = true}: WrapProps) => {
  return (
    <View style={[GlobalStyle.row, {marginTop: autoMargin ? 20 : 0}, style]}>
      {children}
    </View>
  );
};

export const TochableWrap = ({style, children, onPress}: TochableWrapProps) => {
  return (
    <TouchableOpacity style={[GlobalStyle.wrap, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export const KeyboardAvoidWrap = ({style, children}: KeyboardAvoidProps) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, ...style}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
      {children}
    </KeyboardAvoidingView>
  );
};

export const Card = ({style, children, autoMargin = true}: WrapProps) => {
  const activeTheme = useSelectedTheme();
  return (
    <View
      style={[
        autoMargin ? GlobalStyle.wrap : {},
        styles.card,
        {backgroundColor: hexToRGBA(activeTheme?.primaryColor, 0.8)},
        style,
      ]}>
      {children}
    </View>
  );
};
