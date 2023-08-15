import { useNavigate } from 'react-router-dom';
import { ChatState } from '../../redux/modules/chatList';
import { ChatRoomInfoContainer } from './styles/chatRoomInfoStyle';

export interface ChatRoomInfo {
  roomName: string;
  oppositeNickname: string;
  lastChatMessage: ChatState;
}

function ChatRoom({ chatRoom }: { chatRoom: ChatRoomInfo }) {
  const navigate = useNavigate();

  const handleRoomClick = () => {
    navigate(`/chat-room/${chatRoom.roomName}`);
  };

  return (
    <ChatRoomInfoContainer onClick={handleRoomClick}>
      <div>닉네임:{chatRoom.oppositeNickname}</div>
      <div>마지막 내용:{chatRoom.lastChatMessage.message}</div>
    </ChatRoomInfoContainer>
  );
}

export default ChatRoom;
