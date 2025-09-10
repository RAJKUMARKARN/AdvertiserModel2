const mongoose = require("mongoose");

const adAccountSchema = new mongoose.Schema({
  advertiser: { type: mongoose.Schema.Types.ObjectId, ref: "Advertiser", required: true }, // link to advertiser

  businessTheme: { type: String, enum: ["Theme1", "Theme2"], required: true },
  businessProfile: { type: String, enum: ["Profile1", "Profile2"], required: true },

  businessName: { type: String, required: true },
  industrialSector: { type: String, required: true },
  aboutBusiness: { type: String, maxLength: 500 },

  businessCertificates: [{ type: String }], // file paths or URLs
  businessMobileNumber: { type: String, required: true },
  businessEmail: { type: String, required: true },
  businessLocation: { type: String, required: true },
  website: { type: String },

}, {
  timestamps: true,
});

module.exports = mongoose.model("AdAccount", adAccountSchema);
