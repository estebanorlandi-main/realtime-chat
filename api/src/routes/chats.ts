import { Router, Request, Response } from "express";
import { IChat } from "../utils/interface";
import Chat from "../models/Chat";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const chat = await Chat.find({
    userA: "esteban",
    userB: "esteban4",
  }).populate("messages");

  res.json(chat);
});

router.post("/", async (req: Request, res: Response) => {
  const { userA, userB } = req.body;

  const chat = await Chat.findOne({
    $or: [
      { userA, userB },
      { userA: userB, userB: userA },
    ],
  });

  if (chat)
    return res.json({
      msg: "Chat already exist",
      chat: chat.populate("messages"),
    });

  const newChat = new Chat({ userA, userB });
  if (!newChat) return res.json({ msg: "Error" });

  const saved = await newChat.save();
  res.json(saved);
});

export default router;
