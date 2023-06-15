import {
  API_BASE_URL,
  API_KEY_STRIPE,
  API_KEY_FIREBASE,
  APP_MERCHANT_ID,
  APP_MERCHANT_NAME,
  STRIPE_MIN_AMOUNT,
  STRIPE_PUBLIC_KEY,
  GOOGLE_PAY_TEST_ENV,
  //@ts-ignore
} from '@env';

export const config = Object.freeze({
  apiBaseUrl: (API_BASE_URL ?? 'http://localhost:4000/api/') as string,
  apiKeyStripe: (API_KEY_STRIPE ?? '') as string,
  apiKeyFirebase: (API_KEY_FIREBASE ?? '') as string,
  merchantId: APP_MERCHANT_ID ?? '',
  merchantName: APP_MERCHANT_NAME ?? '',
  stripeMinAmount: STRIPE_MIN_AMOUNT ?? '',
  stripePublicKey: STRIPE_PUBLIC_KEY ?? '',
  googlePayTestEnv: GOOGLE_PAY_TEST_ENV ?? '',
} as const);
