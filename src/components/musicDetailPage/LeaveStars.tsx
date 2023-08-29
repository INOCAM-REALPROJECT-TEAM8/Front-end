import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import LeaveStarCard from './LeaveStarCard';
import { LeaveStarsBox } from './styles/leaveStarsStyle';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';

function LeaveStars({ musicId }: { musicId: string }) {
  const { Modal, openModal, closeModal, openerRef } = useModal<HTMLDivElement>({
    coverExist: true,
    exitByOuterClick: true,
  });
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  const handleStarButtonClick = () => {
    if (isLoggedIn) {
      openModal();
    } else {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('/login');
      }
    }
  };

  return (
    <>
      <LeaveStarsBox ref={openerRef} onClick={handleStarButtonClick}>
        별점주기
      </LeaveStarsBox>
      <Modal>
        <LeaveStarCard musicId={musicId} closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default LeaveStars;
