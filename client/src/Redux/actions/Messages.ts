import axios from "axios";
import { Dispatch } from "redux";
import ActionTypes from "./ActionTypes";

export function getMessages() {
  return async (dispatch: Dispatch) => {
    const res = await axios.get("http://localhost:3001/message");
    dispatch({ type: ActionTypes.GET_MESSAGES, payload: res.data });
  };
}

export function sendMessage(message: string) {
  return async (dispatch: Dispatch) => {
    const res = await axios.post("http://localhost:3001/message", { message });
    dispatch({ type: ActionTypes.SEND_MESSAGE, payload: res.data });
  };
}

export function clearMessages() {
  return { type: ActionTypes.CLEAR_MESSAGES, payload: [] };
}
