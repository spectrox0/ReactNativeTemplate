import {client} from '../utils/client';

interface SignUpRequest {
  username: string;
  password: string;
}
interface SignUpResponse {
  token: string;
}
export const signIn = async (
  request: SignUpRequest,
): Promise<SignUpResponse> => {
  return (await client.post<SignUpResponse>('login', request)).data;
};

interface SignInRequest {
  username: string;
  password: string;
}

interface SignInResponse {
  token: string;
}
export const signUp = async (
  request: SignInRequest,
): Promise<SignInResponse> => {
  return (await client.post<SignInResponse>('register', request)).data;
};
