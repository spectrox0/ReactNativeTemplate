import {create} from 'zustand';
import {
  createAuthenticationStore,
  AuthenticationStore,
} from './slices/authentication';
export type RootState = AuthenticationStore;

export const useStore = create<RootState>((...args) => ({
  ...createAuthenticationStore(...args),
}));
