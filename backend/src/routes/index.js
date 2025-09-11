const express = require('express');
const router = express.Router();

router.get(["/", "/login"], (req, res) => {
    res.render("login");
});

// Admin routes
router.use('/admin', require('./admin.routes'));

// Auth routes
router.use('/', require('./auth.routes'));

// 404 route
router.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

module.exports = router;