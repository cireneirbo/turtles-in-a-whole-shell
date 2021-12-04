// Require libraries
const express = require('express');
const router = express.Router();

// Require controller modules.
const michaelangelo_controller = require('../controllers/michaelangeloController');

// GET michaelangelo home page.
router.get('/', michaelangelo_controller.index);

module.exports = router;