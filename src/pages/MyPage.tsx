import styled from 'styled-components';
import { useRef, useState } from 'react';
import MainContainer from '../components/loginPage/styles/MainContainer';
import UserMusicSlide from '../components/userpage/UserMusicSlide';
import MusicBox from '../components/userpage/MusicBox';
import UnderBar from '../icons/UnderbarButton.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { getUserInfo } from '../api/user';
import { useQuery } from '@tanstack/react-query';
import basicProfileImg from '../assets/mascot.svg';
import { getPlaylistP, getRecentHeardsP } from '../api/music';
import { ReactComponent as Gear } from '../assets/Vector.svg';

function MyPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState<'plus' | 'check'>('plus');

  const { userId, nickname } = useSelector((state: SelectState) => state.userInfo);

  const { data: userInfo, isSuccess } = useQuery([`userInfo`, userId], getUserInfo(userId));

  const followerCount = userInfo?.follower ?? 0;
  const followingCount = userInfo?.following ?? 0;

  const navigate = useNavigate();
  // const handleFollowingLabelClick = () => {
  //   navigate('following');
  // };

  // const handleFollowerLabelClick = () => {
  //   navigate('follower');
  // };

  const handleRoundButtonClick = () => {
    navigate('myinfo');
  };

  const { data: playlistMusics, isSuccess: playlistSuccess } = useQuery(['playList', userId], getPlaylistP(userId));
  const { data: recentMusics, isSuccess: recentSuccess } = useQuery(['recentMusics', userId], getRecentHeardsP(userId));

  return (
    <MainContainer>
      <UserImageContainer>
        <UserImage src={userInfo?.imageUrl || basicProfileImg} />
        <RoundButton onClick={handleRoundButtonClick}>
          <Gear />
        </RoundButton>
      </UserImageContainer>
      <UserName>{nickname}</UserName>
      <SeparatorLine />
      <FollowStatsContainer>
        <FollowStats>
          <StatsLabel>팔로잉</StatsLabel>
          <StatsNumber>{followingCount}</StatsNumber>
        </FollowStats>
        <FollowStats>
          <StatsLabel>팔로워</StatsLabel>
          <StatsNumber>{followerCount}</StatsNumber>
        </FollowStats>
      </FollowStatsContainer>
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
export default MyPage;

const UserImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  margin: 30px auto;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  object-fit: cover;
`;

const RoundButton = styled.button`
  position: absolute;
  bottom: -8px;
  right: -2px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: white;
  border: 2px solid #595deb;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const UserName = styled.div`
  margin-top: 10px;
  font-size: 24px;
  color: white;
  font-weight: bolder;
`;

const StatsNumber = styled.div`
  font-size: 16px;
  color: #b6b8f6;
  margin-top: 10px;
`;

const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 30px;
`;

const FollowStatsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FollowStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: white;
  margin: 30px;
`;

const StatsLabel = styled.div`
  font-size: 17px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

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

const UnderBarIcon = styled.div`
  padding-top: 8px;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;
