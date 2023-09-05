import { styled } from 'styled-components';

export const MusicInfoContainer = styled.div`
  padding: 0px 34px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AlbumBox = styled.div`
  padding-bottom: 12px;
  font-weight: 300;
  font-size: 14px;
  color: #7d7d7d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtistBox = styled.div`
  padding-bottom: 6px;
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
  justify-content: center;
  gap: 10px;

  & div {
    font-weight: 600;
    font-size: 18px;
    color: var(--main-color);
  }
`;

export const Stars = styled.div`
  flex-direction: column;
`;

export const Playlists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 17px;
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
