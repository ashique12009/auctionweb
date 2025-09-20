const { promisePool } = require("../config/db");

async function createCategoryTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS categories (
            category_id INT AUTO_INCREMENT PRIMARY KEY,
            category_name VARCHAR(255) NOT NULL,
            parent_category_id INT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (parent_category_id) REFERENCES categories(category_id) ON DELETE SET NULL
        ) ENGINE=InnoDB;
    `;

    try {
        await promisePool.query(query);
        console.log("✅ Categories table created (if not exists)");
    } catch (err) {
        console.error("❌ Error creating categories table:", err.message);
        throw err;
    }
}

async function countCategories() {
    const [row] = await promisePool.query("SELECT COUNT(*) AS total FROM categories");
    return row[0].total;
}

async function getCategories(search = '') {
    let query = "SELECT * FROM categories";
    const params = [];

    if (search) {
        query += " WHERE LOWER(category_name) LIKE ?";
        params.push(`%${search.toLowerCase()}%`);
    }

    const [rows] = await promisePool.query(query, params);
    return rows;
}

async function deleteCategory(categoryId) {
    const query = "DELETE FROM categories WHERE category_id = ?";
    const [result] = await promisePool.query(query, [categoryId]);
    return result.affectedRows > 0;
}

async function updateCategory(id, name, parentId = null) {
    const query = "UPDATE categories SET category_name = ?, parent_category_id = ? WHERE category_id = ?";
    await promisePool.query(query, [name, parentId || null, id]);
}

async function getCategoryById(id) {
    const query = "SELECT * FROM categories WHERE category_id = ?";
    const [rows] = await promisePool.query(query, [id]);
    return rows[0];
}

async function getAllCategories() {
    const query = "SELECT * FROM categories";
    const [rows] = await promisePool.query(query);
    return rows;
}

module.exports = { 
    createCategoryTable, 
    countCategories, 
    getCategories, 
    deleteCategory, 
    updateCategory,
    getCategoryById,
    getAllCategories
};