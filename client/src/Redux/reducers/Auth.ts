import { IUser, IUserReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";

const initialState: IUser = { username: "", avatar: "" };

export default function authReducer(
  state: IUser = initialState,
  action: IUserReducer
) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload?.username ? action.payload : {};

    case ActionTypes.LOGOUT:
      return {};

    case ActionTypes.SIGNUP:
      return action.payload?.username ? action.payload : {};

    default:
      return state;
  }
}
