import { useMutation } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { googleLogin } from '../api/user';

function GoogleCodePage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const mutation = useMutation(googleLogin, {
    onSuccess: () => {
      alert('로그인 되었습니다.');
      navigate('/');
    },
  });

  mutation.mutate({ code: code ?? '' });

  return <div>GoogleCodePage</div>;
}

export default GoogleCodePage;
