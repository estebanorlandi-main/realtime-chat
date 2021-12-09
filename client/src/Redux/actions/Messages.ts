import { Dispatch } from "redux";
import { IMessage } from "../../Utils/interfaces";

import axios from "axios";
import ActionTypes from "./ActionTypes";

export function getMessages() {
  return async (dispatch: Dispatch) => {
    const res = await axios.get("http://localhost:3001/message");
    dispatch({ type: ActionTypes.MESSAGE_GET_ALL, payload: res.data });
  };
}

export function sendMessage(message: IMessage) {
  return async (dispatch: Dispatch) => {
    const res = await axios.post("http://localhost:3001/message", { message });
    dispatch({ type: ActionTypes.MESSAGE_SEND, payload: res.data });
  };
}

export function clearMessages() {
  return { type: ActionTypes.MESSAGE_CLEAR, payload: [] };
}
