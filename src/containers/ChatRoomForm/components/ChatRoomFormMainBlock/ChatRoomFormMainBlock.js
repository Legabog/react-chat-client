import ChatRoomFormChat from "../ChatRoomFormChat/ChatRoomFormChat";
import ChatRoomFormVideo from "../ChatRoomFormVideos/ChatRoomFormVideos";
import "./ChatRoomFormMainBlock.css";

const ChatRoomFormMainBlock = (props) => {
  return (
    <div className="chat-room-main-block">
      <ChatRoomFormVideo
        newVideoPeer={props.newVideoPeer}
        videoPeers={props.videoPeers}
        activeRoom={props.activeRoom}
        activeNickname={props.activeNickname}
        setVideoPeers={props.setVideoPeers}
      />
      <ChatRoomFormChat messages={props.messages} />
    </div>
  );
};

export default ChatRoomFormMainBlock;
