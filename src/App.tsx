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
import MyPage from './pages/MyPage';
import FollowerPage from './pages/FallowerPage';
import MyInfoPage from './pages/MyInfoPage';
import KaKaoCodePage from './pages/KaKaoCodePage';
import GoogleCodePage from './pages/GoogleCodePage';
import MusicAddPage from './pages/MusicAddPage';
import ListeningList from './pages/ListeningList';
import AgreePage from './pages/AgreePage';
function App() {
  const [token] = useState(localStorage.getItem('refreshToken'));
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
          <Route path='user/:userId' element={<MyPage />} />
          <Route path='user/:userId/myinfo' element={<MyInfoPage />} />
          <Route path='user/:userId/following' element={<FollowingPage />} />
          <Route path='user/:userId/follower' element={<FollowerPage />} />
          <Route path='chats' element={<ChatRoomListPage />} />
          <Route path='user/:userId/listen' element={<ListeningList />} />
        </Route>
        <Route path='/' element={<PageLayout headerFooterExist={false} />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='oauth/kakao' element={<KaKaoCodePage />} />
          <Route path='oauth/google' element={<GoogleCodePage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgetpw' element={<ForgetPwPage />} />
          <Route path='changepw' element={<ChangePwPage />} />
          <Route path='chat-room/:roomId' element={<ChatRoomPage />} />
          <Route path='agree' element={<AgreePage />} />
          <Route path='user/:userId/musicadd' element={<MusicAddPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
