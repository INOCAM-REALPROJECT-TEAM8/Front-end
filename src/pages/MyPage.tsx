import styled from 'styled-components';
import React, { useRef, useState } from 'react';
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
  // const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState<'plus' | 'check'>('plus');

  const { userId, nickname } = useSelector((state: SelectState) => state.userInfo);

  const { data: userInfo, isSuccess } = useQuery([`userInfo`, userId], getUserInfo(userId));

  const followerCount = userInfo?.follower ?? 0;
  const followingCount = userInfo?.following ?? 0;

  // const handleImageClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };
  //  const {
  //    data: userMusics,
  //    isSuccess: isSuccessUserMusics,
  //    isError: isErrorUserMusics,
  //  } = isLoggedIn ? useQuery([`${userId}/musics`], getUserMusics) : { data: [], isSuccess: false, isError: false };

  const navigate = useNavigate();
  const handleFollowingLabelClick = () => {
    navigate('following');
  };

  const handleFollowerLabelClick = () => {
    navigate('follower');
  };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // 파일 선택 시 처리하는 로직
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       // 선택된 파일을 상태로 관리하여 컨테이너 안에 바로 보여줌
  //       setSelectedImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };
  const handleRoundButtonClick = () => {
    navigate('myinfo');
  };

  //팔로워 조회 -> api 쪽이에요
  // https://github.com/Boram33JO/Frontend/blob/dev/src/api/profile.ts

  // export const getFollowLists = async (
  //   userId: string,
  // ): Promise<any> => {
  //   const response = await instance.get(`/user/${userId}/follow`, {
  //   });
  //   return response.data;
  // };
  //-----여기 아래는 팔로워 호출하는 컴포넌트...

  //https://github.com/Boram33JO/Frontend/blob/dev/src/components/profiledetail/Pictures.tsx
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

      {/* <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} /> */}
      <UserName>{nickname}</UserName>
      <SeparatorLine />
      <FollowStatsContainer>
        <FollowStats>
          <StatsLabel onClick={handleFollowingLabelClick}>팔로잉</StatsLabel>
          <StatsNumber>{followingCount}</StatsNumber>
        </FollowStats>
        <FollowStats>
          <StatsLabel onClick={handleFollowerLabelClick}>팔로워</StatsLabel>
          <StatsNumber>{followerCount}</StatsNumber>
        </FollowStats>
      </FollowStatsContainer>
      <PlayList>
        <PlaylistText>내 플레이 리스트</PlaylistText>

        <PlaylistContainer>
          <PlayListHeader />
          <MusicBox musics={playlistSuccess ? playlistMusics || [] : []} />
          <ListLine />
          <MusicBox musics={playlistSuccess ? playlistMusics || [] : []} />
          <ListLine />
          <MusicBox musics={playlistSuccess ? playlistMusics || [] : []} />
          <ListLine />
          <UnderBarIcon>
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

const Placeholder = styled.div`
  color: gray;
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
  height: 227px;
  border-radius: 16px;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  padding-top: 8px;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

// const MoreButton = styled.button`
//   width: 100%;
//   background-color: transparent;
//   border: none;
//   color: white;
//   cursor: pointer;
//   text-align: center;
//   margin-top: 10px;
// `;
