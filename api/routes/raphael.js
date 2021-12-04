// Require libraries
const express = require('express');
const router = express.Router();

// Require controller modules.
const raphael_controller = require('../controllers/raphaelController');

// GET raphael home page.
router.get('/', raphael_controller.index);

module.exports = router;