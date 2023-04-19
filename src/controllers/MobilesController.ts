import { Request, Response } from "express";
import { mobileClient } from "../clients/mobileClient";
import { Mobile } from "../models/Mobile";

export class MobilesController {
  private client: mobileClient;
  constructor(client: mobileClient) {
    this.client = client;
  }

  public async getMobiles_devices(req: Request, res: Response) {
    const data = await this.client.getMobile_devices();
    res.send(data.data);
  }

  public async getMobile_device(req: Request, res: Response) {
    const id = req.params.id;
    const data = await this.client.getMobile_device(+id);
    res.send(data.data);
  }

  public async deleteMobile_device(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteMobile_device(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
  public async postMobile_device(req: Request, res: Response) {
    const mobile: Mobile = req.body;
    try {
      await this.client.postMobile_device(mobile);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateMobile_device(req: Request, res: Response) {
    const mobile: Mobile = req.body;
    const id = +req.params.id;
    try {
      await this.client.updateMobile_device(id, mobile);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
