import { IUser, IUserReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";
import users from "../../Utils/mockups/users.json";

//const initialState: IUser = { username: "", avatar: "" };
const initialState: IUser = users[0];

export default function authReducer(
  state: IUser = initialState,
  action: IUserReducer
) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;

    case ActionTypes.LOGOUT:
      return {};

    default:
      return state;
  }
}
