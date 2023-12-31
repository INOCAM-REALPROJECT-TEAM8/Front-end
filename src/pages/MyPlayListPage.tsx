import Slider from 'react-slick';
import { ListMusicCard } from '../components/userpage/styles/MusicBoxStyle';
import styled from 'styled-components';
import { MusicInfo } from '../api/music';
import UnderBar from '../icons/underbarbutton.png';
import MusicBox from '../components/userpage/MusicBox';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaylistP, getRecentHeardsP } from '../api/music';
import { WhiteTopContainer } from '../components/loginPage/styles/WhiteContainer';
import MyPlayList from '../components/userpage/MyPlayList';

function MyPlayListPage() {
  const navigate = useNavigate();
  const userId = Number(useParams().userId);

  const { data: playlistMusics, isSuccess: playlistSuccess } = useQuery(['playList', userId], getPlaylistP(userId));

  return (
    <WhiteTopContainer>
      <PlayListTop>
        <PlaylistText>나의 플레이리스트</PlaylistText>
      </PlayListTop>
      <MyPlayList musics={playlistSuccess ? playlistMusics || [] : []} />
    </WhiteTopContainer>
  );
}

export default MyPlayListPage;

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
