import { combineReducers } from "redux";
import authReducer from "./Auth";
import messageReducer from "./Messages";
import socketReducer from "./Socket";
import chatsReducer from "./Chats";

const reducers = combineReducers({
  chats: chatsReducer,
  messages: messageReducer,
  socket: socketReducer,
  session: authReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
