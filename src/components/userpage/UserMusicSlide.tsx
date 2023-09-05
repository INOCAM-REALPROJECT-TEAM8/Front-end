import { useNavigate } from 'react-router-dom';
import { MusicCardContainer, MusicSlideContainer } from './styles/UserMusicSlideStyle';
import Slider from 'react-slick';
import { MusicInfo } from '../../api/music';
import styled from 'styled-components';

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

  const navigate = useNavigate();

  const handleMoreButtonClick = () => {
    navigate(`listen`);
  };

  return (
    <MusicSlideContainer>
      <TitleAndMore>
        <ListName>{playListName}</ListName>
        <MoreButton onClick={handleMoreButtonClick}>더보기</MoreButton>
      </TitleAndMore>
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {musics.map(music => (
          <MusicCard music={music} key={music.trackId} onClick={() => navigate(`/musics/${music.trackId}`)} />
        ))}
      </Slider>
    </MusicSlideContainer>
  );
}

function MusicCard({ music, onClick }: { music: MusicInfo; onClick: () => void }) {
  return (
    <MusicCardContainer onClick={onClick}>
      <img src={music.image} alt='' />
    </MusicCardContainer>
  );
}

export default UserMusicSlide;

const MoreButton = styled.div`
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const TitleAndMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    margin: 0;
  }
`;

const ListName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
