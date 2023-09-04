import { useNavigate } from 'react-router-dom';
import { Comment } from '../../api/comment';
import { CommentContainer, ContentBox, NicknameBox, ProfileContainer, ProfileImg } from './styles/commentStyle';

function CommentInfo({ userId, nickname, content }: Comment) {
  const navigate = useNavigate();
  //const starRates = [...Array(Math.floor(star)).fill(1), star - Math.floor(star)];

  return (
    <CommentContainer>
      <ProfileContainer onClick={() => navigate(`/users/${userId}`)}>
        <ProfileImg />
        <NicknameBox>{nickname}</NicknameBox>
      </ProfileContainer>
      <ContentBox>{content}</ContentBox>
    </CommentContainer>
  );
}

export default CommentInfo;
