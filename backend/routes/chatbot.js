import express from "express";
import { getChatResponse } from "../controllers/chatbotController.js";

const router = express.Router();

// POST /api/chatbot/message
router.post("/message", getChatResponse);

export default router;
