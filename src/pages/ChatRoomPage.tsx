import { useNavigate, useParams } from 'react-router-dom';
import { ChatState, parseRoomId, removeRoomChats } from '../redux/modules/chatList';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRoomChatsP } from '../api/chat';
import { useDispatch, useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import ChatSender from '../components/chatRoomPage/ChatSender';

function ChatRoomPage() {
  const queryClient = useQueryClient();
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
  const newChat = useSelector((state: SelectState) => state.chatList.roomChat);

  useEffect(() => {
    queryClient.invalidateQueries([`chats/${roomId}`]);
  }, []);

  useEffect(() => {
    if (newChat) setChats([...chats, newChat]);
  }, [newChat]);

  useEffect(() => {
    if (isSuccess) {
      setChats(data.messages ?? []);
      setOpNickname(data.nickname || '');
    }
  }, [isSuccess, data]);

  return (
    <div>
      <div>{opNickname}</div>
      {chats.map((chat, index) => (
        <div key={index}>{`${chat.nickname} ${chat.message} ${chat.senderId} ${chat.createdAt}`}</div>
      ))}
      <ChatSender {...{ chats, setChats, opId }} />
    </div>
  );
}

export default ChatRoomPage;
