import express from "express";
import cors from "cors";
import morgan from "morgan";

import { Server } from "http";
import { init } from "./socket";
import { API } from "./config";

import routes from "./routes/index";
import "./database";

const app = express();
const http = new Server(app);

init(http);

/*
 * EXPRESS
 */

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", routes);

http.listen(API.port, () => console.log("Server connected."));
