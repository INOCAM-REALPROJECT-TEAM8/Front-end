import { styled, css } from 'styled-components';

export const AllCommentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 270px;
  margin-bottom: 10px;
  background-color: var(--main-color);
  border-radius: 10px;
  overflow: scroll;
  position: absolute;
  bottom: 60px;

  //스크롤바 숨기기
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 15px 16px;
  border-bottom: 1px solid white;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 16px;
  background-color: white;
`;

export const NicknameBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
`;

export const ContentBox = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: var(--white);
  width: 100%;
  word-break: break-all;
`;
