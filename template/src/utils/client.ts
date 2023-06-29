import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {config as projectConfig} from 'src/config/config';
import {getAuthToken} from './storage';

const AuthHeader = (): string => {
  return `Bearer ${getAuthToken() || ''}`;
};

interface HTTP {
  'Accept-Language'?: string;
}

export const client = (
  props: HTTP = {},
  baseURL = `${projectConfig.apiBaseUrl}/api`,
  timeout = 7000,
  locale = 'EN',
): AxiosInstance => {
  const Authorization = AuthHeader();
  const config: AxiosRequestConfig = {
    baseURL,
    timeout,
    headers: {
      'Cache-Control': 'no-cache',
      Authorization,
      'Accept-Language': locale,
      ...props,
    },
  };
  return axios.create(config);
};
