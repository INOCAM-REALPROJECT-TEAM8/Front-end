import { useMutation } from '@tanstack/react-query';
import useValidateInput from '../hooks/useValidateInput';
import { forgetPW } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/hideMaincolor.svg';
import { Button, Input, LoginBox, LogoContainer } from '../components/loginPage/styles/Input';
import { styled } from 'styled-components';
import { useState, ChangeEvent } from 'react';
import WhiteContainer from '../components/loginPage/styles/WhiteContainer';

function ForgetPwPage() {
  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');
  const navigate = useNavigate();
  const mutation = useMutation(forgetPW, {
    onSuccess: data => {
      if (true) {
        //성공
        alert('이메일이 발송되었습니다');
      } else {
        //실패(없는 이메일 등)
        alert('실패이유');
      }
      const isSuccess = true;
      if (isSuccess) {
        setIsEmailSent(true);
      }
    },
  });
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleEmailOnChange(event);
    setIsEmailEntered(event.target.value !== '');
  };

  const handleButtonClick = () => {
    if (!emailValid) {
      alert('올바른 형식의 이메일을 입력해주세요');
    } else {
      mutation.mutate({ email });
    }
  };

  return (
    <WhiteContainer>
      <LogoContainer>
        <Logo onClick={() => navigate('/')} style={{ width: '106px', height: '60px', cursor: 'pointer' }} />
      </LogoContainer>
      <LoginBox>
        <TextContainer>
          <PwText>비밀번호 찾기</PwText>
          <PwEmailText>이메일 인증</PwEmailText>
        </TextContainer>
        <Input placeholder='이메일' value={email} onChange={handleEmailChange} />
        <ButtonContainer>
          <Button $bgColor='#7751e1' color='white' onClick={handleButtonClick}>
            {isEmailEntered ? '확인' : '전송하기'}
          </Button>
          {isEmailSent && <SentConfirmation onClick={handleButtonClick}>메일이 도착하지 않았나요?</SentConfirmation>}
        </ButtonContainer>
      </LoginBox>
    </WhiteContainer>
  );
}

export default ForgetPwPage;

const TextContainer = styled.div`
  height: auto;
  width: 342px;
  padding-bottom: 30px;
`;

const PwText = styled.div`
  color: #7751e1;
  font-weight: bolder;
  font-size: 24px;
  text-align: left;
`;

const PwEmailText = styled.div`
  color: gray;
  font-weight: bolder;
  font-size: 20px;
  text-align: left;
  padding-top: 68px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SentConfirmation = styled.div`
  color: gray;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bolder;
`;
