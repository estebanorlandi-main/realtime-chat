import { Router } from "express";
import messageRoutes from "./messages";

const router = Router();

router.use("/message", messageRoutes);

export default router;
