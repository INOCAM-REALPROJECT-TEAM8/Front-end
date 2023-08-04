import React from 'react';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin';
import GoogleLogin from './GoogleLogin';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <TextPage>HIDE</TextPage>
      <LoginBox>
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Button>로그인</Button>
        <Button>회원가입</Button>
        <SocialButton>
          <GoogleLogin />
        </SocialButton>
        <KakaoLogin />
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
