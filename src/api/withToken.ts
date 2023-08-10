import { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';

export const postWithToken = async <T>(path: string, data: T) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await ourAxios.post(path, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  return response;
};

export const getWithToken = async (path: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await ourAxios.get(path, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  return response;
};

export const deleteWithToken = async (path: string): Promise<AxiosResponse> => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await ourAxios.delete(path, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  return response;
};

export const putWithToken = async <T>(path: string, data: T) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await ourAxios.put(path, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  return response;
};
