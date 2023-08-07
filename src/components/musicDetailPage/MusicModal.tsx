import React from 'react';
import { styled } from 'styled-components';

const music = {
  image: 'https://www.m-i.kr/news/photo/202203/902632_669160_77.jpg',
  title: 'Lemon',
  artist: '요네즈 켄시',
};

interface MusicModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MusicModal = ({ modalState, setModalState }: MusicModalProps) => {
  const onClickCloseButton = () => {
    setModalState(!modalState);
  };

  return (
    <ModalTopContainer>
      <ModalContainer>
        <ModalContent>
          <button onClick={onClickCloseButton}>닫기</button>
          <img src={music.image} alt='' />
          <h2>{music.title}</h2>
          <div>{music.artist}</div>
        </ModalContent>
      </ModalContainer>
    </ModalTopContainer>
  );
};

export default MusicModal;

const ModalTopContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
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
  border-radius: 15px;
  background-color: #7751e1;
  margin: 0 auto;
  width: 700px;
  height: 900px;
`;

const ModalContent = styled.div`
  padding: 30px;

  .img {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
