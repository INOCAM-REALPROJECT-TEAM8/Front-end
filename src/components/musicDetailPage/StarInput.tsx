import { styled, css } from 'styled-components';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Input = styled.input`
  display: none;
`;

interface LabelProps {
  isHalf?: boolean;
}

const Label = styled.label<LabelProps>`
  cursor: pointer;
  font-size: 1.5rem;
  color: lightgray;

  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 12px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-108px);
      }
      &:nth-of-type(8) {
        transform: translate(-52px);
      }
      &:nth-of-type(6) {
        transform: translate(-36px);
      }
      &:nth-of-type(4) {
        transform: translate(-20px);
      }
      &:nth-of-type(2) {
        transform: translate(-4px);
      }
    `}
`;

interface StarInputProps {
  onClickRating(value: number): void;
  value: number;
  isHalf?: boolean;
}

const StarInput: React.FC<StarInputProps> = ({ onClickRating, value, isHalf }) => {
  const handleClickRatingInput = (value: number) => onClickRating(value);

  return (
    <>
      <Input type='radio' name='rating' id={`star${value}`} value={value} />
      <Label onClick={() => handleClickRatingInput(value)} isHalf={isHalf} htmlFor={`star${value}`}>
        {isHalf ? <FaStarHalf /> : <FaStar />}
      </Label>
    </>
  );
};

export default StarInput;
