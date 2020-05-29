const express = require('express');
const router = express.Router();
const ytController = require('./../controllers/yt-controller');
 
router.get('/', ytController.request);

module.exports = router;