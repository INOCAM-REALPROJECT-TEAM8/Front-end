import MainContainer from '../components/loginPage/styles/MainContainer';
import recode from '.././assets/Recode.png';
import { styled } from 'styled-components';

const music = {
  image:
    'https://i.namu.wiki/i/3o5_9cQW9UVQzA-M0OyEwdMgtCtv1HUwc5RTMZl_E0knAjndE56r42fCllbD2JHrhZP_ugBhQ3Gi9WXkv8NPGg.webp',
  title: 'Lemon',
  artist: '米津玄師 (요네즈 켄시)',
};

function MusicDetailPage() {
  return (
    <MainContainer>
      <RecodeStyle>
        <RecodeCover />
      </RecodeStyle>
      <div>{music.title}</div>
      <div>{music.artist}</div>
    </MainContainer>
  );
}

export default MusicDetailPage;

const RecodeStyle = styled.div`
  background-image: url(${recode});
  background-size: cover;
  width: 330px;
  height: 330px;
  margin-top: 2%;
`;

const RecodeCover = styled.div`
  background-image: url(${music.image});
  background-size: cover;
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;
