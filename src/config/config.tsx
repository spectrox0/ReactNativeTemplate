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
import {z} from 'zod';

const objectConfig = {
  apiBaseUrl: z.string().default(''),
  apiKeyStripe: z.string().default(''),
  apiKeyFirebase: z.string().default(''),
  merchantId: z.string().default(''),
  merchantName: z.string().default(''),
  stripeMinAmount: z.string().default(''),
  stripePublicKey: z.string().default(''),
  googlePayTestEnv: z.string().default(''),
};
export const Config = z.object(objectConfig);

export const config = Config.parse(
  Object.freeze({
    apiBaseUrl: API_BASE_URL,
    apiKeyStripe: API_KEY_STRIPE,
    apiKeyFirebase: API_KEY_FIREBASE,
    merchantId: APP_MERCHANT_ID,
    merchantName: APP_MERCHANT_NAME,
    stripeMinAmount: STRIPE_MIN_AMOUNT,
    stripePublicKey: STRIPE_PUBLIC_KEY,
    googlePayTestEnv: GOOGLE_PAY_TEST_ENV,
  } as Record<keyof typeof objectConfig, string | number | boolean | undefined | null>),
);
