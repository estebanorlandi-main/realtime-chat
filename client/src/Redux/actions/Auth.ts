import axios from "axios";
import { Dispatch } from "redux";
import { IUser } from "../../Utils/interfaces";

import ActionTypes from "./ActionTypes";

export function login(user: IUser) {
  return async (dispatch: Dispatch) => {
    const res = await axios.post("http://localhost:3001/login", user);
    dispatch({ type: ActionTypes.LOGIN, payload: res.data });
  };
}
export function logout() {
  return async (dispatch: Dispatch) => {
    const res = await axios.post("http://localhost:3001/logout");
    dispatch({ type: ActionTypes.LOGOUT, payload: res.data });
  };
}
