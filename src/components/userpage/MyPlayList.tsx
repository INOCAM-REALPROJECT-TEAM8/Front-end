import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { PlayListMusicCard } from './styles/MusicBoxStyle';
import styled from 'styled-components';
import { MusicInfo } from '../../api/music';

function MyPlayList({ musics }: { musics: MusicInfo[] }) {
  let sliderRef: Slider | null = null;
  const settings = {
    className: 'slider',
    vertical: true, // 슬라이드 방향을 수직으로 변경
    variableWidth: false,
    swipeToSlide: true,
    slidesToShow: 50, // 각 슬라이드를 3개만 보이도록 설정
    infinite: false,
    arrows: false,
  };

  const navigate = useNavigate();
  return (
    <ListContainer>
      <PlayListMusicCard>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          {musics.map(music => (
            <MusicCard music={music} key={music.trackId} onClick={() => navigate(`/musics/${music.trackId}`)} />
          ))}
        </Slider>
      </PlayListMusicCard>
    </ListContainer>
  );
}

function MusicCard({ music, onClick }: { music: MusicInfo; onClick: () => void }) {
  return (
    <>
      <PlayListMusicCard onClick={onClick}>
        <img src={music.image} alt={`Album cover for ${music.title}`} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ paddingBottom: '5px' }}>{music.artist}</p>
          <h5>{music.artistsStringList}</h5>
          <h1>{music.title}</h1>
        </div>
      </PlayListMusicCard>
      <ListLine />
    </>
  );
}

export default MyPlayList;

const ListContainer = styled.div`
  height: 800px;
  padding: 12px;
`;

const ListLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(89, 93, 235, 0.3);
`;
