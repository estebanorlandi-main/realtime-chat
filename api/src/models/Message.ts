import { Document, Schema, model } from "mongoose";
import { IMessage } from "../utils/interface";

interface Message extends Document, IMessage {}

const MessageSchema = new Schema<Message>({
  content: { type: String, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  _createdAt: { type: Date },
  _updatedAt: { type: Date },
});

MessageSchema.pre("save", function (next, done) {
  const self = this;

  // if the message does not have a date it is added
  if (!self._createdAt || !self._updatedAt) {
    const time = new Date();
    self._createdAt = time;
    self._updatedAt = time;
  }

  next();
});

const MessageModel = model<Message>("Message", MessageSchema);

export default MessageModel;
