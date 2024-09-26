const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 1024,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  accountNumber: {
    type: Number,
    default: () => Math.floor(Math.random() * 1000000000),
  },
  billAmount: { type: Number, default: 0 },
  lines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Line" }],
  accountCreationDate: { type: Date, default: Date.now },
  autoPay: { type: Boolean, default: false },
  paperFreeBill: { type: Boolean, default: false },
  pin: { type: String, require: true },
});

const Customer = mongoose.model("Customer", userSchema);

module.exports = Customer;
