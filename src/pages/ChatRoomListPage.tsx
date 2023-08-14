import { useQuery } from '@tanstack/react-query';
import { getChatRoomList } from '../api/chat';
import { useEffect, useState } from 'react';
import ChatRoom, { ChatRoomInfo } from '../components/chatRoomListPage/ChatRoom';

function ChatRoomListPage() {
  const [chatRooms, setChatRooms] = useState<ChatRoomInfo[]>([]);
  const { data, isSuccess } = useQuery(['ChatRoomList'], getChatRoomList);

  useEffect(() => {
    if (isSuccess) {
      setChatRooms(data);
    }
  }, [isSuccess]);

  console.log(chatRooms);
  return (
    <div>
      {chatRooms.map((chatRoom, index) => (
        <ChatRoom chatRoom={chatRoom} key={index} />
      ))}
    </div>
  );
}

export default ChatRoomListPage;
