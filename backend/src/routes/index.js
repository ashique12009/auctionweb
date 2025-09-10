const express = require('express');
const router = express.Router();

// Admin routes
router.use('/admin', require('./admin.routes'));

// Auth routes
router.use('/', require('./auth.routes'));

module.exports = router;