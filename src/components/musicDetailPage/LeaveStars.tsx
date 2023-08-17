import useModal from '../../hooks/useModal';
import { LeaveStarsBox } from './styles/leaveStarsStyle';

function LeaveStars({ musicId }: { musicId: string }) {
  const { Modal, openModal, closeModal, openerRef } = useModal<HTMLDivElement>({
    coverExist: true,
    exitByOuterClick: true,
  });
  return (
    <>
      <LeaveStarsBox ref={openerRef}>별점주기</LeaveStarsBox>
      <Modal>
        <div>
          <input placeholder='코멘트를 남겨주세요' />
        </div>
      </Modal>
    </>
  );
}

export default LeaveStars;
