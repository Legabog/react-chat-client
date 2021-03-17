import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideocamIcon from "@material-ui/icons/Videocam";
import { useState } from "react";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import "./ChatRoomFormAccountCard.css";

const ChatRoomFormAccountCard = (props) => {
  const colorOnline = { color: "rgb(67, 181, 129)" };
  const colorOffline = { color: "#72767d" };

  const [video, setVideo] = useState(0);

  const handleClickVideoIcon = () => {
    video === 0 ? setVideo(1) : setVideo(0);
  };

  return (
    <div className="account-card-wrapper">
      <div className="account-card">
        <div className="account-avatar">
          {props.avatar ? (
            <AccountCircleIcon src={props.avatar} />
          ) : (
            <AccountCircleIcon style={{ color: "rgb(67, 181, 129)" }} />
          )}
        </div>
        <div className="account-status">
          {navigator.onLine ? (
            <FiberManualRecordIcon style={colorOnline} />
          ) : (
            <FiberManualRecordIcon style={colorOffline} />
          )}
        </div>
        <div className="account-info">
          <div className="account-nickname">
            <span>{props.nickname}</span>
          </div>
          <div className="account-status-title">
            <span>{navigator.onLine ? "В сети" : "Не в сети"}</span>
          </div>
        </div>
        <div className="account-video-icon" onClick={handleClickVideoIcon}>
          {video === 0 ? <VideocamIcon /> : <VideocamOffIcon />}
        </div>
      </div>
    </div>
  );
};

export default ChatRoomFormAccountCard;
