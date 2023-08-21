import { css, styled } from 'styled-components';

export const ChatMsgDivider = styled.div<{ $isSameUserAsPrev: boolean; $isMine: boolean }>`
  padding: ${({ $isSameUserAsPrev, $isMine }) =>
    `${$isSameUserAsPrev ? '10px' : '20px'}${$isMine ? ' 24px 0px 92px' : ' 92px 0px 24px'}`};
  width: 100%;

  display: flex;
  flex-direction: ${({ $isMine }) => ($isMine ? 'row-reverse' : 'row')};
`;

export const ChatMsgBox = styled.div<{ $isMine: boolean }>`
  padding: 10px 13px;
  max-width: 275px;
  word-break: break-all;
  font-size: 17px;
  font-weight: 500;
  color: #220f57;
  ${({ $isMine }) =>
    $isMine
      ? css`
          background-color: #feffd8;
          border-radius: 16px 0px 16px 16px;
        `
      : css`
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 0px 16px 16px 16px;
        `}
`;
