import useValidateInput from '../hooks/useValidateInput';
import { login, signup } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ReactComponent as SmallLogo } from '../icons/SmallHIDE.svg';
import WhiteContainer from '../components/loginPage/styles/WhiteContainer';
import { styled } from 'styled-components';
import SignUpInfo from './SignUpInfo';
import { ReactComponent as BackButton } from '../icons/BackButton.svg';

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

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <WhiteContainer>
      <TopContainer>
        <BackButtonContainer onClick={handleBackButtonClick}>
          <BackButton />
        </BackButtonContainer>
        <SignHead>회원가입</SignHead>
        <AddSmallLogo onClick={() => navigate('/')} />
      </TopContainer>
      <TextAdd>로그인 정보 설정</TextAdd>
      <SmallText>이메일, 비밀번호 등 로그인 정보를 설정해주세요.</SmallText>
      <SignInput onChange={handleEmailOnChange} value={email} placeholder='이메일' />
      <SignInput onChange={handlePwOnChange} value={password} placeholder='비밀번호' />
      <SignInput onChange={handlePw2OnChange} value={password2} placeholder='비밀번호 확인' />
      <SignInput onChange={handleNicknameOnChange} value={nickname} placeholder='닉네임' />
      <SignButton onClick={handleSubmit}>다음</SignButton>
    </WhiteContainer>
  );
}

export default SignUpPage;

const TopContainer = styled.div`
  width: 100%;
  height: 174px;
  position: absolute;
  top: 0;
`;

const AddSmallLogo = styled(SmallLogo)`
  margin: 26px;
  cursor: pointer;
`;

const TextAdd = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595deb;
  padding: 0px 184px 12px 0px;
`;

const SmallText = styled.div`
  font-size: 16px;
  color: gray;
  padding: 0px 22px 80px 0px;
`;

const SignInput = styled.input`
  width: 342px;
  height: 52px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 16px;
  border: 2px solid #e3e3e3;
  font-weight: bold;
  background-color: white;
  color: gray;
  padding-left: 15px;

  &::placeholder {
    color: gray;
  }
`;

const SignButton = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #595deb;
  position: absolute;
  bottom: 0;
`;

const SignHead = styled.div`
  width: 100%;
  height: 56px;
  font-size: 24px;
  border: none;
  color: white;
  font-size: x-large;
  font-weight: bold;
  background-color: #595deb;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 26px;
  cursor: pointer;
`;
