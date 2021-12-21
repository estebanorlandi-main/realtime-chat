import { Router, Request, Response, NextFunction } from "express";
import Message from "../models/Message";
import { io } from "../socket";

const router = Router();

const getAll = async () =>
  await Message.find({}, [
    "content",
    "sender",
    "receiver",
    "_createdAt",
    "_updatedAt",
  ]);

router.get("/", async (req: Request, res: Response) => {
  const messages = await getAll();
  res.json(messages);
});

router.post("/", async (req: Request, res: Response) => {
  const message = new Message(req.body.message);
  await message.save();
  io.emit("new_message", { message });
  res.json(await getAll());
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const message = await Message.findOneAndRemove({ _id: id });
  res.json(message);
});

export default router;
