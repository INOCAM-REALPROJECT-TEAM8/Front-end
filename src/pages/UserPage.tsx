import styled from 'styled-components';
import React, { useRef, useState } from 'react';

const UserPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

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

  return (
    <UserContainer>
      <UserImageContainer onClick={handleImageClick}>
        {selectedImage ? <UserImage src={selectedImage} /> : <Placeholder>Upload Image</Placeholder>}
      </UserImageContainer>
      {/* 유저 이름을 그냥 텍스트로 출력 */}
      <UserName>John Doe</UserName>
      <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.div`
  width: 390px;
  height: 732px;
  background-color: #7751e1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const UserImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
`;
