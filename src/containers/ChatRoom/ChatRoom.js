import Preloader from "../../pres-components/Preloader/Preloader";
import ChatRoomForm from "../ChatRoomForm/ChatRoomForm";
import "./ChatRoom.css";

const ChatRoom = (props) => {
  return (
    <div className="chat-room-wrapper">
      <div className="chat-room">
        {props.loginFetch ? (
          <Preloader />
        ) : (
          <ChatRoomForm
            activeNickname={props.activeNickname}
            activeRoom={props.activeRoom}
            onLogout={props.onLogout}
            messages={props.messages}
            activeUsers={props.activeUsers}
            sendMessage={props.sendMessage}
            newMessage={props.newMessage}
            newVideoPeer={props.newVideoPeer}
            videoPeers={props.videoPeers}
            setVideoPeers={props.setVideoPeers}
          />
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
