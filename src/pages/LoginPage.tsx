import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from '@react-oauth/google';
import googleimage from '../images/Google Button.png';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <TextPage>HIDE</TextPage>
      <LoginBox>
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Button>로그인</Button>
        <Button>회원가입</Button>

        <a href='http://도메인/login/oauth2/google'>
          <GoogleLoginImage src={googleimage} alt='구글 로그인'></GoogleLoginImage>
        </a>

        <SocialButton>카카오 로그인</SocialButton>
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
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const SocialButton = styled(Button)`
  width: 300px;
  height: 40px;
`;

const GoogleLoginImage = styled.img`
  width: 320px;
  height: 40px;
  margin-bottom: 5px;
  object-fit: cover;
  border-radius: 20px;
`;
