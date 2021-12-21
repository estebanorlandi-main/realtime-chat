import axios from "axios";
import { Dispatch } from "redux";
import { IUser, IUserLogin, IUserRegister } from "../../Utils/interfaces";
import ActionTypes from "./ActionTypes";

export function login(user: IUserLogin) {
  return async (dispatch: Dispatch) => {
    const res = await axios.post<{ msg: string; user: IUser }>(
      "http://localhost:3001/auth/login",
      user
    );

    dispatch({ type: ActionTypes.LOGIN, payload: res.data.user });
  };
}

export function signup(user: IUserRegister) {
  return async (dispatch: Dispatch) => {
    const res = await axios.post<{ user: IUser }>(
      "http://localhost:3001/auth/signup",
      user
    );

    dispatch({ type: ActionTypes.SIGNUP, payload: res.data.user });
  };
}

export function logout() {
  return { type: ActionTypes.LOGOUT, payload: {} };
}
