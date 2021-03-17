import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./ChatRoomFormUserCard.css";

const ChatRoomFormUserCard = (props) => {
  const colorOnline = { color: "rgb(67, 181, 129)" };
  const colorOffline = { color: "#72767d" };

  const randomColorHandler = () => {
    const colors = ["#43B581", "#904FAD", "#EFBC12", "#2D8DD6", "#E44235", "#E1721F", "#E61B58", "#29C566"]
    return colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1)) + 0]
  }

  return (
    <div className="user-card-wrapper">
      <div className="user-card">
        <div className="user-avatar">
          {props.avatar ? (
            <AccountCircleIcon src={props.avatar} />
          ) : (
            <AccountCircleIcon style={{ color: randomColorHandler() }} />
          )}
         
        </div>
        <div className="user-status">
        { props.online 
            ? <FiberManualRecordIcon style={colorOnline} /> 
            : <FiberManualRecordIcon style={colorOffline} />
          }  
        </div>
        <div className="user-info">
          <div className="user-nickname">
            <span>{props.nickname}</span>
          </div>
          <div className="user-status-title">
            <span>{props.online ? "В сети" : "Не в сети"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomFormUserCard;
