import React, { useEffect, useState } from 'react';
import { getFollowerList, FollowUser } from '../api/follow';
import { useParams } from 'react-router-dom';

function FollowerPage() {
  const [followerList, setFollowerList] = useState<FollowUser[]>([]);

  const userIdParam = useParams<{ userId: string }>().userId;
  const userId = Number(userIdParam);

  useEffect(() => {
    // API 호출 및 데이터 가져오기
    const fetchFollowerList = async () => {
      try {
        const response = await getFollowerList(userId);
        setFollowerList(response.data);
      } catch (error) {
        console.error('Error fetching follower list:', error);
      }
    };

    fetchFollowerList();
  }, [userId]); // userId가 변경될 때마다 호출

  const handleFollow = (id: number) => {
    // 팔로우 버튼 클릭 시 실행되는 로직
    // 팔로우 API 호출 등을 처리
    // 이 부분은 실제 팔로우 버튼 클릭 시 동작하는 로직으로 채워주세요.
  };

  return (
    <div>
      <h1>팔로워 목록</h1>
      <ul>
        {followerList.map(user => (
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

export default FollowerPage;
