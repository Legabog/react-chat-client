import { NavLink, useHistory } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./LogoutButton.css";

const LogoutButton = (props) => {
  const history = useHistory();

  const clickHandler = (e) => {
    e.preventDefault();
    history.push("/");
    props.onLogout();
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
