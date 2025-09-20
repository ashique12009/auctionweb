const express = require('express');
const router = express.Router();
const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const { countSeller } = require('../models/user.model');
const { countBuyer } = require('../models/user.model');
const adminAuth = require('../middlewares/adminAuth');

// Apply adminAuth middleware to all routes in this router
router.use(adminAuth);

// Dashboard route
router.get('/dashboard', async (req, res) => {
    // Fetch total categories count
    const categoryCount = await categoryModel.countCategories();

    // Fetch product count
    const productCount = await productModel.countProducts();

    // Fetch seller count
    const sellerCount = await countSeller();

    // Fetch buyer count
    const buyerCount = await countBuyer();

    res.locals.activePage = 'dashboard';

    res.render('dashboard', { 
        title: 'Admin Dashboard', 
        categoryCount, 
        productCount, 
        sellerCount, 
        buyerCount, 
        flash: { 
            success: ['Welcome to Admin Dashboard!'] 
        }
    });
});

// Product Categories route
router.get('/category', async (req, res) => {
    const search = req.query.search || '';
    const categories = await categoryModel.getCategories(search);

    res.locals.activePage = 'category';

    res.render('category/category-list', { 
        title: 'Categories', 
        categories, 
        search
    });
});

// Delete category
router.post('/category/delete/:id', async (req, res) => {
    await categoryModel.deleteCategory(req.params.id);
    res.locals.flash = { success: ['Category deleted successfully'] };

    req.flash('success', 'Category deleted successfully');

    res.redirect('/admin/category');
});

// Edit category
router.get('/category/edit/:id', async (req, res) => {
    res.locals.activePage = 'category';
    
    res.render('category/category-edit', { 
        title: 'Edit Category', 
        category: await categoryModel.getCategoryById(req.params.id), 
        categories: await categoryModel.getCategories() 
    });
});

// Update category
router.post('/category/update/:id', async (req, res) => {
    const { category_name, parent_category_id } = req.body;
    await categoryModel.updateCategory(req.params.id, category_name, parent_category_id || null);

    req.flash('success', 'Category updated successfully');

    res.redirect('/admin/category');
});

// Product route
router.get('/product', async (req, res) => {
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