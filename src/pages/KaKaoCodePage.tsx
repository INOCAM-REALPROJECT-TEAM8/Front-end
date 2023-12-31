import { useMutation } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { kakaoLogin } from '../api/user';
import { useEffect, useState } from 'react';

function KaKaoCodePage() {
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState<string>('');

  const navigate = useNavigate();
  const mutation = useMutation(kakaoLogin, {
    onSuccess: () => {
      alert('로그인 되었습니다.');
      navigate('/');
    },
    onError: () => {
      if (code) {
        mutation.mutate({ code });
      }
    },
  });

  useEffect(() => {
    const code = searchParams.get('code');
    setCode(code ?? '');
  }, [searchParams]);

  useEffect(() => {
    if (code) {
      mutation.mutate({ code });
    }
  }, [code]);

  return <div>KaKaoCodePage</div>;
}

export default KaKaoCodePage;
