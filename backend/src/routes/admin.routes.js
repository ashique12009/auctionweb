const express = require('express');
const router = express.Router();
const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const sellerModel = require('../models/seller.model');
const buyerModel = require('../models/buyer.model');
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
    const sellerCount = await sellerModel.countSeller();

    // Fetch buyer count
    const buyerCount = await buyerModel.countBuyer();

    res.locals.activePage = 'dashboard';

    res.render('dashboard', { 
        title: 'Admin Dashboard', 
        categoryCount, 
        productCount, 
        sellerCount, 
        buyerCount, 
        flash: { 
            success: ['Welcome to admin dashboard!'] 
        }
    });
});

// Product Categories route
router.get('/category', async (req, res) => {
    const search = (req.query.search || '').trim();
    const currentPage = parseInt(req.query.currentPage) || 1;
    const limit = 30; // rows per page
    const offset = (currentPage - 1) * limit;

    const categories = await categoryModel.getCategories(search, limit, offset);
    const totalCategories = await categoryModel.getCategoriesCount(search);
    const totalPages = Math.ceil(totalCategories / limit);

    res.locals.activePage = 'category';

    res.render('category/category-list', { 
        title: 'Categories', 
        categories, 
        search,
        currentPage,
        totalPages
    });
});

// Add category form
router.get('/category/add', async (req, res) => {
    res.locals.activePage = 'category';
    
    res.render('category/category-add', { 
        title: 'Add Category', 
        categories: await categoryModel.getAllCategories() 
    });
});

// Handle add category
router.post('/category/add', async (req, res) => {
    const { category_name, parent_category_id } = req.body;
    await categoryModel.addCategory(category_name, parent_category_id || null);

    req.flash('success', 'Category added successfully');

    res.redirect('/admin/category');
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
        categories: await categoryModel.getAllCategories() 
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
    const currentPage = parseInt(req.query.currentPage) || 1;
    const limit = 30; // rows per page
    const offset = (currentPage - 1) * limit;

    const products = await productModel.getProducts(search, limit, offset);
    const totalProducts = await productModel.getProductsCount(search);
    const totalPages = Math.ceil(totalProducts / limit);

    res.locals.activePage = 'product';

    res.render('product/product-list', { 
        title: 'Products', 
        products, 
        search,
        currentPage,
        totalPages
    });
});

// Product add
router.get('/product/add', async (req, res) => {
    res.locals.activePage = 'product';
    
    res.render('product/product-add', { 
        title: 'Add Product', 
        categories: await categoryModel.getAllCategories(),
        sellers: await sellerModel.getAllSellers()
    });
});

// Handle add product
router.post('/product/add', async (req, res) => {
    const { seller_id, category_id, title, description, starting_price, reserve_price, buy_now_price, start_time, end_time } = req.body;
    // Assuming seller_id is obtained from the logged-in admin user
    // const seller_id = req.session.user.user_id; // Adjust based on your session structure

    await productModel.addProduct(seller_id, category_id, title, description, starting_price, reserve_price || null, buy_now_price || null, start_time, end_time, category_id);

    req.flash('success', 'Product added successfully');

    res.redirect('/admin/product');
});

module.exports = router;