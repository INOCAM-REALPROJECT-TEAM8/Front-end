import { useMutation } from '@tanstack/react-query';
import useValidateInput from '../hooks/useValidateInput';
import { forgetPW } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/hideLogo.svg';
import { Button, Input, LoginBox, LogoContainer } from '../components/loginPage/styles/Input';

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
    },
  });

  const handleButtonClick = () => {
    if (!emailValid) {
      alert('올바른 형식의 이메일을 입력해주세요');
    } else {
      mutation.mutate({ email });
    }
  };

  return (
    <LoginBox>
      <LogoContainer>
        <Logo onClick={() => navigate('/')} style={{ width: '106px', height: '60px', cursor: 'pointer' }} />
      </LogoContainer>
      <Input placeholder='이메일' value={email} onChange={handleEmailOnChange} />
      <Button $bgColor='white' color='#7751e1' onClick={handleButtonClick}>
        전송하기
      </Button>
    </LoginBox>
  );
}

export default ForgetPwPage;
