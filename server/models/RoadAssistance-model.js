const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoadAssistanceSchema = new Schema(
  {
    role: String,
    username: String,
    password: String,
    phoneNumber: { type: Number, minlength: 9, maxlength: 9 },
    //Policy data
    Name: String,
    DNI: { type: String, minlength: 9, maxlength: 9 },
    policyNumber: { type: String, maxlength: 6 },
    startDate: Date,
    endDate: Date,
    //Car
    type: {type:String},
    brand: String,
    model: String,
    plateNumber: { type: String, minlength: 7, maxlength: 7 },
    //Taxi
    seatingCapacity: Number,
    petsAllowed: false, 
    // Recovery and Taxi address
    location: {
      latitude: Number,
      longitude: Number,
      address: String,
      city: String,
      postalCode: Number,
  }, 
}, {
    timestamps: true
  });

module.exports = mongoose.model('RoadAssistance', RoadAssistanceSchema)

