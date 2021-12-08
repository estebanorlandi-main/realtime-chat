import mongoose from "mongoose";
import { DB } from "./config";

const URI = `mongodb://${DB.host}:${DB.port}/${DB.name}`;

mongoose.connect(URI);
mongoose.connection.on("open", () => console.log("Database connected."));
