import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { ListMusicCard } from './styles/MusicBoxStyle';
import styled from 'styled-components';
import { MusicInfo } from '../../api/music';

function MusicBox({ musics }: { musics: MusicInfo[] }) {
  let sliderRef: Slider | null = null;
  const settings = {
    className: 'slider',
    vertical: true, // 슬라이드 방향을 수직으로 변경
    variableWidth: false,
    swipeToSlide: true,
    slidesToShow: 3, // 각 슬라이드를 3개만 보이도록 설정
    infinite: false,
    arrows: false,
    // centerMode: true, // 중앙 정렬 활성화
    centerPadding: '30px', // 슬라이드 간 간격 조절
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
    <>
      <ListMusicCard onClick={onClick}>
        <img src={music.image} alt={`Album cover for ${music.title}`} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ paddingBottom: '5px' }}>{music.artist}</p>
          <h5>{music.artistsStringList}</h5>
          <h2>{music.title}</h2>
        </div>
      </ListMusicCard>
      <ListLine />
    </>
  );
}

export default MusicBox;

const ListContainer = styled.div`
  height: 184px;
`;

const ListLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(89, 93, 235, 0.3);
`;
