import {MMKV} from 'react-native-mmkv';
import {ColorSchemeName} from 'react-native';

export const storage = new MMKV();
export const getBoolean = storage.getBoolean;
export const getNumber = storage.getNumber;
export const geBuffer = storage.getBuffer;
export const setStorage = storage.set;

export enum KEYS_STORAGE {
  THEME = 'THEME',
  AUTH_TOKEN = 'AUTH_TOKEN',
}

export function getItem<T>(key: string): T {
  const value = storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export async function removeItem(key: string) {
  storage.delete(key);
}
export const getThemeInStorage = () => {
  return getItem<ColorSchemeName>(KEYS_STORAGE.THEME) ;
};
export const setThemeInStorage = (
  theme: NonNullable<ColorSchemeName> = 'dark',
) => {
  return setStorage(KEYS_STORAGE.THEME, theme);
};

export const getAuthToken = () => {
  return getItem<string>(KEYS_STORAGE.AUTH_TOKEN);
};
export const setAuthToken = (token: string) => {
  return setStorage(KEYS_STORAGE.AUTH_TOKEN, token);
};
