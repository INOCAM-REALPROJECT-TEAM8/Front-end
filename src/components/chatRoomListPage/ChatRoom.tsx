import { useNavigate } from 'react-router-dom';
import { ChatState } from '../../redux/modules/chatList';
import {
  ChatInfoContainer,
  ChatRoomInfoContainer,
  LastChatBox,
  OpNicknameBox,
  ProfileImageBox,
} from './styles/chatRoomInfoStyle';
import basicProfileImg from '../../assets/mascot.png';

export interface ChatRoomInfo {
  roomName: string;
  oppositeNickname: string;
  oppositeUserImage: string | null;
  lastChatMessage: ChatState;
}

function ChatRoom({ chatRoom }: { chatRoom: ChatRoomInfo }) {
  const navigate = useNavigate();

  const handleRoomClick = () => {
    navigate(`/chat-room/${chatRoom.roomName}`);
  };
  //@ToDo: chatRoom 정보 받을 때 상대 유저 프로필이미지도 받아오게 하기. ProfileImageBox의 src로 넣어줘야함.
  return (
    <ChatRoomInfoContainer onClick={handleRoomClick}>
      <ProfileImageBox src={chatRoom.oppositeUserImage ?? basicProfileImg} />
      <ChatInfoContainer>
        <OpNicknameBox>{chatRoom.oppositeNickname}</OpNicknameBox>
        <LastChatBox>{chatRoom.lastChatMessage.message}</LastChatBox>
      </ChatInfoContainer>
    </ChatRoomInfoContainer>
  );
}

export default ChatRoom;
