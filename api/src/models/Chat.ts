import { Document, Schema, model } from "mongoose";
import { IChat } from "../utils/interface";

interface Chat extends Document, IChat {}

const ChatSchema = new Schema<Chat>({
  userA: { type: Schema.Types.ObjectId, ref: "User" },
  userB: { type: Schema.Types.ObjectId, ref: "User" },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const ChatModel = model<Chat>("Chat", ChatSchema);

export default ChatModel;
