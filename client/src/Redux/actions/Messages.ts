import axios from "axios";
import { Dispatch } from "redux";

export const GET_MESSAGES = "GET_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export function getMessages() {
  return async (dispatch: Dispatch) => {
    const res = await axios.get("http://localhost:3001/message");
    dispatch({ type: GET_MESSAGES, payload: res.data });
  };
}

export function clearMessages() {
  return { type: CLEAR_MESSAGES, payload: [] };
}
