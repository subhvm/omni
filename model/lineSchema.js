const mongoose = require("mongoose")


const lineSchema = new mongoose.Schema({
    //each line ko detail
    id: {type: String, required: true},
    phoneNumber: { type: String, required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
    addOns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AddOn' }],
    phonePicture: { type: String },  // Store the image URL/path
    phoneModel: { type: String, required: true },
    promotionalCredit: {type: String}
  }); 
  
  const Line = mongoose.model('Line', lineSchema);
  module.exports = Line;
  