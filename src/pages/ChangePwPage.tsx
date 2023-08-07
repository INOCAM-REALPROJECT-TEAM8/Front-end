import { useMutation } from '@tanstack/react-query';
import useValidateInput from '../hooks/useValidateInput';
import { changePW } from '../api/user';
import { useSearchParams } from 'react-router-dom';

function ChangePwPage() {
  const { input: password, handleInputOnChange: handlePwOnChange, valid: pwValid } = useValidateInput('password');
  const { input: password2, handleInputOnChange: handlePwOnChange2 } = useValidateInput();

  const token = useSearchParams()[0].get('token');

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
    <div>
      <input placeholder='새 비밀번호' value={password} onChange={handlePwOnChange} />
      <input placeholder='비밀번호 확인' value={password2} onChange={handlePwOnChange2} />
      <button onClick={handleButtonClick}>비밀번호 변경</button>
    </div>
  );
}

export default ChangePwPage;
