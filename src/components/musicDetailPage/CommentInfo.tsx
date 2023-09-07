import { useNavigate } from 'react-router-dom';
import { Comment } from '../../api/comment';
import { CommentContainer, ContentBox, NicknameBox, ProfileContainer, ProfileImg } from './styles/commentStyle';
import mascot from '../../assets/mascot.svg';

function CommentInfo({ userId, nickname, content, imageUrl }: Comment) {
  const navigate = useNavigate();

  return (
    <CommentContainer>
      <ProfileContainer onClick={() => navigate(`/users/${userId}`)}>
        <ProfileImg src={imageUrl ? imageUrl : mascot} />
        <NicknameBox>{nickname}</NicknameBox>
      </ProfileContainer>
      <ContentBox>{content}</ContentBox>
    </CommentContainer>
  );
}

export default CommentInfo;
