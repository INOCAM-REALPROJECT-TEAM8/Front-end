import { styled } from 'styled-components';

export const MusicSlideContainer = styled.div`
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

export const MusicCardContainer = styled.div`
  cursor: pointer;
  margin-right: 12px;

  & > img {
    border-radius: 8px;
    width: 106px;
    height: 106px;
  }
  /* 
  & > h2 {
    padding: 10px 0px 6px;
    font-weight: 600;
    color: #3d3d3d;
  }

  & > div {
    font-weight: 300;
    color: #7d7d7d;
  } */
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
