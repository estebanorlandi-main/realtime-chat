import { Router, Request, Response } from "express";
import Message from "../models/Message";
import { IMessage } from "../utils/interface";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const messages = await Message.find({}, [
    "content",
    "sender",
    "receiver",
    "_createdAt",
    "_updatedAt",
  ]);

  res.json(messages);
});

router.post("/", async (req: Request, res: Response) => {
  const { content, sender, receiver } = req.body;

  const message = new Message({
    content,
    sender,
    receiver,
  });

  await message.save();

  res.json(message);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const message = await Message.findOneAndRemove({ _id: id });
  res.json(message);
});

export default router;
