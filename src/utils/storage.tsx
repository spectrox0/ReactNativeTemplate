import AsyncStorage from '@react-native-async-storage/async-storage';
export const getStorage = (key: string) => {
  return AsyncStorage.getItem(key);
};

export const setStorage = (key: string, value: any) => {
  return AsyncStorage.setItem(key, value);
};
