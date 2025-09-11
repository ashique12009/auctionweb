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

module.exports = { createCategoryTable };