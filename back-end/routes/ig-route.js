const express = require('express');
const router = express.Router();
const igController = require('./../controllers/ig-controller');
 
router.get('/', igController.request);

module.exports = router;