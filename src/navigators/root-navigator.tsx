import * as React from 'react';
import {Loading, Authentication, RootNavigation} from './stack-navigator';
import {Stack} from '.';
import {useAppProvider} from 'src/contexts/AppContext';

export function RootNavigator() {
  const {authData, loading} = useAppProvider();
  const availableScreens = React.useMemo(() => {
    if (loading) return Loading;
    if (!authData) return Authentication;

    return RootNavigation;
  }, [loading, authData]);

  return <Stack.Navigator>{availableScreens}</Stack.Navigator>;
}
