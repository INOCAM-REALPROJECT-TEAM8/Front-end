import { useNavigate, useParams } from 'react-router-dom';
import {
  ButtonImg,
  ButtonsContainer,
  FollowStats,
  FollowStatsContainer,
  SeparatorLine,
  StatsLabel,
  StatsNumber,
  UserImage,
  UserImageContainer,
  UserName,
} from './styles/userInformationStyle';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserPageInfo, getUserInfo } from '../../api/user';
import { useEffect, useState } from 'react';
import PlusButton from '../../icons/PlusButton.png';
import CheckButton from '../../icons/CheckButton.png';
import WhiteMessageButton from '../../icons/WhiteMessageButton.svg';
import { getRoomId } from '../../redux/modules/chatList';
import basicProfileImg from '../../assets/mascot.png';
import { followUser } from '../../api/follow';

const dummyUserInfo: UserPageInfo = {
  userId: 2,
  nickname: 'nickname2',
  imageUrl: null,
  following: 0,
  follower: 0,
  isFollowing: false,
};

function UserInformation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const userId = Number(useParams().userId);
  const { data, isSuccess } = useQuery(['userInfo', userId], getUserInfo(userId));
  const [userInfo, setUserInfo] = useState<UserPageInfo>(dummyUserInfo);

  useEffect(() => {
    if (isSuccess) {
      setUserInfo(data);
    }
  }, [isSuccess, data]);

  const followMutation = useMutation(followUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userInfo', userId]);
    },
  });

  const handleFollowButtonClick = () => {
    followMutation.mutate(userId);
  };

  const handleFollowingLabelClick = () => {
    navigate('following');
  };

  return (
    <>
      <UserImageContainer>
        <UserImage src={userInfo.imageUrl ?? basicProfileImg} />
      </UserImageContainer>
      <ButtonsContainer>
        {userInfo.isFollowing ? (
          <ButtonImg src={CheckButton} onClick={handleFollowButtonClick} />
        ) : (
          <ButtonImg src={PlusButton} onClick={handleFollowButtonClick} />
        )}
        <UserName>{userInfo.nickname}</UserName>
        <ButtonImg src={WhiteMessageButton} onClick={() => navigate(`/chat-room/${getRoomId(userId)}`)} />
      </ButtonsContainer>
      <SeparatorLine />
      <FollowStatsContainer>
        <FollowStats>
          <StatsLabel onClick={handleFollowingLabelClick}>팔로잉</StatsLabel>
          <StatsNumber>{userInfo.following}</StatsNumber>
        </FollowStats>
        <FollowStats>
          <StatsLabel>팔로워</StatsLabel>
          <StatsNumber>{userInfo.follower}</StatsNumber>
        </FollowStats>
      </FollowStatsContainer>
    </>
  );
}

export default UserInformation;
