import useValidateInput from '../hooks/useValidateInput';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api/user';
import { useMutation } from '@tanstack/react-query';
import { WhiteContainer } from '../components/loginPage/styles/WhiteContainer';

function SignUpInfo() {
  const navigate = useNavigate();

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

  //       const signupMutation = useMutation(signup, {
  //         onSuccess: data => {
  //           if (data.success) {
  //             alert('회원가입이 완료되었습니다.');
  //             loginMutation.mutate({ nickname });
  //           } else {
  //             alert(data.msg);
  //           }
  //         },
  //       });

  //      const handleSubmit = () => {
  // if (!nicknameValid) {
  //          alert('닉네임을 입력해주세요');
  //        } else {
  //          signupMutation.mutate({  nickname });
  //        }
  //      };

  return (
    <WhiteContainer>
      <input onChange={handleNicknameOnChange} value={nickname} placeholder='닉네임' />
      <button>다음</button>
    </WhiteContainer>
  );
}

export default SignUpInfo;
