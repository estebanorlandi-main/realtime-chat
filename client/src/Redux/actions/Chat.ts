import axios from "axios";
import { Dispatch } from "redux";
import ActionTypes from "./ActionTypes";

export function getChats(username: string) {
  return async (dispatch: Dispatch) => {
    const res = await axios(`http://localhost:3001/chat/${username}`);
    dispatch({ type: ActionTypes.CHAT_GET_ALL, payload: res.data });
  };
}
