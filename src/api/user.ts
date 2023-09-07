import { AxiosError, AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { deleteWithToken, getWithToken, patchFormDataWithToken } from './withToken';
import jwtDecode from 'jwt-decode';
import store from '../redux/config/configStore';
import { userLogin, userLogout } from '../redux/modules/userInfo';
import { AES, enc } from 'crypto-js';

interface UserInfo {
  userId?: number;
  email: string;
  password: string;
  nickname?: string; //어느 곳에 들어가는지 확실하지 않을 때 ?로 사용(옵션으로 들어가도 되고 안 들어가도 되고)
}

export interface UserPageInfo extends Omit<UserInfo, 'email' | 'password'> {
  imageUrl?: string | null;
  following?: number;
  follower?: number;
  isFollowing?: boolean;
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

      let response: Response & AxiosResponse;

      try {
        response = await ourAxios.post(
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

        const authorization = response?.headers.get('Authorization');
        if (authorization) {
          const token = authorization.replace('Bearer ', '');
          accessToken = token;

          const decoded = jwtDecode<TokenPayload>(token);
          const nickname = decoded.nickname;
          const userId = decoded.userId;
        }
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response && !error.response.data.success) {
            logout();
            alert('로그아웃 되었습니다.');
            return;
          }
        }
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
    const profileImageUrl = data.userProfileImage;
    store.dispatch(userLogin({ email, nickname, userId, profileImageUrl }));
  }

  const refreshToken = headers.get('refresh-token');
  if (refreshToken) {
    const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY;

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

export const signup = async ({ email, password, nickname }: UserInfo) => {
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

export const getUserInfo = (userId: number) => async (): Promise<UserPageInfo> => {
  const { data }: AxiosResponse<UserPageInfo> = await getWithToken(`/api/users/user-info/${userId}`);
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

export const updateUserInfo = async ({ userId, formData }: { userId: number; formData: FormData }) => {
  const { data }: AxiosResponse = await patchFormDataWithToken(`/api/users/update-profile`, formData);
  return data;
};
//useMutation 쓸 경우에는 인자가 하나만 들어갈 수 있으므로 인자가 2개 이상 들어갈 경우 미리 객체로 묶어서 사용합시다.

export const kakaoLogin = async ({ code }: { code: string }) => {
  const { data, headers }: Response & AxiosResponse = await ourAxios.get(`/api/users/oauth2/kakao?code=${code}`);

  console.log('Headers: ', headers);

  const authorization = headers.get('Authorization');
  console.log('Authorization: ', authorization);
  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    accessToken = token;

    const decoded = jwtDecode<TokenPayload>(token);
    const nickname = decoded.nickname;
    const userId = decoded.userId;
    const profileImageUrl = data.userProfileImage;
    store.dispatch(userLogin({ email: '', nickname, userId, profileImageUrl }));
  }

  const refreshToken = headers.get('refresh-token');
  if (refreshToken) {
    const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY;

    if (secretKey) {
      const encryptedToken = AES.encrypt(refreshToken, secretKey).toString();
      console.log(encryptedToken);
      localStorage.setItem('refreshToken', encryptedToken);
    }
  }
  return data;
};

export const googleLogin = async ({ code }: { code: string }) => {
  const { data, headers }: Response & AxiosResponse = await ourAxios.get(`/api/users/oauth2/google?code=${code}`);

  const authorization = headers.get('Authorization');
  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    accessToken = token;

    const decoded = jwtDecode<TokenPayload>(token);
    const nickname = decoded.nickname;
    const userId = decoded.userId;
    const profileImageUrl = data.userProfileImage;
    store.dispatch(userLogin({ email: '', nickname, userId, profileImageUrl }));
  }

  const refreshToken = headers.get('refresh-token');
  if (refreshToken) {
    const secretKey = process.env.REACT_APP_CRYPTO_SECRET_KEY;

    if (secretKey) {
      const encryptedToken = AES.encrypt(refreshToken, secretKey).toString();
      console.log(encryptedToken);
      localStorage.setItem('refreshToken', encryptedToken);
    }
  }
  return data;
};
