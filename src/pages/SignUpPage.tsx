import useValidateInput from '../hooks/useValidateInput';

function SignUpPage() {
  const { input: email, handleInputOnChange: handleEmailOnChange, valid: emailValid } = useValidateInput('email');
  const { input: password, handleInputOnChange: handlePwOnChange, valid: passwordValid } = useValidateInput('password');
  const { input: password2, handleInputOnChange: handlePw2OnChange } = useValidateInput();
  const { input: nickname, handleInputOnChange: handleNicknameOnChange, valid: nicknameValid } = useValidateInput();

  return (
    <div>
      <input onChange={handleEmailOnChange} value={email} />
      <input onChange={handlePwOnChange} value={password} />
      <input onChange={handlePw2OnChange} value={password2} />
      <input onChange={handleNicknameOnChange} value={nickname} />
    </div>
  );
}

export default SignUpPage;
