import styled from 'styled-components';
import { useId, useRef, useState } from 'react';
import MainContainer from '../components/loginPage/styles/MainContainer';
import UserMusicSlide from '../components/userpage/UserMusicSlide';
import MusicBox from '../components/userpage/MusicBox';
import UnderBar from '../icons/UnderbarButton.svg';
import { useNavigate, useParams } from 'react-router-dom';
import UserInformation from '../components/userpage/UserInformation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPlaylistP, getRecentHeardsP } from '../api/music';

function UserPage() {
  const navigate = useNavigate();
  const userId = Number(useParams().userId);

  const { data: playlistMusics, isSuccess: playlistSuccess } = useQuery(['playList', userId], getPlaylistP(userId));
  const { data: recentMusics, isSuccess: recentSuccess } = useQuery(['recentMusics', userId], getRecentHeardsP(userId));

  return (
    <MainContainer>
      <UserInformation />
      <PlayList>
        <PlaylistText>내 플레이 리스트</PlaylistText>
        <PlaylistContainer>
          <PlayListHeader />
          <MusicBox musics={playlistSuccess ? playlistMusics || [] : []} />
          <UnderBarIcon onClick={() => navigate('playlist')}>
            <img src={UnderBar} />
          </UnderBarIcon>
        </PlaylistContainer>
      </PlayList>
      <PlayList>
        <UserMusicSlide playListName='최근 들은 곡' musics={recentSuccess ? recentMusics || [] : []} />
      </PlayList>
    </MainContainer>
  );
}

export default UserPage;

const PlaylistText = styled.div`
  display: flex;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const PlaylistContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 228px;
  border-radius: 16px;
  margin-top: 20px;
`;

const PlayList = styled.div`
  padding: 20px 40px;
  width: 100%;
`;

const PlayListHeader = styled.div`
  height: 20px;
  width: 100%;
  background-color: rgba(89, 93, 235, 0.2);
`;

const ListLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(89, 93, 235, 0.2);
`;

const UnderBarIcon = styled.div`
  padding-top: 4px;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;
