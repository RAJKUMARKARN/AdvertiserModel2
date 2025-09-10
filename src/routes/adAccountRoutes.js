const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Advertiser = require("../models/Advertiser");
const AdAccount = require("../models/AdAccount");

// Create Advertiser
router.post("/createAdvertiser", async (req, res) => {
  try {
    const { name, email, company } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Name and email required" });

    const existing = await Advertiser.findOne({ email });
    if (existing) return res.status(400).json({ message: "Advertiser already exists" });

    const advertiser = await Advertiser.create({ name, email, company });
    res.status(201).json({ message: "Advertiser created", advertiser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Create AdAccount with optional file uploads
router.post("/createAdAccount", upload.array("files", 5), async (req, res) => {
  try {
    const {
      advertiserId,
      businessTheme,
      businessProfile,
      businessName,
      industrialSector,
      aboutBusiness,
      businessMobileNumber,
      businessEmail,
      businessLocation,
      website
    } = req.body;

    const advertiser = await Advertiser.findById(advertiserId);
    if (!advertiser) return res.status(404).json({ message: "Advertiser not found" });

    const files = req.files ? req.files.map(f => f.path) : [];

    const adAccount = await AdAccount.create({
      advertiser: advertiserId,
      businessTheme,
      businessProfile,
      businessName,
      industrialSector,
      aboutBusiness,
      businessCertificates: files,
      businessMobileNumber,
      businessEmail,
      businessLocation,
      website
    });

    res.status(201).json({ message: "Ad account created", adAccount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
