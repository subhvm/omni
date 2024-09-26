const addOnSchema = new mongoose.Schema({
    name: { type: String, required: true },
    //vmp haru;;; perk chai aile nahalam
    cost: { type: Number, required: true },
    description: { type: String }
  });
  
  const AddOn = mongoose.model('AddOn', addOnSchema);
  module.exports = AddOn;
  