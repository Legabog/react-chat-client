import "./Button.css";

const Button = (props) => {
  return (
    <div
      className="button-wrapper"
      style={{ marginTop: props.marginTopButton }}
    >
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
};

export default Button;
