import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import { useInput } from "../../../../hooks/useInput";
import dateConverter from "../../../../utils/dateConverter/dateConverter";
import "./ChatRoomFormCustomInput.css";

const ChatRoomFormCustomInput = (props) => {
  const [
    chatText,
    chatTextRef,
    chatTextChangeHandler,
    chatTextFocus,
    chatTextFocusHandler,
    chatTextBlurHandler,
    chatTextSetValue,
  ] = useInput("");

  const clickHandler = () => {
    props.sendMessage(
      props.activeRoom,
      props.activeNickname,
      chatText,
      dateConverter(new Date())
    );
    props.newMessage({
      room: props.activeRoom,
      nickname: props.activeNickname,
      text: chatText,
      date: dateConverter(new Date()),
    });
    chatTextSetValue("");
  };

  return (
    <div className="chat-room-custom-input-wrapper">
      <div
        className="chat-room-custom-input"
        style={{
          borderColor: chatTextFocus ? "#7289da" : "black",
        }}
      >
        <div className="chat-room-custom-input__smile-icon">
          <InsertEmoticonIcon />
        </div>
        <input
          placeholder="Напишите сообщение"
          name="chat-input"
          type="text"
          autoComplete="off"
          ref={chatTextRef}
          value={chatText}
          onChange={chatTextChangeHandler}
          onFocus={chatTextFocusHandler}
          onBlur={chatTextBlurHandler}
        />
        <div className="chat-room-custom-input__send-icon">
          <SendIcon onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoomFormCustomInput;
