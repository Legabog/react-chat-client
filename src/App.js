import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import {
  onLogin,
  onLogout,
  setActiveUsers,
  newMessage,
  sendMessage,
  newVideoPeer,
  setVideoPeers,
} from "./redux/app-reducer";
import socket from "./utils/socketConnection/socket";
// Components
import Login from "./containers/Login/Login";
import ChatRoom from "./containers/ChatRoom/ChatRoom";
import ErrorRoute from "./pres-components/ErrorRoute/ErrorRoute";

const App = (props) => {
  useEffect(() => {
    // Reactions to events "room:set_users", "room:new_message"
    socket.on("room:set_users", (users) => {
      props.setActiveUsers(users);
    });
    socket.on("room:new_message", (message) => {
      props.newMessage(message);
    });
    // eslint-disable-next-line
  }, []);

  // Comparing of joinedState
  if (props.joinedState) {
    return (
      <Switch>
        <Route path={"/room=:roomId&nickname=:nickname"} exact>
          <ChatRoom
            loginFetch={props.loginFetch}
            activeRoom={props.activeRoom}
            activeNickname={props.activeNickname}
            activeUsers={props.activeUsers}
            messages={props.messages}
            onLogout={props.onLogout}
            sendMessage={props.sendMessage}
            newMessage={props.newMessage}
            newVideoPeer={props.newVideoPeer}
            videoPeers={props.videoPeers}
            setVideoPeers={props.setVideoPeers}
          />
        </Route>
        <Route render={() => <ErrorRoute />} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={"/"} exact>
          <Login onLogin={props.onLogin} loginFetch={props.loginFetch} />
        </Route>
        <Route render={() => <ErrorRoute />} />
      </Switch>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    joinedState: state.appReducer.joinedState,
    activeNickname: state.appReducer.activeNickname,
    activeRoom: state.appReducer.activeRoom,
    loginFetch: state.appReducer.loginFetch,
    activeUsers: state.appReducer.activeUsers,
    messages: state.appReducer.messages,
    videoPeers: state.appReducer.videoPeers,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    onLogin,
    onLogout,
    setActiveUsers,
    newMessage,
    sendMessage,
    newVideoPeer,
    setVideoPeers,
  })
)(App);
