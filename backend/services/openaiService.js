import dotenv from "dotenv";
dotenv.config();

export const getAIResponse = async (message) => {
  // Mock logic (replace with OpenAI API later)
  if (message.toLowerCase().includes("loan")) {
    return "You may be eligible for Mudra Loan or PMEGP scheme. Please provide your business type for more details.";
  } else if (message.toLowerCase().includes("farmer")) {
    return "As a farmer, you can explore PM Kisan Samman Nidhi and KCC schemes.";
  } else {
    return "I can help you find government schemes. Please tell me your occupation or need.";
  }
};
