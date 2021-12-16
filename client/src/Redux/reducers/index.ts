import { combineReducers } from "redux";
import authReducer from "./Auth";
import messageReducer from "./Messages";
import socketReducer from "./Socket";

const reducers = combineReducers({
  messages: messageReducer,
  socket: socketReducer,
  session: authReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
