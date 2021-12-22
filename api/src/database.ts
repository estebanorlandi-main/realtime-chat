import mongoose from "mongoose";
import { DB } from "./config";
import MessageModel from "./models/Message";
import ChatModel from "./models/Chat";

const URI = `mongodb://${DB.host}:${DB.port}/${DB.name}`;

mongoose.connect(URI);
mongoose.connection.on("open", () => console.log("Database connected."));

async function restore(force: boolean = false) {
  if (!force) return;
  if (await MessageModel.findOne({})) await MessageModel.collection.drop();
  if (await ChatModel.findOne({})) await ChatModel.collection.drop();

  console.log("DB cleared");
}

restore(false);
