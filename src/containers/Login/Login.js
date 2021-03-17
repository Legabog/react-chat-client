import Preloader from "../../pres-components/Preloader/Preloader";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

const Login = (props) => {
  return (
    <div className="login-wrapper">
      <div className="login">
        {props.loginFetch ? (
          <Preloader />
        ) : (
          <LoginForm onLogin={props.onLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
