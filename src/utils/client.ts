import axiox, {AxiosInstance} from 'axios';
import {config} from '../config/config';
export const client: AxiosInstance = axiox.create({
  baseURL: config.apiBaseUrl,
});
