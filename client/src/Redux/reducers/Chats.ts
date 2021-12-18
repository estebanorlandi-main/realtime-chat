import { IUser, IUserReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";
import users from "../../Utils/mockups/users.json";

const initialState: IUser[] = users;

export default function chatsReducer(
  state: IUser[] = initialState,
  action: IUserReducer
) {
  switch (action.type) {
    case ActionTypes.CHATS_GET_ALL:
      return action.payload;

    default:
      return state;
  }
}
