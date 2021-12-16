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
  username: string;
  password: string;

  _id?: string;
}
export interface IUserReducer {
  type: unknown;
  payload: IUser | {};
}
