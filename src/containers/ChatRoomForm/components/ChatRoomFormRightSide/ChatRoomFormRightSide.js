import ChatRoomFormCustomInput from "../ChatRoomFormCustomInput/ChatRoomFormCustomInput";
import ChatRoomFormMainBlock from "../ChatRoomFormMainBlock/ChatRoomFormMainBlock";
import ChatRoomFormRightSideHeader from "../ChatRoomFormRightSideHeader/ChatRoomFormRightSideHeader";
import "./ChatRoomFormRightSide.css";

const ChatRoomFormRightSide = (props) => {
  return (
    <div className="user-list-right-side-wrapper">
      <div className="user-list-right-side">
        <ChatRoomFormRightSideHeader
          activeNickname={props.activeNickname}
          activeRoom={props.activeRoom}
          onLogout={props.onLogout}
        />
        <ChatRoomFormMainBlock
          messages={props.messages}
          setVideoPeers={props.setVideoPeers}
          newVideoPeer={props.newVideoPeer}
          videoPeers={props.videoPeers}
          activeRoom={props.activeRoom}
          activeNickname={props.activeNickname}
        />
        <ChatRoomFormCustomInput
          activeNickname={props.activeNickname}
          activeRoom={props.activeRoom}
          sendMessage={props.sendMessage}
          newMessage={props.newMessage}
        />
      </div>
    </div>
  );
};

export default ChatRoomFormRightSide;
