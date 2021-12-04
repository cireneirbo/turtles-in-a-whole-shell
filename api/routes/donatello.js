// Require libraries
const express = require('express');
const router = express.Router();

// Require controller modules.
const donatello_controller = require('../controllers/donatelloController');

// GET donatello home page.
router.get('/', donatello_controller.index);

module.exports = router;