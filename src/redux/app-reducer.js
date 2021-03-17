import { backendApi } from "../api/backend-api";
import dateConverter from "../utils/dateConverter/dateConverter";
import socket from "../utils/socketConnection/socket";

// redux ducks pattern
const JOIN_TO_ROOM = "JOIN_TO_ROOM";
const LEAVE_FROM_ROOM = "LEAVE_FROM_ROOM";
const TOGGLE_LOGIN_FETCH = "TOGGLE_LOGIN_FETCH";
const SET_ACTIVE_USERS = "SET_ACTIVE_USERS";
const NEW_MESSAGE = "NEW_MESSAGE";
const NEW_VIDEO_PEER = "NEW_VIDEO_PEER";
const SET_VIDEO_PEERS = "SET_VIDEO_PEERS";

let initialState = {
  joinedState: false,
  activeNickname: null,
  activeRoom: null,
  loginFetch: false,
  activeUsers: [],
  messages: [],
  videoPeers: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "JOIN_TO_ROOM":
      return {
        ...state,
        joinedState: true,
        activeNickname: action.activeNickname,
        activeRoom: action.activeRoom,
      };

    case "LEAVE_FROM_ROOM":
      return {
        ...state,
        joinedState: false,
        activeNickname: null,
        activeRoom: null,
      };

    case "TOGGLE_LOGIN_FETCH":
      return {
        ...state,
        loginFetch: action.boolean,
      };

    case "SET_ACTIVE_USERS":
      return {
        ...state,
        activeUsers: action.activeUsers,
      };

    case "NEW_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message],
      };

    case "NEW_VIDEO_PEER":
      return {
        ...state,
        videoPeers: [...state.videoPeers, action.videoPeer],
      };
    case "SET_VIDEO_PEERS":
      return {
        ...state,
        videoPeers: action.videoPeers,
      };

    default:
      return state;
  }
};

// Action. Switch handler for login fetch
export const toggleLoginFetch = (boolean) => {
  return {
    type: TOGGLE_LOGIN_FETCH,
    boolean,
  };
};
// Action. Join to room, set active nickname, room and joinedState=true.
export const joinToRoom = (activeNickname, activeRoom) => {
  return {
    type: JOIN_TO_ROOM,
    activeNickname,
    activeRoom,
  };
};
// Action. Leave from room, set active nickname=null, room=null and joinedState=false.
export const leaveFromRoom = () => {
  return {
    type: LEAVE_FROM_ROOM,
  };
};
// Action. Set to array activeUsers.
export const setActiveUsers = (activeUsers) => {
  return {
    type: SET_ACTIVE_USERS,
    activeUsers,
  };
};
// Action. Add new message
export const newMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    message,
  };
};
// Action. Set peers to videoPeers array
export const setVideoPeers = (videoPeers) => {
  console.log("From setVideoPeers", videoPeers);
  return {
    type: SET_VIDEO_PEERS,
    videoPeers,
  };
};
// Action. Add videoPeer.
export const newVideoPeer = (videoPeer) => {
  console.log("New videoPeer", videoPeer);
  return {
    type: NEW_VIDEO_PEER,
    videoPeer,
  };
};
// Async. onLogin template function
export const onLogin = (room, nickname, history) => {
  return async (dispatch) => {
    const payloadData = {
      nickname,
      room,
    };
    dispatch(toggleLoginFetch(true));
    dispatch(joinToRoom(payloadData.nickname, payloadData.room));
    history.push(`/room=${payloadData.room}&nickname=${payloadData.nickname}`);
    await backendApi.addToRoom(payloadData)
    dispatch(onEnter(payloadData, history));
  };
};
// Async. Part of on Login
export const onEnter = (payloadData) => {
  return async (dispatch) => {
    socket.emit("room:join", payloadData);
    const { users } = await backendApi.getRoomData(payloadData.room);
    dispatch(setActiveUsers(users));
    dispatch(
      sendMessage(
        payloadData.room,
        "Админ Комнаты",
        `Добро пожаловать в чат, ${payloadData.nickname}. Приятного общения.`,
        dateConverter(new Date())
      )
    );
    dispatch(
      newMessage({
        room: payloadData.room,
        nickname: "Админ Комнаты",
        text: `Добро пожаловать в чат, ${payloadData.nickname}. Приятного общения.`,
        date: dateConverter(new Date()),
      })
    );
    dispatch(toggleLoginFetch(false));
  };
};

export const sendMessage = (room, nickname, text, date) => {
  return (dispatch) => {
    socket.emit("room:new_message", {
      room,
      nickname,
      text,
      date,
    });
  };
};

export const onLogout = () => {
  return (dispatch) => {
    dispatch(leaveFromRoom());
  };
};

export default appReducer;
