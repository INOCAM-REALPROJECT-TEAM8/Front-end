import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeButtonIcon from '../icons/HomeButton.svg';
import ColorHomeButtonIcon from '../icons/ColorHomeButton.svg';
import ColorMessageButtonIcon from '../icons/ColorMessageButton.svg';
import MessageButtonIcon from '../icons/MessageButton.svg';
import ColorUserButtonIcon from '../icons/ColorUserButton.svg';
import UserButtonIcon from '../icons/UserButton.svg';
import { useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  const location = useLocation();
  const isUserPage =
    location.pathname === '/user/:userId' ||
    location.pathname === '/user/:userId/myinfo' ||
    location.pathname === '/user/:userId/following' ||
    location.pathname === '/user/:userId/follower' ||
    location.pathname === 'user/:userId/playlist';
  const isMainPage = location.pathname === '/';
  const isChatPage = location.pathname === '/chats';

  const handleUserButtonClick = () => {
    if (isLoggedIn) {
      navigate('user/:userId');
    } else {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('login');
      }
    }
  };

  const handleChatButtonClick = () => {
    if (isLoggedIn) {
      navigate('/chats');
    } else {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('/login');
      }
    }
  };

  return (
    <FooterContainer>
      <ButtonContainer onClick={handleChatButtonClick}>
        <IconButton src={isChatPage ? ColorMessageButtonIcon : MessageButtonIcon} alt='MessageButton Icon' />
      </ButtonContainer>
      <ButtonContainer onClick={() => navigate('')}>
        <IconButton src={isMainPage ? ColorHomeButtonIcon : HomeButtonIcon} alt='HomeButton Icon' />
      </ButtonContainer>
      <ButtonContainer onClick={handleUserButtonClick}>
        <IconButton src={isUserPage ? ColorUserButtonIcon : UserButtonIcon} alt='User Button Icon' />
      </ButtonContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 800px;
  height: 56px;
  background-color: white;
  box-shadow: 0px -5px 10px 0px rgba(89, 93, 235, 0.75);
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const IconButton = styled.img`
  object-fit: contain;
  cursor: pointer;
`;
