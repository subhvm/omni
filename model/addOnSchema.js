const addOnSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    description: { type: String }
  });
  
  const AddOn = mongoose.model('AddOn', addOnSchema);
  module.exports = AddOn;
  