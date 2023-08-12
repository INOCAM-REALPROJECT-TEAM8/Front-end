import { AxiosResponse } from 'axios';
import { getWithToken } from './withToken';

export const getRoomChatsP = (roomId: string) => async () => {
  const { data }: AxiosResponse = await getWithToken(`/api/chat/${roomId}/chat-list`);
  return data;
};
