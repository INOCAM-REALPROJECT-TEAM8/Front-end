import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLooping, setIsLooping] = useState<boolean>(true);

  useEffect(() => {
    setIsLooping(true);
  }, []);

  const musicPlayButtonHandler = (): void => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div>
        <div className='MusicPlayer'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=11cta61wi0g'
            playing={isPlaying}
            loop={isLooping}
            controls={false}
            muted={false}
            width={'0'}
            height={'0'}
          />
        </div>
        <button onClick={musicPlayButtonHandler}>플레이</button>
      </div>
    </>
  );
};

export default MusicPlayer;
