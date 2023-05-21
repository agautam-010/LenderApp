import {THEMES} from './theme';
import {useAppProvider} from 'src/contexts/AppContext';

export const useSelectedTheme = (themeName: string | null = null) =>
  THEMES.find(theme =>
    themeName
      ? theme.name === themeName
      : theme.name === useAppProvider().theme,
  );

export {useAppProvider};
