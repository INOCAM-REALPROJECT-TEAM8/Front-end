import useModal from '../../hooks/useModal';
import LeaveStarCard from './LeaveStarCard';
import { LeaveStarsBox } from './styles/leaveStarsStyle';

function LeaveStars({ musicId }: { musicId: string }) {
  const { Modal, openModal, closeModal, openerRef } = useModal<HTMLDivElement>({
    coverExist: true,
    exitByOuterClick: true,
  });
  return (
    <>
      <LeaveStarsBox ref={openerRef} onClick={() => openModal()}>
        별점주기
      </LeaveStarsBox>
      <Modal>
        <LeaveStarCard musicId={musicId} closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default LeaveStars;
