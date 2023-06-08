import {Appearance} from 'react-native';
import {getStorage} from './storage';
const colorScheme = Appearance.getColorScheme();
export const getTheme = (theme = colorScheme) => {
  return theme === 'dark' ? darkTheme : lightTheme;
};

export const getInitialTheme = async () => {
  await getStorage('theme').then(theme => {
    if (theme) {
      return theme;
    } else {
      return colorScheme;
    }
  });
};
