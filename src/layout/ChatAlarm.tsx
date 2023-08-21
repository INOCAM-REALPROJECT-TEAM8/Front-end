import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { ChatState, addExtraChat, addRoomChat, getRoomId } from '../redux/modules/chatList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connectSocket, disconnectSocket } from '../redux/modules/socket';
import useStomp from '../hooks/useStomp';
import { useQueryClient } from '@tanstack/react-query';

function ChatAlarm() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { subscribe, unsubscribe, subscriptions, disconnect, isConnected } = useStomp(
    { brokerURL: process.env.REACT_APP_BROKER_URL },
    () => {
      console.log('연결되었음.');
    },
  );

  const { userId, prevUserId } = useSelector((state: SelectState) => state.userInfo);
  const { extraChatList } = useSelector(({ chatList }: SelectState) => chatList);
  const lastExtraChat = extraChatList ? extraChatList[extraChatList.length - 1] : null;
  const navigate = useNavigate();

  const currentPath = useLocation().pathname;
  const chatRoomId = currentPath.startsWith('/chat-room/') && currentPath.replace('/chat-room/', '');

  useEffect(() => {
    if (isConnected) {
      subscribe<ChatState>(`/sub/user/${userId}`, chat => {
        queryClient.invalidateQueries(['ChatRoomList']);
        if (chatRoomId === getRoomId(chat.senderId)) {
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
  }, [isConnected, chatRoomId]);

  return (
    lastExtraChat && (
      <ChatAlarmContainer onClick={() => navigate(`/chat-room/${getRoomId(lastExtraChat.senderId)}`)}>
        <div className='nickname'>{lastExtraChat.nickname}</div>
        <div className='message'>{lastExtraChat.message}</div>
      </ChatAlarmContainer>
    )
  );
}

const ChatAlarmContainer = styled.div`
  position: fixed;
  border-radius: 10px;
  height: 56px;
  background-color: #1b0658;
  opacity: 0.8;
  width: 100vw;
  max-width: 800px;
  z-index: 20;
  padding: 10px;
  color: var(--white);

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
