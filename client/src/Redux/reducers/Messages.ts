import { CLEAR_MESSAGES, GET_MESSAGES } from "../actions/Messages";
import { IMessage, IMessageReducer } from "../../Utils/interfaces";

const initialState: IMessage[] = [];

export default function messageReducer(
  state: IMessage[] = initialState,
  { type, payload }: IMessageReducer
) {
  console.log(payload);
  switch (type) {
    case GET_MESSAGES:
      return payload;

    case CLEAR_MESSAGES:
      return [];
    default:
      return state;
  }
}
