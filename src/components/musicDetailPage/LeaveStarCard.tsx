import React from 'react';
import { BtnContainer, StarSubmitBtn, CloseModalBtn, LeaveStarCardContainer } from './styles/leaveStarsStyle';
import StarRating from './StarRating';
import { putMusicReview } from '../../api/star';
import { MusicInfo } from '../../api/music';
import { useState } from 'react';

function LeaveStarCard({ musicId, closeModal }: { musicId: string; closeModal: () => void }) {
  const [starValue, setStarValue] = useState(0); // 추가된 state

  const handleOnSubmit = async () => {
    try {
      await putMusicReview(musicId)(starValue); // "남기기" 버튼 클릭 시 서버에 별점 정보 전송
      closeModal();
    } catch (error) {
      console.error(error); // 에러 처리
    }
  };

  const handleOnStarChange = (value: number) => {
    setStarValue(value);
  };

  return (
    <LeaveStarCardContainer>
      <StarRating onValueChanged={handleOnStarChange} />
      <BtnContainer>
        <CloseModalBtn onClick={closeModal}>취소</CloseModalBtn>
        <StarSubmitBtn onClick={handleOnSubmit}>확인</StarSubmitBtn>
      </BtnContainer>
    </LeaveStarCardContainer>
  );
}

export default LeaveStarCard;

// const { input: content, handleInputOnChange, validate } = useValidateInput('', false);

// const queryClient = useQueryClient();
// const mutation = useMutation(postComment, {
//   onSuccess: () => {
//     queryClient.invalidateQueries([`comments/${musicId}`]);
//     closeModal();
//   },
// });

// const handleOnSubmit = () => {
//   if (!validate()) {
//     alert('코멘트를 작성해주세요');
//     return;
//   }
//   mutation.mutate({ content, musicId });
// };
