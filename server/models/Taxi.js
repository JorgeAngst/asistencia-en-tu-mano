const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taxiSchema = new Schema(
  {
    role: taxi,
    username: String,
    password: String,
    phoneNumber: Number,
    seatingCapacity: Number,
    petsAllowed: false,
    location: {
      address: String,
      city: String,
      postalCode: Number,
    }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Taxi', userSchema)

