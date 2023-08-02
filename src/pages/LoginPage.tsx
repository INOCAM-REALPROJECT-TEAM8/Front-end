import React from 'react';
import styled from 'styled-components';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <TextPage>HIDE</TextPage>
      <LoginBox>
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Button>로그인</Button>
        <Button>회원가입</Button>
        <SocialButton>구글 로그인</SocialButton>
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
  cursor: pointer;
`;

const SocialButton = styled(Button)`
  background-color: #4285f4;
  color: white;
`;
