import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import kakaoimage from '../images/kakao_login_medium_wide.png';
=======
import GoogleLogin from './GoogleLogin';
>>>>>>> origin/feature/music-detail-page

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <TextPage>HIDE</TextPage>
      <LoginBox>
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Button>로그인</Button>
        <Button>회원가입</Button>
<<<<<<< HEAD
        <SocialButton>구글 로그인</SocialButton>
        <a href='http://13.125.205.172:8080/login/oauth2/kakao'>
          <img src={kakaoimage} alt='카카오 로그인'></img>
        </a>
=======
        <SocialButton>
          <GoogleLogin />
        </SocialButton>

        <SocialButton>카카오 로그인</SocialButton>
>>>>>>> origin/feature/music-detail-page
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  width: 390px;
  height: 732px;
  background-color: #7751e1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextPage = styled.div`
  color: white;
  font-size: xx-large;
  margin-bottom: 20px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 20px;
  border: none;
`;

const Button = styled.button`
  width: 250px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const SocialButton = styled(Button)`
  width: 250px;
  height: 40px;
`;
