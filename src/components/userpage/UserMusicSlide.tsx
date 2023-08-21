import { useNavigate } from 'react-router-dom';
import { MusicCardContainer, MusicSlideContainer } from './styles/UserMusicSlideStyle';
import Slider from 'react-slick';
import { MusicInfo } from '../../api/music';

function UserMusicSlide({ playListName, musics }: { playListName: string; musics: MusicInfo[] }) {
  let sliderRef: Slider | null = null;

  const settings = {
    className: 'slider',
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      // 10번째 카드가 오른쪽에 도달하면 슬라이딩을 막음
      if (nextSlide === 10 && currentSlide === 9) {
        sliderRef?.slickPause(); // 슬라이딩 일시정지
      }
    },
  };

  return (
    <MusicSlideContainer>
      <h1>{playListName}</h1>
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {musics.map(music => (
          <MusicCard music={music} key={music.trackId} />
        ))}
      </Slider>
    </MusicSlideContainer>
  );
}

function MusicCard({ music }: { music: MusicInfo }) {
  const handleMusicClick = () => {
    //음악 모달창 띄우기
  };
  return (
    <MusicCardContainer onClick={handleMusicClick}>
      <img src={music.image} />
    </MusicCardContainer>
  );
}

export default UserMusicSlide;
