import React, { useState } from 'react';
import { MusicCardContainer, MusicSlideContainer } from './styles/MusicSlideStyle';
import Slider from 'react-slick';
import MusicModal from '../musicDetailPage/MusicModal';
import { MusicInfo } from '../../api/music';

function MusicSlide({ playListName, musics }: { playListName: string; musics: MusicInfo[] }) {
  const settings = {
    className: 'slider',
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedMusicId, setClickedMusicId] = useState('');

  const handleMusicClick = (musicId: string) => {
    setIsModalOpen(true);
    setClickedMusicId(musicId);
  };

  return (
    <MusicSlideContainer>
      <h1>{playListName}</h1>
      <Slider {...settings}>
        {musics.map(music => (
          <MusicCard music={music} key={music.id} onClick={() => handleMusicClick(music.id)} />
        ))}
      </Slider>
      {isModalOpen && <MusicModal modalState={isModalOpen} setModalState={setIsModalOpen} musicId={clickedMusicId} />}
    </MusicSlideContainer>
  );
}

function MusicCard({ music, onClick }: { music: MusicInfo; onClick: () => void }) {
  return (
    <>
      <MusicCardContainer onClick={onClick}>
        <img src={music.image} alt='' />
        <h2>{music.title}</h2>
        <div>{music.artist}</div>
      </MusicCardContainer>
    </>
  );
}

export default MusicSlide;
