import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { kakaoLogin } from '../api/user';

function KaKaoCodePage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const mutation = useMutation(kakaoLogin, {
    onSuccess: () => {
      alert('로그인 되었습니다.');
      navigate('/');
    },
  });

  mutation.mutate({ code: code ?? '' });

  return <div>KaKaoCodePage</div>;
}

export default KaKaoCodePage;
