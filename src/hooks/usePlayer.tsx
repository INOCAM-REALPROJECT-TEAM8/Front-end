import { useCallback, useState } from 'react';
import useModal from './useModal';
import MusicPlayer from '../components/musicDetailPage/MusicPlayer';
import { styled } from 'styled-components';

function usePlayer<refElementType>() {
  const {
    Modal,
    openerRef: AllOpenerContainingRef,
    openModal,
    isOpen,
  } = useModal<refElementType>({ coverExist: true, exitByOuterClick: true });

  const [musicId, setMusicIdToPlay] = useState<string>('');

  const Player = useCallback(
    () => (
      <Modal>
        <MusicPlayer musicId={musicId} />
      </Modal>
    ),
    [musicId, isOpen],
  );

  const openPlayer = useCallback(
    (musicIdToPlay: string | undefined) => {
      if (!musicIdToPlay) return;
      setMusicIdToPlay(musicIdToPlay);
      openModal();
    },
    [openModal],
  );

  return {
    Player,
    AllOpenerContainingRef,
    openPlayer,
  };
}

export default usePlayer;
