import { useNavigate } from 'react-router-dom';
import { MusicSlideContainer } from './styles/UserMusicSlideStyle';
import Slider from 'react-slick';
import { ListMusicCard } from './styles/MusicBoxStyle';
import styled from 'styled-components';
import { MusicInfo } from '../../api/music';

function MusicBox({ musics }: { musics: MusicInfo[] }) {
  const settings = {
    vertical: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
  };

  return (
    <ListContainer>
      <MusicSlideContainer>
        <Slider {...settings}>
          {musics.map(music => (
            <MusicCard music={music} key={music.trackId} />
          ))}
        </Slider>
      </MusicSlideContainer>
    </ListContainer>
  );
}

function MusicCard({ music }: { music: MusicInfo }) {
  const handleMusicClick = () => {
    // 음악 모달창 띄우기
  };

  return (
    <ListMusicCard onClick={handleMusicClick}>
      <img src={music.image} alt={`Album cover for ${music.title}`} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ paddingBottom: '5px' }}>{music.artist}</p>
        <h2>{music.title}</h2>
      </div>
    </ListMusicCard>
  );
}

export default MusicBox;

const ListContainer = styled.div`
  height: 56px;
  padding: 8px;
  display: flex;
  align-items: center;
`;
