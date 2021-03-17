import ChatRoomFormUserList from "./components/ChatRoomFormUserList/ChatRoomFormUserList";
import "./ChatRoomForm.css";

const ChatRoomForm = (props) => {
  return (
    <div className="chat-room-form-wrapper">
      <div className="chat-room-form">
        <ChatRoomFormUserList
          activeNickname={props.activeNickname}
          onLogout={props.onLogout}
          activeRoom={props.activeRoom}
          activeUsers={props.activeUsers}
          messages={props.messages}
          sendMessage={props.sendMessage}
          newMessage={props.newMessage}
          newVideoPeer={props.newVideoPeer}
          videoPeers={props.videoPeers}
          setVideoPeers={props.setVideoPeers}
        />
      </div>
    </div>
  );
};

export default ChatRoomForm;
