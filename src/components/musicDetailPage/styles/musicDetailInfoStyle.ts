import { styled } from 'styled-components';

export const MusicInfoContainer = styled.div`
  padding: 0px 34px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AlbumBox = styled.div`
  padding-bottom: 14px;
  font-weight: 300;
  font-size: 14px;
  color: #7d7d7d;
`;

export const ArtistBox = styled.div`
  padding-bottom: 4px;
  font-weight: 300;
  font-size: 20px;
  color: #7d7d7d;
`;

export const TitleBox = styled.div`
  padding-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  color: var(--main-color);
`;

export const DetailOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    font-weight: 600;
    font-size: 18px;
    color: var(--main-color);
  }
`;

export const PlayButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Options = styled.div`
  display: flex;
`;
