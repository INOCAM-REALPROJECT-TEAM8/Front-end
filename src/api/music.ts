import { AxiosResponse } from 'axios';
import { deleteWithToken, getWithToken, postWithToken } from './withToken';
import ourAxios from './ourAxios';
import store from '../redux/config/configStore';

export interface MusicInfo {
  id: string;
  title: string;
  artist: string;
  image: string;
  genre?: string[];
  rate?: number;
  yUrl?: string;
}

export const getRecommendMusics = async () => {
  const { data }: AxiosResponse<MusicInfo[]> = await getWithToken('/api/tracks/recommend');
  return data;
};

export const getPopularMusics = async () => {
  const { data }: AxiosResponse<MusicInfo[]> = await ourAxios.get('/api/tracks/popular');
  return data;
};

export const getPlaylist = async () => {
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse<MusicInfo[]> = await getWithToken(`/api/user/${userId}/playlist`);
  return data;
};

export const addToPlaylist = async ({ musicId }: { musicId: string }) => {
  //@ToDo: 요청 body 어떻게 보낼지 명확히 정하기
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse = await postWithToken(`/api/user/${userId}/playlist`, { musicId });
};

export const deleteFromPlaylist = async ({ musicId }: { musicId: string }) => {
  //@ToDo: 요청 body 어떻게 보낼지 명확히 정하기. url에 보낼지 정하기
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse = await deleteWithToken(`/api/user/${userId}/playlist${musicId}`);
};

export const getRecentHeards = async () => {
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse<MusicInfo[]> = await getWithToken(`/api/users/${userId}/recent`);
  return data;
};

export const addToRecentHeards = async ({ musicId }: { musicId: string }) => {
  //@ToDo: 요청 body 어떻게 보낼지 명확히 정하기
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse = await postWithToken(`/api/users/${userId}/recent`, { musicId });
  return data;
};
