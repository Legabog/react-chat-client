import "./Input.css";

const Input = (props) => {

  const keydownClickHandler = (e) => {
    if (e.keyCode === 13) {
      props.loginButtonSignInHandler()
    }
  }

  return (
    <div className="input-wrapper">
      <h5
        style={{
          color:
            props.errorMessage.split("").length !== 0 ? "#f04747" : "#8e9297",
        }}
      >
        {props.errorMessage.split("").length !== 0
          ? props.errorMessage
          : props.label}
      </h5>
      <div className="input">
        <input
          name={props.name}
          type={props.type}
          maxLength={999}
          autoComplete="off"
          ref={props.useRef}
          value={props.value}
          onChange={props.changeHandler}
          onFocus={props.focusHandler}
          onBlur={props.blurHandler}
          onKeyDown={keydownClickHandler}
          style={{
            borderColor:
              props.errorMessage.split("").length !== 0
                ? "#f04747"
                : props.focus
                ? "#7289da"
                : "black",
          }}
        />
      </div>
    </div>
  );
};

export default Input;
