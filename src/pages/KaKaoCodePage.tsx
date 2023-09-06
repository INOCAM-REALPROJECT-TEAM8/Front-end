import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { kakaoLogin } from '../api/user';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function KaKaoCodePage() {
  const query = useQuery();
  const code = query.get('code');
  console.log(code);
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
