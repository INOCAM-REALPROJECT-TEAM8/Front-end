import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaylistP, getRecentHeardsP } from '../api/music';
import { WhiteTopContainer } from '../components/loginPage/styles/WhiteContainer';
import PlayList from '../components/userpage/PlayList';

function UserPlayList() {
  const userId = Number(useParams().userId);

  const { data: playlistMusics, isSuccess: playlistSuccess } = useQuery(['playList', userId], getPlaylistP(userId));

  return (
    <WhiteTopContainer>
      <PlayListTop>
        <PlaylistText>{userId}의 플레이리스트</PlaylistText>
      </PlayListTop>
      <ListeningListContainer>
        <PlayList musics={playlistSuccess ? playlistMusics || [] : []} />
      </ListeningListContainer>
    </WhiteTopContainer>
  );
}

export default UserPlayList;
const PlaylistText = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  color: var(--main-color);
  padding: 16px;
`;

const PlayListTop = styled.div`
  width: 100%;
  height: 80px;
`;

const ListeningListContainer = styled.div`
  overflow-y: auto; /* 세로 스크롤을 표시하고, 내용이 넘칠 때 스크롤 가능하도록 설정 */
  max-height: 800px;
`;
