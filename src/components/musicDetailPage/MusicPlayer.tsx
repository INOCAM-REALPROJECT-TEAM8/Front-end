import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { MusicInfo, addToRecentHeards, getMusicModalInfoP } from '../../api/music';
import recode from '../../assets/recode.svg';
import lpcartridge from '../../assets/lpCartridge.svg';
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

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const playerRef = useRef<ReactPlayer | null>(null);

  const musicPlayButtonHandler = (): void => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setIsLooping(false);
  }, []);

  const play15SecondsBefore = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 15);
    }
  };

  const play15SecondsAfter = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 15);
    }
  };

  const handlePlaybackEnded = () => {
    setTimeout(() => {
      setIsLooping(true);
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
    }, 5000);
  };

  return (
    <ModalContainer>
      <div className='MusicPlayer'>
        <ReactPlayer
          ref={playerRef}
          url={`${musicData.yurl}`}
          playing={isPlaying}
          loop={isLooping}
          controls={false}
          muted={false}
          width={'0'}
          height={'0'}
          onEnded={handlePlaybackEnded}
        />
      </div>
      <AlbumCover onClick={() => navigate(`/musics/${musicId}`)}>
        <AlbumImage src={musicData.image} alt='albumCover' />
        <RecodeImage src={recode} alt='recode' />
      </AlbumCover>
      <LpCartridge src={lpcartridge} alt='lpCartridge' width='100px' height='100px' />
      <MusicArtists>{musicData.artist}</MusicArtists>
      <MusicTitle>{musicData.title}</MusicTitle>
      <button onClick={play15SecondsBefore}>15초 전</button>
      <button onClick={musicPlayButtonHandler}>플레이</button>
      <button onClick={play15SecondsAfter}>15초 후</button>
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
  padding-left: 20px;
`;

const MusicTitle = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding-left: 20px;
`;

export default MusicPlayer;
