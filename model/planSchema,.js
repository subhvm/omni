const mongoose = require('mongoose');

// Plan Schema
const planSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    enum: ['Unlimited Plus', 'Unlimited Ultimate', 'Unlimited Welcome'] // Add plan options here
  },
  cost: { type: Number, required: true },
  description: { type: String }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
