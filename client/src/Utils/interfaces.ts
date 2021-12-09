export interface IMessage {
  content: string;
  sender: string;
  receiver: string;

  _id?: string;
}

export interface IMessageReducer {
  type: unknown;
  payload: IMessage[];
}

export interface IUser {
  _id: string;
  username: string;
  password: string;
}
export interface IUserReducer {
  type: unknown;
  payload: IUser | {};
}
