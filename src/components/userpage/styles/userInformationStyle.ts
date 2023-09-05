import { styled } from 'styled-components';

export const UserImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 24px;
  border: 3px solid white;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  color: gray;
`;

export const UserName = styled.div`
  padding-bottom: 14px;
  font-size: 24px;
  color: white;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatsNumber = styled.div`
  font-size: 16px;
  color: #b6b8f6;
  margin-top: 10px;
`;

export const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 30px;
`;

export const FollowStatsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: white;
  margin: 30px;
`;

export const StatsLabel = styled.div`
  font-size: 17px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonImg = styled.img`
  cursor: pointer;
  margin: 10px 30px 0px 30px;
`;
