import { Request, Response } from "express";
import { audioClient } from "../clients/audioClient";
import { Audio } from "../models/Audio";

export class AudioController {
  private client: audioClient;
  constructor(client: audioClient) {
    this.client = client;
  }

  public async getAudio_systems(req: Request, res: Response) {
    const data = await this.client.getAudio_systems();
    res.send(data.data);
  }

  public async getAudio_system(req: Request, res: Response) {
    const id = req.params.id;
    const data = await this.client.getAudio_system(+id);
    res.send(data.data);
  }

  public async deleteAudio(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteAudio_system(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async postAudio_system(req: Request, res: Response) {
    const audio: Audio = req.body;
    try {
      await this.client.postAudio_system(audio);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateAudio_system(req: Request, res: Response) {
    const audio: Audio = req.body;
    const id = +req.params.id;
    try {
      await this.client.updateAudio_system(id, audio);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
