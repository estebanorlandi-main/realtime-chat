import axios from "axios";
import { Dispatch } from "redux";
import { IUser } from "../../Utils/interfaces";

import ActionTypes from "./ActionTypes";

export function login(user: IUser) {
  return { type: ActionTypes.LOGIN, payload: user };
}
export function logout() {
  return { type: ActionTypes.LOGOUT, payload: {} };
}
