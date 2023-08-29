import axios, { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';
import { getWithToken, postWithToken } from './withToken';

export interface FollowUser {
  id: number;
  nickname: string;
  image: string;
}

export interface FollowResponse {
  msg: string;
  success: boolean;
}

export const followUser = async (userId: number): Promise<AxiosResponse<FollowResponse>> => {
  try {
    const response: AxiosResponse<FollowResponse> = await postWithToken(`/api/follow/users/${userId}`, {});
    return response;
  } catch (error) {
    throw error;
  }
};

export const unfollowUser = async (userId: number): Promise<AxiosResponse<FollowResponse>> => {
  try {
    const response: AxiosResponse<FollowResponse> = await postWithToken(`/api/follow/users/${userId}`, {});
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowingList = async (userId: number): Promise<AxiosResponse<FollowUser[]>> => {
  try {
    const response: AxiosResponse<FollowUser[]> = await getWithToken(`/api/following/users/${userId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowerList = async (userId: number): Promise<AxiosResponse<FollowUser[]>> => {
  try {
    const response: AxiosResponse<FollowUser[]> = await getWithToken(`/api/follower/users/${userId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
