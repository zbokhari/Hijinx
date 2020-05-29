const express = require('express');
const router = express.Router();
const twController = require('../controllers/tw-controller');
 
router.get('/', twController.getTweets);


module.exports = router;