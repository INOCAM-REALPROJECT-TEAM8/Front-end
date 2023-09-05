import { styled } from 'styled-components';
import { useState } from 'react';
import StarInput from './StarInput';

interface StarRatingProps {
  onValueChanged(value: number): void; // 새로운 props
}

const StarRating: React.FC<StarRatingProps> = ({ onValueChanged }) => {
  const [rating, setRating] = useState<number>(0);

  const handleClickRating = (value: number) => {
    setRating(value);
    onValueChanged(value); // 선택한 별점 상위 컴포넌트에 전달
  };

  return (
    <Base>
      <RatingValue>{rating}</RatingValue>
      <RatingField>
        <StarInput onClickRating={handleClickRating} value={5} isHalf={false} />
        <StarInput onClickRating={handleClickRating} value={4.5} isHalf={true} />
        <StarInput onClickRating={handleClickRating} value={4} isHalf={false} />
        <StarInput onClickRating={handleClickRating} value={3.5} isHalf={true} />
        <StarInput onClickRating={handleClickRating} value={3} isHalf={false} />
        <StarInput onClickRating={handleClickRating} value={2.5} isHalf={true} />
        <StarInput onClickRating={handleClickRating} value={2} isHalf={false} />
        <StarInput onClickRating={handleClickRating} value={1.5} isHalf={true} />
        <StarInput onClickRating={handleClickRating} value={1} isHalf={false} />
        <StarInput onClickRating={handleClickRating} value={0.5} isHalf={true} />
      </RatingField>
      <Name>좌우로 드래그하여 별점을 주세요</Name>
    </Base>
  );
};

export default StarRating;

const Base = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

const Name = styled.span`
  font-size: 16px;
  line-height: 100%;
  color: var(--main-color);
  padding-top: 10px;
`;

const RatingValue = styled.span`
  font-size: 40px;
  color: #595deb;
  line-height: 100%;
`;

const RatingField = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border: none;
  transform: translateY(2px);

  input:checked ~ label,
  labeL:hover,
  labeL:hover ~ label {
    transition: 0.2s;
    color: var(--main-color);
  }
`;
