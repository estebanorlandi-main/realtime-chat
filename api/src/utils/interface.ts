import { Types } from "mongoose";

export interface IMessage {
  content: string;
  from: string;

  _createdAt?: Date;
  _updatedAt?: Date;
}

export interface IChat {
  userA: string;
  userB: string;
  messages: Types.ObjectId[];
}

export interface IUser {
  username: string;
  password: string;
  avatar?: string;
  chats: Types.ObjectId[];
}
