const express = require('express');
const router = express.Router();

// Admin routes
router.use('/admin', require('./admin.routes'));

module.exports = router;