import { IChat, IUserReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";
import users from "../../Utils/mockups/users.json";

//const initialState: IUser[] = users;
const initialState: IChat[] = [];

export default function chatsReducer(
  state: IChat[] = initialState,
  action: IUserReducer
) {
  switch (action.type) {
    case ActionTypes.CHATS_GET_ALL:
      return action.payload;

    default:
      return state;
  }
}
