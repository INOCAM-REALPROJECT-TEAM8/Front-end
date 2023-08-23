import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SelectState } from '../redux/config/configStore';
import { changeUserNickname, userLogin } from '../redux/modules/userInfo';
import { useMutation, useQuery } from '@tanstack/react-query';
import { updateUserInfo, getUserInfo } from '../api/user';

function MyInfoPage() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: SelectState) => state.userInfo);
  const [newNickname, setNewNickname] = useState('');
  const [selectedImage, setSelectedImage] = useState<FormData | null>(null); // FormData 타입으로 수정

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      setSelectedImage(formData);
    }
  };

  const { data: userInfo } = useQuery(['userInfo', userId], () => getUserInfo(userId));

  const { mutate: updateProfileImage } = useMutation(updateUserInfo, {
    // 기존의 onSuccess 콜백을 사용할 수 있습니다.
    onSuccess: newUserInfo => {
      setSelectedImage(null);
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
    <div>
      <h2>프로필 이미지 수정</h2>
      <input type='file' onChange={handleImageChange} />
      <button onClick={handleProfileImageSubmit}>프로필 이미지 업데이트</button>

      <h2>닉네임 수정</h2>
      <input
        type='text'
        placeholder='새로운 닉네임 입력'
        value={newNickname}
        onChange={e => setNewNickname(e.target.value)}
      />
      <button onClick={handleNicknameSubmit}>닉네임 업데이트</button>
      <button onClick={() => navigate('/user/:userId')}>완료 </button>
    </div>
  );
}

export default MyInfoPage;
