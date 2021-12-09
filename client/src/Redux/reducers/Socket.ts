import { io } from "socket.io-client";
import ActionTypes from "../actions/ActionTypes";

export default function socketReducer(state: any = null, action: any) {
  switch (action.type) {
    case ActionTypes.SOCKET_CONNECT:
      console.log("connect");
      let aux = state;
      if (!aux) return io("http://localhost:3001");
      return aux;

    case ActionTypes.SOCKET_DISCONNECT:
      console.log("disconnect");
      if (state) state.disconnect();
      return null;

    default:
      return state;
  }
}
