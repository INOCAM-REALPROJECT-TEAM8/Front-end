import { Route, Routes } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import MainPage from './pages/MainPage';
import MusicDetailPage from './pages/MusicDetailPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgetPwPage from './pages/ForgetPwPage';
import ChangePwPage from './pages/ChangePwPage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { userLogout } from './redux/modules/userInfo';
import ChatRoomPage from './pages/ChatRoomPage';
import FollowingPage from './pages/FollowingPage';
import ChatRoomListPage from './pages/ChatRoomListPage';

function App() {
  const [token] = useState(localStorage.getItem('accessToken'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) dispatch(userLogout());
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout headerFooterExist={true} />}>
          <Route path='' element={<MainPage />} />
          <Route path='musics/:musicId' element={<MusicDetailPage />} />
          <Route path='users/:userId' element={<UserPage />} />
          <Route path='users/:userId/following' element={<FollowingPage />} />
          <Route path='chats' element={<ChatRoomListPage />} />
        </Route>
        <Route path='/' element={<PageLayout headerFooterExist={false} />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgetpw' element={<ForgetPwPage />} />
          <Route path='changepw' element={<ChangePwPage />} />
          <Route path='chat-room/:roomId' element={<ChatRoomPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
