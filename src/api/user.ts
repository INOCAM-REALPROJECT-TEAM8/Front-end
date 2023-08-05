import { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { deleteWithToken } from './withToken';

interface UserInfo {
  email: string;
  password: string;
  nickname?: string;
}

export const login = async ({ email, password }: UserInfo) => {
  console.log(email, password);
  const { data, headers }: Response & AxiosResponse = await ourAxios.post('/api/users/login', { email, password });
  console.log(data);

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
  const { data }: AxiosResponse = await ourAxios.post('/api/users/email/reset-password', { email });
  return data;
};

export const changePW = async ({ password, token }: Pick<UserInfo, 'password'> & { token: string }) => {
  console.log(token);
  const { data }: AxiosResponse = await ourAxios.patch(
    '/api/users/reset-password',
    { password },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      withCredentials: true,
    },
  );
  return data;
};
