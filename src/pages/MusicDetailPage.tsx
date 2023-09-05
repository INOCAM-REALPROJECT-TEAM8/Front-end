import { useNavigate, useParams } from 'react-router-dom';
import { MusicInfo, getMusicDetailP } from '../api/music';
import { MusicDetailPageLayout } from '../components/musicDetailPage/styles/musicDetailPageStyle';
import MusicDetailInfo from '../components/musicDetailPage/MusicDetailInfo';
import { useQuery } from '@tanstack/react-query';
import CommentList from '../components/musicDetailPage/CommentList';
import { Comment, getCommentsP } from '../api/comment';

const dummyMusic: MusicInfo = {
  image: '',
  title: '',
  artistsStringList: '',
  trackId: '',
  album: '',
  star: undefined,
};
const dummyComments: Comment[] = [];

function MusicDetailPage() {
  const navigate = useNavigate();
  const { musicId } = useParams();

  if (!musicId) navigate('/');

  const { data: music, isSuccess: isMusicSuccess } = useQuery(
    [`musicDetail/${musicId}`],
    getMusicDetailP(musicId ?? ''),
  );

  const { data: comments, isSuccess: isCommentsSuccess } = useQuery(
    [`comments/${musicId}`],
    getCommentsP(musicId ?? ''),
  );

  return (
    <MusicDetailPageLayout>
      <MusicDetailInfo music={isMusicSuccess ? music : dummyMusic} />
      <CommentList comments={isCommentsSuccess ? comments : []} />
    </MusicDetailPageLayout>
  );
}

export default MusicDetailPage;
