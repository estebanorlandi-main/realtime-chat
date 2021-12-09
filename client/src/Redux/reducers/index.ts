import { combineReducers } from "redux";
import messageReducer from "./Messages";

const reducers = combineReducers({
  messages: messageReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
