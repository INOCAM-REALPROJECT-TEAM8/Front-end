import { CoveredCard, MusicCardContainer, MusicSlideContainer } from './styles/MusicSlideStyle';
import Slider from 'react-slick';
import { MusicInfo } from '../../api/music';
import { useNavigate } from 'react-router-dom';

function MusicSlide({ playListName, musics }: { playListName: string; musics: MusicInfo[] }) {
  const navigate = useNavigate();

  const settings = {
    className: 'slider',
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
  };

  return (
    <>
      <MusicSlideContainer>
        <h1>{playListName}</h1>
        <Slider {...settings}>
          {musics.length
            ? musics.map(music => (
                <MusicCard music={music} key={music.trackId} onClick={() => navigate(`/musics/${music.trackId}`)} />
              ))
            : Array(10)
                .fill(1)
                .map((_, index) => (
                  <CoveredCard key={index}>
                    <div />
                  </CoveredCard>
                ))}
        </Slider>
      </MusicSlideContainer>
    </>
  );
}

function MusicCard({ music, onClick }: { music: MusicInfo; onClick: () => void }) {
  return (
    <MusicCardContainer onClick={onClick}>
      <img src={music.image} alt='' />
      <h2>{music.title}</h2>
      <div>{music.artistsStringList}</div>
    </MusicCardContainer>
  );
}

export default MusicSlide;
