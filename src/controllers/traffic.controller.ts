import { Request, Response } from "express";
import { addTraffic, getAllTraffic } from "../services/traffic.service";

export const createTraffic = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const saved = await addTraffic(payload);
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save traffic" });
  }
};

export const fetchTraffic = async (req: Request, res: Response) => {
  try {
    const data = await getAllTraffic();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch traffic" });
  }
};
