import { AxiosResponse } from 'axios';
import { getWithToken } from './withToken';
import store from '../redux/config/configStore';
import ourAxios from './ourAxios';

export const getRoomChatsP = (roomId: string) => async () => {
  const { data }: AxiosResponse = await getWithToken(`/api/chat/${roomId}/chat-list`);
  return data;
};

export const getChatRoomList = async () => {
  const { userId } = store.getState().userInfo;
  const { data }: AxiosResponse = await ourAxios.get(`/api/chat/${userId}/room-list`);
  return data;
};
