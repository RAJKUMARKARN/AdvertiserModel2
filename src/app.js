const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const adAccountRoutes = require("./routes/adAccountRoutes");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use the routes
app.use("/api/adAccount", adAccountRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
