// Require libraries
const express = require('express');
const router = express.Router();

// Require controller modules.
const leonardo_controller = require('../controllers/leonardoController');

// GET leonardo home page.
router.get('/', leonardo_controller.index);

module.exports = router;