import { IMessage, IMessageReducer } from "../../Utils/interfaces";
import ActionTypes from "../actions/ActionTypes";
import messages from "../../Utils/mockups/messages.json";

const initialState: IMessage[] = messages;

export default function messageReducer(
  state: IMessage[] = initialState,
  action: IMessageReducer
) {
  switch (action.type) {
    case ActionTypes.MESSAGE_GET_ALL:
      return action.payload;

    case ActionTypes.MESSAGE_SEND:
      return action.payload;

    case ActionTypes.MESSAGE_CLEAR:
      return [];

    default:
      return state;
  }
}
