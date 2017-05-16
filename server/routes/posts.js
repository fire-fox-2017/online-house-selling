var express = require('express')
var router = express.Router()
var postController = require('../controllers/postController')

router.post('/', postController.create);
router.get('/', postController.get_all);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);
module.exports = router;
