import { styled } from 'styled-components';
import { useStomp } from 'usestomp-hook/lib/index';
import { useDispatch, useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { ChatState, addExtraChat, addRoomChat, getRoomId } from '../redux/modules/chatList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ChatAlarm() {
  const [isConnected, setConnected] = useState<boolean>(false);
  const { subscribe, unsubscribe, subscriptions, send } = useStomp(
    { brokerURL: process.env.REACT_APP_BROKER_URL },
    () => {
      console.log('연결되었음.');
      setConnected(true);
    },
  );

  const { userId, prevUserId } = useSelector((state: SelectState) => state.userInfo);
  const dispatch = useDispatch();
  const { extraChatList } = useSelector(({ chatList }: SelectState) => chatList);
  const lastExtraChat = extraChatList ? extraChatList[extraChatList.length - 1] : null;
  const navigate = useNavigate();

  const currentPath = useLocation().pathname;
  const chatRoomId = currentPath.startsWith('/chat-room/') && currentPath.replace('/chat-room/', '');

  console.log(lastExtraChat);

  useEffect(() => {
    if (isConnected) {
      subscribe<ChatState>(`/sub/user/${userId}`, chat => {
        if (chatRoomId === getRoomId(chat)) {
          dispatch(addRoomChat(chat));
        } else {
          dispatch(addExtraChat(chat));
        }
      });
      console.log('구독');
    }

    return () => {
      if (subscriptions[`/sub/user/${prevUserId}`]) {
        unsubscribe(`/sub/user/${prevUserId}`);
        console.log('구독 해제');
      }
    };
  }, [isConnected]);

  return (
    lastExtraChat && (
      <ChatAlarmContainer onClick={() => navigate(`/chat-room/${getRoomId(lastExtraChat)}`)}>
        <div className='nickname'>{lastExtraChat.nickname}</div>
        <div className='message'>{lastExtraChat.message}</div>
      </ChatAlarmContainer>
    )
  );
}

const ChatAlarmContainer = styled.div`
  position: absolute;
  border-radius: 10px;
  height: 56px;
  background-color: var(--main-color);
  width: 400px;
  margin: 0 auto;
  z-index: 20;
  padding: 10px;

  .nickname {
    font-size: 20px;
    font-weight: 600;
  }
  .message {
    font-size: 15px;
    font-weight: 500;
  }
`;

export default ChatAlarm;
