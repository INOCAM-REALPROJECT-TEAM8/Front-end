import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeButtonIcon from '../icons/HomeButton.png';
import MessageButtonIcon from '../icons/MessageButton.png';
import UserButtonIcon from '../icons/UserButton.png';
import { useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';

function Footer() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  const handleUserButtonClick = () => {
    if (isLoggedIn) {
      navigate('user/:userId');
    } else {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('login');
      }
    }
  };
  return (
    <FooterContainer>
      <ButtonContainer onClick={() => navigate('/chats')}>
        <IconButton src={MessageButtonIcon} alt='MessageButton Icon' />
      </ButtonContainer>
      <ButtonContainer onClick={() => navigate('')}>
        <IconButton src={HomeButtonIcon} alt='HomeButton Icon' />
      </ButtonContainer>
      <ButtonContainer onClick={handleUserButtonClick}>
        <IconButton src={UserButtonIcon} alt='UserButton Icon' />
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
