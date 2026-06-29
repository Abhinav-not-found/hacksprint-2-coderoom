import { Router } from "express";
import { roomController } from "../controllers/room.controller.js";

const router = Router();

router.post("/create", roomController.createRoom);

router.post("/join", roomController.joinRoom);

export default router;