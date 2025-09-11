const mongoose = require("mongoose");

const advertiserSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  FullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: {type:Number , required:true},
  Education:{Education:String, required:true},
  company: { type: String },
  createdAt: { type: Date, default: Date.now },
  MessageInput:{type:String, required:true},
});

module.exports = mongoose.model("Advertiser", advertiserSchema);
