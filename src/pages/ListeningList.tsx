import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaylistP, getRecentHeardsP } from '../api/music';
import { WhiteTopContainer } from '../components/loginPage/styles/WhiteContainer';
import PlayList from '../components/userpage/PlayList';
import UserMusicSlide from '../components/userpage/UserMusicSlide';
import UserListening from '../components/userpage/UserListening';

function ListeningList() {
  const userId = Number(useParams().userId);

  const { data: playlistMusics, isSuccess: playlistSuccess } = useQuery(['playList', userId], getPlaylistP(userId));
  const { data: recentMusics, isSuccess: recentSuccess } = useQuery(['recentMusics', userId], getRecentHeardsP(userId));

  return (
    <WhiteTopContainer>
      <PlayListTop>
        <PlaylistText>최근 들은 곡</PlaylistText>
      </PlayListTop>
      <UserListening musics={recentSuccess ? recentMusics || [] : []} />
    </WhiteTopContainer>
  );
}

export default ListeningList;
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
