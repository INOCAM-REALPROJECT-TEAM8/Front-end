import { styled } from 'styled-components';

export const MusicSlideContainer = styled.div`
  width: 100%;
  padding: 28px 0px 5px 24px;
  & > h1 {
    font-size: 20px;
    font-weight: bold;
  }

  & > .slider {
    width: 100%;
    padding-top: 18px;
  }
`;

export const MusicCardContainer = styled.div`
  cursor: pointer;
  margin-right: 11px;
  & > img {
    border-radius: 8px;
    width: 107px;
    height: 107px;
  }

  & > h2 {
    padding: 10px 0px 6px;
    font-weight: 600;
    color: #3d3d3d;
  }

  & > div {
    font-weight: 300;
    color: #7d7d7d;
  }
`;
