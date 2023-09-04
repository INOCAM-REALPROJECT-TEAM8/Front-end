import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import LeaveCommentCard from './LeaveCommentCard';
import { LeaveCommentBox } from './styles/leaveCommentsStyle';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';

function LeaveComments({ musicId }: { musicId: string }) {
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
      <LeaveCommentBox ref={openerRef} onClick={handleStarButtonClick}>
        감상평 남기기
      </LeaveCommentBox>
      <Modal>
        <LeaveCommentCard musicId={musicId} closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default LeaveComments;
