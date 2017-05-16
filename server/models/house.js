const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let houseSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  image: {
    type: String
  },
  address: {
    type: String
  }
}, {timestamps: true})

const House = mongoose.model('House', houseSchema);

module.exports = House;