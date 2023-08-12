import { useNavigate, useParams } from 'react-router-dom';
import { ChatState, parseRoomId } from '../redux/modules/chatList';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRoomChatsP } from '../api/chat';

function ChatRoomPage() {
  const navigate = useNavigate();
  const { roomId } = useParams();
  if (!roomId) {
    navigate('/');
  }
  const { myId, opId } = parseRoomId(roomId);
  const [opNickname, setOpNickname] = useState('');
  const [chats, setChats] = useState<ChatState[]>([]);

  const { data, isSuccess } = useQuery([`chats/${roomId}`], getRoomChatsP(roomId || ''));

  useEffect(() => {
    console.log(data);
    if (isSuccess) {
      setChats(data.messages ?? []);
      setOpNickname(data.nickname || '');
    }
  }, [isSuccess]);

  return (
    <div>
      <div>{opNickname}</div>
      {chats.map(chat => (
        <div>{`${chat.nickname} ${chat.message} ${chat.senderId} ${chat.createdAt}`}</div>
      ))}
    </div>
  );
}

export default ChatRoomPage;
