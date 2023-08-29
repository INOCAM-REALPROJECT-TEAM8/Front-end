import { styled } from 'styled-components';

export const ChatAlarmLayout = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  max-width: 800px;
  height: 0px;
  overflow: visible;
  display: flex;
  z-index: 102;
  justify-content: center;
`;

export const ChatAlarmContainer = styled.div`
  border-radius: 18px;
  height: 130px;
  background-color: #ffffff;
  width: 342px;
  padding: 18px 18px 0px 18px;
  display: flex;
  gap: 10px;
`;
