import React, { useRef } from 'react';
import { styled } from 'styled-components';
import MusicPlayer from './MusicPlayer';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface MusicModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  musicId: string;
}

function MusicModal({ modalState, setModalState, musicId }: MusicModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickOutsideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setModalState(false);
    }
  };

  const {
    data: musicData,
    isLoading,
    isError,
  } = useQuery(['music', musicId], async () => {
    const response = await axios.get(`/api/tracks/${musicId}/modal`);
    return response.data;
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>데이터를 가져오는 도중에 오류가 발생했습니다.</div>;
  }

  return (
    <ModalTopContainer ref={modalRef} onClick={onClickOutsideModal}>
      <ModalContainer>
        <MusicPlayer musicData={musicData} />
      </ModalContainer>
    </ModalTopContainer>
  );
}

const ModalTopContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: rgba(119, 81, 225, 0.95);
  width: 348px;
  height: 352px;
`;

// const AlbumImage = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 16px;
//   position: absolute;
//   z-index: 2;
// `;

// const RecodeImage = styled.img`
//   width: 235.35px;
//   height: 233.34px;
//   position: absolute;
//   z-index: 1;
//   left: 75px;

//   transition: transform 0.5s;

//   ${AlbumCover}:hover & {
//     transform: translateX(35px);
//   }
// `;

// const MusicArtist = styled.div`
//   padding-top: 20px;
//   font-size: 16px;
//   color: #fff;
// `;

// const MusicTitle = styled.div`
//   padding-top: 8px;
//   font-size: 24px;
//   font-weight: bold;
//   color: #fff;
// `;

export default MusicModal;
