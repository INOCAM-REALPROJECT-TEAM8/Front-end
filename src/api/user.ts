import { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { deleteWithToken } from './withToken';

interface UserInfo {
  email: string;
  password: string;
  nickname?: string;
}

export const login = async ({ email, password }: UserInfo) => {
  const { data, headers }: Response & AxiosResponse = await ourAxios.post('/api/users/login', { email, password });

  const token = headers.get('Authorization');
  if (token) localStorage.setItem('accessToken', token);

  return data;
};

export const logout = async () => {
  localStorage.removeItem('accessToken');
};

export const signup = async ({ email, password, nickname }: Required<UserInfo>) => {
  const { data }: AxiosResponse = await ourAxios.post('/api/users/signup', { email, password, nickname });
  return data;
};

export const withdraw = async () => {
  const { data }: AxiosResponse = await deleteWithToken('/api/users');
  return data;
};

export const forgetPW = async ({ email }: Pick<UserInfo, 'email'>) => {
  const { data }: AxiosResponse = await ourAxios.post('/api/users/.....', { email });
  return data;
};

export const changePW = async ({ password }: Pick<UserInfo, 'password'>) => {
  const { data }: AxiosResponse = await ourAxios.post('/api/users/reset-password', { password });
  return data;
};
