const mongoose = require("mongoose");

const advertiserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Advertiser", advertiserSchema);
