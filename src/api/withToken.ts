import { AxiosError, AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { accessToken, getNewToken } from './user';
import store from '../redux/config/configStore';

export const postWithToken = async <T>(path: string, data: T): Promise<AxiosResponse> => {
  const { isLoggedIn } = store.getState().userInfo;
  if (!accessToken) await getNewToken();

  let response;
  try {
    response = await ourAxios.post(path, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (!isLoggedIn) {
        response = error.response;
      } else if (error.response && error.response.data.expired) {
        await getNewToken();
        response = await postWithToken(path, data);
      }
    }
  }

  return response!;
};

export const getWithToken = async (path: string): Promise<AxiosResponse> => {
  const { isLoggedIn } = store.getState().userInfo;
  if (!accessToken) await getNewToken();

  let response;
  try {
    response = await ourAxios.get(path, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (!isLoggedIn) {
        response = error.response;
      } else if (error.response && error.response.data.expired) {
        await getNewToken();
        response = await getWithToken(path);
      }
    }
  }

  return response!;
};

export const deleteWithToken = async (path: string): Promise<AxiosResponse> => {
  const { isLoggedIn } = store.getState().userInfo;
  if (!accessToken) await getNewToken();

  let response;
  try {
    response = await ourAxios.delete(path, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (!isLoggedIn) {
        response = error.response;
      } else if (error.response && error.response.data.expired) {
        await getNewToken();
        response = await deleteWithToken(path);
      }
    }
  }

  return response!;
};

export const putWithToken = async <T>(path: string, data: T): Promise<AxiosResponse> => {
  const { isLoggedIn } = store.getState().userInfo;
  if (!accessToken) await getNewToken();

  let response;
  try {
    response = await ourAxios.put(path, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (!isLoggedIn) {
        response = error.response;
      } else if (error.response && error.response.data.expired) {
        await getNewToken();
        response = await putWithToken(path, data);
      }
    }
  }

  return response!;
};
