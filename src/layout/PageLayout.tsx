import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import ChatAlarm from './ChatAlarm';
import { SelectState } from '../redux/config/configStore';
import { useSelector } from 'react-redux';

function PageLayout({ headerFooterExist }: { headerFooterExist: boolean }) {
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);
  const paddingTop = headerFooterExist ? '56px' : '0';

  return (
    <>
      <PageContainer>
        <AllPage paddingTop={paddingTop}>
          {isLoggedIn && <ChatAlarm />}
          {headerFooterExist ? (
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          ) : (
            <Outlet />
          )}
        </AllPage>
      </PageContainer>
    </>
  );
}

export default PageLayout;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

interface AllPageProps {
  paddingTop: string;
}

const AllPage = styled.div<AllPageProps>`
  position: relative;
  padding: ${({ paddingTop }) => paddingTop} 0px;
  width: 100vw;
  max-width: 800px;
  background-color: #7751e1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
