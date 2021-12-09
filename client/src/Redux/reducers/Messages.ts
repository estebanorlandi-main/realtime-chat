import { IMessage, IMessageReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";

const initialState: IMessage[] = [];

export default function messageReducer(
  state: IMessage[] = initialState,
  action: IMessageReducer
) {
  switch (action.type) {
    case ActionTypes.GET_MESSAGES:
      return action.payload;

    case ActionTypes.SEND_MESSAGE:
      return action.payload;

    case ActionTypes.CLEAR_MESSAGES:
      return [];

    default:
      return state;
  }
}
