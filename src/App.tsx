import { Route, Routes } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import MainPage from './pages/MainPage';
import MusicDetailPage from './pages/MusicDetailPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route path='' element={<MainPage />} />
        <Route path='musics/:musicId' element={<MusicDetailPage />} />
        <Route path='users/:userId' element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
