import express from "express";
import { createTraffic, fetchTraffic } from "../controllers/traffic.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Traffic
 *     description: Traffic tracking endpoints
 */

/**
 * @swagger
 * /api/traffic:
 *   post:
 *     summary: Save a traffic record
 *     tags: [Traffic]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ip:
 *                 type: string
 *               page:
 *                 type: string
 *               browser:
 *                 type: string
 *               device:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Traffic record saved
 */
router.post("/traffic", createTraffic);

/**
 * @swagger
 * /api/traffic:
 *   get:
 *     summary: Get all traffic records
 *     tags: [Traffic]
 *     responses:
 *       200:
 *         description: List of traffic records
 */
router.get("/traffic", fetchTraffic);

export default router;
