const PDFDocument = require("pdfkit");
const promptModel = require("../models/prompt.model");

async function getJSONContoller(req, res) {
  try {
    const prompts = await promptModel.find({ user: req.user.id });

    if (!prompts || prompts.length === 0) {
      return res.status(404).json({ message: "No prompts found" });
    }

    res.status(200).json(prompts);
  } catch (error) {
    console.error("Error fetching prompts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getPDFController(req, res) {
  try {
    const prompts = await promptModel.find({ user: req.user.id });

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=prompts.pdf");

    doc.pipe(res);
    doc.fontSize(20).text("PromptVault", { align: "center" });
    doc.moveDown();

    prompts.forEach((p) => {
      doc.fontSize(14).text(`Prompt: "${p.text}"`);
      doc
        .fontSize(12)
        .fillColor("black")
        .text(`Tags: ${"#" + p.tags.join(", #")}`);
      doc.moveDown();
    });

    doc.end();
  } catch (error) {}
}

module.exports = {
  getJSONContoller,
  getPDFController,
};
