import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';
import * as React from 'react';
import {ROUTES} from './';

export const navigationRef = createNavigationContainerRef() as any;

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    if (name != 'goBack') {
      navigationRef.current?.navigate(name, params);
      return;
    }

    navigationRef.current?.goBack();
  }
}

export function useParams() {
  return navigationRef.current.getCurrentRoute().params;
}

export function useIsFocused(): boolean {
  const navigation = navigationRef.current;
  const [isFocused, setIsFocused] = React.useState(
    navigationRef.current.isFocused,
  );

  const valueToReturn = navigationRef.current.isFocused();

  if (isFocused !== valueToReturn) {
    setIsFocused(valueToReturn);
  }

  React.useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () =>
      setIsFocused(true),
    );

    const unsubscribeBlur = navigation.addListener('blur', () =>
      setIsFocused(false),
    );

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);

  return valueToReturn;
}

export const resetNavigation = () => {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'Root'}],
    }),
  );
};

export {ROUTES};
