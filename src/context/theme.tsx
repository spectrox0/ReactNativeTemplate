import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {FCC} from '../types/common';
import {setStorage} from '../utils/storage';
import {Theme, getInitialTheme, getTheme} from '../utils/theme';
import {ColorSchemeName, Dimensions} from 'react-native';

interface ThemeContextSchema {
  setTheme: () => void;
  theme: Theme;
  size: [number | undefined, number | undefined];
}
export const ThemeContext = createContext<ThemeContextSchema>(
  {} as ThemeContextSchema,
);
type Props = {};
export const CustomThemeProvider: FCC<Props> = ({children}) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>();

  const theme = useMemo<Theme>(() => getTheme(colorScheme), [colorScheme]);

  const [size, setSize] = useState<[number | undefined, number | undefined]>([
    Dimensions.get('window').width,
    Dimensions.get('window').height,
  ]);
  useEffect(() => {
    getInitialTheme().then(setColorScheme);
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setSize([window.width, window.height]);
    });
    return () => subscription?.remove();
  }, []);

  const setTheme = useCallback(() => {
    setColorScheme(prevState => {
      const newValue = prevState === 'dark' ? 'light' : 'dark';
      setStorage('theme', newValue);
      return newValue;
    });
  }, [setColorScheme]);

  const value = useMemo<ThemeContextSchema>(
    () => ({theme, setTheme, size}),
    [size, theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};