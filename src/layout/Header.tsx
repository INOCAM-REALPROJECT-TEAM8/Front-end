import styled from 'styled-components';
import SettingButtonIcon from '../icons/SettingButton.png';
import { ReactComponent as Logo } from '../assets/hideLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { ReactComponent as GoBack } from '../assets/goBack.svg';

function Header({ chatNickname, chatOpId }: { chatNickname?: string; chatOpId?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <HeaderContainer>
        {chatNickname ? (
          <LeftThingsContainer>
            <GoBackIcon onClick={handleGoBackClick} />
            <ChatNicknameBox onClick={() => navigate(`/users/${chatOpId}`)}>{chatNickname}</ChatNicknameBox>
          </LeftThingsContainer>
        ) : (
          <LogoBox>
            <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
          </LogoBox>
        )}
        <IconContainer role='button' onClick={toggleSide}>
          <Icon src={SettingButtonIcon} alt='SettingButton Icon' />
        </IconContainer>
      </HeaderContainer>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  max-width: 800px;
  top: 0px;
  width: 100%;
  height: 56px;
  background-color: #595deb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  font-family: 'Pretendard-Regular', sans-serif;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 19.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 25px 0px 0px;
  cursor: pointer;
`;

const LogoBox = styled.div`
  padding: 6px 0px 0px 24px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ChatNicknameBox = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;
  color: var(--white);
  opacity: 0.8;
`;

const LeftThingsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const GoBackIcon = styled(GoBack)`
  cursor: pointer;
  padding: 10px 14px;
  width: auto;
  height: auto;
`;
