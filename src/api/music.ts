import { AxiosResponse } from 'axios';
import { deleteWithToken, getWithToken, postWithToken } from './withToken';
import ourAxios from './ourAxios';
import store from '../redux/config/configStore';

export interface MusicInfo {
  trackId?: string;
  album: string;
  title: string;
  artistsStringList: string;
  image: string;
  genres?: string[];
  star?: number;
  yurl?: string;
  artist?: string;
}

//search 관련 api
export const searchMusics = async (keyword: string) => {
  const { data }: AxiosResponse<MusicInfo[]> = await ourAxios.get(`/api/tracks/search?keyword=${keyword}`);
  return data;
};

export const getRecommendSearches = async () => {
  const { data }: AxiosResponse<MusicInfo[]> = await ourAxios.get(`/api/tracks/search/recommend-keywords`);
  return data;
};

//추천, 인기음악 목록 관련 api
export const getRecommendMusics = async () => {
  const { data }: AxiosResponse<MusicInfo[]> = await getWithToken('/api/tracks/recommend');
  return data;
};

export const getPopularMusics = async () => {
  const { data }: AxiosResponse<MusicInfo[]> = await ourAxios.get('/api/tracks/popular');
  return data;
};

//playlist 관련 api
export const getPlaylistP = (userId: number) => async () => {
  const { data }: AxiosResponse<MusicInfo[]> = await getWithToken(`/api/user/${userId}/playlist`);
  return data;
};

export const addToPlaylist = async ({ musicId }: { musicId: string }) => {
  //@ToDo: 요청 body 어떻게 보낼지 명확히 정하기
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse = await postWithToken(`/api/user/${userId}/playlist`, { musicId });
  return data;
};

export const deleteFromPlaylist = async ({ musicId }: { musicId: string }) => {
  //@ToDo: 요청 body 어떻게 보낼지 명확히 정하기. url에 보낼지 정하기
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse = await deleteWithToken(`/api/user/${userId}/playlist${musicId}`);
  return data;
};

//최근 들은 음악 관련 api
export const getRecentHeardsP = (userId: number) => async () => {
  //@ToDo 경로 물어보기
  const { data }: AxiosResponse<MusicInfo[]> = await ourAxios.get(`/api/tracks/users/${userId}/recent`);
  return data;
};

export const addToRecentHeards = async ({ musicId }: { musicId: string }) => {
  //@ToDo: 경로 물어보기
  const { data }: AxiosResponse = await postWithToken(`/api/tracks/${musicId}/recent`, {});
  return data;
};

//곡 상세조회 api
export const getMusicDetailP = (musicId: string) => async () => {
  const { data }: AxiosResponse<MusicInfo> = await ourAxios.get(`/api/tracks/${musicId}`);
  return data;
};

export const getMusicModalInfoP = (musicId: string) => async () => {
  const { data }: AxiosResponse<MusicInfo> = await ourAxios.get(`/api/tracks/${musicId}/modal`);
  return data;
};
