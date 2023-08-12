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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { userLogout } from './redux/modules/userInfo';
import { SelectState } from './redux/config/configStore';
import ChatAlarm from './layout/ChatAlarm';
import ChatRoomPage from './pages/ChatRoomPage';
import FollowingPage from './pages/FollowingPage';

function App() {
  const [token] = useState(localStorage.getItem('accessToken'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) dispatch(userLogout());
  }, []);
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);
  return (
    <>
      {isLoggedIn && <ChatAlarm />}
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
        <Route path='/chat-room/:roomId' element={<ChatRoomPage />} />
      </Routes>
    </>
  );
}

export default App;
