import { combineReducers } from "redux";
import { IMessage } from "../../Utils/interfaces";
import messageReducer from "./Messages";

export interface State {
  messages: IMessage[];
}

export default combineReducers<State>({
  messages: messageReducer,
});
