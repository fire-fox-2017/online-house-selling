const House = require('../models/house');

module.exports = {
  findAllHouses: (req,res)=>{
    House.find({}).then((houses)=>{
      res.send(houses)
    })
  },
  findOneHouse: (req,res)=>{
    House.findById(req.params.id, (err,house)=>{
      res.send(house)
    })
  },
  createHouse: (req,res)=>{
    var house = new House({
      title: req.body.title,
      address: req.body.address,
      price: req.body.price,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      landArea: req.body.landArea,
      buildingArea: req.body.buildingArea,
      coordinates: req.body.coordinates
    })
    house.save((err, house)=>{
      if (err) res.send(err)
      res.send(house)
    })
  },
  updateHouse: (req,res)=>{
    House.findById(req.params.id, (err,house)=>{
      house.title = req.body.title || house.title
      house.address = req.body.address || house.address
      house.price = req.body.price || house.price
      house.bedrooms = req.body.bedrooms || house.bedrooms
      house.bathrooms = req.body.bathrooms || house.bathrooms
      house.landArea = req.body.landArea || house.landArea
      house.buildingArea = req.body.buildingArea || house.buildingArea
      house.coordinates = req.body.coordinates || house.coordinates
      house.save((err,house)=>{
        if (err) res.send(err)
        res.send(house)
      })
    })
  },
  deleteHouse: (req,res)=>{
    House.remove({_id: req.params.id}, (err, response)=>{
      if (err) res.send(err)
      res.send(response)
    })
  }
}