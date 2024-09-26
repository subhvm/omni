const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
  //each line ko detail
  phoneNumber: { type: String, required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  addOns: [{ type: mongoose.Schema.Types.ObjectId, ref: "AddOn" }],
  phonePicture: { type: String }, // Store the image URL/path
  phoneModel: { type: String, required: true },
  promotionalCredit: { type: String },
  accountNumber: {
    type: String,
    required: true,
  },
});

const Line = mongoose.model("Line", lineSchema);
module.exports = Line;
