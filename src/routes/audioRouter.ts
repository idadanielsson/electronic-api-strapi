import express from "express";
import { audioClient } from "../clients/audioClient";
import { AudioController } from "../controllers/AudioController";

const client = new audioClient();
const controller = new AudioController(client);

const audioRouter = express.Router();

audioRouter
  .get("/", controller.getAudio_systems.bind(controller))
  .get("/:id", controller.getAudio_system.bind(controller))
  .delete("/:id", controller.deleteAudio.bind(controller))
  .post("/", controller.postAudio_system.bind(controller))
  .put("/:id", controller.updateAudio_system.bind(controller));

export default audioRouter;
