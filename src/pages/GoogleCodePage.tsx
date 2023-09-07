import { useMutation } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { googleLogin } from '../api/user';
import { useEffect, useState } from 'react';

function GoogleCodePage() {
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState<string>('');

  const navigate = useNavigate();
  const mutation = useMutation(googleLogin, {
    onSuccess: () => {
      alert('로그인 되었습니다.');
      navigate('/');
    },
  });

  useEffect(() => {
    const code = searchParams.get('code');
    setCode(code ?? '');
  }, [searchParams]);

  if (code) {
    mutation.mutate({ code });
  }

  return <div>GoogleCodePage</div>;
}

export default GoogleCodePage;
