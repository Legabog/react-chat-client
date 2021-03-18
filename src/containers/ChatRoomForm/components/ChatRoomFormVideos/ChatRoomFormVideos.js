import _ from "lodash";
import { useEffect, useRef } from "react";
import Peer from "simple-peer";
import socket from "../../../../utils/socketConnection/socket";
import ChatRoomFormVideoItem from "../ChatRoomFormVideoItem/ChatRoomFormVideoItem";
import "./ChatRoomFormVideos.css";

const ChatRoomFormVideo = (props) => {
  const userVideo = useRef();
  const peersRef = useRef([]);

  const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2,
  };

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  useEffect(() => {
    // Ask user to on video camera
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        // Start of video stream
        userVideo.current.srcObject = stream;
        // Reaction to event "room:create_peers". Here we are creating(updating) video peers
        socket.on("room:create_peers", (users) => {
          const peers = [];
          users.forEach((userID) => {
            if (userID !== socket.id && !_.find(peers, ["peerID", userID])) {
              const peer = createPeer(userID, socket.id, stream);
              peersRef.current.push({
                peerID: userID,
                peer,
              });
              peers.push({
                peerID: userID,
                peer,
              });
            }
          });
          props.setVideoPeers(peers);
        });
        // Reaction to event "room:user_joined". Here we are adding video peer
        socket.on("room:user_joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });
          const peerObj = {
            peerID: payload.callerID,
            peer,
          };

          if (!_.find(props.videoPeers, ["peerID", payload.callerID])) {
            props.newVideoPeer(peerObj);
          }
        });

        // Not finished. Reacting on socket disconnect
        // socket.on("room:user_left", (id) => {
        //   const peerObj = peersRef.current.find((p) => p.peerID === id);
        //   if (peerObj) {
        //     peerObj.peer.destroy();
        //   }
        //   const peers = peersRef.current.filter((p) => p.peedID !== id);
        //   peersRef.current = peers;
        //   props.setVideoPeers(peers);
        // });

        // React on returned singal(function addPeer)
        socket.on("room:receiving_returned_signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
    // eslint-disable-next-line
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    // creating peer by librabry simple-peer
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
    // React on signal.
    peer.on("signal", (signal) => {
      socket.emit("peer:sending_signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    // creating peer by librabry simple-peer
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });
    // React on signal
    peer.on("signal", (signal) => {
      socket.emit("peer:returning_signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <div className="chat-room-video">
      <ChatRoomFormVideoItem userVideoRef={userVideo} />
      {props.videoPeers.map((peer) => {
        return <ChatRoomFormVideoItem key={peer.peerID} peer={peer.peer} />;
      })}
    </div>
  );
};

export default ChatRoomFormVideo;
