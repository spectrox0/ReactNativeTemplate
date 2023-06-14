import {Appearance} from 'react-native';
import {getStorage} from './storage';
import type {ThemeType} from '@ui-kitten/components';

export const initialColorScheme = Appearance.getColorScheme() ?? 'dark';

export interface Theme extends ThemeType {}
export const darkTheme: Theme = {
  colorScheme: 'dark',
  'color-basic-100': '#FFFFFF',
  'color-basic-200': '#F5F5F5',
  'color-basic-300': '#E5E5E5',
  'color-basic-400': '#D4D4D4',
  'color-basic-500': '#C4C4C4',
  'color-basic-600': '#9E9E9E',
  'color-basic-700': '#7E7E7E',
  'color-basic-800': '#5E5E5E',
  'color-basic-900': '#3E3E3E',
  'color-basic-1000': '#1E1E1E',
  'color-primary-100': '#E6F7FF',
  'color-primary-200': '#BAE7FF',
  'color-primary-300': '#91D5FF',
};

export const lightTheme: Theme = {
  colorScheme: 'light',
  'color-basic-100': '#000000',
  'color-basic-200': '#151515',
  'color-basic-300': '#2B2B2B',
  'color-basic-400': '#404040',
  'color-basic-500': '#555555',
  'color-basic-600': '#707070',
  'color-basic-700': '#8B8B8B',
  'color-basic-800': '#A6A6A6',
  'color-basic-900': '#C2C2C2',
  'color-basic-1000': '#DEDEDE',
  'color-primary-100': '#E6F7FF',
  'color-primary-200': '#BAE7FF',
  'color-primary-300': '#91D5FF',
};
export const getTheme = (theme = initialColorScheme) => {
  return theme === 'dark' ? darkTheme : lightTheme;
};

export const getInitialTheme = async () => {
  const theme = getStorage('theme');
  if (theme) {
    return theme as typeof initialColorScheme;
  } else {
    return initialColorScheme;
  }
};
