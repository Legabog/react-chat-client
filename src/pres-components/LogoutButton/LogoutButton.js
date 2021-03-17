import { NavLink } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./LogoutButton.css";

const LogoutButton = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.onLogout();
    window.location.reload()
  };

  return (
    <div className="logout-button" onClick={clickHandler}>
      <NavLink to="/">
        <HighlightOffIcon style={{ color: "#72767d" }} />
      </NavLink>
    </div>
  );
};

export default LogoutButton;
