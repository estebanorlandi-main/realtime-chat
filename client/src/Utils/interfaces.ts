export interface IUser {
  _id?: number;
  username: string;
  avatar: string;
}

export interface IMessage {
  _id?: number;
  content: string;
  receiver: IUser;
  sender: IUser;
}

export interface IMessageReducer {
  type: unknown;
  payload: IMessage[];
}

export interface IUserReducer {
  type: unknown;
  payload: IUser | {};
}
