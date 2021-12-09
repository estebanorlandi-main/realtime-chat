import { combineReducers } from "redux";
import messageReducer from "./Messages";
import socketReducer from "./Socket";

const reducers = combineReducers({
  messages: messageReducer,
  socket: socketReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
