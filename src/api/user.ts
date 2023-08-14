import { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { deleteWithToken } from './withToken';
import jwtDecode from 'jwt-decode';
import store from '../redux/config/configStore';
import { userLogin, userLogout } from '../redux/modules/userInfo';
import { AES, enc } from 'crypto-js';

interface UserInfo {
  email: string;
  password: string;
  nickname?: string;
}

interface TokenPayload {
  auth: string;
  nickname: string;
  userId: number;
  exp: number;
  iat: number;
}

export let accessToken = '';

export const getNewToken = async () => {
  const encryptedToken = localStorage.getItem('refreshToken');
  if (encryptedToken) {
    const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY;
    if (secretKey) {
      const decryptedBytes = AES.decrypt(encryptedToken, secretKey);
      const refreshToken = decryptedBytes.toString(enc.Utf8);

      const { headers }: Response & AxiosResponse = await ourAxios.post(
        '/api/token/refresh',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Refresh-Token': `${refreshToken}`,
          },
          withCredentials: true,
        },
      );

      const authorization = headers.get('Authorization');
      if (authorization) {
        const token = authorization.replace('Bearer ', '');
        accessToken = token;

        const decoded = jwtDecode<TokenPayload>(token);
        const nickname = decoded.nickname;
        const userId = decoded.userId;
      }
    }
  } else {
    logout();
  }
};

export const login = async ({ email, password }: UserInfo) => {
  const { data, headers }: Response & AxiosResponse = await ourAxios.post('/api/users/login', { email, password });

  const authorization = headers.get('Authorization');
  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    accessToken = token;

    const decoded = jwtDecode<TokenPayload>(token);
    const nickname = decoded.nickname;
    const userId = decoded.userId;
    store.dispatch(userLogin({ email, nickname, userId }));
  }

  const refreshToken = headers.get('refresh-token');
  if (refreshToken) {
    const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY;
    console.log(secretKey);
    if (secretKey) {
      const encryptedToken = AES.encrypt(refreshToken, secretKey).toString();
      console.log(encryptedToken);
      localStorage.setItem('refreshToken', encryptedToken);
    }
  }

  return data;
};

export const logout = async () => {
  localStorage.removeItem('refreshToken');
  accessToken = '';
  store.dispatch(userLogout());
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
