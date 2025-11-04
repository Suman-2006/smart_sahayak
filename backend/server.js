import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatbotRoutes from "./routes/chatbot.js";
import schemesRoutes from "./routes/schemes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/schemes", schemesRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("SmartSahay Backend is running 🚀");
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
