import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { googleLogin } from '../api/user';

function GoogleCodePage() {
  const { code } = useParams();
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
