export interface IMessage {
  _id: string;
  content: string;
  sender: string;
  receiver: string;
}

export interface IMessageReducer {
  type: unknown;
  payload: IMessage[];
}
