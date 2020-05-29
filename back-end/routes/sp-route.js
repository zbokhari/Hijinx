const express = require('express');
const router = express.Router();
const spController = require('./../controllers/sp-controller');
 
router.get('/', spController.request);

module.exports = router;