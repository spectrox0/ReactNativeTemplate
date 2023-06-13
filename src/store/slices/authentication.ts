import type {StateCreator} from 'zustand';
export interface AuthenticationStore {
  token?: string | null;
  user?: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}
export const createAuthenticationStore: StateCreator<
  AuthenticationStore
> = set => ({
  token: null,
  user: undefined,
  setToken: (token: string) => set({token}),
  setUser: (user: AuthenticationStore['user']) => set({user}),
});
