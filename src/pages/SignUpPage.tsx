import useValidateInput from '../hooks/useValidateInput';
import { login, signup } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import WhiteContainer from '../components/loginPage/styles/WhiteContainer';

function SignUpPage() {
  const navigate = useNavigate();

  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');
  const { input: password, handleInputOnChange: handlePwOnChange, valid: passwordValid } = useValidateInput('password');
  const { input: password2, handleInputOnChange: handlePw2OnChange } = useValidateInput();
  const { input: nickname, handleInputOnChange: handleNicknameOnChange, valid: nicknameValid } = useValidateInput();

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
    } else if (!nicknameValid) {
      alert('닉네임을 입력해주세요');
    } else {
      signupMutation.mutate({ email, password, nickname });
    }
  };

  return (
    <WhiteContainer>
      <input onChange={handleEmailOnChange} value={email} placeholder='이메일' />
      <input onChange={handlePwOnChange} value={password} placeholder='비밀번호' />
      <input onChange={handlePw2OnChange} value={password2} placeholder='비밀번호 확인' />
      <input onChange={handleNicknameOnChange} value={nickname} placeholder='닉네임' />
      <button onClick={handleSubmit}>회원가입</button>
    </WhiteContainer>
  );
}

export default SignUpPage;
