import axios from "axios";
import { Television } from "../models/Television";

const client = axios.create({
  baseURL: "http://localhost:1337/api",
});

export class televisionClient {
  constructor() {}

  public async getTelevisions(): Promise<any> {
    const response = await client.get(`/televisions`);
    return response.data;
  }
  public async getTelevision(id: number): Promise<any> {
    const response = await client.get(`/televisions/${id}`);
    return response.data;
  }
  public async deleteTelevision(id: number): Promise<any> {
    const response = await client.delete(`/televisions/${id}`);
    return response.data;
  }
  public async postTelevision(television: Television): Promise<any> {
    const response = await client.post(`/televisions`, television);
    return response.data;
  }
  public async updateTelevision(
    id: number,
    television: Television
  ): Promise<any> {
    const response = await client.put(`/televisions/${id}`, television);
    return response.data;
  }
}
