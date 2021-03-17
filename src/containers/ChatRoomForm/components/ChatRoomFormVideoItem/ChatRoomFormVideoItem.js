import { useEffect, useRef } from "react";
import "./ChatRoomFormVideoItem.css";

const ChatRoomFormVideoItem = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (!!props.peer) {
      props.peer.on("stream", (stream) => {
        ref.current.srcObject = stream;
      });
    }
     // eslint-disable-next-line
  }, []);

  return (
    <div className="video-item">
      <video
        muted
        ref={!!props.userVideoRef ? props.userVideoRef : ref}
        autoPlay
        playsInline
      />
    </div>
  );
};

export default ChatRoomFormVideoItem;
