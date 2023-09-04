import { useNavigate, useParams } from 'react-router-dom';
import { MusicInfo, getMusicDetailP } from '../api/music';
import { MusicDetailPageLayout } from '../components/musicDetailPage/styles/musicDetailPageStyle';
import MusicDetailInfo from '../components/musicDetailPage/MusicDetailInfo';
import { useQuery } from '@tanstack/react-query';
import CommentList from '../components/musicDetailPage/CommentList';
import { Comment, getCommentsP } from '../api/comment';
import { addToPlaylist } from '../api/music';

const dummyMusic: MusicInfo = {
  image:
    'https://i.namu.wiki/i/3o5_9cQW9UVQzA-M0OyEwdMgtCtv1HUwc5RTMZl_E0knAjndE56r42fCllbD2JHrhZP_ugBhQ3Gi9WXkv8NPGg.webp',
  title: 'Lemon',
  artistsStringList: '米津玄師 (요네즈 켄시)',
  trackId: 'dddd',
  album: '그레이트 서울 인베이전 Semi Final',
  genres: ['인디음악', '록/메탈'],
  star: 3.8,
};

const dummyComments: Comment[] = [
  {
    userId: 10,
    nickname: 'nickname3333',
    content: '테스트',
  },
  {
    userId: 10,
    nickname: 'nickname3333',
    content: '테스트',
  },
];

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

  const handleAddToPlaylist = async () => {
    try {
      // Call the addToPlaylist function to add the music to the playlist
      await addToPlaylist({ musicId: music?.trackId ?? '' });
      // Optionally, you can provide some feedback to the user after adding to the playlist
      alert('음악이 플레이리스트에 추가되었습니다.');
    } catch (error) {
      console.error('플레이리스트에 음악을 추가하는 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <MusicDetailPageLayout>
      <MusicDetailInfo music={isMusicSuccess ? music : dummyMusic} />
      <button onClick={handleAddToPlaylist}>플레이리스트에 추가</button>
      <CommentList comments={isCommentsSuccess ? comments : dummyComments} />
    </MusicDetailPageLayout>
  );
}

export default MusicDetailPage;
