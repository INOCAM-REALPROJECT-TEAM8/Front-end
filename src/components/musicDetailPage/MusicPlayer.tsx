/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState, useRef } from 'react';
import { MusicInfo, addToRecentHeards, getMusicModalInfoP } from '../../api/music';
import recode from '../../assets/recode.svg';
import lpcartridge from '../../assets/lpCartridge.svg';
import musicplay from '../../assets/playMusicButton.svg';
import musicstop from '../../assets/stopMusicButton.svg';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const dummyMusic: MusicInfo = {
  image:
    'https://i.namu.wiki/i/3o5_9cQW9UVQzA-M0OyEwdMgtCtv1HUwc5RTMZl_E0knAjndE56r42fCllbD2JHrhZP_ugBhQ3Gi9WXkv8NPGg.webp',
  title: 'Lemon',
  artistsStringList: '米津玄師 (요네즈 켄시)',
  album: '그레이트 서울 인베이전 Semi Final',
  yurl: 'https://www.youtube.com/watch?v=SX_ViT4Ra7k',
};

interface MusicPlayerProps {
  musicId: string;
}

function MusicPlayer({ musicId }: MusicPlayerProps) {
  const navigate = useNavigate();
  const [musicData, setMusicData] = useState<MusicInfo>(dummyMusic);
  const { data, isSuccess } = useQuery([`music/${musicId}`], getMusicModalInfoP(musicId));

  useEffect(() => {
    if (isSuccess && data) {
      setMusicData(data);
    }
  }, [isSuccess, setMusicData, data]);

  const mutation = useMutation(addToRecentHeards, {
    onSuccess: () => {},
  });

  useEffect(() => {
    mutation.mutate({ musicId });
  }, [musicId]);

  const iframeRef = useRef(null);
  const [embedController, setEmbedController] = useState(null); // 상태 변수 추가
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // 스포티파이 IFrame API 초기화
  useEffect(() => {
    //@ts-ignore
    window.onSpotifyIframeApiReady = IFrameAPI => {
      const options = {
        uri: `spotify:track:${musicId}`,
      };
      //@ts-ignore
      const callback = EmbedController => {
        setEmbedController(EmbedController);
        EmbedController.play();
      };
      const element = document.getElementById('spotify-iframe');
      IFrameAPI.createController(element, options, callback);
    };

    // 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.body.removeChild(script);
    };
  }, [musicId]);

  const musicPlayButtonHandler = () => {
    setIsPlaying(prevIsPlaying => {
      if (embedController) {
        if (prevIsPlaying) {
          //@ts-ignore
          embedController.pause(); // 재생 중이었다면 일시정지
        } else {
          //@ts-ignore
          embedController.play(); // 일시정지 상태였다면 재생
        }
      }
      return !prevIsPlaying;
    });
  };

  return (
    <ModalContainer>
      <iframe
        id='spotify-iframe'
        ref={iframeRef}
        src={`https://open.spotify.com/embed/track/${musicId}`}
        width='300'
        height='180'
      ></iframe>
      <AlbumCover onClick={() => navigate(`/musics/${musicId}`)}>
        <AlbumImage src={musicData.image} alt='albumCover' />
        <RecodeImage src={recode} alt='recode' />
      </AlbumCover>
      <LpCartridge src={lpcartridge} alt='lpCartridge' width='100px' height='100px' />
      <MusicArtists>{musicData.artist}</MusicArtists>
      <MusicTitle>{musicData.title}</MusicTitle>
      <PlayButton onClick={musicPlayButtonHandler}>
        <img src={isPlaying ? musicstop : musicplay} alt='음악 재생/정지' />
      </PlayButton>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: rgba(119, 81, 225, 0.95);
  width: 348px;
  height: 466px;
`;

const AlbumCover = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlbumImage = styled.img`
  position: absolute;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  z-index: 2;
`;

const RecodeImage = styled.img`
  width: 280px;
  height: 280px;
  z-index: 1;
`;

const LpCartridge = styled.img`
  position: absolute;
  width: 125px;
  height: 136px;
  right: 10px;
  top: 180px;
  z-index: 3;
`;

const MusicArtists = styled.p`
  color: white;
  font-size: 16px;
  padding: 4px 0 0 25px;
`;

const MusicTitle = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 4px 0 0 25px;
`;

const PlayButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  img {
    width: 32px;
    height: 32px;
  }
`;

export default MusicPlayer;
