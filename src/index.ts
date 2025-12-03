import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import trafficRoutes from "./routes/traffic.routes";
import { swaggerSpec, swaggerUi } from "./swagger";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB (Atlas)
connectDB();

// Routes
app.use("/api", trafficRoutes);

// Swagger UI (documentation)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health route
app.get("/", (req, res) => res.send("API Running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
