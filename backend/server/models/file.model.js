const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
});

module.exports = mongoose.model("File", fileSchema);
