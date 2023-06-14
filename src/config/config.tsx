//@ts-ignore
import {API_BASE_URL, API_KEY_STRIPE, API_KEY_FIREBASE} from '@env';

export const config = Object.freeze({
  apiBaseUrl: (API_BASE_URL ?? 'http://localhost:3000/api/') as string,
  apiKeyStripe: (API_KEY_STRIPE ?? '') as string,
  apiKeyFirebase: (API_KEY_FIREBASE ?? '') as string,
} as const);
