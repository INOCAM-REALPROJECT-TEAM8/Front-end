import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { MusicInfo } from '../../api/music';

interface MusicPlayerProps {
  musicData: MusicInfo;
}

function MusicPlayer({ musicData }: MusicPlayerProps) {
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
    <>
      <div className='MusicPlayer'>
        <ReactPlayer
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${musicData.yUrl}`}
          playing={isPlaying}
          loop={isLooping}
          controls={false}
          muted={false}
          width={'0'}
          height={'0'}
          onEnded={handlePlaybackEnded}
        />
      </div>
      <button onClick={play15SecondsBefore}>15초 전</button>
      <button onClick={musicPlayButtonHandler}>플레이</button>
      <button onClick={play15SecondsAfter}>15초 후</button>
    </>
  );
}

export default MusicPlayer;
