import { Router, Request, Response } from "express";
import Chat from "../models/Chat";
import Message from "../models/Message";
import User from "../models/User";
import { io } from "../socket";

const router = Router();

// Create Message
router.post("/", async (req: Request, res: Response) => {
  const {
    message: { from, to, content },
  } = req.body;

  const fromUser = await User.findOne({ username: from });
  if (!fromUser) return res.status(400).json({ msg: "User not found" });

  const toUser = await User.findOne({ username: to });
  if (!toUser) return res.status(400).json({ msg: "User not found" });

  const newMessage = new Message({ content, from: fromUser._id });
  if (!newMessage) return res.status(400).json({ msg: "Error" });

  const saved = await newMessage.save();

  const chat = await Chat.findOneAndUpdate(
    {
      $or: [
        { userA: fromUser._id, userB: toUser._id },
        { userA: toUser._id, userB: fromUser._id },
      ],
    },
    { $push: { messages: saved?._id } },
    { new: true }
  )
    .populate({
      path: "messages",
      select: "from content _createdAt _id",
      populate: { path: "from", select: "username _id" },
    })
    .populate("userA userB", "username _id");

  if (!chat) return res.status(400).json({ msg: "Chat not found" });

  return res.json(chat);

  //io.emit("new_message", { message });
});

export default router;
