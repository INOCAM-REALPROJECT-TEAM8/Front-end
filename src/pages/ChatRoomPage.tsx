import { useNavigate, useParams } from 'react-router-dom';
import { ChatState, parseRoomId, removeRoomChats } from '../redux/modules/chatList';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRoomChatsP } from '../api/chat';
import { useDispatch, useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import ChatSender from '../components/chatRoomPage/ChatSender';

function ChatRoomPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const { myId, opId } = parseRoomId(roomId);
  if (!roomId || opId === -1) {
    navigate('/');
  }

  const [opNickname, setOpNickname] = useState('');
  const [chats, setChats] = useState<ChatState[]>([]);

  const { data, isSuccess } = useQuery([`chats/${roomId}`], getRoomChatsP(roomId || ''));
  const [first, setFirst] = useState(true);
  const newChat = useSelector((state: SelectState) => state.chatList.roomChat);

  console.log(newChat);

  useEffect(() => {
    if (isSuccess && first) {
      if (newChat) setChats([...(data.messages ?? []), newChat]);
      else setChats(data.messages ?? []);
      setOpNickname(data.nickname || '');
      setFirst(false);
    }
  }, [isSuccess, first]);

  useEffect(() => {
    if (!first && newChat) setChats([...chats, newChat]);
  }, [first, newChat]);

  return (
    <div>
      <div>{opNickname}</div>
      {chats.map(chat => (
        <div>{`${chat.nickname} ${chat.message} ${chat.senderId} ${chat.createdAt}`}</div>
      ))}
      <ChatSender {...{ chats, setChats, opId }} />
    </div>
  );
}

export default ChatRoomPage;
