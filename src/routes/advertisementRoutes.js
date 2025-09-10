const express = require("express");
const router = express.Router();

// POST /api/advertisements/selection
router.post("/advertisements/selection", (req, res) => {
  const { age_group_id, interest_id, location_id, ad_type_id, ad_element_id, ad_model_id, form_field_ids } = req.body;

  // Validation: make sure each field is sent
  if (!age_group_id || !interest_id || !location_id || !ad_type_id || !ad_element_id || !ad_model_id) {
    return res.status(400).json({ 
      status: "error", 
      message: "All dropdown selections are required" 
    });
  }

  // Here you can save to DB if needed
  // For now, return back the selection as confirmation
  res.status(201).json({
    status: "success",
    message: "Selection saved successfully",
    data: {
      age_group_id,
      interest_id,
      location_id,
      ad_type_id,
      ad_element_id,
      ad_model_id,
      form_field_ids
    }
  });
});

module.exports = router;
