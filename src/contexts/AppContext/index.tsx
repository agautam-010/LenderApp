import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SPINNER_TYPE} from 'lib/constants';
import {AuthData, authService} from './services';
import {SpinnerStatusProps} from 'lib/types';
import {ROUTES} from 'src/navigators';
import {THEMES, FONT_SIZES} from 'lib/theme';

type AppContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(state: AuthData): Promise<void>;
  signOut(): void;
  spinner: SpinnerStatusProps;
  setSpinner: ({status, type}: SpinnerStatusProps) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
};

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  const [authData, setAuthData] = useState<AuthData>();

  const [loading, setLoading] = useState(true);
  const [spinner, setSpinnerState] = useState({
    status: false,
    type: SPINNER_TYPE.LOADING,
  });
  const [activeTab, setTab] = useState(ROUTES.HOME);
  const [theme, setThemeState] = useState(THEMES[0].name);
  const [fontSize, setFontSizeState] = useState(FONT_SIZES[1].value);

  useEffect(() => {
    loadStorageData();
  }, []);

  const setActiveTab = async (tab: string) => setTab(tab);

  const setSpinner = async ({
    status,
    type = SPINNER_TYPE.LOADING,
  }: SpinnerStatusProps) => setSpinnerState({...spinner, status, type});

  const setTheme = async (theme: string) => {
    setThemeState(theme);
    AsyncStorage.setItem('@Theme', theme);
  };
  const setFontSize = (size: number) => {
    setFontSizeState(size);
    AsyncStorage.setItem('@FontSize', size.toString());
  };

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
      const theme = await AsyncStorage.getItem('@Theme');
      const fontSize = await AsyncStorage.getItem('@FontSize');

      if (theme) setThemeState(theme);
      if (fontSize) setFontSizeState(parseInt(fontSize));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (state: AuthData) => {
    const _authData = await authService.signIn(state);
    setSpinner({status: false, type: SPINNER_TYPE.LOADING});
    setAuthData(_authData);
    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
  };

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    <AppContext.Provider
      value={{
        authData,
        loading,
        spinner,
        setSpinner,
        signIn,
        signOut,
        activeTab,
        setActiveTab,
        theme,
        setTheme,
        fontSize,
        setFontSize,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useAppProvider(): AppContextData {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppProvider must be used within an AppProvider');
  }
  return context;
}

export {AppContext, AppProvider, useAppProvider};
