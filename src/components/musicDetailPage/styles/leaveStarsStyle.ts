import { styled } from 'styled-components';

export const LeaveStarsBox = styled.div`
  cursor: pointer;
  padding: 8px 0px 10px;
  font-size: 18px;
  font-weight: 600;
  color: var(--main-color);
`;

export const LeaveStarCardContainer = styled.div`
  border-radius: 16px;
  width: 260px;
  height: 208px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const CommentInput = styled.input`
  text-align: left;
  vertical-align: text-top;
  outline: none;
  border: none;
  width: 100%;
  height: 200px;
  word-break: break-all;
  padding: 20px;
  background-color: var(--white);
`;

export const CommentSubmitBtn = styled.button`
  margin-top: 30px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: var(--white);
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
`;
