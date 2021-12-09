import { IUser, IUserReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";

const initialState: IUser = {
  _id: "",
  username: "",
  password: "",
};

export default function authReducer(
  state: IUser = initialState,
  action: IUserReducer
) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log("Login");
      return action.payload;

    case ActionTypes.LOGOUT:
      console.log("Logout");
      return { _id: "", username: "", passowrd: "" };

    default:
      return state;
  }
}
