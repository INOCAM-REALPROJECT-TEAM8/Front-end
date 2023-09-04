import { styled } from 'styled-components';

export const ListMusicCard = styled.div`
  cursor: pointer;
  display: flex;

  & > img {
    border-radius: 8px;
    width: 48px;
    height: 48px;
    margin: 3px 12px 3px 4px;
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

  & > div > h5 {
    margin: 0;
    font-weight: 300;
    color: #7d7d7d;
    padding-bottom: 4px;
  }
`;

export const PlayListMusicCard = styled.div`
  cursor: pointer;
  display: flex;

  & > img {
    border-radius: 8px;
    width: 68px;
    height: 68px;
    margin: 3px 12px 3px 4px;
  }

  & > div {
    font-weight: 300;
    color: #7d7d7d;
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }

  & > div > h1 {
    margin: 0;
    font-weight: 600;
    color: #3d3d3d;
  }

  & > div > h5 {
    margin: 0;
    font-weight: 300;
    color: #7d7d7d;
    padding-bottom: 6px;
  }
`;
