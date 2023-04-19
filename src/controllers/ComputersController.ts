import { Request, Response } from "express";
import { computerClient } from "../clients/computerClient";
import { Computer } from "../models/Computer";

export class ComputersController {
  private client: computerClient;
  constructor(client: computerClient) {
    this.client = client;
  }

  public async getComputers(req: Request, res: Response) {
    const data = await this.client.getComputers();
    res.send(data.data);
  }

  public async getComputer(req: Request, res: Response) {
    const id = req.params.id;
    const data = await this.client.getComputer(+id);
    res.send(data.data);
  }

  public async deleteComputer(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteComputer(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async postComputer(req: Request, res: Response) {
    const computer: Computer = req.body;
    try {
      await this.client.postComputer(computer);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateComputer(req: Request, res: Response) {
    const computer: Computer = req.body;
    const id = +req.params.id;
    try {
      await this.client.updateComputer(id, computer);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
