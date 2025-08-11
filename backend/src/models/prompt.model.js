const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      index: true,
    },
    text: {
      type: [String],
      required: true,
    },
    tags: {
      type: String,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const promptModel = mongoose.model("prompt", promptSchema);

module.exports = promptModel;
