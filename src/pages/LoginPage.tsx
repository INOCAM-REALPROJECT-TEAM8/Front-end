import styled from 'styled-components';
import KakaoLogin from '../features/KakaoLogin';
import GoogleLogin from '../features/GoogleLogin';
import { WhiteContainer } from '../components/loginPage/styles/WhiteContainer';
import useValidateInput from '../hooks/useValidateInput';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/user';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { ReactComponent as Logo } from '../assets/hideMaincolor.svg';
import { Button, Input, LoginBox, LogoContainer, SocialButton } from '../components/loginPage/styles/Input';
import { AxiosError } from 'axios';
import React from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  if (isLoggedIn) {
    //@ToDo: users 뒤에 유저 id 얻어와서 붙여줘야 함.
    navigate('/users/');
  }

  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');
  const { input: password, handleInputOnChange: handlePwOnChange, valid: pwValid } = useValidateInput();

  const mutation = useMutation(login, {
    onSuccess: data => {
      if (data.success) {
        //로그인 성공
        alert(data.msg);
        navigate('/');
      } else {
        //로그인 실패
        alert(data.msg);
      }
    },
    onError: (error: AxiosError<{ msg: string; success: boolean }>) => {
      alert(error.response?.data.msg);
    },
  });

  const handleLoginClick = () => {
    if (!emailValid) {
      alert('올바른 형식의 이메일을 입력해주세요');
    } else if (!pwValid) {
      alert('패스워드를 입력해주세요');
    } else {
      mutation.mutate({ email, password });
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLoginClick();
    }
  };

  return (
    <WhiteContainer>
      <LogoContainer>
        <Logo onClick={() => navigate('/')} style={{ width: '106px', height: '60px', cursor: 'pointer' }} />
      </LogoContainer>
      <LoginBox>
        <Input onKeyDown={handleEnter} type='text' placeholder='이메일' value={email} onChange={handleEmailOnChange} />
        <Input
          onKeyDown={handleEnter}
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={handlePwOnChange}
        />
        <Button onClick={handleLoginClick} $bgColor='#595DEB' color='white'>
          로그인
        </Button>
        <UnderlinedTextBox to='/forgetpw'>비밀번호를 잊으셨나요?</UnderlinedTextBox>
        <UnderLine />
        <Button onClick={() => navigate('/agree')} $bgColor='#efefef' color='#818181'>
          회원가입
        </Button>
        <SocialButton>
          <GoogleLogin />
          <KakaoLogin />
        </SocialButton>
      </LoginBox>
    </WhiteContainer>
  );
}

export default LoginPage;

const UnderlinedTextBox = styled(Link)`
  text-decoration: underline;
  color: gray;
  padding: 30px 0 30px 0;
  font-family: 'Pretendard-Regular', sans-serif;
`;

const UnderLine = styled.div`
  background-color: #d9d9d9;
  justify-content: center;
  height: 2px;
  width: 100%;
  margin-bottom: 20px;
`;
