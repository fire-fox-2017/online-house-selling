var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  created_at: { type: Date, required: false, default: Date.now },
  updated_at: { type: Date, required: false, default: Date.now },
  picture: {type: String, required: false, default: 'http://i.imgur.com/t3KAKNb.jpg'} ,
  map_lat: [ {type: Number} ],
  map_lng: [ {type: Number} ]

})

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
