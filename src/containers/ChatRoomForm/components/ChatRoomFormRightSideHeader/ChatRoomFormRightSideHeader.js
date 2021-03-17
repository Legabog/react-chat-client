import LogoutButton from "../../../../pres-components/LogoutButton/LogoutButton";
import "./ChatRoomFormRightSideHeader.css";

const ChatRoomFormRightSideHeader = (props) => {
  return (
    <div className="right-side-header">
      <span>Комната&nbsp;{props.activeRoom}</span>
      <LogoutButton onLogout={props.onLogout} />
    </div>
  );
};

export default ChatRoomFormRightSideHeader;
