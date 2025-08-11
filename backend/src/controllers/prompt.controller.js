const getGeminiTags = require("../services/tag-gemini-ai.service");
const promptModel = require("../models/prompt.model");

async function createPromptContoller(req, res) {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const tags = await getGeminiTags(text);

    const prompt = await promptModel.create({
      user: req.user.id,
      text,
      tags,
    });

    return res.status(201).json({
      message: "Prompt created successfully",
      prompt,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error generating tags" });
  }
}

module.exports = { createPromptContoller };
