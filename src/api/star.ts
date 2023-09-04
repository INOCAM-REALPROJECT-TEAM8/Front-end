import { AxiosResponse } from 'axios';
import { deleteWithToken, putWithToken } from './withToken';
import ourAxios from './ourAxios';

export interface Star {
  star: number;
}

export const getMusicReview = (trackId: string) => async () => {
  const { data }: AxiosResponse<[]> = await ourAxios.get(`/api/tracks/${trackId}/star`);
  return data;
};

// export const postMusicReview = (trackId: string) => async (content: string, star: number) => {
//   const { data }: AxiosResponse<[]> = await postWithToken(`/api/tracks/${trackId}/comments`, { content, star });
//   return data;
// };

export const putMusicReview = (trackId: string) => async (star: number) => {
  const { data }: AxiosResponse<[]> = await putWithToken(`/api/tracks/${trackId}/star`, { star });
  return data;
};

export const deleteMusicReview = (trackId: string) => async () => {
  const { data }: AxiosResponse<[]> = await deleteWithToken(`/api/tracks/${trackId}/star`);
  return data;
};
