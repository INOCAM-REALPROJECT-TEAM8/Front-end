import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  InputSearchContainer,
  InputSearchIcon,
  InputSearchInput,
  InputSearchInputContainer,
  InputVerticalLine,
} from '../components/loginPage/styles/InputSearchBoxStyle';
import SearchResults from '../components/mainPage/SearchResults';
import { MusicInfo, searchMusics } from '../api/music';
import WhiteContainer from '../components/loginPage/styles/WhiteContainer';
import { styled } from 'styled-components';
import { ReactComponent as BackButton } from '../icons/BackButton.svg';
import { ReactComponent as SmallLogo } from '../icons/SmallHIDE.svg';

function MusicAddPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [resultMusics, setResultMusics] = useState<MusicInfo[]>([]);

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  const getNewResultMusics = (searchKeyword: string) => () => {
    searchMusics(searchKeyword)
      .then(newResultMusics => setResultMusics(newResultMusics))
      .catch(() => setResultMusics([]));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(getNewResultMusics(e.target.value), 500);
    setTimer(newTimer);
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
          <PageNumber>(3/3)</PageNumber>
        </LogoContainer>
        <TextContainer>
          <TextAdd>곡 선택</TextAdd>
          <SmallText>하이드 서비스 사용을 위하여 좋아하는 곡을 세 곡 선택해 주세요.</SmallText>
          <InputSearchContainer>
            <InputSearchInputContainer>
              <InputSearchIcon />
              <InputVerticalLine />
              <InputSearchInput
                placeholder='노래, 앨범, 아티스트 검색'
                type='text'
                value={input}
                onChange={handleInputChange}
              />
            </InputSearchInputContainer>
            {input && resultMusics.length ? <SearchResults results={resultMusics} /> : <></>}
          </InputSearchContainer>
        </TextContainer>
      </TopContainer>

      <SignButton>다음</SignButton>
    </WhiteContainer>
  );
}

export default MusicAddPage;

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
  cursor: pointer;
`;
const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 26px;
  cursor: pointer;
`;

const PageNumber = styled.div`
  font-size: 16px;
  color: #595deb;
  position: absolute;
  right: 20px;
`;

const SignHead = styled.div`
  width: 100%;
  height: 56px;
  font-size: 24px;
  border: none;
  color: white;
  font-size: x-large;
  font-weight: bold;
  background-color: #595deb;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
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

const TextAdd = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595deb;
  padding-bottom: 12px;
`;

const SmallText = styled.div`
  font-size: 16px;
  color: gray;
  padding: 10px 0px 40px 0px;
`;

const TextContainer = styled.div`
  padding: 0px 26px 0px 26px;
`;
