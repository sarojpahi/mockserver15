const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    score: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Score = mongoose.model("score", scoreSchema);
module.exports = Score;
