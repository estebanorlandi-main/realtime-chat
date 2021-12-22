import { Router, Request, Response } from "express";

import Chat from "../models/Chat";
import User from "../models/User";

const router = Router();

// Get chats of user
router.get("/:user", async (req: Request, res: Response) => {
  const { user } = req.params;

  const userDB = await User.findOne({ username: user });
  if (!userDB) return res.status(400).json({ msg: "User not found" });

  let chats = await Chat.find({
    $or: [{ userA: userDB._id }, { userB: userDB._id }],
  })
    .populate({
      path: "messages",
      select: "from content _createdAt _id",
      populate: { path: "from", select: "username _id" },
      options: { sort: { _createdAt: -1 } },
    })
    .populate("userA userB", "username avatar _id");

  if (!chats) res.json({ msg: "Start a new chat" });
  res.json(chats);
});

// Create Chat
router.post("/", async (req: Request, res: Response) => {
  const { userA, userB } = req.body;

  const fromUser = await User.findOne({ username: userA });
  if (!fromUser) return res.status(400).json({ msg: "User not found" });

  const toUser = await User.findOne({ username: userB });
  if (!toUser) return res.status(400).json({ msg: "User not found" });

  const chat = await Chat.findOne({
    $or: [
      { userA: fromUser._id, userB: toUser._id },
      { userA: toUser._id, userB: fromUser._id },
    ],
  })
    .populate({
      path: "message",
      select: "from content _createdAt _id",
      populate: { path: "from", select: "username avatar _id" },
    })
    .populate("userA", "username _id")
    .populate("userB", "username _id");

  if (chat) return res.json({ msg: "Chat already exist", chat });

  const newChat = new Chat({ userA: fromUser._id, userB: toUser._id });
  if (!newChat) return res.json({ msg: "Error" });

  const saved = await newChat.save();
  res.json(
    await Chat.populate(saved, {
      path: "userA userB",
      select: "username _id",
    })
  );
});

export default router;
