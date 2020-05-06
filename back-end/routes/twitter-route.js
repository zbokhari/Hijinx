const express = require('express');
const router = express.Router();
const twitterController = require('./../controllers/twitter-controller');
 
router.get('/', twitterController.request);

module.exports = router;