import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

function PageLayout() {
  return (
    <>
      <PageContainer>
        <AllPage>
          <Header />
          <Outlet />
          <Footer />
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

const AllPage = styled.div`
  width: 100vw;
  max-width: 800px;
  background-color: #7751e1;
  display: flex;
  flex-direction: column;
`;
