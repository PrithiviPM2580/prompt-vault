const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GIMINI_API_KEY,
});

async function getGeminiTags(text) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate relevant tags for the following text: ${text}`,
    });

    const rawText = response.text || "";
    const lines = rawText.split("\n");
    const tags = lines
      .filter((line) => line.trim().startsWith("*"))
      .map((line) => line.replace(/^\*\s*/, "").trim()) // remove '* ' and trim
      .map((tag) => tag.replace(/`/g, "")) // remove all backticks
      .map((tag) => tag.toLowerCase().replace(/\s+/g, "-"));
    return tags;
  } catch (error) {
    console.error("Error generating tags:", error);
    throw error;
  }
}
module.exports = getGeminiTags;
