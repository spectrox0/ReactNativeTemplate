import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {FCC} from '../types/common';
import {setStorage} from '../utils/storage';
import {getInitialTheme} from '../utils/theme';
import {Dimensions} from 'react-native';

interface ThemeContextSchema {
  setTheme: () => void;
  theme: boolean;
  size: [number | undefined, number | undefined];
}
export const ThemeContext = createContext<ThemeContextSchema>(
  {} as ThemeContextSchema,
);
type Props = {
  theme?: string;
};
export const CustomThemeProvider: FCC<Props> = ({
  children,
  theme: initialTheme = getInitialTheme(),
}) => {
  const [isDark, setIsDark] = useState<string>(initialTheme);

  const theme = useMemo<Theme>(() => getTheme(isDark), [isDark]);

  const [size, setSize] = useState<[number | undefined, number | undefined]>([
    Dimensions.get('window').width,
    Dimensions.get('window').height,
  ]);
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setSize([window.width, window.height]);
    });
    return () => subscription?.remove();
  }, []);

  const setTheme = useCallback(() => {
    setIsDark(prevState => {
      setStorage('theme', theme === 'dark' ? 'light' : 'dark');
      return !prevState;
    });
  }, [theme]);

  const value = useMemo<ThemeContextSchema>(
    () => ({theme: isDark, setTheme, size}),
    [theme, size],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
