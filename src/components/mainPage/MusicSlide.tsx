import { MusicCardContainer, MusicSlideContainer } from './styles/MusicSlideStyle';
import Slider from 'react-slick';
import { MusicInfo } from '../../api/music';
import usePlayer from '../../hooks/usePlayer';

function MusicSlide({ playListName, musics }: { playListName: string; musics: MusicInfo[] }) {
  const settings = {
    className: 'slider',
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
  };

  const { Player, AllOpenerContainingRef, openPlayer } = usePlayer<HTMLDivElement>();

  return (
    <>
      <MusicSlideContainer ref={AllOpenerContainingRef}>
        <h1>{playListName}</h1>
        <Slider {...settings}>
          {musics.map(music => (
            <MusicCard music={music} key={music.trackId} onClick={() => openPlayer(music.trackId)} />
          ))}
        </Slider>
      </MusicSlideContainer>
      <Player />
    </>
  );
}

function MusicCard({ music, onClick }: { music: MusicInfo; onClick: () => void }) {
  return (
    <>
      <MusicCardContainer onClick={onClick}>
        <img src={music.image} alt='' />
        <h2>{music.title}</h2>
        <div>{music.artistsStringList}</div>
      </MusicCardContainer>
    </>
  );
}

export default MusicSlide;
