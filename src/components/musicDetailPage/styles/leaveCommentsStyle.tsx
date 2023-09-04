import { styled } from 'styled-components';

export const LeaveCommentBox = styled.div`
  position: absolute;
  right: 10%;
  bottom: 90px;
  width: 140px;
  height: 44px;
  border: 2px solid white;
  border-radius: 16px;
  background-color: var(--white);
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: var(--main-color);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeaveCommentCardContainer = styled.div`
  position: relative;
  border-radius: 16px;
  width: 350px;
  height: 300px;
  padding: 20px;
  background-color: #595deb;
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
  border-radius: 8px;
  background-color: var(--white);
`;

export const CommentSubmitBtn = styled.button`
  position: absolute;
  outline: none;
  border: none;
  padding: 10px;
  width: 120px;
  color: #595deb;
  background-color: var(--white);
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;
  bottom: 16px;
  right: 20px;
  left: auto;
  justify-content: center;
  vertical-align: middle;
`;
