const express = require('express');
var router= express.Router();
var controller = require('../controllers/houseController')

router.get('/', controller.findAllHouses);
router.get('/:id', controller.findOneHouse);
router.post('/', controller.createHouse);
router.delete('/:id', controller.deleteHouse);
router.put('/:id', controller.updateHouse);

module.exports = router;