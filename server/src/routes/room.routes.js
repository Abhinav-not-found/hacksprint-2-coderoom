import { Router } from "express";
import * as controller from "../controllers/room.controller.js";

const router = Router();

router.post("/create", controller.createRoom);
router.post("/join", controller.joinRoom);

export default router;
