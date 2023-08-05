import styled from 'styled-components';
import kakaoimage from '../images/kakao_login_medium_wide.png';
import GoogleLogin from '../features/GoogleLogin';
import MainContainer from '../components/loginPage/styles/MainContainer';
import useValidateInput from '../hooks/useValidateInput';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/user';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');
  const { input: password, handleInputOnChange: handlePwOnChange, valid: pwValid } = useValidateInput();

  const mutation = useMutation(login, {
    onSuccess: data => {
      if (true) {
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
      <TextPage>HIDE</TextPage>
      <LoginBox>
        <Input type='text' placeholder='Email' value={email} onChange={handleEmailOnChange} />
        <Input type='password' placeholder='Password' value={password} onChange={handlePwOnChange} />
        <Button onClick={handleLoginClick}>로그인</Button>
        <Button onClick={() => navigate('/signup')}>회원가입</Button>
        <SocialButton>
          <GoogleLogin />
        </SocialButton>
        <a href='http://13.125.205.172:8080/login/oauth2/kakao'>
          <img src={kakaoimage} alt='카카오 로그인'></img>
        </a>
        <UnderlinedTextBox to='/forgetpw'>비밀번호를 잊으셨나요?</UnderlinedTextBox>
      </LoginBox>
    </MainContainer>
  );
}

export default LoginPage;

// const LoginContainer = styled.div`
//   width: 390px;
//   height: 732px;
//   background-color: #7751e1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const TextPage = styled.div`
  color: white;
  font-size: xx-large;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
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

const UnderlinedTextBox = styled(Link)`
  text-decoration: underline;
  color: black;
`;
