const { promisePool } = require("../config/db");

async function createUserTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(100) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            phone VARCHAR(20),
            address VARCHAR(255),
            role ENUM('buyer', 'seller', 'admin') DEFAULT 'buyer',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_login TIMESTAMP NULL DEFAULT NULL
        ) ENGINE=InnoDB;
    `;

    try {
        await promisePool.query(query);
        console.log("✅ Users table created (if not exists)");
    } catch (err) {
        console.error("❌ Error creating users table:", err.message);
        throw err;
    }
}

async function countSeller() {
    const [row] = await promisePool.query("SELECT COUNT(*) AS total FROM users WHERE role = 'seller'");
    return row[0].total;
}

async function countBuyer() {
    const [row] = await promisePool.query("SELECT COUNT(*) AS total FROM users WHERE role = 'buyer'");
    return row[0].total;
}

module.exports = { createUserTable, countSeller, countBuyer };