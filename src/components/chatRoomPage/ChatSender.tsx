import { ReactEventHandler, useState } from 'react';
import { ChatState } from '../../redux/modules/chatList';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';
import useStomp from '../../hooks/useStomp';
import { ChatSenderInput, ChatSenderLable } from './styles/ChatSenderStyle';
import { ReactComponent as SendButton } from '../../assets/sendButton.svg';

interface ChatSenderProps {
  chats: ChatState[];
  setChats: React.Dispatch<React.SetStateAction<ChatState[]>>;
  opId: number;
}

function ChatSender({ chats, setChats, opId }: ChatSenderProps) {
  const [msg, setMsg] = useState('');
  const handleMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const { send } = useStomp({ brokerURL: process.env.REACT_APP_BROKER_URL });
  const { userId, nickname, profileImageUrl } = useSelector((state: SelectState) => state.userInfo);

  const handleSendClick = () => {
    if (!msg) return;

    const myChat: ChatState = {
      nickname,
      senderId: userId,
      message: msg,
      createdAt: `${new Date().toISOString()}`,
      senderImageUrl: profileImageUrl,
    };
    setChats([...chats, myChat]);
    send(`/pub/user/${opId}`, myChat, {});
    setMsg('');
  };
  return (
    <ChatSenderLable>
      <ChatSenderInput value={msg} onChange={handleMsgChange} placeholder='| 메세지 쓰기' />
      <SendButton onClick={handleSendClick}>보내기</SendButton>
    </ChatSenderLable>
  );
}

export default ChatSender;
