export interface IMessage {
  content: string;
  sender: string;
  receiver: string;
  _createdAt?: Date;
  _updatedAt?: Date;
}

export interface IUser {
  username: string;
  password: string;
  avatar?: string;
}
