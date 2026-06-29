import { roomService } from "../services/room.service.js";

class RoomController {
  async createRoom(req, res, next) {
    try {
      const room = await roomService.createRoom(req.body);

      res.status(201).json({
        success: true,
        message: "Room created successfully",
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async joinRoom(req, res, next) {
    try {
      const room = await roomService.joinRoom(req.body);

      res.status(200).json({
        success: true,
        message: "Joined room successfully",
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const roomController = new RoomController();