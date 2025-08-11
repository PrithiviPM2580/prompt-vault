const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      index: true,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

promptSchema.index({ text: "text" });
promptSchema.index({ tags: 1 });

const promptModel = mongoose.model("prompt", promptSchema);

module.exports = promptModel;
