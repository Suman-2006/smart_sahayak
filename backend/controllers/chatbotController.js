import { getAIResponse } from "../services/openaiService.js";

export const getChatResponse = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await getAIResponse(message);

    res.status(200).json({
      success: true,
      response: reply,
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({
      success: false,
      error: "Something went wrong with chatbot response",
    });
  }
};
