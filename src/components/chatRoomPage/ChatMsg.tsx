import { ChatState } from '../../redux/modules/chatList';
import { ChatMsgBox, ChatMsgDivider } from './styles/ChatMsgStyle';

interface ChatMsgProps {
  curChat: ChatState;
  prevChat: ChatState | null;
  nextChat: ChatState | null;
  myId: string;
}

function ChatMsg({ curChat, prevChat, nextChat, myId }: ChatMsgProps) {
  return (
    <ChatMsgDivider $isSameUserAsPrev={prevChat?.senderId === curChat.senderId} $isMine={curChat.senderId === myId}>
      <ChatMsgBox $isMine={curChat.senderId === myId}>{curChat.message}</ChatMsgBox>
    </ChatMsgDivider>
  );
}

export default ChatMsg;
