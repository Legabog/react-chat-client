import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../../pres-components/Button/Button";
import Input from "../../pres-components/Input/Input";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = (props) => {
  const history = useHistory();
  const [roomError, setRoomError] = useState("");
  const [nicknameError, setNicknameError] = useState("");

  const [
    room,
    roomRef,
    roomChangeHandler,
    roomFocus,
    roomFocusHandler,
    roomBlurHandler,
  ] = useInput("");

  const [
    nickname,
    nicknameRef,
    nicknameChangeHandler,
    nicknameFocus,
    nicknameFocusHandler,
    nicknameBlurHandler,
  ] = useInput("");

  const roomValidation = (room) => {
    if (room.trim().split("").length === 0) {
      setRoomError("ВВЕДИТЕ КОМНАТУ");
    } else {
      return true;
    }
  };

  const nicknameValidation = (nickname) => {
    if (nickname.trim().split("").length === 0) {
      setNicknameError("ВВЕДИТЕ НИКНЕЙМ");
    } else {
      return true;
    }
  };

  const resultValidation = () => {
    const resulValidation_1 = roomValidation(room);
    const resulValidation_2 = nicknameValidation(nickname);
    return resulValidation_1 && resulValidation_2;
  };

  const loginButtonSignInHandler = (e) => {
    e.preventDefault();
    if (resultValidation()) {
      props.onLogin(room, nickname, history);
      setRoomError("");
      setNicknameError("");
    }
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form">
        <div className="login-form__title-main">С возвращением!</div>
        <div className="login-form__title-secondary">
          Мы так рады видеть тебя снова!
        </div>
        <Input
          label="НАЗВАНИЕ КОМНАТЫ"
          name="room"
          type="text"
          value={room}
          useRef={roomRef}
          focus={roomFocus}
          changeHandler={roomChangeHandler}
          focusHandler={roomFocusHandler}
          blurHandler={roomBlurHandler}
          errorMessage={roomError}
        />
        <Input
          label="ВАШ НИКНЕЙМ"
          name="nickname"
          type="text"
          value={nickname}
          useRef={nicknameRef}
          focus={nicknameFocus}
          changeHandler={nicknameChangeHandler}
          focusHandler={nicknameFocusHandler}
          blurHandler={nicknameBlurHandler}
          errorMessage={nicknameError}
        />
        <Button
          label="Вход"
          marginTopButton="40px"
          onClick={loginButtonSignInHandler}
        />
      </div>
    </div>
  );
};

export default LoginForm;
