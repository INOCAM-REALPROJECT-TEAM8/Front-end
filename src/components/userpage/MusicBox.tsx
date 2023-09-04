import { useNavigate } from 'react-router-dom';
import { MusicSlideContainer } from './styles/UserMusicSlideStyle';
import Slider from 'react-slick';
import { ListMusicCard } from './styles/MusicBoxStyle';
import styled from 'styled-components';
import { MusicInfo } from '../../api/music';

function MusicBox({ musics }: { musics: MusicInfo[] }) {
  let sliderRef: Slider | null = null;
  const settings = {
    className: 'slider',
    vertical: true, // 슬라이드 방향을 수직으로 변경
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      // 10번째 카드가 아래로 도달하면 슬라이딩을 막음
      if (nextSlide === 10 && currentSlide === 9) {
        sliderRef?.slickPause(); // 슬라이딩 일시정지
      }
    },
  };

  const navigate = useNavigate();
  return (
    <ListContainer>
      <ListMusicCard>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          {musics.map(music => (
            <MusicCard music={music} key={music.trackId} onClick={() => navigate(`/musics/${music.trackId}`)} />
          ))}
        </Slider>
      </ListMusicCard>
    </ListContainer>
  );
}

function MusicCard({ music, onClick }: { music: MusicInfo; onClick: () => void }) {
  // return (
  //   <MusicCardContainer onClick={onClick}>
  //     <img src={music.image} alt='' />
  //   </MusicCardContainer>
  // );

  return (
    <ListMusicCard onClick={onClick}>
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
