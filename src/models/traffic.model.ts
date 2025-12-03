import mongoose, { Document, Schema } from "mongoose";

export interface ITraffic extends Document {
  ip: string;
  page: string;
  browser?: string;
  device?: string;
  country?: string;
}

const TrafficSchema = new Schema<ITraffic>(
  {
    ip: { type: String, required: true },
    page: { type: String, required: true },
    browser: { type: String },
    device: { type: String },
    country: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<ITraffic>("Traffic", TrafficSchema);
