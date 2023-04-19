import express from "express";
import { televisionClient } from "../clients/televisionClient";
import { TelevisionsController } from "../controllers/televisionsController";

const client = new televisionClient();
const controller = new TelevisionsController(client);

const televisionsRouter = express.Router();

televisionsRouter
  .get("/", controller.getTelevisions.bind(controller))
  .get("/:id", controller.getTelevision.bind(controller))
  .delete("/:id", controller.deleteTelevision.bind(controller))
  .post("/", controller.postTelevision.bind(controller))
  .put("/:id", controller.updateTelevision.bind(controller));

export default televisionsRouter;
