const express = require('express');
const router = express.Router();

// Dashboard route
router.get('/dashboard', (req, res) => {
    console.log('req.session', req.session);
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }
    res.render('dashboard', { title: 'Admin Dashboard' });
});

module.exports = router;