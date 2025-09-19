const express = require('express');
const router = express.Router();
const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const { countSeller } = require('../models/user.model');
const { countBuyer } = require('../models/user.model');

// Dashboard route
router.get('/dashboard', async (req, res) => {
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }

    // Fetch total categories count
    const categoryCount = await categoryModel.countCategories();

    // Fetch product count
    const productCount = await productModel.countProducts();

    // Fetch seller count
    const sellerCount = await countSeller();

    // Fetch buyer count
    const buyerCount = await countBuyer();

    res.locals.activePage = 'dashboard';

    // req.flash('success', 'Welcome to the Admin Dashboard!');
    res.render('dashboard', { 
        title: 'Admin Dashboard', 
        categoryCount, 
        productCount, 
        sellerCount, 
        buyerCount, 
        flash: { 
            success: ['Welcome to the Admin Dashboard!'] 
        } 
    });
});

// Product Categories route
router.get('/product-category', async (req, res) => {
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }

    const search = req.query.search || '';
    const categories = await categoryModel.getCategories(search);

    res.locals.activePage = 'product-category';

    res.render('product-category', { 
        title: 'Product Categories', 
        categories, 
        search
    });
});

// Product route
router.get('/product', async (req, res) => {
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }

    const search = req.query.search || '';
    const products = await productModel.getProducts(search);

    res.locals.activePage = 'product';

    res.render('product', { 
        title: 'Products', 
        products, 
        search
    });
});

module.exports = router;