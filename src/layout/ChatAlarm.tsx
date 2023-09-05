import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import { ChatState, addExtraChat, addRoomChat, getRoomId } from '../redux/modules/chatList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connectSocket, disconnectSocket } from '../redux/modules/socket';
import useStomp from '../hooks/useStomp';
import { useQueryClient } from '@tanstack/react-query';
import { ChatAlarmContainer, ChatAlarmLayout } from './styles/chatAlarmStyle';
import basicProfileImg from '../assets/mascot.svg';
import {
  ChatInfoContainer,
  ChatRoomInfoContainer,
  LastChatBox,
  OpNicknameBox,
  ProfileImageBox,
} from '../components/chatRoomListPage/styles/chatRoomInfoStyle';

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
      <ChatAlarmLayout>
        <ChatAlarmContainer>
          <ProfileImageBox src={lastExtraChat.senderImageUrl ?? basicProfileImg} />
          <ChatInfoContainer>
            <OpNicknameBox>{lastExtraChat.nickname}</OpNicknameBox>
            <LastChatBox>{lastExtraChat.message}</LastChatBox>
          </ChatInfoContainer>
        </ChatAlarmContainer>
      </ChatAlarmLayout>
    )
  );
}

export default ChatAlarm;
