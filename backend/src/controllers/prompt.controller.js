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
    console.error("Error creating prompt:", error);
    return res.status(500).json({ error: "Error generating tags" });
  }
}

async function getPromptController(req, res) {
  const { tags, search } = req.query;

  const query = { user: req.user.id };

  if (tags) {
    const tagList = tags.split(",").map((t) => t.trim());
    query.tags = { $all: tagList };
  }

  if (search) {
    query.$text = { $search: search };
  }

  try {
    const prompt = await promptModel.find(query).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Prompts retrieved successfully",
      prompts: prompt,
    });
  } catch (error) {
    console.error("Error retrieving prompts:", error);
    return res.status(500).json({ error: "Error retrieving prompts" });
  }
}

async function updatePromptContoller(req, res) {
  const { text } = req.body;
  const { id } = req.params;

  if (!text) {
    return res.status(400).json({ error: "Prompt text required" });
  }

  try {
    const prompt = await promptModel.findOne({ _id: id, user: req.user.id });

    if (!prompt) {
      return res.status(404).json({ error: "Prompt not found" });
    }

    const tags = await getGeminiTags(text);

    prompt.text = text;
    prompt.tags = tags;

    await prompt.save();

    return res.status(200).json({
      message: "Prompt updated successfully",
      prompt,
    });
  } catch (error) {
    console.error("Error updating prompt:", error);
    return res.status(500).json({ error: "Error updating prompt" });
  }
}

async function deletePromptController(req, res) {
  const { id } = req.params;

  try {
    const prompt = await promptModel.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!prompt) {
      return res.status(404).json({ error: "Prompt not found" });
    }

    return res.status(200).json({ message: "Prompt deleted successfully" });
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return res.status(500).json({ error: "Error deleting prompt" });
  }
}

module.exports = {
  createPromptContoller,
  getPromptController,
  updatePromptContoller,
  deletePromptController,
};
