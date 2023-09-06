import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaylistP, getRecentHeardsP } from '../api/music';
import { WhiteTopContainer } from '../components/loginPage/styles/WhiteContainer';
import UserPlayList from '../components/userpage/UserPlayList';

function UserPlayListPage() {
  const userId = Number(useParams().userId);

  const { data: playlistMusics, isSuccess: playlistSuccess } = useQuery(['playList', userId], getPlaylistP(userId));

  return (
    <WhiteTopContainer>
      <PlayListTop>
        <PlaylistText>{userId}의 플레이리스트</PlaylistText>
      </PlayListTop>
      <UserPlayList musics={playlistSuccess ? playlistMusics || [] : []} />
    </WhiteTopContainer>
  );
}

export default UserPlayListPage;

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
  height: 40px;
`;
