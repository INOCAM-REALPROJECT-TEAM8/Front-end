import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteContainer } from '../components/loginPage/styles/WhiteContainer';
import { ReactComponent as SmallLogo } from '../icons/SmallHIDE.svg';
import styled from 'styled-components';
import { ReactComponent as Check } from '../assets/Check.svg';
import { ReactComponent as DetailButton } from '../assets/DetailButton.svg';
import { ReactComponent as BackButton } from '../icons/BackButton.svg';

// 이용약관 타입 정의
interface Agreement {
  id: string;
  text: string;
  required: boolean;
  checked: boolean;
}

function AgreePage() {
  const navigate = useNavigate();

  // 이용약관 체크 상태를 관리하는 상태 배열
  const [agreements, setAgreements] = useState<Agreement[]>([
    { id: 'serviceTerms', text: '서비스 이용약관', required: true, checked: false },
    { id: 'privacyTerms', text: '개인정보수집/이용동의', required: true, checked: false },
    { id: 'thirdPartyTerms', text: '개인정보 제3자 정보제공 동의', required: true, checked: false },
    // 추가 이용약관을 여기에 추가할 수 있습니다.
  ]);

  const isAllRequiredAgreed = () => {
    const requiredAgreements = agreements.filter(agreement => agreement.required);
    return requiredAgreements.every(agreement => agreement.checked);
  };

  // 이용약관 체크 및 해제 시 호출되는 함수
  const handleAgreementClick = (agreementId: string) => {
    const updatedAgreements = agreements.map(agreement =>
      agreement.id === agreementId ? { ...agreement, checked: !agreement.checked } : agreement,
    );
    setAgreements(updatedAgreements);
  };

  const handleAllAgreeClick = () => {
    const allAgreed = agreements.every(agreement => agreement.checked);
    const updatedAgreements = agreements.map(agreement => ({
      ...agreement,
      checked: !allAgreed,
    }));
    setAgreements(updatedAgreements);
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <WhiteContainer>
      <TopContainer>
        <BackButtonContainer onClick={handleBackButtonClick}>
          <BackButton />
        </BackButtonContainer>
        <SignHead>회원가입</SignHead>
        <LogoContainer>
          <AddSmallLogo />
          <PageNumber>(1/3)</PageNumber>
        </LogoContainer>
      </TopContainer>
      <TextAdd>약관동의</TextAdd>
      <SmallText>필수항목 및 선택항목 약관에 동의해주세요.</SmallText>
      <AllAgree onClick={handleAllAgreeClick}>
        <CheckButton
          style={{
            borderColor: agreements.every(agreement => agreement.checked) ? '#595DEB' : '#c9c9c9',
          }}
        >
          <Check style={{ display: agreements.every(agreement => agreement.checked) ? 'block' : 'none' }} />
        </CheckButton>
        전체동의
      </AllAgree>
      {agreements.map(agreement => (
        <TextAgree key={agreement.id}>
          {/* 이용약관 체크 버튼의 색상을 동적으로 변경 */}
          <CheckButton
            style={{
              borderColor: agreement.checked ? '#595DEB' : '#c9c9c9',
            }}
            onClick={() => handleAgreementClick(agreement.id)}
          >
            <Check style={{ display: agreement.checked ? 'block' : 'none' }} />
          </CheckButton>
          <BoldText>({agreement.required ? '필수' : '선택'})</BoldText>
          {agreement.text}
          <DetailButton style={{ marginLeft: 'auto' }} />
        </TextAgree>
      ))}
      <SignButton
        onClick={() => {
          if (isAllRequiredAgreed()) {
            navigate('/signup');
          } else {
            alert('필수 이용약관에 모두 동의해야 합니다.');
          }
        }}
        disabled={!isAllRequiredAgreed()} // 필수 이용약관에 모두 동의하지 않은 경우 버튼 비활성화
      >
        다음
      </SignButton>
    </WhiteContainer>
  );
}

export default AgreePage;

const TopContainer = styled.div`
  width: 100%;
  height: 174px;
  position: absolute;
  top: 0;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
`;

const AddSmallLogo = styled(SmallLogo)`
  margin: 26px;
`;

const PageNumber = styled.div`
  font-size: 16px;
  color: #595deb;
  position: absolute;
  right: 20px;
`;

const TextAdd = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595deb;
  padding: 0px 224px 12px 0px;
`;

const SmallText = styled.div`
  font-size: 16px;
  color: gray;
  margin-bottom: 28px;
  padding-right: 26px;
`;

const SignHead = styled.div`
  width: 100%;
  height: 56px;
  border: none;
  color: white;
  font-size: x-large;
  font-weight: bold;
  background-color: #595deb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignButton = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #595deb;
  position: absolute;
  bottom: 0;
`;

const CheckButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 18px;
  border: 2px solid #c9c9c9;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;

const AllAgree = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: grey;
  border: 2px solid #e3e3e3;
  border-radius: 16px;
  height: 52px;
  width: 342px;
  display: flex;
  align-items: center;
  margin: 10px;

  ${CheckButton} {
    margin: 12px;
  }
`;

const TextAgree = styled.div`
  font-size: 16px;
  color: grey;
  border: none;
  border-radius: 16px;
  height: 52px;
  width: 330px;
  display: flex;
  align-items: center;
  margin: 2px;

  ${CheckButton} {
    margin: 8px;
  }
`;

const BoldText = styled.div`
  font-size: 16px;
  font-weight: bolder;
  color: gray;
  padding-right: 2px;
`;
const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 26px;
  cursor: pointer;
`;
