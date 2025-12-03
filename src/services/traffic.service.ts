import Traffic, { ITraffic } from "../models/traffic.model";

export const addTraffic = async (data: Partial<ITraffic>) => {
  return await Traffic.create(data);
};

export const getAllTraffic = async () => {
  return await Traffic.find().sort({ createdAt: -1 }).lean();
};
