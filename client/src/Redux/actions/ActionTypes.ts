enum ActionTypes {
  // Message Actions
  MESSAGE_GET_ALL,
  MESSAGE_SEND,
  MESSAGE_CLEAR,

  // Chat Actions
  CHAT_GET_ALL,
  CHAT_GET_ONE,
  CHAT_CREATE,

  // Socket Actions
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,

  // Auth Actions
  LOGIN,
  SIGNUP,
  LOGOUT,
}

export default ActionTypes;
