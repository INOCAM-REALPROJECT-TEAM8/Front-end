import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import MainContainer from '../components/loginPage/styles/MainContainer';

function UserPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [nickname, setNickname] = useState<string>('John Doe'); // 기본 닉네임 설정

  const handleImageClick = () => {
    // 유저 이미지 클릭 시 파일 업로드 input 클릭 이벤트 실행
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 파일 선택 시 처리하는 로직
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 선택된 파일을 상태로 관리하여 컨테이너 안에 바로 보여줌
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleNicknameChange = () => {
    const newNickname = prompt('Enter your new nickname'); // 팝업 창을 통해 새 닉네임을 입력받음
    if (newNickname) {
      setNickname(newNickname); // 새 닉네임을 상태로 업데이트
    }
  };

  return (
    <MainContainer>
      <UserImageContainer onClick={handleImageClick}>
        {selectedImage ? <UserImage src={selectedImage} /> : <Placeholder>Upload Image</Placeholder>}
      </UserImageContainer>
      {/* 유저 이름을 그냥 텍스트로 출력 */}
      <UserName onClick={handleNicknameChange}>{nickname}</UserName> {/* 상태에 따라 닉네임 출력 */}
      {/* <button onClick={handleNicknameChange}>✏️</button> 닉네임 변경 버튼 */}
      <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
    </MainContainer>
  );
}

export default UserPage;

const UserImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  border: 3px solid white;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  object-fit: cover;
`;

const Placeholder = styled.div`
  color: gray;
`;

const UserName = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;
