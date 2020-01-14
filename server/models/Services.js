const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServicesSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref:"RoadAssistance"},
  pickupId: { type: Schema.Types.ObjectId, ref: "RoadAssistance" },
  lat: Number,
  lng: Number,


}, {
    timestamps: true
  });

module.exports = mongoose.model('Services', ServicesSchema)

