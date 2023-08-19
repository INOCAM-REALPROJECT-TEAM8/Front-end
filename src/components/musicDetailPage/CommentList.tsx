import { Comment } from '../../api/comment';
import CommentInfo from './CommentInfo';
import { CommentListContainer } from './styles/commentStyle';

function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <CommentListContainer>
      {comments.map(comment => (
        <CommentInfo {...comment} />
      ))}
    </CommentListContainer>
  );
}

export default CommentList;
