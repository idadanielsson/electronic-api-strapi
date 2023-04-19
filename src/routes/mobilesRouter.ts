import express from "express";
import { mobileClient } from "../clients/mobileClient";
import { MobilesController } from "../controllers/MobilesController";

const client = new mobileClient();
const controller = new MobilesController(client);

const mobilesRouter = express.Router();

mobilesRouter
  .get("/", controller.getMobiles_devices.bind(controller))
  .get("/:id", controller.getMobile_device.bind(controller))
  .delete("/:id", controller.deleteMobile_device.bind(controller))
  .post("/", controller.postMobile_device.bind(controller))
  .put("/:id", controller.updateMobile_device.bind(controller));

export default mobilesRouter;
