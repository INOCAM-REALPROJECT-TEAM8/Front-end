import { useMutation } from '@tanstack/react-query';
import useValidateInput from '../hooks/useValidateInput';
import { forgetPW } from '../api/user';

function ForgetPwPage() {
  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');

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
    <div>
      <input placeholder='가입하신 email을 입력해주세요' value={email} onChange={handleEmailOnChange} />
      <button onClick={handleButtonClick}>링크발송</button>
    </div>
  );
}

export default ForgetPwPage;
