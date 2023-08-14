import { ReactEventHandler, useState } from 'react';
import { ChatState } from '../../redux/modules/chatList';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';
import useStomp from '../../hooks/useStomp';

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
  const { userId, nickname } = useSelector((state: SelectState) => state.userInfo);

  const handleSendClick = () => {
    const myChat: ChatState = {
      nickname,
      senderId: userId,
      message: msg,
      createdAt: `${new Date().toISOString()}`,
    };
    setChats([...chats, myChat]);
    send(`/pub/user/${opId}`, myChat, {});
    setMsg('');
  };
  return (
    <div>
      <input value={msg} onChange={handleMsgChange} />
      <button onClick={handleSendClick}>보내기</button>
    </div>
  );
}

export default ChatSender;
