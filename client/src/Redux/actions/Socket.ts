import ActionTypes from "./ActionTypes";

export function connectSocket() {
  return { type: ActionTypes.SOCKET_CONNECT };
}

export function disconnectSocket() {
  return { type: ActionTypes.SOCKET_DISCONNECT };
}
