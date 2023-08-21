import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';
import MusicSlide from './MusicSlide';
import { getRecommendMusics } from '../../api/music';

function RecommendSlide() {
  const { userId } = useSelector((state: SelectState) => state.userInfo);
  const {
    data: recommendMusics,
    isSuccess: isSuccessRecommend,
    isError: isErrorRecommend,
  } = useQuery([`${userId}/reccommends`], getRecommendMusics);

  return (
    <MusicSlide
      playListName='추천 음악'
      musics={isSuccessRecommend && !isErrorRecommend && recommendMusics ? recommendMusics : []}
    />
  );
}

export default RecommendSlide;
