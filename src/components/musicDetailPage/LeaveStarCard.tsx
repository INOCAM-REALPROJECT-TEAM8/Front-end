import React from 'react';
import { CommentInput, CommentSubmitBtn, LeaveStarCardContainer } from './styles/leaveStarsStyle';
import useValidateInput from '../../hooks/useValidateInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '../../api/comment';

function LeaveStarCard({ musicId, closeModal }: { musicId: string; closeModal: () => void }) {
  const { input: content, handleInputOnChange, validate } = useValidateInput('', false);

  const queryClient = useQueryClient();
  const mutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([`comments/${musicId}`]);
      closeModal();
    },
  });
  const handleOnSubmit = () => {
    if (!validate()) {
      alert('코멘트를 작성해주세요');
      return;
    }
    mutation.mutate({ content, star: 4.5, musicId });
  };

  return (
    <LeaveStarCardContainer>
      <CommentInput placeholder='코멘트를 남겨보세요' onChange={handleInputOnChange} value={content} />
      <CommentSubmitBtn onClick={handleOnSubmit}>남기기</CommentSubmitBtn>
    </LeaveStarCardContainer>
  );
}

export default LeaveStarCard;
