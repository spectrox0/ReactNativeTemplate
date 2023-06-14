import {MMKV} from 'react-native-mmkv';
import {ColorSchemeName} from 'react-native';

export const storage = new MMKV();
export const getStorage = storage.getString;
export const getBoolean = storage.getBoolean;
export const getNumber = storage.getNumber;
export const geBuffer = storage.getBuffer;
export const setStorage = storage.set;

export enum KEYS_STORAGE {
  THEME = 'THEME',
  AUTH_TOKEN = 'AUTH_TOKEN',
}

export const getThemeInStorage = () => {
  return getStorage(KEYS_STORAGE.THEME) as ColorSchemeName;
};
export const setThemeInStorage = (
  theme: NonNullable<ColorSchemeName> = 'dark',
) => {
  return setStorage(KEYS_STORAGE.THEME, theme);
};

export const getAuthToken = () => {
  return getStorage(KEYS_STORAGE.AUTH_TOKEN);
};
export const setAuthToken = (token: string) => {
  return setStorage(KEYS_STORAGE.AUTH_TOKEN, token);
};
