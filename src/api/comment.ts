import { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { deleteWithToken, postWithToken, putWithToken } from './withToken';

export interface Comment {
  userId: number;
  nickname: string;
  content: string;
  star: number;
}

export const getCommentsP = (musicId: string) => async () => {
  const { data }: AxiosResponse<Comment[]> = await ourAxios.get(`/api/tracks/${musicId}/comments`);
  return data;
};

export const postComment = async ({
  content,
  star,
  musicId,
}: Pick<Comment, 'content' | 'star'> & { musicId: string }) => {
  const { data }: AxiosResponse = await postWithToken(`/api/tracks/${musicId}/comments`, { content, star });
  return data;
};

export const editComment = async ({
  content,
  star,
  commentId,
}: Pick<Comment, 'content' | 'star'> & { commentId: number }) => {
  const { data }: AxiosResponse = await putWithToken(`/api/tracks/comments/${commentId}`, { content, star });
  return data;
};

export const deleteComment = async ({ commentId }: { commentId: number }) => {
  const { data }: AxiosResponse = await deleteWithToken(`/api/tracks/comments/${commentId}`);
};
