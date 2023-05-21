import {StyleSheet, View, TextInput} from 'react-native';
import {Row} from '../Container';
import {Typography} from '../Typography';
import {TextInputProps} from 'lib/types';
import React from 'react';
import GlobalStyle from 'lib/globalStyle';
import {Wrap} from '../Container';
import {useAppProvider} from 'src/contexts/AppContext';
import {useSelectedTheme} from 'lib/hooks';
import {getResponsiveFontSize} from 'lib/functions';

export const Input = ({
  onRef,
  value,
  onChange,
  onFocus,
  onBlur,
  onSubmitEditing,
  returnKeyType,
  blurOnSubmit,
  maxLength,
  placeholder,
  label,
  multiline,
  numberOfLines,
  style,
  autoCapitalize = 'none',
  labelStyles,
  labelSize,
  labelColor,
  keyboardType = 'default',
  editable = true,
  right,
  secureTextEntry = false,
  hint = '',
}: TextInputProps) => {
  const {fontSize, theme} = useAppProvider();
  const selectedTheme = useSelectedTheme(theme);
  const inputStyles = multiline ? textareaStyles : defaultStyles;
  const inputVal = value ? {value} : {};
  return (
    <Wrap style={{...styles.container, marginTop: 0}}>
      {label && (
        <>
          <Wrap style={{...styles.label}}>
            <Row autoMargin={false} style={{justifyContent: 'flex-start'}}>
              <Typography
                noOfLine={1}
                size={labelSize || getResponsiveFontSize(13, fontSize)}
                color={labelColor || selectedTheme?.primaryTextColor}
                text={label}
                style={labelStyles}
              />
              {hint ? (
                <Typography
                  size={
                    labelSize
                      ? labelSize - 2
                      : getResponsiveFontSize(11, fontSize)
                  }
                  text={`(${hint})`}
                  style={{...labelStyles, marginLeft: 10}}
                  color={selectedTheme?.buttonBGDisableColor}
                />
              ) : null}
            </Row>
          </Wrap>
        </>
      )}
      {right ? <View style={styles.right}>{right}</View> : null}

      <TextInput
        style={{
          ...styles.input,
          ...inputStyles,
          ...style,
          fontSize: style?.fontSize || fontSize,
          backgroundColor: selectedTheme?.inputBGColor,
        }}
        {...inputVal}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        maxLength={maxLength}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor={selectedTheme?.inputPlaceholderColor}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        editable={editable}
        secureTextEntry={secureTextEntry}
      />
    </Wrap>
  );
};

const defaultStyles = {
  // height: 60,
};

const textareaStyles = {
  height: 150,
  paddingTop: 25,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    // flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    // backgroundColor: '#F6F6F6',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
  },
  label: {
    // paddingHorizontal: 5,
    marginLeft: 5,
  },
  white: {
    position: 'absolute',
    left: 10,
    top: 1,
    backgroundColor: '#F6F6F6',
    zIndex: 1,
    paddingHorizontal: 5,
    height: 15,
    width: '96%',
  },
  right: {
    position: 'absolute',
    zIndex: 9,
    right: 10,
    height: '100%',
    ...GlobalStyle.centerItem,
  },
});
