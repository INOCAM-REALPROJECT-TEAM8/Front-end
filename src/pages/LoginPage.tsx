import styled from 'styled-components';
import KakaoLogin from '../features/KakaoLogin';
import GoogleLogin from '../features/GoogleLogin';
import MainContainer from '../components/loginPage/styles/MainContainer';
import useValidateInput from '../hooks/useValidateInput';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/user';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { ReactComponent as Logo } from '../assets/hideLogo.svg';
import { Button, Input, LoginBox, LogoContainer } from '../components/loginPage/styles/Input';

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

  return (
    <MainContainer>
      <LogoContainer>
        <Logo onClick={() => navigate('/')} style={{ width: '106px', height: '60px', cursor: 'pointer' }} />
      </LogoContainer>
      <LoginBox>
        <Input type='text' placeholder='이메일' value={email} onChange={handleEmailOnChange} />
        <Input type='password' placeholder='비밀번호' value={password} onChange={handlePwOnChange} />
        <Button onClick={handleLoginClick} $bgColor='white' color='#7751e1'>
          로그인
        </Button>
        <UnderlinedTextBox to='/forgetpw'>비밀번호를 잊으셨나요?</UnderlinedTextBox>
        <UnderLine />
        <Button onClick={() => navigate('/signup')} $bgColor='#7751e1' color='white'>
          회원가입
        </Button>
        <SocialButton>
          <GoogleLogin />
          <KakaoLogin />
        </SocialButton>
      </LoginBox>
    </MainContainer>
  );
}

export default LoginPage;

const SocialButton = styled.div`
  width: 342px;
  height: 40px;
  border: none;
  border-radius: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

const UnderlinedTextBox = styled(Link)`
  text-decoration: underline;
  color: white;
  padding: 30px 0 30px 0;
`;

const UnderLine = styled.div`
  background-color: white;
  justify-content: center;
  height: 2px;
  width: 100%;
  margin-bottom: 20px;
`;
