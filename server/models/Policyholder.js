const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const policyholderSchema = new Schema({
  username: String,
  password: String,
  DNI: {type: String, minlength: 9, maxlength: 9},
  phoneNumber: { type: Number, minlength: 9, maxlength: 9 },
  policyNumber: { type: String, maxlength: 6 },
  expiryDate: Date,
  type: String,
  plateNumber: { type: String, minlength: 7, maxlength: 7 },
  brand: String,
  model: String 
}, {
  timestamps: true
});

module.exports = mongoose.model('Policyholder', policyholderSchema)
