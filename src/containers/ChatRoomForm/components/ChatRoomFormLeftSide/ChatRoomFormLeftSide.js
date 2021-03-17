import ChatRoomFormAccountCard from "../ChatRoomFormAccountCard/ChatRoomFormAccountCard";
import ChatRoomFormUserCard from "../ChatRoomFormUserCard/ChatRoomFormUserCard";
import "./ChatRoomFormLeftSide.css";

const ChatRoomFormLeftSide = (props) => {
  return (
    <div className="user-list-left-side-wrapper">
      <div className="user-list-left-side-main">
        <div className="user-list-left-side-title">
          Пользователей ({props.activeUsers.length}):
        </div>
        <div className="user-list-left-side">
          {props.activeUsers.map((e,index) => (
            <ChatRoomFormUserCard key={`${e}_${index}`} nickname={e} online={true} />
          ))}
        </div>
        <ChatRoomFormAccountCard nickname={props.activeNickname} />
      </div>
    </div>
  );
};

export default ChatRoomFormLeftSide;
