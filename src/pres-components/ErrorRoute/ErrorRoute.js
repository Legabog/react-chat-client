import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./ErrorRoute.css";

const ErrorRoute = (props) => {
  return (
    <div className="error-route-wrapper">
      <div className="error-route">
        <div className="error-route-main">
          <h1>Ой, эта страница недоступна</h1>
          Возможно, вы использовали недействительную ссылку или страница была
          удалена.
          <NavLink to="/">
            <Button label="Назад" marginTopButton={"20px"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorRoute;
