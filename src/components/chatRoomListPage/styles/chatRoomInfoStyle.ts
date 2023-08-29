import { styled } from 'styled-components';

export const ChatRoomInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 80px;
  padding: 14px 23px;
  border-bottom: 1px solid rgba(119, 81, 225, 0.1);
`;

export const ProfileImageBox = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  border: 1px solid #e5def9;
`;

export const ChatInfoContainer = styled.div`
  padding: 5px 0px;
`;
export const OpNicknameBox = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 6px;
  color: #1b0658;
`;
export const LastChatBox = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: var(--gray);
`;
