import { Types } from "mongoose";

export interface IMessage {
  content: string;
  from: Types.ObjectId;
  _createdAt?: Date;
  _updatedAt?: Date;
}

export interface IChat {
  userA: Types.ObjectId;
  userB: Types.ObjectId;
  messages: Types.ObjectId[];
}

export interface IUser {
  username: string;
  password: string;
  avatar?: string;
  chats: Types.ObjectId[];
}
