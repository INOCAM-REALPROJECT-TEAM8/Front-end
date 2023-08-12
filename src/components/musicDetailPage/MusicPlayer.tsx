import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export const MusicPlayer = () => {
  const [isWindow, setIsWindow] = useState<boolean>(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <>
      <section>
        <h2>React Player</h2>
        {isWindow && (
          <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=pxBPyKQTOKM' />
          </div>
        )}
      </section>
    </>
  );
};
