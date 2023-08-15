import axios, { AxiosResponse } from 'axios';
import ourAxios from './ourAxios';

export interface FollowUser {
  id: number;
  nickname: string;
  image: string;
}

export interface FollowResponse {
  msg: string;
  success: boolean;
}

export const jwt: string | null = localStorage.getItem('accessToken');

export const followUser = async (userId: number): Promise<AxiosResponse<FollowResponse>> => {
  try {
    const response: AxiosResponse<FollowResponse> = await ourAxios.post(
      `/api/follow/users/${userId}`,
      {},
      {
        headers: {
          Authorization: jwt ? `Bearer ${jwt}` : undefined,
        },
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const unfollowUser = async (userId: number): Promise<AxiosResponse<FollowResponse>> => {
  try {
    const response: AxiosResponse<FollowResponse> = await ourAxios.delete(`/api/follow/users/${userId}`, {
      headers: {
        Authorization: jwt ? `Bearer ${jwt}` : undefined,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowingList = async (userId: number): Promise<AxiosResponse<FollowUser[]>> => {
  try {
    const response: AxiosResponse<FollowUser[]> = await ourAxios.get(`/api/following/users/${userId}`, {
      headers: {
        Authorization: jwt ? `Bearer ${jwt}` : undefined,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowerList = async (userId: number): Promise<AxiosResponse<FollowUser[]>> => {
  try {
    const response: AxiosResponse<FollowUser[]> = await ourAxios.get(`/api/follower/users/${userId}`, {
      headers: {
        Authorization: jwt ? `Bearer ${jwt}` : undefined,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
