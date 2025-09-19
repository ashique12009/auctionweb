const express = require('express');
const router = express.Router();
const { countCategories } = require('../models/category.model');
const { countProducts } = require('../models/product.model');
const { countSeller } = require('../models/user.model');
const { countBuyer } = require('../models/user.model');

// Dashboard route
router.get('/dashboard', async (req, res) => {
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }

    // Fetch total categories count
    const categoryCount = await countCategories();

    // Fetch product count
    const productCount = await countProducts();

    // Fetch seller count
    const sellerCount = await countSeller();

    // Fetch buyer count
    const buyerCount = await countBuyer();

    // req.flash('success', 'Welcome to the Admin Dashboard!');
    res.render('dashboard', { title: 'Admin Dashboard', categoryCount, productCount, sellerCount, buyerCount, flash: { success: ['Welcome to the Admin Dashboard!'] } });
});

// Product Categories route
router.get('/product-category', (req, res) => {
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }
    res.render('product-category', { title: 'Product Categories' });
});

module.exports = router;