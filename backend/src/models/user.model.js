const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.avatarUrl && this.username) {
    this.avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      this.username
    )}&background=random`;
  }
  next();
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
