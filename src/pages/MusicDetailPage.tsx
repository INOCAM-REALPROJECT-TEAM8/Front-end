import MainContainer from '../components/loginPage/styles/MainContainer';
import recode from '.././assets/Recode.png';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { MusicInfo } from '../api/music';
import { MusicDetailContainer } from '../components/musicDetailPage/styles/musicDetailStyle';
import RecordCover from '../components/musicDetailPage/RecordCover';
import MusicDetailInfo from '../components/musicDetailPage/MusicDetailInfo';

const music: MusicInfo = {
  image:
    'https://i.namu.wiki/i/3o5_9cQW9UVQzA-M0OyEwdMgtCtv1HUwc5RTMZl_E0knAjndE56r42fCllbD2JHrhZP_ugBhQ3Gi9WXkv8NPGg.webp',
  title: 'Lemon',
  artist: '米津玄師 (요네즈 켄시)',
  id: 'dddd',
  album: '그레이트 서울 인베이전 Semi Final',
  genres: ['인디음악', '록/메탈'],
  rate: 3.8,
};

function MusicDetailPage() {
  return (
    <MusicDetailContainer>
      <MusicDetailInfo music={music} />
    </MusicDetailContainer>
  );
}

export default MusicDetailPage;
