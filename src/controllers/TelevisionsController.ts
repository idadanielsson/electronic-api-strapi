import { Request, Response } from "express";
import { televisionClient } from "../clients/televisionClient";
import { Television } from "../models/Television";

export class TelevisionsController {
  private client: televisionClient;
  constructor(client: televisionClient) {
    this.client = client;
  }

  public async getTelevisions(req: Request, res: Response) {
    const data = await this.client.getTelevisions();
    res.send(data.data);
  }

  public async getTelevision(req: Request, res: Response) {
    const id = req.params.id;
    const data = await this.client.getTelevision(+id);
    res.send(data.data);
  }

  public async deleteTelevision(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteTelevision(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
  public async postTelevision(req: Request, res: Response) {
    const television: Television = req.body;
    try {
      await this.client.postTelevision(television);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateTelevision(req: Request, res: Response) {
    const television: Television = req.body;
    const id = +req.params.id;
    try {
      await this.client.updateTelevision(id, television);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
