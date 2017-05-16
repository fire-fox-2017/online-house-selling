const express = require('express');
const router = express.Router();
const House = require('../controllers/house');

router.post('/create', House.create);
router.get('/', House.gets);
router.delete('/delete/:houseId', House.delete);
router.put('/edit/:houseId', House.edit);

module.exports = router;