import { styled } from 'styled-components';

export const ListMusicCard = styled.div`
  cursor: pointer;
  display: flex;

  & > img {
    border-radius: 8px;
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }

  & > div {
    font-weight: 300;
    color: #7d7d7d;
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }

  & > div > h2 {
    margin: 0;
    font-weight: 600;
    color: #3d3d3d;
  }
  /* 
  & > div > p {
    align-items: center;
  } */
`;
