import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {Theme} from 'src/lib';
import {SPINNER_TYPE} from 'lib/enums';
import GlobalStyle from 'lib/globalStyle';
import {images} from 'lib/images';
import {Button} from '../Button';
import {Wrap} from '../Container';
import {Typography} from '../Typography';

import {useAppProvider} from 'src/contexts/AppContext';
import {useSelectedTheme} from 'lib/hooks';

interface SpinnerInterface {
  spinner?: boolean;
  spinnerText?: string;
  type: 'loading' | 'success' | 'failure';
  onLoaderClose?: () => void;
}

const Spinner = ({
  spinnerText,
  type = 'loading',
  onLoaderClose,
}: SpinnerInterface) => {
  const {spinner, theme} = useAppProvider();
  const selectedTheme = useSelectedTheme(theme);
  return (
    <React.Fragment>
      {spinner?.status ? (
        <View
          style={[
            styles.container,
            {backgroundColor: selectedTheme?.primaryColor},
          ]}>
          <Wrap style={styles.contentView}>
            {type === SPINNER_TYPE.LOADING ? (
              <ActivityIndicator
                animating={spinner.status}
                color={Theme.colors.theme.secondary}
              />
            ) : type === SPINNER_TYPE.SUCCESS ? (
              <Image
                source={images.womenProfile}
                style={{width: 100, height: 100}}
              />
            ) : type === SPINNER_TYPE.FAILURE ? (
              <Image
                source={images.womenProfile}
                style={{width: 100, height: 100}}
              />
            ) : null}

            <Typography
              text={
                spinnerText ||
                (type === SPINNER_TYPE.SUCCESS
                  ? 'Success'
                  : type === SPINNER_TYPE.FAILURE
                  ? 'Failed'
                  : 'Submitting')
              }
              size={24}
              color={selectedTheme?.primaryTextColor}
              style={styles.mt10}
            />
          </Wrap>

          {type !== SPINNER_TYPE.LOADING && onLoaderClose && (
            <Wrap
              style={{
                ...GlobalStyle.centerItem,
                height: '20%',
              }}>
              <Button
                title="Back to Home Screen"
                onPress={onLoaderClose}
                type="secondary"
              />
            </Wrap>
          )}
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
    paddingHorizontal: 20,
  },
  contentView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '50%',
  },
  mt10: {marginTop: 10},
});
