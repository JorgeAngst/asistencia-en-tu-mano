const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecoveryServiceSchema = new Schema({
  username: String,
  password: String,
  phoneNumber: Number,
  location: {
    latitude: Number,
    longitude: Number,
    address: String,
    city: String,
    postalCode: Number,
  }

}, {
    timestamps: true
  });

module.exports = mongoose.model('RecoveryService', RecoveryServiceSchema)

