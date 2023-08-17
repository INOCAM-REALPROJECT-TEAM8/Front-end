import { AxiosResponse } from 'axios';
import { deleteWithToken, postWithToken, putWithToken } from './withToken';
import ourAxios from './ourAxios';

export const getMusicReview = (trackId: string) => async () => {
  const { data }: AxiosResponse<[]> = await ourAxios.get(`/api/tracks/${trackId}/comments`);
  return data;
};

export const postMusicReview = (trackId: string) => async (content: string, star: number) => {
  const { data }: AxiosResponse<[]> = await postWithToken(`/api/tracks/${trackId}/comments`, { content, star });
  return data;
};

export const putMusicReview = (commentId: string) => async (content: string, star: number) => {
  const { data }: AxiosResponse<[]> = await putWithToken(`/api/tracks/comments/${commentId}`, { content, star });
  return data;
};

export const deleteMusicReview = (commentId: string) => async () => {
  const { data }: AxiosResponse<[]> = await deleteWithToken(`/api/tracks/comments/${commentId}`);
  return data;
};
