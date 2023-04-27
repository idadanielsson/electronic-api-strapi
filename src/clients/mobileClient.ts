import axios from "axios";
import { Mobile } from "../models/Mobile";

const client = axios.create({
  baseURL: "http://localhost:1337/api",
});

export class mobileClient {
  constructor() {}

  public async getMobile_devices(): Promise<any> {
    const response = await client.get(`/mobile-devices`);
    return response.data;
  }
  public async getMobile_device(id: number): Promise<any> {
    const response = await client.get(`/mobile-devices/${id}`);
    return response.data;
  }
  public async deleteMobile_device(id: number): Promise<any> {
    const response = await client.delete(`/mobile-devices/${id}`);
    return response.data;
  }
  public async postMobile_device(mobile: Mobile): Promise<any> {
    const response = await client.post(`/mobile-devices`, mobile);
    return response.data;
  }
  public async updateMobile_device(id: number, mobile: Mobile): Promise<any> {
    const response = await client.put(`/mobile-devices/${id}`, mobile);
    return response.data;
  }
}
