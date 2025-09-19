const { promisePool } = require("../config/db");

async function createProductsTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            item_id INT AUTO_INCREMENT PRIMARY KEY,
            seller_id INT NOT NULL,
            category_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            starting_price DECIMAL(10,2) NOT NULL,
            reserve_price DECIMAL(10,2) NULL,
            buy_now_price DECIMAL(10,2) NULL,
            start_time DATETIME NOT NULL,
            end_time DATETIME NOT NULL,
            status ENUM('active', 'sold', 'expired', 'canceled') DEFAULT 'active',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (seller_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
        ) ENGINE=InnoDB;
    `;

    try {
        await promisePool.query(query);
        console.log("✅ Products table created (if not exists)");
    } catch (err) {
        console.error("❌ Error creating products table:", err.message);
        throw err;
    }
}

async function countProducts() {
    const [row] = await promisePool.query("SELECT COUNT(*) AS total FROM products");
    return row[0].total;
}

async function getProducts(search = '') {
    let query = "SELECT * FROM products";
    const params = [];

    if (search) {
        query += " WHERE title LIKE ?";
        params.push(`%${search}%`);
    }

    const [rows] = await promisePool.query(query, params);
    return rows;
}

module.exports = { 
    createProductsTable, 
    countProducts, 
    getProducts
};