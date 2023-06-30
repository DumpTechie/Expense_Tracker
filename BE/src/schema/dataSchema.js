const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: String,
  date: String,
  user: String,
  amount: Number,
  type: String,
});

module.exports = mongoose.model("Data", dataSchema);
