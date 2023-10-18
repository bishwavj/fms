const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  filename: String,
  url: String,
  etag: String,
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("File", fileSchema);