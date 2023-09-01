import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SelectState } from '../redux/config/configStore';
import { changeUserNickname, changeUserProfileImg, userLogin } from '../redux/modules/userInfo';
import { useMutation, useQuery } from '@tanstack/react-query';
import { updateUserInfo, getUserInfo } from '../api/user';
import { styled } from 'styled-components';
import { Input } from '../components/loginPage/styles/Input';
import { ReactComponent as PlusButton } from '../assets/PlusButton.svg';
import WhiteContainer from '../components/loginPage/styles/WhiteContainer';

function MyInfoPage() {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { userId } = useSelector((state: SelectState) => state.userInfo);
  const [newNickname, setNewNickname] = useState('');
  const [selectedImage, setSelectedImage] = useState<FormData | null>(null); // FormData 타입으로 수정

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      setSelectedImage(formData);

      const reader = new FileReader();
      reader.onload = e => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const { data: userInfo } = useQuery(['userInfo', userId], () => getUserInfo(userId));

  const { mutate: updateProfileImage } = useMutation(updateUserInfo, {
    // 기존의 onSuccess 콜백을 사용할 수 있습니다.
    onSuccess: data => {
      setSelectedImage(null);
      dispatch(changeUserProfileImg({ profileImageUrl: data.userProfileImage }));
    },
  });

  const createNicknameFormData = () => {
    const formData = new FormData();
    formData.append('nickname', newNickname);
    return formData;
  };

  // updateNickname도 동일한 방식으로 수정
  const { mutate: updateNickname } = useMutation(
    (newNickname: string) => updateUserInfo({ userId, formData: createNicknameFormData() }), // 객체 형태로 전달하지 않음
    {
      onSuccess: newUserInfo => {
        dispatch(changeUserNickname({ nickname: newNickname }));
        setNewNickname('');
      },
    },
  );

  const handleProfileImageSubmit = () => {
    if (selectedImage) {
      updateProfileImage({ userId, formData: selectedImage }); // FormData 전달
    }
  };

  const handleNicknameSubmit = () => {
    if (newNickname) {
      updateNickname(newNickname); // 문자열로 전달
    }
  };

  const navigate = useNavigate();

  return (
    <WhiteContainer>
      <ImageChange>
        <div className='preview-container'>
          <label className='plus-button-container'>
            <PlusButton />
            <input type='file' onChange={handleImageChange} style={{ display: 'none' }} />
            {imagePreview && <img src={imagePreview} alt='미리보기' className='preview-image' />}
          </label>
        </div>
        <button onClick={handleProfileImageSubmit}>프로필 이미지 업데이트</button>
      </ImageChange>

      <ChangeNickNameContainer>
        <ChangeText>닉네임 변경</ChangeText>
        <Input
          type='text'
          placeholder='변경할 닉네임을 입력해주세요'
          value={newNickname}
          onChange={e => setNewNickname(e.target.value)}
        />
        <Button onClick={handleNicknameSubmit} style={{ backgroundColor: newNickname ? '#595DEB' : '#c9c9c9' }}>
          닉네임 변경하기
        </Button>
        <UnderButton
          onClick={() => navigate('/user/:userId')}
          style={{
            backgroundColor: newNickname || selectedImage ? '#595DEB' : '#c9c9c9',
          }}
        >
          변경 완료{' '}
        </UnderButton>
      </ChangeNickNameContainer>
    </WhiteContainer>
  );
}

export default MyInfoPage;
const ImageChange = styled.div`
  width: 100%;
  height: 346px;
  background-color: #595deb;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* .input[type='file'] {
    position: relative;
    width: 210px;
    height: 210px;
    background-color: white;
    border-radius: 105px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    margin-bottom: 22px;
    opacity: 0; // Make the input element invisible
    z-index: 1; // Place it above other elements
  } */
  .preview-container {
    position: relative;
    background-color: white;
    border: 3px solid white;
    width: 210px;
    height: 210px; // Same as input height
    overflow: hidden; // Hide overflow to ensure the image fits within the container
    border-radius: 105px;
    margin-bottom: 22px;
  }
  .plus-button-container {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* display: none; */
  }
  .preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    background-color: #e4e4fc;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 16px;
    height: 52px;
    width: 342px;
    cursor: pointer;
  }
`;
const ChangeNickNameContainer = styled.div`
  height: auto;
  width: 342px;
  padding-top: 42px;
`;

const ChangeText = styled.div`
  text-align: left;
  width: 100%;
  font-size: 22px;
  font-weight: bolder;
  color: #595deb;
  margin: 189px 0px 20px 0px;
`;

const Button = styled.div`
  background-color: #c9c9c9;
  display: flex;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 16px;
  height: 52px;
  width: 342px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const UnderButton = styled.div`
  background-color: #c9c9c9;
  display: flex;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 16px;
  height: 52px;
  width: 342px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 67px;
`;
