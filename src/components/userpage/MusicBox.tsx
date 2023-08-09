import { useNavigate } from 'react-router-dom';
import { MusicSlideContainer } from './styles/UserMusicSlideStyle';
import Slider from 'react-slick';
import { ListMusicCard } from './styles/MusicBoxStyle';

type musicInfo = {
  id: number;
  title: string;
  artist: string;
  albumImgURL: string;
};

function MusicBox({ musics }: { musics: musicInfo[] }) {
  const settings = {
    vertical: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
  };

  return (
    <MusicSlideContainer>
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
    // 음악 모달창 띄우기
  };
  return (
    <ListMusicCard onClick={handleMusicClick}>
      <img src={music.albumImgURL} alt={`Album cover for ${music.title}`} />
      <div>
        <h2>{music.title}</h2>
        <p>{music.artist}</p>
      </div>
    </ListMusicCard>
  );
}

export default MusicBox;
