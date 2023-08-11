import { Route, Routes } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import MainPage from './pages/MainPage';
import MusicDetailPage from './pages/MusicDetailPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ForgetPwPage from './pages/ForgetPwPage';
import ChangePwPage from './pages/ChangePwPage';
import FollowingPage from './pages/FollowingPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route path='' element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgetpw' element={<ForgetPwPage />} />
          <Route path='changepw' element={<ChangePwPage />} />
          <Route path='musics/:musicId' element={<MusicDetailPage />} />
          <Route path='users/:userId' element={<UserPage />} />
          <Route path='following' element={<FollowingPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
