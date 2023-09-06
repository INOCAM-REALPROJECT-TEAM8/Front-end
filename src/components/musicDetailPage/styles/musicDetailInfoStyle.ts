import { styled } from 'styled-components';

export const MusicInfoContainer = styled.div`
  padding: 0px 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  padding: 0px 20px 24px;
  font-weight: 600;
  font-size: 24px;
  color: var(--main-color);
  white-space: nowrap; /* 텍스트 줄 바꿈 금지 */
  overflow: hidden; /* 오버플로우 숨김 */
  text-overflow: ellipsis; /* 텍스트가 오버플로우 되면 생략 부호 (...) 표시 */
  max-width: 100%; /* 최대 너비 지정 */
`;

// export const TitleBox = styled.div`
//   padding-bottom: 24px;
//   font-weight: 600;
//   font-size: 24px;
//   color: var(--main-color);
//   white-space: nowrap;
//   overflow: hidden;
//   max-width: 100%;
//   position: relative; /* 상대 위치 설정 */
// `;

export const DetailOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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
