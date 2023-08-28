import useValidateInput from '../hooks/useValidateInput';
import { login, signup } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ReactComponent as Logo } from '../assets/hideMaincolor.svg';
import WhiteContainer from '../components/loginPage/styles/WhiteContainer';
import { styled } from 'styled-components';
import { sign } from 'crypto';

function SignUpPage() {
  const navigate = useNavigate();

  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');
  const { input: password, handleInputOnChange: handlePwOnChange, valid: passwordValid } = useValidateInput('password');
  const { input: password2, handleInputOnChange: handlePw2OnChange } = useValidateInput();

  const loginMutation = useMutation(login, {
    onSuccess: data => {
      if (data.success) {
        alert('로그인 되었습니다.');
        navigate('/');
      } else {
        navigate('/login');
      }
    },
  });
  const signupMutation = useMutation(signup, {
    onSuccess: data => {
      if (data.success) {
        alert('회원가입이 완료되었습니다.');
        loginMutation.mutate({ email, password });
      } else {
        alert(data.msg);
      }
    },
  });

  const handleSubmit = () => {
    if (!emailValid) {
      alert('이메일 형식을 지켜주세요');
    } else if (!passwordValid) {
      alert('비밀번호는 8자 이상이어야 합니다');
    } else if (password !== password2) {
      alert('비밀번호가 일치하지 않습니다');
    } else {
      signupMutation.mutate({ email, password });
    }
  };

  return (
    <Main>
      <Logo />
      <WhiteContainer>
        <input onChange={handleEmailOnChange} value={email} placeholder='이메일' />
        <input onChange={handlePwOnChange} value={password} placeholder='비밀번호' />
        <input onChange={handlePw2OnChange} value={password2} placeholder='비밀번호 확인' />
        <button onClick={handleSubmit}>다음</button>
      </WhiteContainer>
    </Main>
  );
}

export default SignUpPage;

const Main = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
