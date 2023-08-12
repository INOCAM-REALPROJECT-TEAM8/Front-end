import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import MainContainer from '../components/loginPage/styles/MainContainer';
import PlusButton from '../icons/PlusButton.png';
import CheckButton from '../icons/CheckButton.png';
import WhiteMessageButton from '../icons/WhiteMessageButton.png';
import UserMusicSlide from '../components/userpage/UserMusicSlide';
import MusicBox from '../components/userpage/MusicBox';
import UnderBar from '../icons/underbarbutton.png';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [nickname, setNickname] = useState<string>('John Doe'); // 기본 닉네임 설정
  const [followerCount, setFollowerCount] = useState<number>(100); // 예시로 팔로워 수를 100으로 설정
  const [followingCount, setFollowingCount] = useState<number>(100); // 예시로 팔로워 수를 100으로 설정
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState<'plus' | 'check'>('plus');

  const musics = [
    'https://marketplace.canva.com/EAExV2m91mg/1/0/1600w/canva-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%A4%ED%95%98%EB%8A%98-%EA%B7%B8%EB%A6%BC%EC%9D%98-%EC%95%A8%EB%B2%94%EC%BB%A4%EB%B2%84-5tlu9r69vlc.jpg',
    'https://newsimg.hankookilbo.com/cms/articlerelease/2021/01/17/fb3de445-6b62-49df-9dab-0fa8efa9cc8c.jpg',
    'https://i.pinimg.com/1200x/1b/82/96/1b8296c37422e8d37798742dccf29718.jpg',
    'https://cdn.imweb.me/upload/S20221018154123b27d57d/ec57e66d0f563.jpg',
    'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2017/03/PS17032000112.jpg',
    'https://www.m-i.kr/news/photo/202203/902632_669160_77.jpg',
    'https://img.hankyung.com/photo/202101/01.25017855.1-1200x.jpg',
    'https://i.namu.wiki/i/lEVyubOJdqsx8D7sw6pCCTl7ZTPQxeVruGq0-8ddcr_JJszLwQzW6-UcXycCePZvJw34cKklJSpyTLKlZ-sgBw.webp',
    'https://i.namu.wiki/i/9zDYDWuDB_EKu14_q1EbaetDXhMpnndcrAfmHRE-h6vYI8MF4XhNLMQ5pJiqvI_I-shYpAv5jyLZB5N1CR-_aA.webp',
    'https://blog.kakaocdn.net/dn/biKtlt/btroQkaZItd/KX4p6Pz9PnJXCJT0m9Jkok/img.jpg',
  ].map((albumImgURL, index) => {
    return { title: `제목${index}`, artist: `가수${index}`, id: index, albumImgURL };
  });

  const handleImageClick = () => {
    // 유저 이미지 클릭 시 파일 업로드 input 클릭 이벤트 실행
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const navigate = useNavigate();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 파일 선택 시 처리하는 로직
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 선택된 파일을 상태로 관리하여 컨테이너 안에 바로 보여줌
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFollowingLabelClick = () => {
    navigate('following');
  };

  const handleFollowButtonClick = () => {
    const userId = 'user-id'; // 여기에 사용자 아이디를 가져오는 로직 추가

    // 팔로우/언팔로우를 처리하는 API 호출
    if (isFollowing) {
      // 언팔로우를 처리하는 API 호출
      fetch(`/api/follow/users/${userId}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
          setIsFollowing(false);
          setButtonType('plus');
          setFollowerCount(prevCount => prevCount - 1);
        });
    } else {
      // 팔로우를 처리하는 API 호출
      fetch(`/api/follow/users/${userId}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
          setIsFollowing(true);
          setButtonType('check');
          setFollowerCount(prevCount => prevCount + 1);
        });
    }
  };

  return (
    <MainContainer>
      <UserImageContainer onClick={handleImageClick}>
        {selectedImage ? <UserImage src={selectedImage} /> : <Placeholder>Upload Image</Placeholder>}
      </UserImageContainer>
      <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      <ButtonsContainer>
        {buttonType === 'plus' ? (
          <ButtonImg src={PlusButton} onClick={handleFollowButtonClick} />
        ) : (
          <ButtonImg src={CheckButton} onClick={handleFollowButtonClick} />
        )}
        <UserName>{nickname}</UserName>
        <ButtonImg src={WhiteMessageButton} />
      </ButtonsContainer>
      <SeparatorLine />
      <FollowStatsContainer>
        <FollowStats>
          <StatsLabel onClick={handleFollowingLabelClick}>팔로잉</StatsLabel>
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
          <MusicBox musics={musics} />
          <ListLine />
          <MusicBox musics={musics} />
          <ListLine />
          <MusicBox musics={musics} />
          <ListLine />
          <UnderBarIcon>
            <img src={UnderBar} />
          </UnderBarIcon>
        </PlaylistContainer>
      </PlayList>
      <PlayList>
        <UserMusicSlide playListName='최근 들은 곡' musics={musics} />
      </PlayList>
    </MainContainer>
  );
}

export default UserPage;

const UserImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  border: 3px solid white;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  object-fit: cover;
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
  color: #cabcf2;
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

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonImg = styled.img`
  cursor: pointer;
  margin: 10px 70px 0px 70px;
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
`;

const PlayList = styled.div`
  padding: 20px 40px;
  width: 100%;
`;

const PlayListHeader = styled.div`
  height: 20px;
  width: 100%;
  background-color: rgba(119, 21, 225, 0.2);
`;

const ListLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(119, 21, 225, 0.2);
`;

const UnderBarIcon = styled.div`
  padding-top: 8px;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;
