import { useMutation } from '@tanstack/react-query';
import useValidateInput from '../hooks/useValidateInput';
import { changePW } from '../api/user';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/hideLogo.svg';
import { Button, Input, LoginBox, LogoContainer } from '../components/loginPage/styles/Input';

function ChangePwPage() {
  const { input: password, handleInputOnChange: handlePwOnChange, valid: pwValid } = useValidateInput('password');
  const { input: password2, handleInputOnChange: handlePwOnChange2 } = useValidateInput();

  const token = useSearchParams()[0].get('token');

  const navigate = useNavigate();

  const mutation = useMutation(changePW, {
    onSuccess: data => {
      if (data.success) {
        //성공
        alert(data.msg);
      } else {
        //실패
        alert(data.msg);
      }
    },
  });

  const handleButtonClick = () => {
    if (!pwValid) {
      alert('유효하지 않은 비미럽');
    } else if (password !== password2) {
      alert('비밀번호가 같지 않으');
    } else {
      if (token) mutation.mutate({ token, password });
    }
  };

  return (
    <LoginBox>
      <LogoContainer>
        <Logo onClick={() => navigate('/')} style={{ width: '106px', height: '60px', cursor: 'pointer' }} />
      </LogoContainer>
      <Input placeholder='새 비밀번호' value={password} onChange={handlePwOnChange} />
      <Input placeholder='비밀번호 확인' value={password2} onChange={handlePwOnChange2} />
      <Button $bgColor='white' color='#7751e1' onClick={handleButtonClick}>
        비밀번호 변경
      </Button>
    </LoginBox>
  );
}

export default ChangePwPage;
