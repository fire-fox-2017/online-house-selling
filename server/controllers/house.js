const House = require('../models/house');
const methods = {};

methods.create = (req, res, next) => {
  House.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    address: req.body.address
  }, (err, house) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({house: house, success: true});
    }
  })
}

methods.edit = (req, res, next) => {
  House.findOne({_id: req.params.houseId}, (err, house) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      house.title = req.body.title ? req.body.title : house.title;
      house.description = req.body.description ? req.body.description : house.description;
      house.price = req.body.price ? req.body.price : house.price;
      house.image = req.body.image ? req.body.image : house.image;
      house.address = req.body.address ? req.body.address : house.address;
      house.save();
      res.json({house: house, success: true});
    }
  })
}

methods.delete = (req, res, next) => {
  houseId = req.params.houseId;
  House.findByIdAndRemove(houseId, (err, done) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({done: done, success: true, msg: 'house deleted!'});
    }
  })
}

methods.gets = (req, res, next) => {
  House.find({}, (err, houses) => {
    if(err) {
      res.json({error: err, success:false});
    } else {
      res.json({houses: houses, success: true});
    }
  })
}

methods.get = (req, res, next) => {
  houseId = req.params.houseId;
  House.findOne({_id: houseId}, (err, house) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({house: house, success: true});
    }
  })
}

module.exports = methods;