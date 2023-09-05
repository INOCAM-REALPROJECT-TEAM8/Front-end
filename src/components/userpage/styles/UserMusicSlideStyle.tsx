import { styled } from 'styled-components';

export const UserMusicSlideContainer = styled.div`
  width: 100%;

  & > h1 {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  & > .slider {
    width: 100%;
    padding-top: 18px;
  }
`;

export const UserMusicCardContainer = styled.div`
  cursor: pointer;
  width: 106px;
  margin-right: 12px;

  & > img {
    border-radius: 8px;
    width: 106px;
    height: 106px;
  }

  & > h2 {
    width: 100%;
    font-size: 16px;
    padding: 10px 0px 6px;
    font-weight: 600;
    color: #e4e4fc;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > div {
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    color: #b6b8f6;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// export const CoveredCard = styled.div`
//   padding-right: 11px;

//   div {
//     border-radius: 8px;
//     height: 107px;
//     width: 107px;
//     background-color: #a5a5a5;
//   }
// `;
