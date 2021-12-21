import { Document, Schema, model } from "mongoose";
import { IChat } from "../utils/interface";

interface Chat extends Document, IChat {}

const ChatSchema = new Schema<Chat>({
  userA: { type: String, required: true },
  userB: { type: String, required: true },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const ChatModel = model<Chat>("Chat", ChatSchema);

export default ChatModel;
