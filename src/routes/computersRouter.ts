import express from "express";
import { computerClient } from "../clients/computerClient";
import { ComputersController } from "../controllers/computersController";

const computersRouter = express.Router();
const client = new computerClient();
const controller = new ComputersController(client);

computersRouter
  .get("/", controller.getComputers.bind(controller))
  .get("/:id", controller.getComputer.bind(controller))
  .delete("/:id", controller.deleteComputer.bind(controller))
  .post("/", controller.postComputer.bind(controller))
  .put("/:id", controller.updateComputer.bind(controller));

export default computersRouter;
