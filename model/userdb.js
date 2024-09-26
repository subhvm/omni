const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, required: true ,
        trim: true,
        minlength: 2,
        maxlength: 1024,},
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
      },
      accountNumber: { type: String, required: true, unique: true },
      billAmount: { type: Number, required: true },
      numberOfLines: { type: Number, required: true },
      lines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Line' }],
      accountCreationDate: { type: Date, default: Date.now },
      autoPay: { type: Boolean },
      paperFreeBill: {type: Boolean},
      pin: {type: String}
    });

const Customer = mongoose.model('Customer', userSchema);

module.exports = Customer 