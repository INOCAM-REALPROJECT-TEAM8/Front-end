import React, { useEffect, useState, useMemo } from 'react';
import { getFollowingList, FollowUser } from '../api/follow';
import { useParams } from 'react-router-dom';

function FollowingPage() {
  const [followingList, setFollowingList] = useState<FollowUser[]>([]);
  const { userId: userIdParam } = useParams<{ userId: string }>();

  const userId = useMemo(() => {
    const numericUserId = Number(userIdParam);
    return isNaN(numericUserId) ? 0 : numericUserId; // NaN이면 기본값 0을 사용
  }, [userIdParam]);

  useEffect(() => {
    // API 호출 및 데이터 가져오기
    const fetchFollowingList = async () => {
      try {
        const response = await getFollowingList(userId);
        setFollowingList(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching following list:', error);
      }
    };

    fetchFollowingList();
  }, [userId]); // userId가 변경될 때마다 호출

  const handleFollow = (id: number) => {
    // 팔로우 버튼 클릭 시 실행되는 로직
    // 팔로우 API 호출 등을 처리
    // 이 부분은 실제 팔로우 버튼 클릭 시 동작하는 로직으로 채워주세요.
  };

  return (
    <div>
      <h1>팔로잉 목록</h1>
      <ul>
        {followingList.map(user => (
          <li key={user.id} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
              <img src={user.image} alt={user.nickname} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ marginLeft: '10px' }}>
              <p>{user.nickname}</p>
              <button onClick={() => handleFollow(user.id)}>팔로우</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowingPage;
