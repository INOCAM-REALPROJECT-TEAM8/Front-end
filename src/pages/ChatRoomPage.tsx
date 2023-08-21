import { useNavigate, useParams } from 'react-router-dom';
import { ChatState, parseRoomId, removeRoomChats } from '../redux/modules/chatList';
import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRoomChatsP } from '../api/chat';
import { useDispatch, useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import ChatSender from '../components/chatRoomPage/ChatSender';
import Header from '../layout/Header';
import ChatContainer from '../components/chatRoomPage/styles/ChatContainer';
import ChatMsg from '../components/chatRoomPage/ChatMsg';

function ChatRoomPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
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

  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, [chats]);

  useEffect(() => {
    if (newChat) {
      setChats([...chats, newChat]);
    }
  }, [newChat]);

  useEffect(() => {
    if (isSuccess) {
      setChats(data.messages ?? []);
      setOpNickname(data.nickname || '');
    }
  }, [isSuccess, data]);

  return (
    <div>
      <Header chatNickname={opNickname} chatOpId={opId} />
      <ChatContainer>
        {chats.map((chat, index) => (
          <ChatMsg
            key={index}
            curChat={chat}
            prevChat={index !== 0 ? chats[index - 1] : null}
            nextChat={chats[index + 1] ?? null}
            myId={myId}
          />
        ))}
      </ChatContainer>
      <div ref={chatEndRef} />
      <ChatSender {...{ chats, setChats, opId }} />
    </div>
  );
}

export default ChatRoomPage;
