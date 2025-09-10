const express = require("express");
const router = express.Router();

// Hardcoded dropdown data (mocked for now)
const dropdownOptions = {
  ageGroups: [
    { _id: "age101", value: "Teen (13-18)" },
    { _id: "age102", value: "Young Adult (19-30)" },
    { _id: "age103", value: "Middle Age (31-60)" },
    { _id: "age104", value: "Senior/Elderly (60+)" }
  ],
  interests: [
    { _id: "int201", value: "Cooking" },
    { _id: "int202", value: "Home Decor" },
    { _id: "int203", value: "Technology" }
  ],
  locations: [
    { _id: "loc301", value: "India" },
    { _id: "loc302", value: "USA" },
    { _id: "loc303", value: "UK" }
  ],
  adTypes: [
    { _id: "type401", value: "Image Ads" },
    { _id: "type402", value: "Video Ads" }
  ],
  adElements: [
    { _id: "elem501", value: "App Installation" },
    { _id: "elem502", value: "Website" },
    { _id: "elem503", value: "Form" }
  ],
  adModels: [
    { _id: "model601", value: "Free Version" },
    { _id: "model602", value: "Premium" },
    { _id: "model603", value: "Elite" },
    { _id: "model604", value: "Ultimate" }
  ],
  formFields: [
    { _id: "field701", value: "First Name" },
    { _id: "field702", value: "Last Name" },
    { _id: "field703", value: "Full Name" },
    { _id: "field704", value: "Email" },
    { _id: "field705", value: "Mobile Number" },
    { _id: "field706", value: "Age" },
    { _id: "field707", value: "Date of Birth" },
    { _id: "field708", value: "Educational Qualification" },
    { _id: "field709", value: "Message Input" }
  ]
};

// GET /api/dropdown-options
router.get("/dropdown-options", (req, res) => {
  res.json(dropdownOptions);
});

module.exports = router;
