import { styled } from 'styled-components';

export const MusicSlideContainer = styled.div`
  width: 100%;
  padding: 28px 0px 5px 24px;
  font-family: 'Pretendard-Regular', sans-serif;

  & > h1 {
    font-size: 20px;
    font-weight: bold;
  }

  & > .slider {
    width: 100%;
    padding-top: 18px;
  }

  & .slick-track {
    margin: 0px;
  }
`;

export const CoveredCard = styled.div`
  padding-right: 11px;

  div {
    border-radius: 8px;
    height: 107px;
    width: 107px;
    background-color: #a5a5a5;
  }
`;

export const MusicCardContainer = styled.div`
  cursor: pointer;
  width: 107px;
  margin-right: 11px;

  & > img {
    border-radius: 8px;
    width: 107px;
    height: 107px;
  }

  & > h2 {
    width: 100%;
    font-size: 16px;
    padding: 10px 0px 6px;
    font-weight: 600;
    color: #3d3d3d;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > div {
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    color: #7d7d7d;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
