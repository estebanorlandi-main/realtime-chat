import { Router } from "express";
import authRoutes from "./auth";
import messageRoutes from "./messages";
import chatRoutes from "./chats";

const router = Router();

router.use("/auth", authRoutes);
router.use("/message", messageRoutes);
router.use("/chat", chatRoutes);

export default router;
