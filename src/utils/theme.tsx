import {Appearance, ColorSchemeName} from 'react-native';
import {getStorage} from './storage';

const colorScheme = Appearance.getColorScheme();

export interface Theme {}
export const darkTheme: Theme = {};

export const lightTheme: Theme = {};
export const getTheme = (theme = colorScheme) => {
  return theme === 'dark' ? darkTheme : lightTheme;
};

export const getInitialTheme = async (): Promise<ColorSchemeName> => {
  return getStorage('theme').then(theme => {
    if (theme) {
      return theme as ColorSchemeName;
    } else {
      return colorScheme || 'dark';
    }
  });
};
