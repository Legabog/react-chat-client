import { useEffect, useRef } from "react";
import _ from "lodash/core";
import ChatRoomFormMessageItem from "../ChatRoomFormMessageItem/ChatRoomFormMessageItem";
import "./ChatRoomFormChat.css";

const ChatRoomFormChat = (props) => {
  const chatRef = useRef();
  useEffect(() => {
    // Auto scroll to bottom
    chatRef.current.scrollTo(0, 999999);
  }, [props.messages]);

  return (
    <div className="main-chat" ref={chatRef}>
      {props.messages.map((e, index) => (
        <ChatRoomFormMessageItem
          key={_.uniqueId(`${e.nickname}_${index}`)}
          nickname={e.nickname}
          date={e.date}
          message={e.text}
        />
      ))}
    </div>
  );
};

export default ChatRoomFormChat;
