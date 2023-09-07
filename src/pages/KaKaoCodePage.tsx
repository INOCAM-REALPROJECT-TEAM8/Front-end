import { useMutation } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { kakaoLogin } from '../api/user';

function KaKaoCodePage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const mutation = useMutation(kakaoLogin, {
    onSuccess: () => {
      alert('로그인 되었습니다.');
      navigate('/');
    },
  });

  if (code) {
    mutation.mutate({ code });
  }

  return <div>KaKaoCodePage</div>;
}

export default KaKaoCodePage;
