import express from "express";
import { getSchemesList } from "../controllers/schemesController.js";

const router = express.Router();

// GET /api/schemes
router.get("/", getSchemesList);

export default router;
