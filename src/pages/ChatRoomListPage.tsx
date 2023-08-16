import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getChatRoomList } from '../api/chat';
import { useEffect, useState } from 'react';
import ChatRoom, { ChatRoomInfo } from '../components/chatRoomListPage/ChatRoom';
import { ChatRoomsContainer } from '../components/chatRoomListPage/styles/chatRoomListPageStyle';

function ChatRoomListPage() {
  const queryClient = useQueryClient();
  const [chatRooms, setChatRooms] = useState<ChatRoomInfo[]>([]);
  const { data, isSuccess } = useQuery(['ChatRoomList'], getChatRoomList);

  useEffect(() => {
    queryClient.invalidateQueries(['ChatRoomList']);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setChatRooms(data);
    }
  }, [isSuccess, data]);

  return (
    <ChatRoomsContainer>
      {chatRooms.map((chatRoom, index) => (
        <ChatRoom chatRoom={chatRoom} key={index} />
      ))}
    </ChatRoomsContainer>
  );
}

export default ChatRoomListPage;
