import React, { useState } from 'react';
import { MusicCardContainer, MusicSlideContainer } from './styles/MusicSlideStyle';
import Slider from 'react-slick';
import MusicModal from '../musicDetailPage/MusicModal';

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMusicClick = () => {
    setIsModalOpen(true);
  };

  return (
    <MusicSlideContainer>
      <h1>{playListName}</h1>
      <Slider {...settings}>
        {musics.map(music => (
          <MusicCard music={music} key={music.id} onClick={handleMusicClick} />
        ))}
      </Slider>
      {isModalOpen && <MusicModal modalState={isModalOpen} setModalState={setIsModalOpen} />}
    </MusicSlideContainer>
  );
}

function MusicCard({ music, onClick }: { music: musicInfo; onClick: () => void }) {
  return (
    <>
      <MusicCardContainer onClick={onClick}>
        <img src={music.albumImgURL} alt='' />
        <h2>{music.title}</h2>
        <div>{music.artist}</div>
      </MusicCardContainer>
    </>
  );
}

export default MusicSlide;
