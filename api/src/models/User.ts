import { Document, Schema, model } from "mongoose";
import { IUser } from "../utils/interface";

interface User extends Document, IUser {}

const UserSchema = new Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
});

const UserModel = model<User>("User", UserSchema);

export default UserModel;
