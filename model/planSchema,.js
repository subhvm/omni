const mongoose = require('mongoose');

// Plan Schema
const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  //Unilimited plus, ulimate haru
  cost: { type: Number, required: true },
  description: {type: String}
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;