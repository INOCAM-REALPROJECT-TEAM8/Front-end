import { styled } from 'styled-components';

export const MusicInfoContainer = styled.div`
  padding: 0px 31px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const GenresContainer = styled.div`
  display: flex;
  gap: 9px;
  padding-bottom: 10px;
`;
export const GenreBox = styled.div`
  padding: 3px 7px;
  border-radius: 16px;
  background-color: var(--gray);
  color: var(--white);
  font-size: 17px;
  font-weight: 300;
`;

export const AlbumBox = styled.div`
  padding-bottom: 19px;
  font-weight: 300;
  font-size: 14px;
  color: var(--gray);
`;

export const ArtistBox = styled.div`
  padding-bottom: 7px;
  font-weight: 300;
  font-size: 17px;
  color: var(--gray);
`;

export const TitleBox = styled.div`
  padding-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  color: var(--main-color);
`;

export const RateContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & > div {
    font-weight: 600;
    font-size: 20px;
    color: var(--main-color);
  }
`;
