import { useNavigate } from 'react-router-dom';
import { MusicCardContainer, MusicSlideContainer } from './styles/MusicSlideStyle';
import Slider from 'react-slick';

type musicInfo = {
  id: number;
  title: string;
  artist: string;
  albumImgURL: string;
};

function MusicSlide({ playListName, musics }: { playListName: string; musics: musicInfo[] }) {
  const settings = {
    className: 'slider',
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
  };

  return (
    <MusicSlideContainer>
      <h1>{playListName}</h1>
      <Slider {...settings}>
        {musics.map(music => (
          <MusicCard music={music} key={music.id} />
        ))}
      </Slider>
    </MusicSlideContainer>
  );
}

function MusicCard({ music }: { music: musicInfo }) {
  const handleMusicClick = () => {
    //음악 모달창 띄우기
  };
  return (
    <MusicCardContainer onClick={handleMusicClick}>
      <img src={music.albumImgURL} />
      <h2>{music.title}</h2>
      <div>{music.artist}</div>
    </MusicCardContainer>
  );
}

export default MusicSlide;
