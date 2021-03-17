import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./ChatRoomFormMessageItem.css";

const ChatRoomFormMessageItem = (props) => {
  return (
    <div className="message-item-wrapper">
      <div className="message-item-wrapper-2">
        <div className="message-item">
          <div className="message-item__avatar">
            {props.avatar ? (
              <AccountCircleIcon src={props.avatar} />
            ) : (
              <AccountCircleIcon style={{ color: "rgb(67, 181, 129)" }} />
            )}
          </div>
          <div className="message-item-info-main">
            <div className="message-item-info-1">
              <div className="message-item-nickname">
                <span>{props.nickname}</span>
              </div>
              <div className="message-item-date">
                <span>{props.date}</span>
              </div>
            </div>
            <div className="message-item-info-2">{props.message}</div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ChatRoomFormMessageItem;
