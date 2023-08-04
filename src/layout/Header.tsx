import styled from 'styled-components';
import SettingButtonIcon from '../icons/SettingButton.png';
import { ReactComponent as Logo } from '../assets/hideLogo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <LogoBox>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
      </LogoBox>
      <IconContainer>
        <Icon src={SettingButtonIcon} alt='SettingButton Icon' />
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  background-color: #7751e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
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
