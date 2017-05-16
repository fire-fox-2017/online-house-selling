const mongoose = require('mongoose');
var Schema = mongoose.Schema

var houseSchema = new Schema({
  title: String,
  address: String,
  price: String,
  bedrooms: Number,
  bathrooms: Number,
  buildingArea: String,
  landArea: String,
  coordinates: String
})

module.exports = mongoose.model('House', houseSchema);