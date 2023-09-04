import React from 'react';
import { CommentInput, CommentSubmitBtn, LeaveCommentCardContainer } from './styles/leaveCommentsStyle';
import useValidateInput from '../../hooks/useValidateInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '../../api/comment';

function LeaveCommentCard({ musicId, closeModal }: { musicId: string; closeModal: () => void }) {
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
      alert('감상평을 작성해주세요');
      return;
    }
    mutation.mutate({ content, musicId });
  };

  return (
    <LeaveCommentCardContainer>
      <CommentInput placeholder='감상평을 남겨보세요' onChange={handleInputOnChange} value={content} />
      <CommentSubmitBtn onClick={handleOnSubmit}>남기기</CommentSubmitBtn>
    </LeaveCommentCardContainer>
  );
}

export default LeaveCommentCard;
