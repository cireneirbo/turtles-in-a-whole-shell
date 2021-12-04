// Require libraries
const express = require('express');
const router = express.Router();

// Require controller modules.
const michelangelo_controller = require('../controllers/michelangeloController');

// GET michaelangelo home page.
router.get('/', michelangelo_controller.index);

module.exports = router;