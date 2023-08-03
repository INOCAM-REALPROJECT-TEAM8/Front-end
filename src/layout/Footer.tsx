import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeButtonIcon from '../icons/HomeButton.png';
import MessageButtonIcon from '../icons/MessageButton.png';
import UserButtonIcon from '../icons/UserButton.png';

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <ButtonContainer>
        <IconButton src={MessageButtonIcon} alt='MessageButton Icon' />
      </ButtonContainer>
      <ButtonContainer onClick={() => navigate('')}>
        <IconButton src={HomeButtonIcon} alt='HomeButton Icon' />
      </ButtonContainer>
      <ButtonContainer onClick={() => navigate('users/:userId')}>
        <IconButton src={UserButtonIcon} alt='UserButton Icon' />
      </ButtonContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterGradation = styled.div`
  position: fixed;
  bottom: 56px;
  height: 56px;
  width: 100%;
  background: linear-gradient(to top, var(--white), transparent);
`;

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0px;
  width: 100%;
  height: 56px;
  background-color: white;
  box-shadow: 0px -5px 10px 0px rgba(119, 81, 225, 0.75);
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const IconButton = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;
