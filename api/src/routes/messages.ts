import { Router, Request, Response } from "express";
import Chat from "../models/Chat";
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
  const { from, to, content } = req.body;

  const newMessage = new Message({ content, from });
  if (!newMessage) res.json({ msg: "Error" });

  const saved = await newMessage.save();

  const chat = await Chat.findOneAndUpdate(
    {
      $or: [
        { userA: from, userB: to },
        { userA: to, userB: from },
      ],
    },
    { $push: { messages: saved?._id } },
    { new: true }
  );

  if (!chat) res.json({ msg: "Chat not found" });
  res.redirect("http://localhost:3001/chat");

  //io.emit("new_message", { message });
});

export default router;
