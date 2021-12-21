import { Router, Request, Response } from "express";
import User from "../models/User";

const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  const user = new User(req.body);
  if (await User.findOne({ username: user.username }))
    return res.json({ msg: "User already exist" });

  await user.save();

  const sanitized = {
    _id: user._id,
    username: user.username,
    avatar: user.avatar,
  };

  return res.json({ user: sanitized });
});

router.post("/login", async (req: Request, res: Response) => {
  if (!req.body?.username) return res.json({ msg: "Error" });

  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.json({ msg: "User not found" });
  if (req.body.password !== user.password)
    return res.json({ msg: "Credential error" });

  const sanitized = {
    _id: user._id,
    username: user.username,
    avatar: user.avatar,
  };

  return res.json({ user: sanitized });
});

export default router;
