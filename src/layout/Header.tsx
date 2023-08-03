import React from 'react';
import styled from 'styled-components';
import SettingButtonIcon from '../icons/SettingButton.png';
import VectorIcon from '../icons/Vector.png';

function Header() {
  return (
    <HeaderContainer>
      <IconContainer>
        <Icon src={VectorIcon} alt='Vector Icon' />
      </IconContainer>
      <IconContainer>
        <Icon src={SettingButtonIcon} alt='SettingButton Icon' />
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 56px;
  margin-bottom: 10px;
  background-color: #7751e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const IconContainer = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 20px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
