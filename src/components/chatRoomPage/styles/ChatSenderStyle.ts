import { styled } from 'styled-components';

export const ChatSenderLable = styled.label`
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 800px;
  height: 52px;
  background-color: white;
  padding: 16px 24px 17px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;

export const ChatSenderInput = styled.input`
  font-size: 17px;
  font-weight: 500;
  color: #1b0658;
  outline: none;
  border: none;
  flex-grow: 1;
`;
