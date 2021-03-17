import ChatRoomFormLeftSide from "../ChatRoomFormLeftSide/ChatRoomFormLeftSide";
import ChatRoomFormRightSide from "../ChatRoomFormRightSide/ChatRoomFormRightSide";
import "./ChatRoomFormUserList.css";

const ChatRoomFormUserList = (props) => {
  return (
    <div className="user-list-wrapper">
      <ChatRoomFormLeftSide
        activeNickname={props.activeNickname}
        activeUsers={props.activeUsers}
      />
      <ChatRoomFormRightSide
        onLogout={props.onLogout}
        messages={props.messages}
        activeRoom={props.activeRoom}
        sendMessage={props.sendMessage}
        activeNickname={props.activeNickname}
        newMessage={props.newMessage}
        newVideoPeer={props.newVideoPeer}
        videoPeers={props.videoPeers}
        setVideoPeers={props.setVideoPeers}
      />
    </div>
  );
};

export default ChatRoomFormUserList;
