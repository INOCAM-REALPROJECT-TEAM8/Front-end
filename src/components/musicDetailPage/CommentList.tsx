import { Comment } from '../../api/comment';
import CommentInfo from './CommentInfo';
import { AllCommentContainer, CommentListContainer } from './styles/commentStyle';

function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <AllCommentContainer>
      <CommentListContainer>
        {comments.map(comment => (
          <CommentInfo {...comment} />
        ))}
      </CommentListContainer>
    </AllCommentContainer>
  );
}

export default CommentList;
