import { styled } from 'styled-components';
import { ReactComponent as Star } from '../../../assets/filledStar.svg';

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 15px 16px;
  border-radius: 0px 16px 16px 16px;
  background-color: var(--main-color);
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
`;
export const NicknameBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
`;

export const StarContainer = styled.div`
  background-color: #ffffff50;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 6px 9px;
  border-radius: 0px 16px 16px 16px;
`;
export const StarBox = styled.div<{ $fillRate: number }>`
  width: ${({ $fillRate }) => `${$fillRate * 17}px`};
  overflow: hidden;
`;
export const FilledStar = styled(Star)`
  width: 17px;
  height: 17px;
`;

export const ContentBox = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: var(--white);
  width: 100%;
  word-break: break-all;
`;
