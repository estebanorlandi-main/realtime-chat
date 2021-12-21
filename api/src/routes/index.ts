import { Router } from "express";
import authRoutes from "./auth";
import messageRoutes from "./messages";

const router = Router();

router.use("/auth", authRoutes);
router.use("/message", messageRoutes);

export default router;
