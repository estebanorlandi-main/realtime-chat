import { Server as ioServer, Socket } from "socket.io";
import { Server } from "http";

let io: ioServer;

export function init(http: Server) {
  io = new ioServer(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log("User connected");
    socket.on("disconnect", () => console.log("User disconnected"));
  });

  return io;
}

export { io };
